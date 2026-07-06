// Auto-mapped illustrated blog cover images (src/assets/blog/{slug}.jpg).
// Any new file dropped into that folder is picked up automatically at build time.
// Posts without a generated image fall back to the animated CoverArt component.
const files = import.meta.glob("../assets/blog/*.jpg", { eager: true, import: "default" });

export const blogImages: Record<string, string> = {};
for (const path in files) {
  const slug = path.split("/").pop()!.replace(/\.jpg$/, "");
  blogImages[slug] = files[path] as string;
}

export const getBlogImage = (slug: string): string | undefined => blogImages[slug];
