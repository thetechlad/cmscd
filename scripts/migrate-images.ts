// Uploads existing images from src/assets/ into Strapi's media library and
// links them to the matching entry. Run with:
// STRAPI_API_TOKEN=... npx tsx scripts/migrate-images.ts
import { readFileSync, readdirSync, existsSync } from "fs";
import { resolve } from "path";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error("Set STRAPI_API_TOKEN before running this script.");
  process.exit(1);
}

async function findEntryId(collection: string, slug: string): Promise<number | null> {
  const res = await fetch(`${STRAPI_URL}/api/${collection}?filters[slug][$eq]=${encodeURIComponent(slug)}`, {
    headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
  }).then((r) => r.json());
  return res.data?.[0]?.id ?? null;
}

async function uploadAndLink(filePath: string, fileName: string, ref: string, refId: number, field: string) {
  const buf = readFileSync(filePath);
  const form = new FormData();
  form.append("files", new Blob([buf]), fileName);
  form.append("ref", ref);
  form.append("refId", String(refId));
  form.append("field", field);
  const res = await fetch(`${STRAPI_URL}/api/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
    body: form,
  });
  if (!res.ok) throw new Error(`upload ${fileName} failed: ${res.status} ${await res.text()}`);
}

async function main() {
  let ok = 0;
  let fail = 0;
  let skipped = 0;

  // --- Blog post cover images ---
  console.log("=== Blog post covers ===");
  const blogDir = resolve("src/assets/blog");
  for (const file of readdirSync(blogDir)) {
    const slug = file.replace(/\.(jpg|jpeg|png|webp)$/i, "");
    try {
      const id = await findEntryId("blog-posts", slug);
      if (!id) {
        console.log(`- ${slug}: no matching blog post, skipped`);
        skipped++;
        continue;
      }
      await uploadAndLink(resolve(blogDir, file), file, "api::blog-post.blog-post", id, "coverImage");
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${(err as Error).message}`);
      fail++;
    }
  }

  // --- Content page images ---
  console.log("\n=== Content page images ===");
  const pagesDir = resolve("src/assets/pages");
  if (existsSync(pagesDir)) {
    for (const file of readdirSync(pagesDir)) {
      const slug = file.replace(/\.(jpg|jpeg|png|webp)$/i, "");
      try {
        const id = await findEntryId("content-pages", slug);
        if (!id) {
          console.log(`- ${slug}: no matching content page, skipped`);
          skipped++;
          continue;
        }
        await uploadAndLink(resolve(pagesDir, file), file, "api::content-page.content-page", id, "image");
        console.log(`✓ ${slug}`);
        ok++;
      } catch (err) {
        console.error(`✗ ${slug}: ${(err as Error).message}`);
        fail++;
      }
    }
  }

  // --- Project shot + logo images ---
  console.log("\n=== Project images ===");
  const projectImageMap: Record<string, { shot: string; logo: string }> = {
    suuper: { shot: "real-suuper.jpg", logo: "logos/suuper.png" },
    nooktravel: { shot: "real-nooktravel.jpg", logo: "logos/nooktravel.png" },
    "goodpath-ai": { shot: "real-goodpath.jpg", logo: "logos/goodpath.png" },
    kidan: { shot: "real-kidan.jpg", logo: "logos/kidan.png" },
    "plural-dynamics": { shot: "real-plural.jpg", logo: "logos/plural.png" },
    synko: { shot: "real-synko.jpg", logo: "logos/synko.png" },
    "launch-my-store": { shot: "real-launchmystore.jpg", logo: "logos/launchmystore.png" },
    "og-organix": { shot: "real-ogorganix.jpg", logo: "logos/ogorganix.png" },
    vinncorp: { shot: "real-vinncorp.jpg", logo: "logos/vinncorp.png" },
  };
  for (const [slug, files] of Object.entries(projectImageMap)) {
    const id = await findEntryId("projects", slug);
    if (!id) {
      console.log(`- ${slug}: no matching project, skipped`);
      skipped += 2;
      continue;
    }
    for (const [field, rel] of [["shot", files.shot], ["logo", files.logo]] as const) {
      const filePath = resolve("src/assets", rel);
      if (!existsSync(filePath)) {
        console.log(`- ${slug} ${field}: file not found at ${rel}, skipped`);
        skipped++;
        continue;
      }
      try {
        await uploadAndLink(filePath, rel.split("/").pop()!, "api::project.project", id, field);
        console.log(`✓ ${slug} ${field}`);
        ok++;
      } catch (err) {
        console.error(`✗ ${slug} ${field}: ${(err as Error).message}`);
        fail++;
      }
    }
  }

  console.log(`\n=== Summary === ${ok} uploaded, ${fail} failed, ${skipped} skipped.`);
  if (fail) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
