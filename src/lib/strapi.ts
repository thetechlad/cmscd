// Strapi CMS API client. All site content (blog posts, content pages,
// projects) now lives in Strapi rather than static files — this module is
// the single place that knows how to reach it.
export const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

/** Resolve a Strapi media object's URL to an absolute URL. */
export function mediaUrl(media: { url: string } | null | undefined): string | undefined {
  if (!media?.url) return undefined;
  return media.url.startsWith("http") ? media.url : `${STRAPI_URL}${media.url}`;
}

async function strapiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api/${path}`);
  if (!res.ok) {
    throw new Error(`Strapi request failed: GET /api/${path} -> ${res.status}`);
  }
  const json = await res.json();
  return json.data as T;
}

/** Fetch every page of a Strapi collection (REST API caps pageSize; content sets here are small enough for one or two pages). */
async function strapiFetchAll<T>(path: string, params = ""): Promise<T[]> {
  const pageSize = 100;
  let page = 1;
  const all: T[] = [];
  for (;;) {
    const sep = params ? "&" : "?";
    const data = await strapiFetch<T[]>(`${path}${params}${sep}pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
    all.push(...data);
    if (data.length < pageSize) break;
    page++;
  }
  return all;
}

export interface RawBlogCategory {
  id: number;
  name: string;
  slug: string;
}

export interface RawBlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  extraContent: string | null;
  finalCta: string | null;
  suggestedCta: string | null;
  publishDate: string | null;
  readTime: string | null;
  category: RawBlogCategory | null;
  coverImage: { url: string } | null;
}

export interface RawContentPage {
  id: number;
  title: string;
  slug: string;
  url: string;
  type: string;
  subtitle: string | null;
  seoTitle: string | null;
  metaDescription: string | null;
  body: string;
  image: { url: string } | null;
}

export interface RawProjectStat {
  label: string;
  value: string;
}

export interface RawProject {
  id: number;
  name: string;
  slug: string;
  url: string | null;
  category: "AI" | "SaaS" | "Design";
  tag: string | null;
  summary: string;
  shot: { url: string } | null;
  logo: { url: string } | null;
  bg: string | null;
  dark: boolean | null;
  tech: string[] | null;
  year: string | null;
  role: string | null;
  sector: string | null;
  overview: string | null;
  challenge: string | null;
  approach: string | null;
  outcome: string | null;
  stats: RawProjectStat[] | null;
  features: string[] | null;
}

export interface LeadPayload {
  name: string;
  email: string;
  company?: string;
  message?: string;
  formType: "contact" | "marketing_lead";
  service?: string;
  budget?: string;
  timeline?: string;
  sourcePath?: string;
}

/** Submit a form to Strapi. Throws on any non-2xx response. */
export async function createLead(payload: LeadPayload): Promise<void> {
  const res = await fetch(`${STRAPI_URL}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: payload }),
  });
  if (!res.ok) {
    throw new Error(`Strapi request failed: POST /api/leads -> ${res.status}`);
  }
}

export const fetchBlogCategories = () => strapiFetchAll<RawBlogCategory>("blog-categories");

export const fetchBlogPosts = () =>
  strapiFetchAll<RawBlogPost>("blog-posts", "?populate=category&populate=coverImage");

export const fetchContentPages = () => strapiFetchAll<RawContentPage>("content-pages", "?populate=image");

export const fetchProjects = () => strapiFetchAll<RawProject>("projects", "?populate=shot&populate=logo");
