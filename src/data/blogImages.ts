// Blog post cover images — now Strapi media URLs (the post's `coverImage`
// field), populated at app boot. Posts without one fall back to CoverArt.
export let blogImages: Record<string, string> = {};

export const getBlogImage = (slug: string): string | undefined => blogImages[slug];

/** Called once by cmsBootstrap.ts after fetching from Strapi. */
export function _setBlogImages(images: Record<string, string>) {
  blogImages = images;
}
