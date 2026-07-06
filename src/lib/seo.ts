// Central SEO helpers: canonical base URL, Open Graph image resolution, and
// JSON-LD structured-data builders used across routes.

export const BASE_URL = "https://code-depth-showcase.lovable.app";
export const SITE_NAME = "CodersDive";
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og/default.jpg`;

/** Build an absolute URL from a route path. */
export const abs = (path: string) => {
  if (!path) return BASE_URL;
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

/** Absolute Open Graph image for a given blog slug (generated at build time). */
export const blogOgImage = (slug: string) => `${BASE_URL}/og/blog/${slug}.jpg`;

type Json = Record<string, unknown>;

export const organizationSchema = (): Json => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  description:
    "CodersDive is the elite product engineering studio for ambitious teams. We design, build and ship category-defining software.",
  sameAs: [],
});

export const websiteSchema = (): Json => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/insights?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]): Json => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const serviceSchema = (opts: {
  name: string;
  description: string;
  path: string;
}): Json => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  url: abs(opts.path),
  provider: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
  areaServed: "Worldwide",
});

export const articleSchema = (opts: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished?: string;
  section?: string;
}): Json => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: opts.title,
  description: opts.description,
  image: [opts.image],
  mainEntityOfPage: abs(opts.path),
  author: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.png` },
  },
  ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
  ...(opts.section ? { articleSection: opts.section } : {}),
});

export const faqSchema = (faqs: { q: string; a: string }[]): Json | null => {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/[#*`>_]/g, "").trim() },
    })),
  };
};
