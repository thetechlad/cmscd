export type Engagement = {
  name: string;
  bestFor: string;
  output: string;
  team: string;
  notWhen: string;
};

export const ENGAGEMENTS: Engagement[] = [
  { name: "Discovery & Strategy", bestFor: "Resolving a strategic question before committing budget.",
    output: "Problem framing, scope options, architecture direction, delivery plan.",
    team: "Product lead, senior engineer, designer.",
    notWhen: "You already have a clear scope and need execution capacity." },
  { name: "MVP & Proof of Concept", bestFor: "Testing the riskiest assumption with a production-credible product.",
    output: "Small product in production with a learning plan.",
    team: "Small senior pod, 4–8 weeks.",
    notWhen: "You need to launch a complete product right now." },
  { name: "Project Engagement", bestFor: "A defined product or platform with a clear outcome and timeline.",
    output: "Production system, documentation, hand-over.",
    team: "Cross-functional team scoped to the work.",
    notWhen: "The scope is genuinely emergent — start with Discovery." },
  { name: "Dedicated Product Team", bestFor: "Continuous delivery across an evolving roadmap.",
    output: "Predictable cadence of working software and decisions.",
    team: "Stable pod operating as part of your team.",
    notWhen: "You need a one-off deliverable in a fixed window." },
  { name: "Support & Continuous Improvement", bestFor: "Live software that needs accountable care and steady improvement.",
    output: "SLAs, incident response, security, performance, and improvement.",
    team: "Operations-shaped pod with on-call.",
    notWhen: "You need new product work — choose a project or dedicated team." },
];