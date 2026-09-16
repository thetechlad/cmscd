# Repo Audit — code-depth-showcase (CodersDive)

**Read this before running any of the Phase 1+ prompts from the pasted prompt pack.**
The most important finding isn't in the checklist below — it's this: **the pasted audit describes a different, much earlier version of this site than what's actually in this repository.** See §0 first.

---

## 0. Reality check against the pasted audit

The pasted audit (Part 1) describes a **single-page site** with no other routes, a buzzword-heavy title ("Engineering for the Ambitious"), no sitemap, no per-page metadata, and no design token system. None of that matches what's in this repo right now:

| Audit claim | Actual state in this repo |
|---|---|
| "The response body contains only `<head>` metadata... everything renders client-side" | **Still true** — confirmed by building (`dist/index.html` body is `<div id="root"></div>`, nothing else). This is the one major finding that survives. |
| Title: "Engineering for the Ambitious" | Actual `<title>`: `AI-Powered Software That Eliminates Manual Work \| CodersDive` |
| Description is three buzzwords, no substance | Actual description: `"CodersDive builds AI-powered software and automation that eliminates manual work in sales, operations and support. Get a free automation audit."` — already number-free but concrete-ish |
| No canonical, og:image, structured data, sitemap.xml, or per-page metadata "because there are no other pages" | There **are** other pages — 14 top-level routes, 47 content-driven marketing pages (services/industries/legal/careers), 69 blog posts. Per-page SEO already exists via `src/components/Seo.tsx` (react-helmet-async): unique title/description/canonical/OG/Twitter tags/JSON-LD per route. `public/sitemap.xml` is generated at build time from real route data (`scripts/generate-sitemap.ts`), `public/robots.txt` exists, and `public/og/` has per-post OG images for all 69 blog posts. |
| "I can't assess design, nothing rendered" / implies hardcoded colors and ad-hoc spacing everywhere | A real design token system already exists: CSS custom properties in `src/index.css` (`--background`, `--accent-blue`, `--border`, etc.), mapped into Tailwind's semantic color names in `tailwind.config.ts`. Two font families only (Syne for display, DM Sans for body — plus JetBrains Mono for code). Hardcoded hex values outside `index.css` are minimal and confined to a handful of illustration/chart/mockup components, not systemic. |
| Nav needs a Marketing section added; only Services/Work/About/Contact exist | Actual nav (`src/components/Header.tsx`) is a full mega-menu already: Services (5 sub-groups, ~15 pages), Work (6 case studies + portfolio), Industries (10 industry pages), Insights (blog), Company (About, How We Work, Engagement Models, Technology Stack, AI-First, Careers, FAQ). Nothing here resembles a bare single-page site. |
| `meta name="keywords"` present, should be deleted | **Still true** — it's in `index.html` right now. |

**My read:** either the pasted audit was run against an old snapshot / a different environment of codersdive.com than what's in this git history, or it's describing a different project entirely. Before running Phase 2 (copy rewrite) or Phase 6/8 (nav restructure, new marketing pages) against this codebase, I'd want you to confirm that's actually intended — those prompts assume a much barer site and could produce redundant work or fight the existing (fairly mature) mega-menu and content-page system.

**What does still apply as-is:** Phase 1 (crawlability — confirmed real), the `meta keywords` deletion, Phase 5 (performance — see §11, real numbers below), and pieces of Phase 4 (technical SEO) that build on top of what already exists rather than replacing it.

---

## 1. Framework and build tool

- **Vite** 5.4.1, **React** 18.3.1, **TypeScript** 5.5.3, `@vitejs/plugin-react-swc` 3.5.0
- Package manager: repo ships `bun.lockb` (bun) but `package-lock.json` also exists; bun isn't installed on this machine — dev/build here used `npx vite` / npm directly, bypassing the `bunx tsx` pre-hooks (see §9).
- No meta-framework (no Next.js, no Remix, no Astro). Plain Vite SPA.
- Source: `package.json`, `vite.config.ts`

## 2. Rendering mode — confirmed fully client-side

- No SSR/SSG/prerendering plugin anywhere in `package.json` (no `vite-plugin-ssr`, no `react-snap`, no `vite-plugin-prerender`).
- `src/App.tsx` uses `BrowserRouter` from `react-router-dom` — pure client-side routing.
- **Verified by building**: ran `npx vite build`; `dist/index.html` body is exactly:
  ```html
  <body>
    <div id="root"></div>
  </body>
  ```
  No headings, no copy, no links, for every route — they're all client-rendered onto this one shell.
