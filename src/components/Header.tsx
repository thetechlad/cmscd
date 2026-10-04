import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-full.png";

type Mega = null | "services" | "work" | "industries" | "marketing" | "company";

interface NavLink {
  label: string;
  to: string;
  desc?: string;
}

const SERVICE_GROUPS: { group: string; items: NavLink[] }[] = [
  {
    group: "AI & Intelligent Systems",
    items: [
      { label: "AI & Automation", to: "/services/ai-and-automation" },
      { label: "AI Agents", to: "/services/ai-agents" },
      { label: "Generative AI Applications", to: "/services/generative-ai-applications" },
    ],
  },
  {
    group: "Product Engineering",
    items: [
      { label: "Custom Software", to: "/services/custom-software-development" },
      { label: "SaaS Product Development", to: "/services/saas-product-development" },
      { label: "MVP & Proof of Concept", to: "/services/mvp-and-proof-of-concept" },
      { label: "API & Integrations", to: "/services/api-and-systems-integration" },
      { label: "Legacy Modernization", to: "/services/legacy-modernization" },
    ],
  },
  {
    group: "Experience",
    items: [
      { label: "Web Applications", to: "/services/web-application-development" },
      { label: "Mobile Apps", to: "/services/mobile-app-development" },
      { label: "UI/UX & Product Design", to: "/services/ui-ux-and-product-design" },
      { label: "E-commerce", to: "/services/e-commerce-development" },
    ],
  },
  {
    group: "Platforms",
    items: [
      { label: "Cloud & DevOps", to: "/services/cloud-and-devops" },
      { label: "QA & Testing", to: "/services/quality-assurance-and-testing" },
    ],
  },
  {
    group: "Partnership",
    items: [
      { label: "Dedicated Product Teams", to: "/services/dedicated-product-teams" },
      { label: "Support & Improvement", to: "/services/support-and-continuous-improvement" },
    ],
  },
];

const WORK_ITEMS: NavLink[] = [
  { label: "NookTravel", to: "/portfolio/nooktravel" },
  { label: "GoodPath AI", to: "/portfolio/goodpath-ai" },
  { label: "Kidan", to: "/portfolio/kidan" },
  { label: "Synko", to: "/portfolio/synko" },
  { label: "LaunchMyStore", to: "/portfolio/launch-my-store" },
  { label: "OG Organix", to: "/portfolio/og-organix" },
];

const INDUSTRY_ITEMS: NavLink[] = [
  { label: "SaaS & Startups", to: "/industries/saas-and-startups" },
  { label: "E-commerce & Retail", to: "/industries/e-commerce-and-retail" },
  { label: "Fintech", to: "/industries/fintech" },
  { label: "Healthcare", to: "/industries/healthcare" },
  { label: "Education & EdTech", to: "/industries/education-and-edtech" },
  { label: "Travel & Hospitality", to: "/industries/travel-and-hospitality" },
  { label: "Real Estate & PropTech", to: "/industries/real-estate-and-proptech" },
  { label: "Logistics & Supply Chain", to: "/industries/logistics-and-supply-chain" },
  { label: "Professional Services", to: "/industries/professional-services" },
  { label: "Media & Marketplaces", to: "/industries/media-communities-and-marketplaces" },
];

const MARKETING_ITEMS: NavLink[] = [
  { label: "Social Media Management", to: "/marketing/social-media-management", desc: "Consistent posting and community management" },
  { label: "Content Writing", to: "/marketing/content-writing", desc: "SEO content, blog posts, and website copy" },
  { label: "PPC", to: "/marketing/ppc", desc: "Google, Meta, and LinkedIn ad management" },
];

