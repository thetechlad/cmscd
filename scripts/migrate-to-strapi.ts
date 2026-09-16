// One-time migration: copies existing content from src/data/*.ts into Strapi.
// Images are NOT migrated by this script (separate follow-up) — every other
// field is copied as-is. Run with: STRAPI_API_TOKEN=... npx tsx scripts/migrate-to-strapi.ts
import { loadSiteData } from "./loadSiteData";
import { createServer } from "vite";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error("Set STRAPI_API_TOKEN before running this script.");
  process.exit(1);
}

async function strapiRequest(method: string, path: string, data?: unknown) {
  const res = await fetch(`${STRAPI_URL}/api/${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    body: data !== undefined ? JSON.stringify({ data }) : undefined,
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error(`${method} /api/${path} failed: ${res.status} ${JSON.stringify(body)}`);
  }
  return body;
}

async function loadBlogExtra(): Promise<Record<string, string>> {
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
  try {
    const mod = await server.ssrLoadModule("/src/data/blogExtra.ts");
    return mod.blogExtra;
  } finally {
    await server.close();
  }
}

async function main() {
  const { blogPosts, blogCategories, contentPages, projects } = await loadSiteData();
  const blogExtra = await loadBlogExtra();

  console.log(`Loaded: ${blogPosts.length} blog posts, ${blogCategories.length} categories, ${contentPages.length} content pages, ${projects.length} projects.\n`);

  // --- 1. Blog categories ---
  console.log("=== Blog categories ===");
  const categoryIds: Record<string, number> = {}; // slug -> id
  for (const c of blogCategories) {
    const res = await strapiRequest("POST", "blog-categories", {
      name: c.name,
      slug: c.slug,
    });
    categoryIds[c.slug] = res.data.id;
    console.log(`✓ ${c.name} (id ${res.data.id})`);
  }

  // --- 2. Blog posts ---
  console.log("\n=== Blog posts ===");
  let postOk = 0;
  let postFail = 0;
  for (const p of blogPosts as any[]) {
    try {
      await strapiRequest("POST", "blog-posts", {
        title: p.title,
        slug: p.slug,
        category: categoryIds[p.categorySlug] ?? null,
        excerpt: p.excerpt,
        body: p.body,
        extraContent: blogExtra[p.slug] || undefined,
        finalCta: p.finalCta,
        suggestedCta: p.suggestedCta,
        publishDate: p.date,
        readTime: p.readTime,
        publishedAt: new Date().toISOString(),
      });
      postOk++;
      console.log(`✓ ${p.slug}`);
    } catch (err) {
      postFail++;
      console.error(`✗ ${p.slug}: ${(err as Error).message}`);
    }
  }

  // --- 3. Content pages ---
  console.log("\n=== Content pages ===");
  let pageOk = 0;
  let pageFail = 0;
  for (const cp of contentPages as any[]) {
    try {
      await strapiRequest("POST", "content-pages", {
        title: cp.title,
        slug: cp.slug,
        url: cp.url,
        type: cp.type,
        subtitle: cp.subtitle,
        seoTitle: cp.seoTitle,
        metaDescription: cp.metaDescription,
        body: cp.body,
        publishedAt: new Date().toISOString(),
      });
      pageOk++;
      console.log(`✓ ${cp.url}`);
    } catch (err) {
      pageFail++;
      console.error(`✗ ${cp.url}: ${(err as Error).message}`);
    }
  }

  // --- 4. Projects ---
  console.log("\n=== Projects ===");
  let projOk = 0;
  let projFail = 0;
  for (const proj of projects as any[]) {
    try {
      await strapiRequest("POST", "projects", {
        name: proj.name,
        slug: proj.slug,
        url: proj.url,
        category: proj.category,
        tag: proj.tag,
        summary: proj.summary,
        bg: proj.bg,
        dark: proj.dark || false,
        tech: proj.tech,
        year: proj.year,
        role: proj.role,
        sector: proj.sector,
        overview: proj.overview,
        challenge: proj.challenge,
        approach: proj.approach,
        outcome: proj.outcome,
        stats: proj.stats,
        features: proj.features,
        publishedAt: new Date().toISOString(),
      });
      projOk++;
      console.log(`✓ ${proj.slug}`);
    } catch (err) {
      projFail++;
      console.error(`✗ ${proj.slug}: ${(err as Error).message}`);
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Categories: ${blogCategories.length} created`);
  console.log(`Blog posts: ${postOk} ok, ${postFail} failed`);
  console.log(`Content pages: ${pageOk} ok, ${pageFail} failed`);
  console.log(`Projects: ${projOk} ok, ${projFail} failed`);
  console.log(`\nImages were NOT migrated — cover images, logos, and screenshots still need uploading separately.`);

  if (postFail || pageFail || projFail) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
