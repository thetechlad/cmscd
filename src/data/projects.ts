// Portfolio project data lives in Strapi now (see src/lib/strapi.ts + cmsBootstrap.ts).
// `projects` starts empty and is populated once at app boot via a live
// binding, so every existing consumer keeps working unchanged. `shot`/`logo`
// were previously bundled local image imports (still just strings by type);
// they're now absolute Strapi media URLs instead.
export type ProjectCategory = "AI" | "SaaS" | "Design";

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  url: string;
  category: ProjectCategory;
  tag: string;
  /** One-line summary for cards */
  summary: string;
  shot: string;
  logo: string;
  /** Tile background (used behind screenshots / logos) */
  bg: string;
  /** true when the brand logo/site is dark and needs a dark tile */
  dark?: boolean;
  tech: string[];
  year: string;
  role: string;
  sector: string;
  /** Case study long-form content */
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  stats: ProjectStat[];
  features: string[];
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  AI: "AI",
  SaaS: "SaaS Products",
  Design: "Design",
};

export let projects: Project[] = [];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Called once by cmsBootstrap.ts after fetching from Strapi. */
export function _setProjects(list: Project[]) {
  projects = list;
}
