// Extended "operator-grade depth" per-post content — now the blog post's
// own `extraContent` field in Strapi, populated at app boot.
export let blogExtra: Record<string, string> = {};

/** Called once by cmsBootstrap.ts after fetching from Strapi. */
export function _setBlogExtra(extra: Record<string, string>) {
  blogExtra = extra;
}
