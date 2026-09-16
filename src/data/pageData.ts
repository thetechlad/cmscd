// Content page data lives in Strapi now (see src/lib/strapi.ts + cmsBootstrap.ts).
// `contentPages` starts empty and is populated once at app boot via a live
// binding, so every existing consumer keeps working unchanged.
export interface ContentPage {
  slug: string;
  url: string;
  type: string;
  title: string;
  subtitle: string;
  seoTitle: string;
  metaDescription: string;
  body: string;
}

export let contentPages: ContentPage[] = [];

export const getPageByUrl = (url: string) => contentPages.find((p) => p.url === url);

/** Called once by cmsBootstrap.ts after fetching from Strapi. */
export function _setContentPages(pages: ContentPage[]) {
  contentPages = pages;
}
