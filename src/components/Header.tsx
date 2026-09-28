import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-full.png";
import {
  SERVICE_CATEGORIES,
  SOLUTIONS_ITEMS,
  WORK_ITEMS,
  COMPANY_ITEMS,
  type NavLink,
  type ServiceCategory,
} from "@/data/nav";

type Mega = null | "services" | "work" | "solutions" | "company";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<Mega>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [mobileSubCategory, setMobileSubCategory] = useState<string | null>(null);
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
            aria-expanded={mega === "solutions"}
            aria-haspopup="true"
            onMouseEnter={() => openMega("solutions")}
            onClick={() => toggleMega("solutions")}
          >
            Solutions <ChevronDown className={`w-3 h-3 opacity-60 transition-transform ${mega === "solutions" ? "rotate-180" : ""}`} />
          </button>
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
            {mega === "solutions" && <ListMega title="Solutions by industry" items={SOLUTIONS_ITEMS} footer={{ label: "Browse by location", to: "/locations" }} feature={{ eyebrow: "Approach", title: "Built for your industry, not a template", desc: "Lead-gen, booking, and trust signals that fit how your customers actually buy.", to: "/solutions" }} columns={3} />}
            {mega === "company" && <CompanyMega />}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-background overflow-y-auto">
          <div className="container-tight py-6 pb-32">
            <MobileNav
              sub={mobileSub}
              setSub={(s) => {
                setMobileSub(s);
                setMobileSubCategory(null);
              }}
              subCategory={mobileSubCategory}
              setSubCategory={setMobileSubCategory}
            />
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

/* ----- Services mega: left-rail category selector ----- */
const ServicesMega = () => {
  const [active, setActive] = useState<ServiceCategory>(
    () => SERVICE_CATEGORIES.find((c) => c.pillar) ?? SERVICE_CATEGORIES[0]
  );

  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3 max-h-[420px] overflow-y-auto pr-2 -mr-2">
          <ul className="space-y-0.5">
            {SERVICE_CATEGORIES.map((c) => (
              <li key={c.category}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(c)}
                  onClick={() => setActive(c)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between gap-2 ${
                    active.category === c.category
                      ? "bg-accent-blue text-primary font-semibold"
                      : "text-foreground/80 hover:bg-background-soft"
                  }`}
                >
                  <span>{c.category}</span>
                  {c.pillar && (
                    <span
                      className={`text-[9px] uppercase tracking-wide px-1.5 py-0.5 rounded-full ${
                        active.category === c.category ? "bg-primary/20" : "bg-accent-blue-soft text-accent-blue-ink"
                      }`}
                    >
                      Pillar
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-6 border-l border-border pl-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">{active.category}</div>
            <Link to={active.to} className="link-blue text-xs">View category <ArrowUpRight className="w-3 h-3" /></Link>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6">
            {active.items.map((it) => (
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
};

/* ----- Generic list mega (work, solutions) ----- */
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
  columns?: 1 | 2 | 3;
}) => (
  <div className="grid grid-cols-12 gap-6">
    <div className="col-span-12 lg:col-span-8">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">{title}</div>
        <Link to={footer.to} className="link-blue text-xs">{footer.label} <ArrowUpRight className="w-3 h-3" /></Link>
      </div>
      <ul className={`grid gap-x-6 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
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

/* ----- Mobile: two-level accordion for Services (category -> sub-items), flat for others ----- */
const MobileNav = ({
  sub,
  setSub,
  subCategory,
  setSubCategory,
}: {
  sub: string | null;
  setSub: (s: string | null) => void;
  subCategory: string | null;
  setSubCategory: (s: string | null) => void;
}) => {
  const flatGroups: Record<string, NavLink[]> = {
    Work: [...WORK_ITEMS, { label: "View all work", to: "/portfolio" }],
    Solutions: [...SOLUTIONS_ITEMS, { label: "Browse by location", to: "/locations" }],
    Company: COMPANY_ITEMS,
  };

  return (
    <div className="divide-y divide-border">
      {/* Services: nested accordion */}
      <div>
        <button
          className="w-full flex items-center justify-between py-4 text-left font-semibold"
          onClick={() => setSub(sub === "Services" ? null : "Services")}
          aria-expanded={sub === "Services"}
        >
          Services
          <ChevronDown className={`w-4 h-4 transition-transform ${sub === "Services" ? "rotate-180" : ""}`} />
        </button>
        {sub === "Services" && (
          <div className="pb-4 divide-y divide-border/60">
            {SERVICE_CATEGORIES.map((c) => (
              <div key={c.category}>
                <button
                  className="w-full flex items-center justify-between py-3 text-left text-sm font-medium"
                  onClick={() => setSubCategory(subCategory === c.category ? null : c.category)}
                  aria-expanded={subCategory === c.category}
                >
                  <span className="flex items-center gap-2">
                    {c.category}
                    {c.pillar && <span className="text-[9px] uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-accent-blue-soft text-accent-blue-ink">Pillar</span>}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform ${subCategory === c.category ? "rotate-180" : ""}`} />
                </button>
                {subCategory === c.category && (
                  <div className="pb-3 pl-3 grid gap-1">
                    <Link to={c.to} className="block py-1.5 text-sm text-accent-blue-ink font-medium">
                      View category
                    </Link>
                    {c.items.map((it) => (
                      <Link key={it.to + it.label} to={it.to} className="block py-1.5 text-sm text-muted-foreground hover:text-accent-blue">
                        {it.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/services" className="block pt-3 text-sm font-medium text-accent-blue-ink">
              See all services
            </Link>
          </div>
        )}
      </div>

      {/* Work / Solutions / Company: flat lists */}
      {Object.keys(flatGroups).map((g) => (
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
              {flatGroups[g].map((it) => (
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