- Per-route `<head>` tags (title/description/canonical/OG/JSON-LD) are injected by `react-helmet-async` at runtime in the browser — meaning they exist in the DOM after JS executes, but **not** in the raw HTML response a non-JS crawler fetches. Same blocking issue the pasted audit describes, confirmed independently.

## 3. Routing

- `react-router-dom` 6.26.2, history-based (`BrowserRouter`), not hash-based.
- Explicit routes in `src/App.tsx`: `/`, `/about`, `/services`, `/portfolio`, `/portfolio/:slug`, `/process`, `/testimonials`, `/contact`, `/blog`, `/insights`, `/insights/:slug`, `/start-a-project`, `/thank-you`.
- Catch-all `*` → `ContentPage` (`src/pages/ContentPage.tsx`), which renders **47 data-driven marketing pages** (services, industries, company pages, legal, careers) from `src/data/pageData.ts` by matching the URL.
- Nav mega-menu routes (from `src/components/Header.tsx`): ~15 `/services/*` pages, 10 `/industries/*` pages, 6 `/work/*` case study links, `/how-we-work`, `/engagement-models`, `/technology-stack`, `/ai-first`, `/careers`, `/faq`.

## 4. Styling approach

- Tailwind CSS 3.4.11 with a semantic token layer, **not** raw utility colors.
- `tailwind.config.ts` maps Tailwind color names (`background`, `primary`, `accent-blue`, `muted`, `border`, etc.) to CSS custom properties defined in `src/index.css` as HSL triples (e.g. `--accent-blue: 188 100% 44%` = `#00C4E1`).
- Two content font families: `Syne` (display/headings, weights 500/600/700/800) and `DM Sans` (body, 400/500/600/700), plus `JetBrains Mono` (400/500) — loaded via Google Fonts `<link>` in `index.html`, not self-hosted.
- Reusable button/label classes already exist in `@layer components` of `src/index.css`: `.btn-primary`, `.btn-secondary`, `.btn-blue`, `.label-eyebrow`, `.container-tight`, `.display`.
- A `.on-dark` class swaps CSS variables for a dark section variant (used in contact + footer per the comment in `index.css`).
- shadcn/ui component library present (`src/components/ui/`, 48 files) — standard Radix-based primitives.

## 5. Color inventory

Brand tokens (from `src/index.css :root`):
- `--background: #F7F6F2` (warm off-white), `--background-soft: #FFFFFF`
- `--foreground: #0D0D0D` (ink, not pure black)
- `--accent-blue: #00C4E1` (cyan — close to the `#00C5E2` the pasted brand constants list, 1-digit hex difference, worth reconciling)
- `--muted-foreground: #6B6B6B`, `--border: #E2E2DC`
- Dark variant (`.on-dark`): `--background: #0A0A0A`, `--card: #1A1A1A`, `--border: #2A2A2A`

Hardcoded hex values outside `index.css` (grep count, top hits):
- `HeroIllustration.tsx` — 9× `#0A0A0A`, 9× `#00C4E1`, 6× `#E5E7EB`, 2× `#F0F4FF`, 2× `#9CA3AF` (decorative SVG illustration, reasonable to hardcode)
- `CoverArt.tsx` — 9× `#ffffff`, 2× `#00C4E1`
- `ui/chart.tsx` — a few greys (Recharts default styling)
- `ProjectCaseStudy.tsx` — 3× macOS traffic-light dot colors (`#ff5f57`/`#febc2e`/`#28c840`) — decorative browser-chrome mockup
- `data/projects.ts` — ~6 single-use pastel tints for project cards

None of this is the systemic "colors everywhere" problem the pasted audit assumes for a token-less codebase — it's already tokenized, with hardcoding confined to decorative/illustration contexts.

## 6. Fonts

- `Syne` (500/600/700/800) — display/headings
- `DM Sans` (400/500/600/700) — body
- `JetBrains Mono` (400/500) — code/mono contexts
- All loaded via Google Fonts CDN link in `index.html`, not self-hosted, no `font-display` control beyond the `&display=swap` query param already present.

## 7. Spacing

Not exhaustively tallied (low signal-to-noise via grep on arbitrary Tailwind spacing utilities), but section rhythm is centralized via `.container-tight` (`max-w-[1200px] mx-auto px-6`) rather than repeated ad-hoc utility strings — spacing is more disciplined than the pasted audit's "audit and consolidate" framing assumes. A real per-value frequency count would need a dedicated pass if you want it before Phase 3.

## 8. Component inventory

