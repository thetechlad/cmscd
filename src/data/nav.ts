// Shared header/footer navigation taxonomy, sourced from the site's sitemap
// spreadsheet (Services + Solutions sheets). Header and Footer both import
// from here so the two stay in sync instead of duplicating category lists.
//
// Every category and sub-item now links to a real page (Strapi content-page,
// generic templates) rather than an anchor — see the build script used to
// create the ~270 stub pages this taxonomy links to. Two sub-items are
// explicit cross-links per the source sheet (UI/UX Design -> design pillar,
// Digital Marketing & Branding -> marketing pillar) and point at the real
// existing target page instead of their own stub.

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

const slugify = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function category(name: string, to: string, subLabels: string[], pillar = false): ServiceCategory {
  return {
    category: name,
    to,
    pillar,
    items: subLabels.map((label) => ({ label, to: `${to}/${slugify(label)}` })),
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
      { label: "Discovery Workshop", to: "/services/advisory/discovery-workshop" },
      { label: "Market Research", to: "/services/advisory/market-research" },
      { label: "Technical Feasibility Study", to: "/services/advisory/technical-feasibility-study" },
      { label: "Product Strategy", to: "/services/advisory/product-strategy" },
      { label: "UI/UX Design", to: "/services/ui-ux-and-product-design" },
      { label: "Digital Transformation", to: "/services/advisory/digital-transformation" },
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
      { label: "Accounts & Finance", to: "/services/business-enablement/accounts-and-finance" },
      { label: "HR & Recruitment", to: "/services/business-enablement/hr-and-recruitment" },
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
 * Resources sheet's ~400 article titles aren't individual pages, they're a
 * future content backlog (stored as unpublished drafts in Strapi) for this
 * same blog. */
export const RESOURCES_FILTERS: NavLink[] = [
  { label: "AI Engineering", to: "/insights?category=ai-engineering" },
  { label: "Product Strategy", to: "/insights?category=product-strategy" },
  { label: "SaaS & Growth", to: "/insights?category=saas-growth" },
  { label: "Web, Mobile & UX", to: "/insights?category=web-mobile-ux" },
];

/** Atlas (geo-SEO) and Best In Class (competitor comparison) hubs — each
 * hub page (/solutions, /locations, /compare) renders a full card grid of
 * its ~22-109 child pages via HubPage.tsx; these are just the entry links. */
export const DIRECTORY_LINKS: NavLink[] = [
  { label: "Browse by Location", to: "/locations" },
  { label: "Compare Providers", to: "/compare" },
];
