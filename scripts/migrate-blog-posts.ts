// Standalone retry for just the blog-posts portion of migrate-to-strapi.ts —
// categories and content-pages/projects already migrated successfully.
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
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${STRAPI_TOKEN}` },
    body: data !== undefined ? JSON.stringify({ data }) : undefined,
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) throw new Error(`${method} /api/${path} failed: ${res.status} ${JSON.stringify(body)}`);
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
  const { blogPosts } = await loadSiteData();
  const blogExtra = await loadBlogExtra();

  const catRes = await fetch(`${STRAPI_URL}/api/blog-categories?pagination[pageSize]=100`, {
    headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
  }).then((r) => r.json());
  const categoryIds: Record<string, number> = {};
  for (const c of catRes.data) categoryIds[c.slug] = c.id;
  console.log(`Found ${Object.keys(categoryIds).length} existing categories.\n`);

  let ok = 0;
  let fail = 0;
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
      ok++;
      console.log(`✓ ${p.slug}`);
    } catch (err) {
      fail++;
      console.error(`✗ ${p.slug}: ${(err as Error).message}`);
    }
  }
  console.log(`\n${ok} ok, ${fail} failed.`);
  if (fail) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
