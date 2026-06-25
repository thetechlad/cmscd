export type Faq = { category: string; q: string; a: string };
export const FAQS: Faq[] = [
  { category: "Engagement", q: "How do we start working together?", a: "We begin with a short discovery call to understand the business goal, constraints, and the smallest credible engagement. From there we propose a scope, timeline, and team shape." },
  { category: "Engagement", q: "What size of project do you take on?", a: "From focused proofs of concept to long-term embedded teams. We work with founders, product leaders, and operations leaders — not enterprise procurement-only programs." },
  { category: "Engagement", q: "Do you charge fixed price or time-and-materials?", a: "Both, depending on the work. We do not pretend a fixed price on a genuinely emergent scope. We propose the model that protects the decision you need to make next." },
  { category: "Delivery", q: "What does a typical week look like?", a: "Visible priorities, working software or reviewable design, risks raised early, decisions documented, and a consistent communication rhythm appropriate to the engagement." },
  { category: "Delivery", q: "How do you handle change during a project?", a: "Changes are scoped, prioritised against existing outcomes, and agreed before they affect the plan. Trade-offs are made explicit." },
  { category: "AI", q: "Do you use AI to write our code?", a: "We use modern AI tools where they speed delivery without surrendering judgment, security, or code quality. Every line that ships passes human review and our quality bar." },
  { category: "AI", q: "Is our data used to train models?", a: "No. We use providers and configurations that do not use your data for training, and we document the path data takes." },
  { category: "Ownership", q: "Who owns the code and accounts?", a: "You do. Ownership transfer — code, accounts, documentation, and operating playbooks — is part of delivery, not an afterthought." },
  { category: "Ownership", q: "Can we take the project in-house later?", a: "Yes. We build for continuity. Documentation, maintainable architecture, and knowledge transfer are part of the engagement." },
  { category: "Security", q: "How do you handle security?", a: "Sensible engineering defaults, least-privilege access, dependency management, and observability. For regulated environments, we work with your compliance team on specific requirements." },
];