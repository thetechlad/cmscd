// Shared header/footer navigation taxonomy, sourced from the site's sitemap
// spreadsheet (Services + Solutions sheets). Header and Footer both import
// from here so the two stay in sync instead of duplicating category lists.
//
// Sub-items under each Services category don't have their own dedicated
// pages yet (Phase 1 only creates the 19 category-level + 22 Solutions
// pages as stubs) — they link to an anchor on their parent category page
// instead of a dedicated URL, so nothing 404s. Two sub-items are explicit
// cross-links per the source sheet (UI/UX Design -> design pillar,
// Digital Marketing & Branding -> marketing pillar) and point straight at
// the real target page instead of an anchor.

export interface NavLink {
  label: string;
  to: string;
  desc?: string;
}

export interface ServiceCategory {
  category: string;
  to: string;
  pillar?: boolean;
  items: NavLink[];
}

const anchor = (categoryTo: string, label: string) =>
  `${categoryTo}#${label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

function category(name: string, to: string, subLabels: string[], pillar = false): ServiceCategory {
  return {
    category: name,
    to,
    pillar,
    items: subLabels.map((label) => ({ label, to: anchor(to, label) })),
  };
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  category("Web Development", "/services/web-development", [
    "E-commerce Stores",
    "Startup Websites",
    "Corporate Websites",
    "Landing Pages",
    "Portfolio Websites",
  ]),
  category("Custom Website Design", "/services/custom-website-design", [
    "UI/UX Design",
    "Responsive Websites",
    "Accessibility-Focused Design",
  ]),
  category("WordPress Development", "/services/wordpress-development", [
    "Themes Customization",
    "Plugins Development",
    "WooCommerce Integration",
  ]),
  category("DevOps Services", "/services/devops-services", [
    "Cloud Infrastructure",
    "CI/CD Pipeline Setup",
    "Monitoring & Logging",
    "Containerization (Docker / Kubernetes)",
  ]),
  category("App Development", "/services/app-development", [
    "iOS Apps",
    "Android Apps",
    "Hybrid Apps",
    "Progressive Web Apps (PWA)",
  ]),
  category("Digital Marketing", "/services/digital-marketing", [
    "SEO",
    "Social Media Marketing",
    "Paid Ads Management",
    "Email Marketing",
  ]),
  category("Branding & Design", "/services/branding-and-design", [
    "Logo Design",
    "Branding Packages",
    "Visual Identity Design",
  ]),
  category("Artificial Intelligence", "/services/artificial-intelligence", [
    "AI Agents",
    "AI Workshop",
    "AI PoC & MVP",
    "Generative AI",
    "Machine Learning",
    "MLOps",
    "Conversational AI",
  ], true),
  {
    category: "Advisory",
    to: "/services/advisory",
    pillar: true,
    items: [
      { label: "Discovery Workshop", to: anchor("/services/advisory", "Discovery Workshop") },
      { label: "Market Research", to: anchor("/services/advisory", "Market Research") },
      { label: "Technical Feasibility Study", to: anchor("/services/advisory", "Technical Feasibility Study") },
      { label: "Product Strategy", to: anchor("/services/advisory", "Product Strategy") },
      { label: "UI/UX Design", to: "/services/ui-ux-and-product-design" },
      { label: "Digital Transformation", to: anchor("/services/advisory", "Digital Transformation") },
    ],
  },
  category("Engineering", "/services/engineering", [
    "Product Development",
    "Application Development",
    "Application Modernization",
    "POC Development",
    "AI Software Development",
    "Cloud Engineering",
    "Cloud Migration",
  ], true),
  category("Optimization", "/services/optimization", [
    "Cloud Cost Optimization",
    "Software Audit",
    "Quality Assurance (QA)",
    "Support & Maintenance",
  ], true),
  {
    category: "Business Enablement",
    to: "/services/business-enablement",
    pillar: true,
    items: [
      { label: "Accounts & Finance", to: anchor("/services/business-enablement", "Accounts & Finance") },
      { label: "HR & Recruitment", to: anchor("/services/business-enablement", "HR & Recruitment") },
      { label: "Digital Marketing & Branding", to: "/services/digital-marketing" },
    ],
  },
  category("Engagement Models", "/engagement-models", [
    "Dedicated Team",
    "Offshore Development Center (ODC)",
    "Fixed Price Projects",
  ]),
  category("Business Process Automation", "/services/business-process-automation", [
    "Workflow Automation",
    "AI/ML Integration",
    "Process Optimization",
  ]),
  category("No-Code & Low-Code", "/services/no-code-and-low-code", [
    "Airtable Solutions",
    "Bubble Apps",
    "Zapier / Integrations",
  ]),
  category("SaaS Applications", "/services/saas-applications", [
    "Subscription Platforms",
    "Multi-Tenant Systems",
    "White-Label Solutions",
  ]),
  category("Security & Compliance", "/services/security-and-compliance", [
    "Penetration Testing",
    "Cybersecurity Audits",
    "GDPR / Data Privacy Compliance",
  ]),
  category("Startup Solutions", "/services/startup-solutions", [
    "MVP Development",
    "Branding & Launch",
    "Investor Readiness",
  ]),
  category("Industry-Specific Solutions", "/services/industry-specific-solutions", [
    "Healthcare",
    "Education",
    "E-commerce",
    "Real Estate",
    "SaaS",
  ]),
];

export const SOLUTIONS_ITEMS: NavLink[] = [
  { label: "Solar Energy", to: "/solutions/solar-energy" },
  { label: "HVAC Services", to: "/solutions/hvac-services" },
  { label: "Plumbing", to: "/solutions/plumbing" },
  { label: "Roofing", to: "/solutions/roofing" },
  { label: "Electricians", to: "/solutions/electricians" },
  { label: "Landscaping", to: "/solutions/landscaping" },
  { label: "Real Estate", to: "/solutions/real-estate" },
  { label: "Home Cleaning", to: "/solutions/home-cleaning" },
  { label: "Pest Control", to: "/solutions/pest-control" },
  { label: "Dentists", to: "/solutions/dentists" },
  { label: "Chiropractors", to: "/solutions/chiropractors" },
  { label: "Gyms & Fitness", to: "/solutions/gyms-and-fitness" },
  { label: "Car Dealerships", to: "/solutions/car-dealerships" },
  { label: "Auto Repair Shops", to: "/solutions/auto-repair-shops" },
  { label: "Car Wash / Detailing", to: "/solutions/car-wash-and-detailing" },
  { label: "Towing Services", to: "/solutions/towing-services" },
  { label: "Restaurants / Cafes", to: "/solutions/restaurants-and-cafes" },
  { label: "Pet Grooming / Care", to: "/solutions/pet-grooming-and-care" },
  { label: "Event Planners / DJs", to: "/solutions/event-planners-and-djs" },
  { label: "Legal Services", to: "/solutions/legal-services" },
  { label: "Accounting / Tax", to: "/solutions/accounting-and-tax" },
  { label: "Marketing Agencies", to: "/solutions/marketing-agencies" },
];

export const WORK_ITEMS: NavLink[] = [
  { label: "NookTravel", to: "/portfolio/nooktravel" },
  { label: "GoodPath AI", to: "/portfolio/goodpath-ai" },
  { label: "Kidan", to: "/portfolio/kidan" },
  { label: "Synko", to: "/portfolio/synko" },
  { label: "LaunchMyStore", to: "/portfolio/launch-my-store" },
  { label: "OG Organix", to: "/portfolio/og-organix" },
];

export const COMPANY_ITEMS: NavLink[] = [
  { label: "About", to: "/about", desc: "Who we are and how we think" },
  { label: "How We Work", to: "/how-we-work", desc: "Our delivery process" },
  { label: "Engagement Models", to: "/engagement-models", desc: "Ways to work with us" },
  { label: "Technology Stack", to: "/technology-stack", desc: "Tools and platforms" },
  { label: "AI-First Engineering", to: "/ai-first", desc: "Where AI helps, where humans stay accountable" },
  { label: "Careers", to: "/careers", desc: "Build with us" },
  { label: "FAQ", to: "/faq", desc: "Common questions" },
];

/** Real blog categories (from Strapi) as filter links into /insights — the
 * Resources sheet's ~130 article titles aren't individual pages, they're a
 * future content backlog for this same blog. */
export const RESOURCES_FILTERS: NavLink[] = [
  { label: "AI Engineering", to: "/insights?category=ai-engineering" },
  { label: "Product Strategy", to: "/insights?category=product-strategy" },
  { label: "SaaS & Growth", to: "/insights?category=saas-growth" },
  { label: "Web, Mobile & UX", to: "/insights?category=web-mobile-ux" },
];

/** Atlas (geo-SEO) and Best In Class (competitor comparison) hubs — nav
 * placement now via footer links to their hub pages; the ~200 individual
 * pages under each are later-phase work, not built yet. */
export const DIRECTORY_LINKS: NavLink[] = [
  { label: "Browse by Location", to: "/locations" },
  { label: "Compare Providers", to: "/compare" },
];
