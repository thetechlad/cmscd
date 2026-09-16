// Content page cover images — now Strapi media URLs (the page's `image`
// field), populated at app boot. Pages without one fall back to CoverArt.
export let pageImages: Record<string, string> = {};

export const getPageImage = (slug: string): string | undefined => pageImages[slug];

/** Called once by cmsBootstrap.ts after fetching from Strapi. */
export function _setPageImages(images: Record<string, string>) {
  pageImages = images;
}
