export type CaseStudy = {
  slug: string;
  client: string;
  label: string; // "Product concept", "Internal venture", "Client engagement"
  type: string; // e.g. "AI travel planner"
  problem: string;
  approach: string[];
  deliverables: string[];
  tech: string[];
  outcomeNote: string; // placeholder, no fabricated numbers
  industries: string[];
  services: string[];
  featured?: boolean;
  seo: { title: string; description: string };
};

export const CASES: CaseStudy[] = [
  { slug: "ai-travel-planner", client: "NookTravel", label: "Product concept", type: "AI travel planner",
    problem: "Travellers waste hours assembling itineraries across siloed booking, review, and discovery sites.",
    approach: ["Mapped the real planning decision, including budget and risk.", "Designed a conversational flow with structured itinerary output.", "Built retrieval over destination and operator data with explicit citations.", "Shipped a credible MVP with evaluation and cost guardrails."],
    deliverables: ["Conversational planning experience", "Structured itinerary with bookable options", "Evaluation harness and cost dashboard"],
    tech: ["Next.js", "TypeScript", "Postgres", "Retrieval pipeline", "OpenAI", "Stripe"],
    outcomeNote: "Outcome metrics pending verification before publication.",
    industries: ["SaaS", "Travel"], services: ["Generative AI Applications", "SaaS Product Development"], featured: true,
    seo: { title: "AI Travel Planner — Case Study | CodersDive", description: "How CodersDive shaped and built an AI travel planning experience grounded in real operator and destination data." } },
  { slug: "lead-intelligence", client: "Suuper", label: "Product concept", type: "Lead intelligence platform",
    problem: "Sales teams waste time on poorly qualified leads and lack a single view of intent signals.",
    approach: ["Defined the qualification decision and the signals that actually predict it.", "Built ingestion of intent, firmographic, and behavioural data.", "Designed a console that surfaces the right context at the right step.", "Instrumented model cost and accuracy."],
    deliverables: ["Lead intelligence console", "Signal ingestion pipeline", "Evaluation and operating dashboards"],
    tech: ["React", "Node", "Postgres", "ClickHouse", "OpenAI"],
    outcomeNote: "Outcome metrics pending verification before publication.",
    industries: ["SaaS"], services: ["AI & Automation", "Custom Software Development"],
    seo: { title: "Lead Intelligence Platform — Case Study | CodersDive", description: "Designing and engineering a lead intelligence platform grounded in real intent signals." } },
  { slug: "field-service-mobile", client: "Plural Dynamics", label: "Product concept", type: "Mobile job assistant",
    problem: "Field technicians lose time to paperwork, missing context, and unreliable connectivity.",
    approach: ["Designed an offline-first mobile workflow for technicians.", "Built sync with the dispatch back-office.", "Shipped a credible release pipeline and telemetry."],
    deliverables: ["Mobile job assistant app", "Offline-first sync layer", "Dispatch operations integrations"],
    tech: ["React Native", "TypeScript", "Postgres", "GraphQL"],
    outcomeNote: "Outcome metrics pending verification before publication.",
    industries: ["Logistics & Supply Chain"], services: ["Mobile App Development"],
    seo: { title: "Field Service Mobile App — Case Study | CodersDive", description: "An offline-first mobile job assistant for field technicians, with dispatch sync and operations telemetry." } },
  { slug: "student-operations", client: "Modisoft", label: "Product concept", type: "Student operations CRM",
    problem: "Education operations are scattered across spreadsheets and tools that do not respect institutional workflow.",
    approach: ["Modelled enrolment, attendance, billing, and outcomes in one system.", "Designed dashboards for educators, admins, and parents.", "Built integrations with payment, communication, and reporting tools."],
    deliverables: ["Student operations CRM", "Multi-role dashboards", "Operational integrations"],
    tech: ["Next.js", "Postgres", "Stripe", "Resend"],
    outcomeNote: "Outcome metrics pending verification before publication.",
    industries: ["Education"], services: ["Custom Software Development"],
    seo: { title: "Student Operations CRM — Case Study | CodersDive", description: "An operations system that respects how education institutions actually work — built with CodersDive." } },
  { slug: "retail-monitoring", client: "Kidan", label: "Internal venture", type: "Retail monitoring console",
    problem: "Retail teams cannot see inventory and operations clearly across locations and partners.",
    approach: ["Aggregated inventory, sales, and fulfilment data with reconciliation.", "Designed exception-led dashboards instead of vanity metrics.", "Built monitoring and alerting for operational signals."],
    deliverables: ["Retail monitoring console", "Cross-partner data integrations", "Alerting and on-call playbook"],
    tech: ["React", "Node", "Postgres", "ClickHouse"],
    outcomeNote: "Outcome metrics pending verification before publication.",
    industries: ["E-commerce & Retail", "Logistics & Supply Chain"], services: ["API & Systems Integration", "Custom Software Development"],
    seo: { title: "Retail Monitoring Console — Case Study | CodersDive", description: "An exception-led retail monitoring console with cross-partner data integration and operational alerting." } },
  { slug: "ai-storefront-builder", client: "CodersDive Labs", label: "Internal venture", type: "AI storefront builder",
    problem: "Small merchants need a high-quality storefront without a designer or developer.",
    approach: ["Designed an AI-assisted storefront generator with editorial defaults.", "Built a publishing pipeline with performance budgets.", "Instrumented model cost and quality."],
    deliverables: ["Storefront builder with publishing pipeline", "Editorial design system", "Cost and quality dashboards"],
    tech: ["Next.js", "Postgres", "OpenAI", "Cloudflare"],
    outcomeNote: "Outcome metrics pending verification before publication.",
    industries: ["E-commerce & Retail", "SaaS"], services: ["Generative AI Applications", "E-commerce Development"],
    seo: { title: "AI Storefront Builder — Case Study | CodersDive", description: "An AI-assisted storefront builder for small merchants — editorial defaults, performance budgets, and cost discipline." } },
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);