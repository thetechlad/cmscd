export type InsightCategory = {
  slug: string;
  title: string;
  description: string;
};

export const CATEGORIES: InsightCategory[] = [
  { slug: "ai-and-engineering", title: "AI & Engineering", description: "Where AI accelerates, where humans remain accountable, and what credible AI delivery looks like." },
  { slug: "product-strategy", title: "Product Strategy", description: "Framing decisions, choosing the smallest valuable release, and avoiding expensive surprises." },
  { slug: "design-and-ux", title: "Design & UX", description: "Reducing friction, designing around real decisions, and building systems engineering can use." },
  { slug: "engineering-craft", title: "Engineering Craft", description: "Architecture, testing, cloud, observability, and the unglamorous work that compounds." },
  { slug: "leadership-and-teams", title: "Leadership & Teams", description: "Hiring, operating, and partnering with engineering teams without theatre." },
  { slug: "industry-notes", title: "Industry Notes", description: "What is happening across SaaS, fintech, e-commerce, healthcare, and logistics — practically, not breathlessly." },
];

export type Article = {
  slug: string;
  category: string; // category slug
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  body: string; // markdown-ish
};

const a = (slug: string, category: string, title: string, excerpt: string, date: string, body: string, readMins = 6): Article => ({ slug, category, title, excerpt, date, readMins, body });

export const ARTICLES: Article[] = [
  a("ai-that-actually-ships", "ai-and-engineering",
    "AI that actually ships",
    "Most AI demos do not survive contact with production. A short field guide to building features that pass real evaluation, real users, and real economics.",
    "2026-06-12",
    `## The gap between demo and product\n\nAI demos optimise for surprise. Products optimise for trust. The features that survive past launch are usually the least theatrical: a paragraph summary that is always correct, a draft email that needs one edit, a retrieval that cites the source.\n\n## Three practices that separate ship-ready AI\n\n1. **Bound the task.** Pick a single decision the model is allowed to make. The narrower the bound, the easier the evaluation.\n2. **Evaluate against your own criteria.** Public benchmarks tell you very little. Build a small set of representative cases from your real product and measure those.\n3. **Watch the economics.** Latency and cost belong in the dashboard next to accuracy. If a feature costs more to operate than it earns, the only honest decision is to remove it.\n\n## What this looks like in practice\n\nA workflow with one clear input, one clear output, and a small evaluation set you run on every change. Observability is not optional. Human review is not failure.`,
    7),
  a("the-smallest-valuable-release", "product-strategy",
    "The smallest valuable release",
    "Most roadmaps fail by being too ambitious in the wrong direction. A practical method for choosing what to ship first.",
    "2026-06-05",
    `## Smallest, not smaller\n\nAn MVP is not a smaller version of the final product. It is the smallest credible thing that resolves the riskiest unknown.\n\n## Three questions\n\n- What must be true for this product to work?\n- What is the cheapest credible test of that assumption?\n- What will we decide after the result?\n\nIf you cannot answer the third, the test is not credible — it is a feature build wearing a discovery costume.`,
    5),
  a("design-around-decisions", "design-and-ux",
    "Design around decisions, not screens",
    "Good product design starts from the user decision, not the screen. Here is how that changes the work.",
    "2026-05-28",
    `## Start from the decision\n\nUsers do not want a dashboard. They want to know if today is going well, and what to do if it is not. Start there. The dashboard is one possible answer; it is rarely the best one.\n\n## What changes\n\nResearch focuses on the decisions people have to make. Information architecture sequences those decisions. Visual design surfaces the right context at the right step. Engineering builds for the path, not the page.`,
    6),
  a("observability-as-a-product-feature", "engineering-craft",
    "Observability as a product feature",
    "Treating observability as an internal product, not a bolt-on, changes who builds it and how it is used.",
    "2026-05-21",
    `## Internal products deserve product thinking\n\nWhen observability is built as a product — with a clear user, a clear job, and a small surface — engineers actually use it. When it is bolted on after launch, it becomes a tax.\n\n## A pragmatic starting point\n\nThree dashboards: customer-facing reliability, cost and performance, and the small set of business signals that matter to revenue. Everything else is detail accessible from those three.`,
    7),
  a("how-to-hire-engineering-partners", "leadership-and-teams",
    "How to hire engineering partners without theatre",
    "A short, opinionated guide to evaluating engineering partners for non-engineering leaders.",
    "2026-05-14",
    `## Three honest tests\n\n1. **Ask them to describe a project that went badly.** A vendor that cannot answer is either lucky, hiding, or new.\n2. **Look at how they shape scope.** If they accept your brief verbatim, they are not a partner.\n3. **Ask who owns the code.** The answer should be: you.\n\n## What a good first month feels like\n\nVisible priorities, working software or reviewable design, risks raised early, trade-offs documented, no mystery progress.`,
    6),
  a("saas-retention-is-an-engineering-problem", "industry-notes",
    "SaaS retention is an engineering problem",
    "Activation, billing, and reliability quietly decide retention. Why product, design, and engineering must own retention together.",
    "2026-05-07",
    `## Marketing brings them in; product keeps them\n\nThe most expensive retention investment is usually the one engineering already controls: how reliable the product is, how clear the activation flow is, how predictable the billing experience is. Treat those as retention surfaces and ownership becomes obvious.`,
    5),
];

export const articlesByCategory = (cat: string) => ARTICLES.filter((a) => a.category === cat);
export const getArticle = (cat: string, slug: string) => ARTICLES.find((a) => a.category === cat && a.slug === slug);