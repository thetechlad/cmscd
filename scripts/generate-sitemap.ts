// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { blogPosts, blogCategories } from "../src/data/blogData";
import { contentPages } from "../src/data/pageData";

const BASE_URL = "https://code-depth-showcase.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/portfolio", changefreq: "monthly", priority: "0.8" },
  { path: "/process", changefreq: "monthly", priority: "0.6" },
  { path: "/testimonials", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "yearly", priority: "0.6" },
  { path: "/insights", changefreq: "weekly", priority: "0.8" },
  { path: "/start-a-project", changefreq: "yearly", priority: "0.7" },
];

const categoryEntries: SitemapEntry[] = blogCategories.map((c) => ({
  path: `/blog?category=${c.slug}`,
  changefreq: "weekly",
  priority: "0.5",
}));

const postEntries: SitemapEntry[] = blogPosts.map((p) => ({
  path: `/insights/${p.slug}`,
  changefreq: "monthly",
  priority: "0.6",
}));

const contentEntries: SitemapEntry[] = contentPages
  .filter((p) => p.url && p.url !== "/thank-you")
  .map((p) => ({ path: p.url, changefreq: "monthly", priority: "0.6" }));

const entries: SitemapEntry[] = [
  ...staticEntries,
  ...contentEntries,
  ...postEntries,
  ...categoryEntries,
];

function generateSitemap(list: SitemapEntry[]) {
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

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