const COMPANY_ITEMS: NavLink[] = [
  { label: "About", to: "/about", desc: "Who we are and how we think" },
  { label: "How We Work", to: "/how-we-work", desc: "Our delivery process" },
  { label: "Engagement Models", to: "/engagement-models", desc: "Ways to work with us" },
  { label: "Technology Stack", to: "/technology-stack", desc: "Tools and platforms" },
  { label: "AI-First Engineering", to: "/ai-first", desc: "Where AI helps, where humans stay accountable" },
  { label: "Careers", to: "/careers", desc: "Build with us" },
  { label: "FAQ", to: "/faq", desc: "Common questions" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<Mega>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const location = useLocation();
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMega(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const openMega = (m: Mega) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMega(m);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMega(null), 140);
  };
  const toggleMega = (m: Mega) => setMega((cur) => (cur === m ? null : m));

  const navBtn =
    "relative px-3.5 h-9 rounded-full text-[13px] font-medium text-foreground/75 hover:text-foreground hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 transition-all inline-flex items-center gap-1";

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 z-50 px-4 transition-all duration-300 ${scrolled ? "top-3" : "top-5"}`}
      onMouseLeave={scheduleClose}
    >
      <div
        className={`nav-pill mx-auto flex items-center justify-between gap-2 transition-all duration-300 ${
          scrolled ? "max-w-[1080px] h-14 pl-4 pr-2" : "max-w-[1200px] h-16 pl-5 pr-2"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="CodersDive" className="h-7 md:h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 shrink-0" aria-label="Primary">
          <button
            className={navBtn}
            aria-expanded={mega === "services"}
            aria-haspopup="true"
            onMouseEnter={() => openMega("services")}
            onClick={() => toggleMega("services")}
          >
            Services <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${mega === "services" ? "rotate-180" : ""}`} />
          </button>
          <button
            className={navBtn}
            aria-expanded={mega === "work"}
            aria-haspopup="true"
            onMouseEnter={() => openMega("work")}
            onClick={() => toggleMega("work")}
          >
            Work <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${mega === "work" ? "rotate-180" : ""}`} />
          </button>
          <button
            className={navBtn}
            aria-expanded={mega === "industries"}
            aria-haspopup="true"
            onMouseEnter={() => openMega("industries")}
            onClick={() => toggleMega("industries")}
          >
            Industries <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${mega === "industries" ? "rotate-180" : ""}`} />
          </button>
          <div
            className="relative flex items-center"
            onMouseEnter={() => openMega("marketing")}
          >
            <Link
              to="/marketing"
              className="px-3.5 h-9 rounded-l-full text-[13px] font-medium text-foreground/75 hover:text-foreground hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 transition-all inline-flex items-center"
            >
              Marketing
            </Link>
            <button
              className="h-9 w-7 rounded-r-full flex items-center justify-center text-foreground/75 hover:text-foreground hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 transition-all"
              aria-expanded={mega === "marketing"}
              aria-haspopup="true"
              aria-label="Show marketing services"
              onClick={() => toggleMega("marketing")}
            >
              <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${mega === "marketing" ? "rotate-180" : ""}`} />
            </button>
          </div>
          <Link to="/insights" className={navBtn} onMouseEnter={() => openMega(null)}>
            Insights
          </Link>
          <button
            className={navBtn}
            aria-expanded={mega === "company"}
            aria-haspopup="true"
            onMouseEnter={() => openMega("company")}
            onClick={() => toggleMega("company")}
          >
            Company <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${mega === "company" ? "rotate-180" : ""}`} />
          </button>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/start-a-project"
            className="hidden md:inline-flex whitespace-nowrap items-center gap-1.5 h-11 px-5 rounded-full text-[13px] font-semibold transition-all hover:scale-[1.03] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 shrink-0"
            style={{ background: "hsl(var(--accent-blue))", color: "hsl(var(--primary))" }}
          >
            Get a Free Automation Audit
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <button
            className="lg:hidden h-11 w-11 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Desktop mega */}
      {mega && (
        <div
          className="hidden lg:block max-w-[1140px] mx-auto mt-3 nav-pill rounded-3xl animate-mega-in max-h-[calc(100vh-120px)] overflow-auto"
          onMouseEnter={() => openMega(mega)}
          onMouseLeave={scheduleClose}
        >
          <div className="px-8 py-9">
            {mega === "services" && <ServicesMega />}
            {mega === "work" && <ListMega title="Selected work" items={WORK_ITEMS} footer={{ label: "View all work", to: "/portfolio" }} feature={{ eyebrow: "Featured", title: "Suuper · AI Support SaaS", desc: "AI replies across web and WhatsApp, live in under a minute.", to: "/portfolio/suuper" }} />}
            {mega === "industries" && <ListMega title="Industries we serve" items={INDUSTRY_ITEMS} footer={{ label: "Industries overview", to: "/industries" }} feature={{ eyebrow: "Approach", title: "Context changes the product", desc: "Regulations, workflows and trust signals shape what we build.", to: "/industries" }} columns={2} />}
            {mega === "marketing" && <MarketingMega />}
            {mega === "company" && <CompanyMega />}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-background overflow-y-auto">
          <div className="container-tight py-6 pb-32">
            <MobileNav sub={mobileSub} setSub={setMobileSub} />
          </div>
          <div className="fixed bottom-0 inset-x-0 p-4 bg-background/95 backdrop-blur border-t border-border">
            <Link to="/start-a-project" className="btn-blue w-full h-12">
              Get a Free Automation Audit <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

/* ----- Services mega ----- */
const ServicesMega = () => (
  <div>
    <div className="grid grid-cols-12 gap-x-6 gap-y-8">
      {SERVICE_GROUPS.map((g) => (
        <div key={g.group} className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.1em] font-medium text-muted-foreground mb-3">
            {g.group}
          </div>
          <ul className="space-y-0.5">
            {g.items.map((it) => (
              <li key={it.to}>
                <Link
                  to={it.to}
                  className="block py-1.5 text-sm text-foreground/85 hover:text-accent-blue focus-visible:outline-none focus-visible:text-accent-blue transition-colors"
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="col-span-12 lg:col-span-3 rounded-2xl p-6 flex flex-col" style={{ background: "hsl(var(--accent-blue-soft))" }}>
        <div className="label-eyebrow mb-4">Insight</div>
        <div className="display font-bold text-base mb-2 leading-snug">Where AI accelerates, where humans stay accountable</div>
        <p className="text-sm text-muted-foreground mb-5">Our point of view on building with AI responsibly.</p>
        <Link to="/ai-first" className="link-blue mt-auto">Read more <ArrowUpRight className="w-3.5 h-3.5" /></Link>
      </div>
    </div>
    <div className="mt-7 pt-5 border-t border-border flex items-center justify-between">
      <span className="text-sm text-muted-foreground">Not sure where to start?</span>
      <Link to="/services" className="link-blue">See all services <ArrowUpRight className="w-3.5 h-3.5" /></Link>
    </div>
  </div>
);

/* ----- Generic list mega (work, industries) ----- */
const ListMega = ({
  title,
  items,
  footer,
  feature,
  columns = 1,
}: {
  title: string;
  items: NavLink[];
  footer: { label: string; to: string };
  feature: { eyebrow: string; title: string; desc: string; to: string };
  columns?: 1 | 2;
}) => (
  <div className="grid grid-cols-12 gap-6">
    <div className="col-span-12 lg:col-span-8">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">{title}</div>
        <Link to={footer.to} className="link-blue text-xs">{footer.label} <ArrowUpRight className="w-3 h-3" /></Link>
      </div>
      <ul className={`grid ${columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2"} gap-x-6`}>
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to} className="block py-2 text-sm text-foreground/85 hover:text-accent-blue transition-colors">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Link to={feature.to} className="col-span-12 lg:col-span-4 rounded-2xl p-6 group" style={{ background: "hsl(var(--accent-blue-soft))" }}>
      <div className="label-eyebrow mb-4">{feature.eyebrow}</div>
      <div className="display font-bold text-base mb-2 leading-snug group-hover:text-accent-blue transition-colors">{feature.title}</div>
      <p className="text-sm text-muted-foreground mb-5">{feature.desc}</p>
      <span className="link-blue">Explore <ArrowUpRight className="w-3.5 h-3.5" /></span>
    </Link>
  </div>
);

