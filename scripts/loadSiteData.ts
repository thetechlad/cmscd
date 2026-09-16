// Loads the route-relevant slugs for every route (blog posts, content pages,
// projects, blog categories) directly from Strapi, for the sitemap generator
// and the prerender crawl. Goes through Vite's ssrLoadModule so it resolves
// the "@/*" alias and reads the same .env as the app (VITE_STRAPI_URL).
import { createServer } from "vite";

export interface SiteData {
  blogPosts: { slug: string }[];
  blogCategories: { slug: string }[];
  contentPages: { url: string }[];
  projects: { slug: string }[];
}

export async function loadSiteData(): Promise<SiteData> {
  const server = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "error",
  });
  try {
    const strapi = await server.ssrLoadModule("/src/lib/strapi.ts");
    const [posts, categories, pages, projects] = await Promise.all([
      strapi.fetchBlogPosts(),
      strapi.fetchBlogCategories(),
      strapi.fetchContentPages(),
      strapi.fetchProjects(),
    ]);
    return {
      blogPosts: posts.map((p: { slug: string }) => ({ slug: p.slug })),
      blogCategories: categories.map((c: { slug: string }) => ({ slug: c.slug })),
      contentPages: pages.map((p: { url: string }) => ({ url: p.url })),
      projects: projects.map((p: { slug: string }) => ({ slug: p.slug })),
    };
  } finally {
    await server.close();
  }
}
