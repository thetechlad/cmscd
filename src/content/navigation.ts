export type NavLink = { label: string; href: string; desc?: string };
export type NavGroup = { title: string; links: NavLink[] };

export const SERVICES_GROUPS: NavGroup[] = [
  {
    title: "AI & Intelligent Systems",
    links: [
      { label: "AI & Automation", href: "/services/ai-and-automation", desc: "Automate repetitive work and fragmented knowledge." },
      { label: "AI Agents", href: "/services/ai-agents", desc: "Bounded agents that reason, retrieve, and act." },
      { label: "Generative AI Applications", href: "/services/generative-ai-applications", desc: "Useful AI grounded in your data and workflow." },
    ],
  },
  {
    title: "Product Engineering",
    links: [
      { label: "Custom Software", href: "/services/custom-software-development" },
      { label: "SaaS Product Development", href: "/services/saas-product-development" },
      { label: "Web Applications", href: "/services/web-application-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "E-commerce", href: "/services/e-commerce-development" },
    ],
  },
  {
    title: "Experience",
    links: [
      { label: "UI/UX & Product Design", href: "/services/ui-ux-product-design" },
      { label: "MVP & Proof of Concept", href: "/services/mvp-proof-of-concept" },
    ],
  },
  {
    title: "Platforms & Reliability",
    links: [
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Legacy Modernization", href: "/services/legacy-modernization" },
      { label: "API & Systems Integration", href: "/services/api-systems-integration" },
      { label: "Quality Assurance & Testing", href: "/services/qa-testing" },
    ],
  },
  {
    title: "Partnership",
    links: [
      { label: "Dedicated Product Teams", href: "/services/dedicated-product-teams" },
      { label: "Support & Continuous Improvement", href: "/services/support-continuous-improvement" },
    ],
  },
];

export const PRIMARY_NAV: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/about" },
];

export const COMPANY_NAV: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Engagement Models", href: "/engagement-models" },
  { label: "Technology Stack", href: "/technology-stack" },
  { label: "AI-First Engineering", href: "/ai-first" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];