/* ----- Marketing mega ----- */
const MarketingMega = () => (
  <div className="grid grid-cols-12 gap-6">
    <div className="col-span-12 lg:col-span-8">
      <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-4">Marketing services</div>
      <div className="grid sm:grid-cols-2 gap-1">
        {MARKETING_ITEMS.map((it) => (
          <Link key={it.to} to={it.to} className="group p-3 -mx-3 rounded-lg hover:bg-background-soft transition-colors">
            <div className="font-semibold text-sm group-hover:text-accent-blue transition-colors">{it.label}</div>
            {it.desc && <div className="text-xs text-muted-foreground mt-0.5">{it.desc}</div>}
          </Link>
        ))}
      </div>
    </div>
    <Link to="/marketing" className="col-span-12 lg:col-span-4 rounded-2xl p-6 group flex flex-col" style={{ background: "hsl(var(--accent-blue-soft))" }}>
      <div className="label-eyebrow mb-4">Overview</div>
      <div className="display font-bold text-base mb-2 leading-snug group-hover:text-accent-blue transition-colors">Marketing that compounds with the product</div>
      <p className="text-sm text-muted-foreground mb-5">See all three services and how they work together.</p>
      <span className="link-blue mt-auto">Explore <ArrowUpRight className="w-3.5 h-3.5" /></span>
    </Link>
  </div>
);

