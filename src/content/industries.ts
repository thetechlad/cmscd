export type Industry = {
  slug: string;
  title: string;
  tagline: string;
  challenges: string[];
  whatWeBuild: string[];
  trust: string[];
  seo: { title: string; description: string };
};

export const INDUSTRIES: Industry[] = [
  { slug: "fintech", title: "Fintech & Payments", tagline: "Reliable money movement, compliance-aware engineering, and product clarity for regulated environments.",
    challenges: ["Compliance overhead slows delivery.", "Risk and fraud need to be modelled, not bolted on.", "Customers expect bank-grade reliability from a small team."],
    whatWeBuild: ["Customer-facing fintech products", "Internal risk and operations consoles", "Integrations with banking, KYC, and payments rails"],
    trust: ["SOC 2-conscious engineering", "PII handling and audit trails", "Production observability"],
    seo: { title: "Fintech Software Development | CodersDive", description: "Compliance-aware fintech engineering: product, risk, payments, and internal operations for regulated environments." } },
  { slug: "healthcare", title: "Healthcare & Wellness", tagline: "Software that respects clinical workflow, patient experience, and the real cost of error.",
    challenges: ["Workflow varies by role, setting, and regulation.", "Data is sensitive and rules differ by jurisdiction.", "Interoperability with legacy systems is mandatory."],
    whatWeBuild: ["Patient and clinician experiences", "Workflow and back-office systems", "Integrations with EHRs and operational tools"],
    trust: ["HIPAA-conscious engineering", "Auditability and access control", "Continuity and uptime"],
    seo: { title: "Healthcare Software Development | CodersDive", description: "Clinical-workflow-respecting healthcare software engineered with privacy, interoperability, and continuity in mind." } },
  { slug: "e-commerce-retail", title: "E-commerce & Retail", tagline: "Storefronts and operations engineered for conversion and the real complexity behind it.",
    challenges: ["Conversion plateaus need product, not promo.", "Operations buckle under growth.", "Composable architecture is needed but risky to adopt."],
    whatWeBuild: ["Headless storefronts", "Operations and fulfilment integrations", "Loyalty and lifecycle programs"],
    trust: ["PCI-conscious engineering", "Resilient inventory and order systems", "Observable commerce flows"],
    seo: { title: "E-commerce & Retail Software | CodersDive", description: "Headless commerce, operations integrations, and lifecycle programs for retailers ready to scale." } },
  { slug: "saas", title: "SaaS & Subscription Products", tagline: "Engineering partners for SaaS teams scaling past founder mode.",
    challenges: ["Activation and retention are the unsolved problem.", "Technical debt is starting to dictate the roadmap.", "You need product muscle, not just hands."],
    whatWeBuild: ["New SaaS products and modules", "Activation and retention surfaces", "Billing, tenancy, and reliability"],
    trust: ["Predictable operating cost", "Test and release discipline", "Multi-tenant security defaults"],
    seo: { title: "SaaS Engineering Partner | CodersDive", description: "A product-minded engineering team for SaaS companies scaling activation, retention, billing, and reliability." } },
  { slug: "logistics-supply-chain", title: "Logistics & Supply Chain", tagline: "Software that models real-world operations, exceptions included.",
    challenges: ["Spreadsheets and email are critical infrastructure.", "Exceptions outweigh the happy path.", "Visibility across partners is poor."],
    whatWeBuild: ["Operations and dispatch consoles", "Carrier and warehouse integrations", "Visibility and exception dashboards"],
    trust: ["Reliable data flows", "Audit and reconciliation", "Operations-grade uptime"],
    seo: { title: "Logistics & Supply Chain Software | CodersDive", description: "Operations software that handles real-world logistics — exceptions, partners, and visibility included." } },
  { slug: "education", title: "Education & Learning", tagline: "Products that respect how teachers, learners, and operations actually behave.",
    challenges: ["Stakeholders span students, educators, parents, and admins.", "Accessibility is non-negotiable.", "Adoption is the real metric."],
    whatWeBuild: ["Learning experiences and assessments", "School and operations platforms", "Parent and admin dashboards"],
    trust: ["Accessibility-first design", "Safeguarding and privacy", "Reliable performance on modest hardware"],
    seo: { title: "EdTech Software Development | CodersDive", description: "Accessible, adoption-led learning and operations software for educational organisations." } },
  { slug: "real-estate-property", title: "Real Estate & Property", tagline: "Software for transactions, listings, and operations that involve many parties.",
    challenges: ["Stakeholders, paperwork, and timelines are messy.", "Listings and CRMs are split across vendors.", "Mobile-first is mandatory."],
    whatWeBuild: ["Property platforms and marketplaces", "Agent and operations CRMs", "Transaction and document workflows"],
    trust: ["Reliable document handling", "Audit trails", "Mobile-first performance"],
    seo: { title: "Real Estate Software Development | CodersDive", description: "Property platforms, agent CRMs, and transaction workflows engineered for messy multi-party operations." } },
  { slug: "media-publishing", title: "Media & Publishing", tagline: "High-performance publishing, monetisation, and audience products.",
    challenges: ["Performance and SEO directly affect revenue.", "Monetisation is fragmented.", "Editorial workflow has its own logic."],
    whatWeBuild: ["Editorial and publishing platforms", "Audience and subscription products", "Monetisation integrations"],
    trust: ["Core Web Vitals as a deliverable", "SEO-conscious architecture", "Resilient publishing flows"],
    seo: { title: "Media & Publishing Software | CodersDive", description: "Performance-first publishing, audience, and monetisation products for media organisations." } },
  { slug: "professional-services", title: "Professional Services", tagline: "Operating software for firms whose product is expertise.",
    challenges: ["Time and matter capture is painful.", "Clients expect modern experiences.", "Internal tools are duct tape."],
    whatWeBuild: ["Practice and operations platforms", "Client portals", "Knowledge and decision tooling"],
    trust: ["Confidentiality-aware engineering", "Audit and access control", "Reliable operations"],
    seo: { title: "Professional Services Software | CodersDive", description: "Practice management, client portals, and operating software for firms whose product is expertise." } },
  { slug: "manufacturing-industrial", title: "Manufacturing & Industrial", tagline: "Software that connects the shop floor to the business.",
    challenges: ["Data lives in machines and spreadsheets.", "Downtime is expensive.", "Workforce expectations on tooling are rising."],
    whatWeBuild: ["Operations and production dashboards", "Maintenance and quality systems", "Integration with industrial systems"],
    trust: ["Reliable data acquisition", "Operations-grade observability", "Long-life maintainability"],
    seo: { title: "Manufacturing & Industrial Software | CodersDive", description: "Operations, maintenance, and integration software connecting the shop floor to the business." } },
];

export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);