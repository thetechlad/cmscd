import { Helmet } from "react-helmet-async";
import { abs, DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";

interface SeoProps {
  title: string;
  description?: string;
  /** Route path this page canonically lives at (e.g. "/services/ai-agents"). */
  path?: string;
  /** Absolute image URL for social previews. Falls back to the brand image. */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  /** One or more JSON-LD schema objects to embed. */
  jsonLd?: Array<Record<string, unknown> | null | undefined>;
}

/**
 * Seo — per-route <head> management via react-helmet-async. Emits a unique
 * title, description, canonical URL, Open Graph + Twitter tags, optional
 * noindex, and any JSON-LD structured data supplied by the page.
 */
const Seo = ({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noindex = false,
  jsonLd = [],
}: SeoProps) => {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const url = abs(path);
  const ogImage = image || DEFAULT_OG_IMAGE;
  const schemas = jsonLd.filter(Boolean) as Record<string, unknown>[];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
