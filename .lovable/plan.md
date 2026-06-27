## Goal

Upgrade CodersDive from "content dumped through one generic markdown page" into a production-quality, data-driven, multi-page site matching the spec's IA, components, and conversion intent — **kept fully light** (the spec's dark/"deep ink" direction is overridden per your standing preference; aqua accent becomes our cobalt blue).

All content already exists in `src/data/pageData.ts` (16 services, 10 industries, 6 case studies, hubs, company, legal) and `src/data/blogData.ts` (60 articles). No content invention; unverified proof stays clearly labeled (e.g. "Your code. Your IP.", "Verification pending").

## What's wrong today
- Every marketing page (service, industry, case study, legal) renders through one flat `ContentPage` markdown dump — no distinct templates, no breadcrumbs, no related-content, no proof modules.
- The nav mega-menu still references an old taxonomy (Full-Stack, Web3) and links everything to `/services` or `/portfolio` instead of the real pages that exist.
- Missing: thank-you page, insight category pages, structured engagement/AI-first/process layouts.

## Plan (phased)

### Phase 1 — Navigation + global shell
- Rebuild `Header.tsx` mega-menu to the real IA: **Services** (grouped: AI & Intelligent Systems, Product Engineering, Experience, Platforms, Partnership) linking to the 16 real `/services/*` pages, **Work** (6 real case studies), **Industries** (10 real pages), **Insights**, **Company** (About, How We Work, Engagement Models, Technology Stack, AI-First, Careers, FAQ).
- One primary CTA: "Start a project" → `/start-a-project`. Keyboard accessible (focus states, Esc to close, no hover-only), menu constrained to viewport, accessible mobile drawer with accordions + persistent CTA.
- Add `Breadcrumbs` + `RelatedContent` reusable components.

### Phase 2 — Data-driven design templates (the core work)
Extend the page data model with light structured fields (capabilities, deliverables, FAQs, related slugs) parsed from existing body copy, then route by `type`:
- `ServiceDetail` — hero, when useful, capabilities, approach, deliverables, related work, related insights, FAQ accordion, CTA ribbon. Distinct abstract motif per service, same system.
- `IndustryDetail` — hero, common challenges, what we build, relevant services, case studies, trust requirements, CTA.
- `CaseStudyDetail` — sticky project facts, challenge, direction, feature sections, outcomes (placeholder-labeled), related work.
- `LegalPage` — restrained layout, sticky in-page nav, last-updated, readable line length.
- `HubPage` (services/industries/work/insights) — grouped grids, choosers, related modules.
- Company pages (How We Work, Engagement Models, Technology Stack, AI-First) get purpose-built section layouts (process timeline, engagement comparison cards, tech constellation, AI accountability split).

### Phase 3 — Homepage rhythm + conversion components
Reusable sections per spec, alternating light/soft-light (no dark): editorial hero, proof strip (commitments not fake numbers), service-family grid, featured work, AI-first contrast, six-step process, engagement preview, insight feature, CTA ribbon. Reduce borders/cards, increase whitespace, one focal point per section.

### Phase 4 — Conversion + utility pages
- `StartProject` multi-step intake form (context, stage, priorities, timeline, budget range, links, contact) with localStorage session save, validation after blur/submit, error summary focus, single-page fallback, no forced phone. Submits via existing formsubmit flow.
- `ThankYou` page (acknowledge, next step + response window, two relevant insights, email for more context) + route after submit.
- Insight category pages.

### Phase 5 — SEO, a11y, performance, polish pass
- Per-route `<title>`/meta/canonical/OG via react-helmet-async; JSON-LD (Organization, Service, Article, Breadcrumb, FAQ); sitemap + robots.
- A11y: one H1/page, landmarks, visible focus, reduced-motion support, 44px targets, contrast, no horizontal overflow.
- Motion: 160–260ms micro, 400–700ms reveals, run-once scroll reveals, respect `prefers-reduced-motion`.
- Responsive audit at 320–1920px.

## Technical notes
- Routing: replace the single `*` catch-all with type-aware rendering — `ContentPage` dispatches to the right template based on `page.type`, keeping the data source unchanged.
- Visual system stays: warm off-white `#F7F6F2`, white surfaces, cobalt `#0057FF` accent, Syne headings / DM Sans body. No dark sections anywhere.
- No new backend needed; intake uses the existing formsubmit + Cal.com.

## Scope note
This is large and will span multiple turns. I'll build phase by phase, verifying typecheck + key pages render after each. I'll start with Phase 1 (navigation) and Phase 2 (service + case study + industry templates), since those deliver the most visible jump in quality.