- `src/pages/` — 14 top-level route components (Index, About, Services, Portfolio, ProjectCaseStudy, Process, Testimonials, Contact, Blog, BlogPost, ContentPage, StartProject, ThankYou, NotFound)
- `src/components/` — 29 shared components at top level (Header, Footer, Seo, Analytics, HeroIllustration, CoverArt, BrandWork, etc.) + `templates/` subfolder (Breadcrumbs, LegalPage, and others used by `ContentPage`) + `ui/` — 48 shadcn/ui primitives
- `src/data/` — 7 data files: `blogData.ts` (69 posts), `blogExtra.ts`, `blogImages.ts`, `faqData.ts`, `pageData.ts` (47 content-driven pages), `pageImages.ts`, `projects.ts`

## 9. Metadata system

- Static, baked-in-`index.html`: `<title>`, `<meta description>`, `<meta keywords>` (should be deleted per both audits), `<meta author>`, Google Fonts preconnect, favicon, and two static JSON-LD blocks (Organization, WebSite) — these apply to every route since they're server-delivered as-is, not per-route.
- Dynamic, per-route: `src/components/Seo.tsx` — a `<Helmet>` wrapper taking `title`/`description`/`path`/`image`/`type`/`noindex`/`jsonLd` props, called from individual page components. Handles canonical URLs, OG tags, Twitter card tags, and arbitrary JSON-LD. **This only reaches the DOM after JS runs** — see §2.
- `src/lib/seo.ts` (referenced by `Seo.tsx`) holds `abs()`, `DEFAULT_OG_IMAGE`, `SITE_NAME` constants — didn't inspect in full, flagging its existence.

## 10. Existing assets

- `public/favicon.png` (single PNG, no full favicon set — 16/32/180/192/512 sizes + `site.webmanifest` don't exist yet)
- `public/robots.txt` — exists, allows Googlebot/Bingbot/Twitterbot/facebookexternalhit explicitly plus a wildcard `Allow: /` for everyone else (so GPTBot/ClaudeBot/PerplexityBot are already allowed via the wildcard, just not called out by name), references `sitemap.xml`
- `public/sitemap.xml` — exists, **generated at build time** by `scripts/generate-sitemap.ts` (runs on `predev`/`prebuild` via `bunx tsx`) from real route data: static pages, content pages, blog posts, blog categories
- `public/og/default.jpg` — site-wide fallback OG image, plus a per-post OG image for every one of the 69 blog posts in `public/og/blog/`
- `public/placeholder.svg` — generic placeholder asset

## 11. Hosting / deploy config

- No `vercel.json`, `netlify.toml`, `Dockerfile`, or `.github/` workflows found in the repo.
- `scripts/generate-sitemap.ts` hardcodes `BASE_URL = "https://code-depth-showcase.lovable.app"` — this is a **Lovable-hosted preview URL**, not `codersdive.com`. If the production domain is `codersdive.com`, canonical URLs, the sitemap, and JSON-LD `url` fields are all currently pointing at the wrong domain. Worth confirming before Phase 4.
- Given the Lovable tooling (`lovable-tagger` dev dependency, `.lovable/` folder in the repo), deployment is likely handled through Lovable's own hosting rather than a config file in-repo.

## 12. Counts

- Buttons/CTAs: primary CTA is "Start a project" / "Book a Consultation" / "Contact us", consistently applied via `.btn-primary`/`.btn-secondary`/`.btn-blue` — not a sprawl of one-off styles.
- Heading levels: `h1`–`h6` all styled uniformly via the `@layer base` rule in `index.css` (Syne, 700 weight, 1.15 line-height) — didn't verify per-page h1 uniqueness/count; that's exactly what Prompt 1.3 / 9.1 would check once Phase 1 lands.
- Production bundle (from the build run): **1 JS chunk, 1,192.83 kB (314.95 kB gzipped)** — no route-based code splitting. CSS: 93.87 kB (16.83 kB gzip). Several image assets over 900 kB uncompressed (`ai-commerce-builder`, `mockup-iphone`, `mockup-macbook`). This is real signal for Phase 5.

---

## Bottom line

1. **Phase 1 (crawlability) is real and worth doing** — confirmed independently, not just taking the pasted audit's word for it.
2. **Phases 2, 3, 6, and 8 in the pasted pack assume a much less developed site than this one.** Running them as written risks flattening an already-built mega-nav, an already-built 47-page content system, and an already-tokenized design system. I'd treat those as "audit what's here against the rules, propose surgical fixes" rather than "build from scratch."
3. Fix `meta keywords`, the Lovable preview domain vs. production domain mismatch, and the missing full favicon set — small, unambiguous wins regardless of which direction you go on the bigger phases.
4. Confirm the real production domain before touching canonical URLs / sitemap / JSON-LD `url` fields.

I haven't modified anything else — this file only.
