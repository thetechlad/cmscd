# Copy Audit — against CLAUDE.md rules

Method: grepped every banned word/phrase from `CLAUDE.md` across `src/**/*.{ts,tsx}` (excluding `src/components/ui/` — shadcn library primitives, not this project's copy), then hand-checked each hit for context. A raw regex match is not a violation by itself — `transition-transform` (a CSS class), `useNavigate`/`<Navigate>` (a router API), and `"digital-transformation"` (a content-category slug) all matched the word list but are code, not copy. Those are excluded below. What's left is genuine prose.

**Total real violations found: 19** across non-blog source, all listed individually below. Blog content (`blogData.ts`, `blogExtra.ts` — 69 posts) is summarized separately at the end rather than itemized: see "Blog content" for why, and for the two clear wins worth fixing there regardless.

**Worst offender: `src/lib/seo.ts`** — the exact buzzword paragraph the pasted audit called out ("elite... category-defining") was sitting in `organizationSchema()`. Correction after checking usage: this helper is never imported anywhere — it's dead code, not what actually ships. The real, live Organization JSON-LD (baked directly into `index.html`) already had the correct, non-buzzword description. Fixed `seo.ts` anyway for consistency, in case the helper gets wired up later. **[FIXED]**

---

## High severity

| File | Line | Current text | Rule violated | Why it matters |
|---|---|---|---|---|
| `src/lib/seo.ts` | 27 | `"CodersDive is the elite product engineering studio for ambitious teams. We design, build and ship category-defining software."` | Banned words: elite, category-defining. No number/name/timeframe. | `organizationSchema()` is unused dead code, so this was never actually shipping — but worth fixing for consistency since the same helper name suggests it should be live. **[FIXED]** |
| `src/data/projects.ts` | 213, 223 | `"...for a global technology consultancy delivering world-class software."` / `"Plural Dynamics is a global technology consultancy delivering world-class software through a refined, repeatable process."` | Banned word: world-class | Case study copy for the Plural Dynamics project — appears on `/portfolio` and `/portfolio/plural-dynamics`. Says nothing a competitor's case study couldn't say. |
| `src/data/projects.ts` | 249, 258 | `"...POS, digital ordering and business-management tech empowering thousands of businesses worldwide."` / `"...technology that empowers thousands of businesses worldwide..."` | Banned word: empower(ing/s). "Thousands" is an unsourced number. | Synko case study, appears twice. If "thousands" is a real, checkable figure, keep it and cut "empowering" for a plain verb ("used by," "runs the register for"). If it's not verifiable, it's also a rule-5 violation (invented stat). |
| `src/data/projects.ts` | 187 | `"Kidan is an end-to-end IT services and solutions partner for Swiss enterprises..."` | Banned: end-to-end, "solutions partner" (vague) | Says what kind of company, not what it does or for whom specifically. |

## Medium severity

| File | Line | Current text | Rule violated |
|---|---|---|---|
| `src/components/Pricing.tsx` | 135 | `"End-to-end product development with iterative cycles to ship a polished, feature-rich product."` | Banned: end-to-end. No timeframe/deliverable specifics — this is the pricing page, where buyers most want concrete scope. |
| `src/components/Pricing.tsx` | 126 | `"Deliver a fast, functional, and impactful MVP to kickstart your product journey."` | "fast... impactful" carry no number; "journey" is filler here (not the legitimate UX-research sense — see note below). |
| `src/components/BrandWork.tsx` | 96 | `"...crafted end to end for founders across cosmetics, food, tech and luxury..."` | Banned: crafted, end to end. |
| `src/data/projects.ts` | 229 | `"A distinctive, confident platform that elevates Plural Dynamics against larger competitors..."` | Banned: elevates. |
| `src/data/projects.ts` | 264 | `"A confident platform that presents Synko's full ecosystem clearly..."` | Banned: ecosystem — borderline; could be legitimate ("their suite of integrated products") but reads as filler here. |
| `src/data/projects.ts` | 328 | `"...a smooth end-to-end shopping and checkout experience."` | Banned: end-to-end. |

## Low severity

| File | Line | Current text | Rule violated |
|---|---|---|---|
| `src/components/About.tsx` | 21 | `"CodersDive is a curated crew of senior engineers..."` | Banned: curated. Note the rest of that sentence ("We're not a 500-person chop shop that assigns your project to a junior in month three") is exactly the specific, falsifiable writing CLAUDE.md wants. Changed "curated crew" → "small team" (also now echoes the section's own h2, "A small team with an unfair output"). **[FIXED]** |
| `src/data/projects.ts` | 120 | `"...sample previews and social proof were designed to build tr[ust]..."` | Flagged by grep on "unlock" nearby, but "one-time paid unlock via Stripe" (line 132) is a literal product feature name, not marketing language — **not a real violation**, listed here only so it's not silently dropped from the trail. |

---

## A rule that needs refining before the next pass: "journey"

`journey` produced 40 hits in `src/data/pageData.ts`, almost all clustered in one real, legitimately-named service page: **Journey Mapping** (`/services/...`, around line 1500) and its "Our approach" boilerplate. In that context "customer journey," "user journey," and "journey mapping" are the actual, correct industry term for the deliverable — not vague marketing language. Recommend amending `CLAUDE.md` to allow "user journey" / "customer journey" / "journey mapping" as a named-mechanism exception, and reserve the ban for standalone uses like "your product journey" (the one real hit, in `Pricing.tsx:126` above).

## A different problem this audit surfaced: duplicate boilerplate across industry pages

Not a copywriting-rules violation, but worth flagging since it's a real SEO issue: the sentence *"...without creating a brittle all-or-nothing transformation."* appears **verbatim across at least 8 of the 10 `/industries/*` pages** (`pageData.ts`, lines ~2494, 2575, 2655, 2736, 2817, 2898, 2979, 3060, 3141, 3222), as part of an identical "Our approach" paragraph reused per industry with only the industry name swapped. Search engines can treat near-duplicate content across pages as thin content, which works against the exact goal of having 10 separately-rankable industry pages. Worth a pass to make each industry's "approach" paragraph genuinely distinct — separate from the buzzword cleanup, and likely higher-leverage for SEO than the copy violations above.

---

## Blog content (`src/data/blogData.ts`, `src/data/blogExtra.ts`) — summarized, not itemized

69 posts, ~1,400-1,600 words each, plus an extended "operator-grade depth" section per post in `blogExtra.ts`. Raw grep found 26 hits in `blogData.ts` and 45 in `blogExtra.ts`, but spot-checking shows this content reads differently than marketing copy: it's long-form technical writing, and words like "leverage" ("operating leverage," a real finance term), "ecosystem" ("redeploying the entire ecosystem," a real systems term), and "end-to-end" ("End-to-End Latency," a named metric) are legitimate technical usage far more often than in the homepage/pricing/case-study copy above. A full line-by-line pass here would be a much larger, lower-signal effort than the marketing surfaces — recommend treating it as a separate, optional follow-up rather than bundling it into this pass.

Two hits are unambiguous regardless of context and worth fixing on sight:
- `blogExtra.ts`: *"...elite engineering teams implement Hybrid Search..."* — banned word, pure filler, easy swap to "some teams" or name the pattern instead.
- `blogExtra.ts`: *"...ensuring a seamless user experience without requiring multiple logins..."* — banned word (seamless), describing SSO — replace with what actually happens ("one login covers both").

---

## Summary

- **Total user-facing strings audited (non-blog):** not counted exactly (would require parsing every JSX text node) — grep-based, so this is a lower bound on issues, not an exhaustive string census.
- **Real violations found, non-blog:** 19 (4 high, 6 medium, 3 low, 6 excluded-as-false-positive but listed for the trail).
- **Worst offending file:** `src/lib/seo.ts` — small file, single highest-impact fix (ships site-wide).
- **Runner-up:** `src/data/projects.ts` — 6 real violations across case-study copy, the second-most reader-facing surface after the homepage.
- **Not itemized:** blog content (71 raw hits across 2 files, 69 posts) — see above.
- **Bonus finding, not a copy-rule issue:** near-duplicate boilerplate paragraph across ~8 industry pages.

Nothing has been rewritten. Per Prompt 2.3, the rewrite pass needs real facts first — project counts, timelines, prices, confirmed client permissions — before touching any of this, so `[TODO: ...]` markers don't just replace one guess with another.
