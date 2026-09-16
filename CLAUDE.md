# CodersDive — Copywriting Rules

These rules apply to every piece of user-facing copy written in this repo: headings, paragraphs, button labels, nav items, form labels, alt text, meta tags, error messages, and anything embedded in `src/data/*.ts` (blog posts, content pages, project descriptions).

## Banned words and phrases — never use these

elite, world-class, cutting-edge, state-of-the-art, next-gen, next-generation, revolutionary, game-changing, game-changer, disruptive, innovative, innovation, category-defining, best-in-class, industry-leading, seamless, seamlessly, robust, scalable solutions, end-to-end, holistic, bespoke, tailored solutions, curated, empower, empowering, leverage, unlock, supercharge, turbocharge, transform, transformative, elevate, journey, ecosystem, synergy, delve, harness, navigate, landscape, paradigm, pioneering, unparalleled, unrivalled, meticulous, passionate, craft (as a verb), crafted, artisanal, ninja, rockstar, guru, wizard, 10x, battle-tested, bulletproof, rock-solid, blazing fast, lightning fast, buttery smooth

## Banned sentence patterns

- "In today's fast-paced [anything]"
- "We don't just X, we Y"
- "It's not just X, it's Y"
- "Take your business to the next level"
- "Your success is our success"
- "Let's build something amazing together"
- "We're passionate about..."
- "Driven by excellence"
- Any sentence where you could swap the company name for any competitor's and it would still be true
- Rhetorical questions as headlines ("Looking to grow your business?")
- Em-dash asides used for dramatic reveal
- Three-item lists where the third item is an abstract noun ("speed, quality, and excellence")

## Positive rules

1. Every claim carries a number, a name, a timeframe, a price, or a named mechanism. If a sentence has none of those, cut it or rewrite it.
   - Bad: "We ship fast." Good: "Most MVPs go live in 4-6 weeks."
   - Bad: "Scalable architecture." Good: "Postgres + Redis, deployed on Fly.io, tested to 10k concurrent."
2. Write at roughly an 8th-grade reading level. Short sentences. Plain verbs.
3. Second person ("you", "your"), not third person ("clients", "businesses").
4. Headlines state a fact or an outcome, never a mood.
5. Never invent statistics, client counts, case study numbers, awards, or testimonials. If a number is needed and none has been supplied, write `[TODO: real number needed]` and keep going. Never fill the gap with a plausible-looking figure.
6. Body paragraphs max 3 sentences. No walls of text.
7. Ban the word "solutions" unless it's naming an actual product.

## Tone reference

Direct and specific, the way a competent senior engineer explains their work to a client who is paying attention. Confident without swagger. Zero corporate register. Occasional dryness is fine; jokes are not.

## Known facts safe to use (confirmed, don't re-derive or invent alternates)

- CodersDive is a software development company. Founders: Tayyab Irfan and Areeb.
- Public contact address referenced in the footer: `codersdive@gmail.com` (`src/components/Footer.tsx`) — note this differs from the `help@codersdive.com` used elsewhere in project instructions; confirm which is correct before shipping copy that surfaces an email.
- Offices listed in the footer: Wyoming, USA (HQ) and Karachi, PK (Engineering).

Everything else — project counts, timelines, prices, tech stack claims, named clients — is unconfirmed. Follow rule 5: write `[TODO: ...]` rather than guessing, even when an existing page already states a number (that number may itself be an old, unverified draft).