/* ----- Company mega ----- */
const CompanyMega = () => (
  <div className="grid grid-cols-12 gap-6">
    <div className="col-span-12 lg:col-span-8">
      <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-4">Inside CodersDive</div>
      <div className="grid sm:grid-cols-2 gap-1">
        {COMPANY_ITEMS.map((it) => (
          <Link key={it.to} to={it.to} className="group p-3 -mx-3 rounded-lg hover:bg-background-soft transition-colors">
            <div className="font-semibold text-sm group-hover:text-accent-blue transition-colors">{it.label}</div>
            {it.desc && <div className="text-xs text-muted-foreground mt-0.5">{it.desc}</div>}
          </Link>
        ))}
      </div>
    </div>
    <div className="col-span-12 lg:col-span-4 rounded-2xl bg-background-soft border border-border p-6">
      <div className="display font-bold text-lg mb-2">Bring us the messy version.</div>
      <p className="text-sm text-muted-foreground mb-5">Tell us what's slow, broken, or strategically important.</p>
      <Link to="/start-a-project" className="btn-blue h-11 w-full">
        Get a Free Automation Audit <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

/* ----- Mobile ----- */
const MobileNav = ({ sub, setSub }: { sub: string | null; setSub: (s: string | null) => void }) => {
  const groups: Record<string, NavLink[]> = {
    Services: SERVICE_GROUPS.flatMap((g) => g.items),
    Work: [...WORK_ITEMS, { label: "View all work", to: "/portfolio" }],
    Industries: [...INDUSTRY_ITEMS, { label: "Industries overview", to: "/industries" }],
    Marketing: [...MARKETING_ITEMS, { label: "Marketing overview", to: "/marketing" }],
    Company: COMPANY_ITEMS,
  };
  return (
    <div className="divide-y divide-border">
      {Object.keys(groups).map((g) => (
        <div key={g}>
          <button
            className="w-full flex items-center justify-between py-4 text-left font-semibold"
            onClick={() => setSub(sub === g ? null : g)}
            aria-expanded={sub === g}
          >
            {g}
            <ChevronDown className={`w-4 h-4 transition-transform ${sub === g ? "rotate-180" : ""}`} />
          </button>
          {sub === g && (
            <div className="pb-4 grid grid-cols-1 gap-1">
              {groups[g].map((it) => (
                <Link key={it.to + it.label} to={it.to} className="block py-2 text-sm text-muted-foreground hover:text-accent-blue">
                  {it.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <Link to="/insights" className="block py-4 font-semibold">Insights</Link>
    </div>
  );
};

export default Header;
