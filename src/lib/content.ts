import { contentPages, type ContentPage } from "@/data/pageData";

/* ---------- Section parsing ---------- */

export interface Section {
  title: string;
  body: string;
}

export interface ParsedContent {
  intro: string;
  sections: Section[];
}

/** Split a markdown body into an intro block + `## ` sections. */
export function parseSections(body: string): ParsedContent {
  const lines = body.replace(/\r/g, "").split("\n");
  const intro: string[] = [];
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const line of lines) {
    const m = /^##\s+(?!#)(.*)$/.exec(line);
    if (m) {
      if (current) sections.push(current);
      current = { title: m[1].trim(), body: "" };
    } else if (current) {
      current.body += line + "\n";
    } else {
      intro.push(line);
    }
  }
  if (current) sections.push(current);

  return {
    intro: intro.join("\n").trim(),
    sections: sections.map((s) => ({ title: s.title, body: s.body.trim() })),
  };
}

/** Find the first section whose title loosely matches any of the names. */
export function findSection(sections: Section[], ...names: string[]): Section | undefined {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
  for (const name of names) {
    const target = norm(name);
    const hit = sections.find((s) => norm(s.title).includes(target));
    if (hit) return hit;
  }
  return undefined;
}

/** Split a section body into `### ` subsections (title + body). */
export function parseSubsections(body: string): Section[] {
  const parts = body.split(/\n(?=###\s+)/);
  const out: Section[] = [];
  for (const part of parts) {
    const m = /^###\s+(.*)\n?([\s\S]*)$/.exec(part.trim());
    if (m) out.push({ title: titleCase(m[1].trim()), body: m[2].trim() });
  }
  return out;
}

/** Extract bullet lines (`- ` / `* `) from a body. */
export function parseBullets(body: string): string[] {
  return body
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => /^[-*]\s+/.test(l))
    .map((l) => l.replace(/^[-*]\s+/, "").trim());
}

/** Extract ordered-list steps regardless of source numbering. */
export function parseSteps(body: string): string[] {
  return body
    .split(/\n(?=\d+\.\s)/)
    .map((l) => l.trim())
    .filter((l) => /^\d+\.\s/.test(l))
    .map((l) => l.replace(/^\d+\.\s/, "").replace(/\s+/g, " ").trim());
}

export interface Cta {
  headline?: string;
  action?: string;
}

/** Parse a `CTA` section body into a headline + action label. */
export function parseCta(body?: string): Cta {
  if (!body) return {};
  const headline = /Headline:\s*"?([^"\n]+?)"?\s*(?:CTA:|$)/i.exec(body)?.[1];
  const action = /CTA:\s*"?([^"\n]+?)"?\s*$/im.exec(body)?.[1];
  return { headline: headline?.trim(), action: action?.trim() };
}

/* ---------- Page lookup helpers ---------- */

export const getPagesByType = (type: string): ContentPage[] =>
  contentPages.filter((p) => p.type.toUpperCase().includes(type.toUpperCase()));

export const getServices = () => getPagesByType("SERVICE");
export const getIndustries = () => getPagesByType("INDUSTRY");
export const getCaseStudies = () => getPagesByType("CASE STUDY");

export function findPageByTitle(type: string, title: string): ContentPage | undefined {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const t = norm(title);
  return getPagesByType(type).find((p) => norm(p.title) === t || norm(p.title).includes(t) || t.includes(norm(p.title)));
}

/* ---------- Misc ---------- */

export function titleCase(s: string): string {
  return s
    .split(" ")
    .map((w) => {
      if (/^(and|or|the|of|to|a|an|for|in|on)$/i.test(w)) return w.toLowerCase();
      if (/[A-Z]/.test(w.slice(1))) return w; // keep existing camel/acronyms
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ")
    .replace(/^./, (c) => c.toUpperCase());
}

/** Deterministic small int from a string (for motif variation). */
export function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
