
# CodersDive — Full Site Rebuild Plan

This is a very large build (50+ routes, mega-menu, intake form, blog system, legal pages, 60 articles). I'll execute it in phases so you can verify direction and content fidelity along the way — not all at once.

Before I start, two confirmations I need from you (answer inline, no formal Q tool):

1. **Theme switch.** You earlier asked to keep the light theme. This new brief says *"premium dark editorial — deep ink + graphite backgrounds, restrained aqua accents, occasional light mist sections."* I'll switch to dark-primary with light section breaks. Confirm OK to override the previous light-theme choice.
2. **Content doc was truncated at 50 pages** (the parser cap). Pages 1–50 cover Home → Mobile Apps service. The remaining ~10 services, 6 case studies, 10 industries, 6 insight categories, legal pages, and 60 blogs are past the cut. I'll re-parse the doc in chunks as I get to each section so every page uses YOUR copy verbatim — not invented copy. No fake metrics, logos, or testimonials anywhere (per your brief).

---

## Design system (built once, used everywhere)

- **Palette:** `--ink` (#0A0B0F base), `--graphite` (#13151B), `--mist` (#F4F2EC light sections), `--bone` (#E8E4DB text on ink), `--aqua` (#5EE7D6 accent, used sparingly — links, focus, single highlight per section), `--rule` (1px hairlines).
- **Type:** Headings `Fraunces` (editorial serif) at oversized scales (clamp 56–112px hero). Body `Inter Tight`. Mono `JetBrains Mono` for labels, section numbers, metric eyebrows.
- **Grid:** 12-col, 1280 max, 80–160px section padding, generous whitespace replacing card containers wherever possible.
- **Motion:** 160–260ms micro, 400–700ms reveals. `prefers-reduced-motion` honored. No floating blobs, no glassmorphism, no robot/code-rain imagery.
- **A11y:** semantic landmarks, single H1, visible focus rings, 44px tap targets, WCAG AA contrast, keyboard mega-menu, reduced-motion fallback.

## Information architecture (final route map)

```
/                          Home
/about                     About
/how-we-work               Process
/work                      Work hub
/work/[slug]               6 case studies
/services                  Services hub
/services/[slug]           16 service pages (data-driven)
/industries                Industries hub
/industries/[slug]         10 industries (data-driven)
/engagement-models         Engagement
/technology-stack          Tech stack
/ai-first                  AI-First Engineering
/insights                  Insights hub
/insights/[category]       6 category pages
/insights/[category]/[slug]  Article template (60 blogs)
/careers                   Careers
/faq                       FAQ
/contact                   Contact
/start-a-project           Multi-step intake
/thank-you                 Confirmation
/privacy /terms /cookies /accessibility /security-responsible-ai   Legal
*                          404 ("This route did not ship.")
```

## Reusable components (built once)

`MegaNav`, `MobileDrawer`, `Footer`, `Eyebrow`, `SectionNumber`, `StatementBlock`, `OutcomeCards`, `ProofStrip`, `ServiceFamilyGrid`, `FeaturedWorkGrid`, `ProcessTimeline`, `AIContrast`, `EngagementTable`, `InsightsGrid`, `IntakeForm`, `FAQAccordion`, `RelatedContent`, `CTABand`, `TechConstellation`, `ArchitectureDiagram`, `BeforeAfter`, `MetricModule` (with `verified` flag — hides if unverified), `Breadcrumb`, `SeoHead` (per-route via `react-helmet-async`).

Data files: `src/content/services.ts`, `industries.ts`, `cases.ts`, `insights.ts`, `categories.ts`, `engagements.ts`, `faqs.ts`, `team.ts`.

## Execution phases

I'll ship and let you review between phases.

**Phase 1 — foundation (this turn after you confirm)**
Design tokens, fonts, dark theme in `index.css` + Tailwind, `react-helmet-async` setup, new `MegaNav` with keyboard-accessible services mega-menu + mobile drawer, new `Footer` ending "Bring us the messy version.", route skeleton in `App.tsx` with all 30+ routes wired to placeholder pages, data file shells.

**Phase 2 — home + company spine**
Home (full sequence: editorial hero → proof strip → product-partner → service families → featured work → AI contrast → process → engagement preview → insight feature → CTA band), About, How We Work, Engagement Models, Technology Stack, AI-First, Careers, FAQ, Contact, Start-a-Project (multi-step + single-page fallback, localStorage), Thank-you, 404.

**Phase 3 — services**
Services hub + 16 service pages from data, distinct abstract motif per service, shared template.

**Phase 4 — work + industries**
Work hub with filters, 6 case study pages (sticky facts sidebar + long-form), Industries hub, 10 industry pages.

**Phase 5 — insights + legal**
Insights hub, 6 category pages, article template, seed with 6–10 of the 60 blogs from the doc and stub the rest in data (rendered through the template — no per-file pages). Legal pages (Privacy, Terms, Cookies, Accessibility, Security & Responsible AI) with sticky in-page nav.

**Phase 6 — audit**
Responsive sweep (320/375/768/1024/1280/1440), accessibility sweep, SEO sweep (per-route Helmet, sitemap.xml regenerated from route list, JSON-LD: Organization, Service, Article, BreadcrumbList, FAQPage), perf sweep (lazy media, preload hero font only).

## Honest scope note

This will take multiple turns and is a large credit spend. If you want me to compress (e.g. skip the 16th service page, ship 8 blog posts instead of 60, or drop industries to 4), say so now. Otherwise I proceed as above starting with Phase 1 the moment you confirm.

**Reply with:** "go" (or "go, dark theme confirmed") and I start Phase 1. Or tell me what to trim.
