// Blog post content lives in Strapi now (see src/lib/strapi.ts + cmsBootstrap.ts).
// This module keeps the exact shape the rest of the app already expects —
// `blogPosts` starts empty and is populated once at app boot, via a live
// binding (`export let`), so every existing consumer keeps working unchanged.
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  finalCta: string;
  suggestedCta: string;
  date: string;
  readTime: string;
  body: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
}

export let blogPosts: BlogPost[] = [];
export let blogCategories: BlogCategory[] = [];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getPostsByCategory = (slug: string) => blogPosts.filter((p) => p.categorySlug === slug);

/** Called once by cmsBootstrap.ts after fetching from Strapi. */
export function _setBlogData(posts: BlogPost[], categories: BlogCategory[]) {
  blogPosts = posts;
  blogCategories = categories;
}
