// Single source of truth for every public route in the app. Both the
// sitemap generator (predev/prebuild) and the prerender step (postbuild)
// call buildRoutes() so the two can never drift out of sync with each other
// or with what App.tsx actually serves. Site content comes from
// loadSiteData() (see loadSiteData.ts) rather than a direct import, since
// the data files pull in image assets that only Vite's loader understands.
import type { SiteData } from "./loadSiteData";

export interface Route {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  /** Excluded from sitemap.xml (e.g. thank-you pages) but still prerendered. */
  noindex?: boolean;
}

export interface Routes {
  allRoutes: Route[];
  sitemapRoutes: Route[];
  prerenderRoutes: Route[];
}

export function buildRoutes({ blogPosts, blogCategories, contentPages, projects }: SiteData): Routes {
  const staticRoutes: Route[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/about", changefreq: "monthly", priority: "0.7" },
    { path: "/services", changefreq: "monthly", priority: "0.9" },
    { path: "/portfolio", changefreq: "monthly", priority: "0.8" },
    { path: "/process", changefreq: "monthly", priority: "0.6" },
    { path: "/testimonials", changefreq: "monthly", priority: "0.6" },
    { path: "/contact", changefreq: "yearly", priority: "0.6" },
    { path: "/insights", changefreq: "weekly", priority: "0.8" },
    { path: "/start-a-project", changefreq: "yearly", priority: "0.7" },
    { path: "/thank-you", noindex: true },
    { path: "/marketing", changefreq: "monthly", priority: "0.8" },
    { path: "/marketing/social-media-management", changefreq: "monthly", priority: "0.7" },
    { path: "/marketing/content-writing", changefreq: "monthly", priority: "0.7" },
    { path: "/marketing/ppc", changefreq: "monthly", priority: "0.7" },
  ];

  const contentRoutes: Route[] = contentPages
    .filter((p) => p.url && p.url !== "/thank-you")
    .map((p) => ({ path: p.url, changefreq: "monthly", priority: "0.6" }));

  const blogPostRoutes: Route[] = blogPosts.map((p) => ({
    path: `/insights/${p.slug}`,
    changefreq: "monthly",
    priority: "0.6",
  }));

  // Previously missing from the sitemap entirely — each case study is a real,
  // linkable page (src/pages/ProjectCaseStudy.tsx) but had no sitemap/prerender entry.
  const portfolioRoutes: Route[] = projects.map((p) => ({
    path: `/portfolio/${p.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  // Query-string category filters render the same BlogPage shell with a client-side
  // filter applied — not a distinct server-renderable page, so sitemap-only.
  const categorySitemapRoutes: Route[] = blogCategories.map((c) => ({
    path: `/blog?category=${c.slug}`,
    changefreq: "weekly",
    priority: "0.5",
  }));

  const allRoutes: Route[] = [...staticRoutes, ...contentRoutes, ...blogPostRoutes, ...portfolioRoutes];

  return {
    allRoutes,
    // Routes listed in sitemap.xml — excludes noindex pages, includes category filters.
    sitemapRoutes: [...allRoutes.filter((r) => !r.noindex), ...categorySitemapRoutes],
    // Routes snapshotted to static HTML by scripts/prerender.ts — includes noindex
    // pages, since they still need their noindex meta tag delivered without JS.
    prerenderRoutes: allRoutes,
  };
}
