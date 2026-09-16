// Fetches all site content from Strapi once, at app boot, and populates the
// data modules under src/data/ so every existing consumer keeps working
// unchanged (they already `import { blogPosts } from "@/data/blogData"` etc.
// — those bindings just start empty and get filled in here).
import { fetchBlogPosts, fetchBlogCategories, fetchContentPages, fetchProjects, mediaUrl } from "./strapi";
import { _setBlogData, type BlogPost } from "@/data/blogData";
import { _setContentPages, type ContentPage } from "@/data/pageData";
import { _setProjects, type Project } from "@/data/projects";
import { _setBlogExtra } from "@/data/blogExtra";
import { _setBlogImages } from "@/data/blogImages";
import { _setPageImages } from "@/data/pageImages";

let bootstrapped: Promise<void> | null = null;

/** Idempotent — safe to call from multiple components; only fetches once. */
export function initCms(): Promise<void> {
  if (!bootstrapped) {
    bootstrapped = load().catch((err) => {
      bootstrapped = null; // allow retry on next call if it failed
      throw err;
    });
  }
  return bootstrapped;
}

async function load(): Promise<void> {
  const [rawPosts, rawCategories, rawPages, rawProjects] = await Promise.all([
    fetchBlogPosts(),
    fetchBlogCategories(),
    fetchContentPages(),
    fetchProjects(),
  ]);

  const categories = rawCategories.map((c) => ({ name: c.name, slug: c.slug }));
  const posts: BlogPost[] = rawPosts.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    category: p.category?.name ?? "",
    categorySlug: p.category?.slug ?? "",
    excerpt: p.excerpt,
    finalCta: p.finalCta ?? "",
    suggestedCta: p.suggestedCta ?? "",
    date: p.publishDate ?? "",
    readTime: p.readTime ?? "",
    body: p.body,
  }));
  _setBlogData(posts, categories);

  const extra: Record<string, string> = {};
  const blogImgs: Record<string, string> = {};
  for (const p of rawPosts) {
    if (p.extraContent) extra[p.slug] = p.extraContent;
    const url = mediaUrl(p.coverImage);
    if (url) blogImgs[p.slug] = url;
  }
  _setBlogExtra(extra);
  _setBlogImages(blogImgs);

  const pages: ContentPage[] = rawPages.map((cp) => ({
    slug: cp.slug,
    url: cp.url,
    type: cp.type,
    title: cp.title,
    subtitle: cp.subtitle ?? "",
    seoTitle: cp.seoTitle ?? "",
    metaDescription: cp.metaDescription ?? "",
    body: cp.body,
  }));
  _setContentPages(pages);

  const pageImgs: Record<string, string> = {};
  for (const cp of rawPages) {
    const url = mediaUrl(cp.image);
    if (url) pageImgs[cp.slug] = url;
  }
  _setPageImages(pageImgs);

  const projectsList: Project[] = rawProjects.map((pr) => ({
    slug: pr.slug,
    name: pr.name,
    url: pr.url ?? "",
    category: pr.category,
    tag: pr.tag ?? "",
    summary: pr.summary,
    shot: mediaUrl(pr.shot) ?? "",
    logo: mediaUrl(pr.logo) ?? "",
    bg: pr.bg ?? "#F5F5F4",
    dark: pr.dark ?? false,
    tech: pr.tech ?? [],
    year: pr.year ?? "",
    role: pr.role ?? "",
    sector: pr.sector ?? "",
    overview: pr.overview ?? "",
    challenge: pr.challenge ?? "",
    approach: pr.approach ?? "",
    outcome: pr.outcome ?? "",
    stats: pr.stats ?? [],
    features: pr.features ?? [],
  }));
  _setProjects(projectsList);
}
