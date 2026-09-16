// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { loadSiteData } from "./loadSiteData";
import { buildRoutes, type Route } from "./routes";

const BASE_URL = "https://codersdive.com";

function generateSitemap(list: Route[]) {
  const urls = list.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path.replace(/&/g, "&amp;")}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

async function main() {
  const data = await loadSiteData();
  const { sitemapRoutes } = buildRoutes(data);
  writeFileSync(resolve("public/sitemap.xml"), generateSitemap(sitemapRoutes));
  console.log(`sitemap.xml written (${sitemapRoutes.length} entries)`);
}

main();
