// Auto-mapped illustrated cover images for service / industry / case-study pages
// (src/assets/pages/{slug}.jpg). Any new file dropped into that folder is picked
// up automatically at build time. Pages without a generated image fall back to
// the animated CoverArt component.
const files = import.meta.glob("../assets/pages/*.jpg", { eager: true, import: "default" });

export const pageImages: Record<string, string> = {};
for (const path in files) {
  const slug = path.split("/").pop()!.replace(/\.jpg$/, "");
  pageImages[slug] = files[path] as string;
}

export const getPageImage = (slug: string): string | undefined => pageImages[slug];
