import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, ArrowUpRight,
  Code2, Brain, Hexagon, MousePointer2, Smartphone, Cloud,
} from "lucide-react";

type Mega = null | "services" | "work" | "company";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<Mega>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const location = useLocation();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMega(null); setMobileOpen(false); }, [location.pathname]);

  const openMega = (m: Mega) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMega(m);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMega(null), 120);
  };

  const navBtn = "px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-1";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b transition-all ${
        scrolled ? "border-border shadow-[0_1px_8px_rgba(0,0,0,0.06)]" : "border-transparent"
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="container-tight">
        <div className="h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-3">
            <span className="display text-xl font-bold tracking-tight">CodersDive</span>
            <span className="hidden md:inline text-xs text-muted-foreground">Engineering for the ambitious</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <button className={navBtn} onMouseEnter={() => openMega("services")}>
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className={navBtn} onMouseEnter={() => openMega("work")}>
              Work <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className={navBtn} onMouseEnter={() => openMega("company")}>
              Company <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <Link to="/blog" className={navBtn} onMouseEnter={() => openMega(null)}>Insights</Link>
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary" style={{ height: 44, padding: "0 20px" }}>
              Book a Call
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mega menus (desktop) */}
      {mega && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-[72px] bg-white border-b border-border shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] animate-mega-in"
          onMouseEnter={() => openMega(mega)}
          onMouseLeave={scheduleClose}
        >
          <div className="container-tight py-10">
            {mega === "services" && <ServicesMega />}
            {mega === "work" && <WorkMega />}
            {mega === "company" && <CompanyMega />}
          </div>
        </div>
      )}

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white overflow-y-auto">
          <div className="container-tight py-6">
            <MobileNav sub={mobileSub} setSub={setMobileSub} />
            <Link to="/contact" className="btn-primary mt-6 w-full">Book a Call</Link>
          </div>
        </div>
      )}
    </header>
  );
};

/* ----- Mega: Services ----- */
const ServicesMega = () => {
  const col2 = [
    { icon: Code2, title: "Full-Stack Development", desc: "End-to-end web and backend engineering, built to scale." },
    { icon: Brain, title: "AI & Automation", desc: "Agents, pipelines, and LLM-powered features." },
    { icon: Hexagon, title: "Web3 & Blockchain", desc: "Smart contracts and decentralized infrastructure." },
  ];
  const col3 = [
    { icon: MousePointer2, title: "UI/UX Design", desc: "Interfaces that convert. Research-led design." },
    { icon: Smartphone, title: "Mobile Development", desc: "iOS and Android apps engineered for performance." },
    { icon: Cloud, title: "Cloud & DevOps", desc: "Infrastructure that scales silently." },
  ];

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3 rounded-xl bg-background-soft p-6 flex flex-col">
        <div className="display text-lg font-bold mb-2">What we build</div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          From zero-to-one products to enterprise-grade platforms.
        </p>
        <Link to="/services" className="link-blue mt-auto">See all services <ArrowUpRight className="w-3.5 h-3.5" /></Link>
      </div>
      <MegaColumn title="Product & Engineering" items={col2} />
      <MegaColumn title="Design & Delivery" items={col3} />
      <div className="col-span-3 rounded-xl p-6" style={{ background: "hsl(var(--accent-blue-soft))" }}>
        <div className="label-eyebrow mb-4">Featured Work</div>
        <div className="display font-bold text-base mb-2 leading-snug">Northwind Capital — AI Trading Dashboard</div>
        <p className="text-sm text-muted-foreground mb-5">From concept to live in 6 weeks.</p>
        <Link to="/portfolio" className="link-blue">Read Case Study <ArrowUpRight className="w-3.5 h-3.5" /></Link>
      </div>
    </div>
  );
};

const MegaColumn = ({ title, items }: { title: string; items: { icon: any; title: string; desc: string }[] }) => (
  <div className="col-span-3">
    <div className="text-[11px] uppercase tracking-[0.1em] font-medium text-muted-foreground mb-4">{title}</div>
    <div className="space-y-1">
      {items.map((it) => (
        <Link
          key={it.title}
          to="/services"
          className="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-background-soft transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-background-soft border border-border flex items-center justify-center shrink-0 group-hover:border-accent-blue/40 transition-colors">
            <it.icon className="w-4 h-4 text-foreground group-hover:text-accent-blue transition-colors" />
          </div>
          <div>
            <div className="font-semibold text-sm text-foreground">{it.title}</div>
            <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{it.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

/* ----- Mega: Work ----- */
const WorkMega = () => (
  <div className="grid grid-cols-12 gap-6">
    <div className="col-span-3">
      <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-4">Browse</div>
      <ul className="space-y-3">
        {["All Projects", "SaaS Products", "AI Applications", "Web3 Platforms", "Mobile Apps"].map((t) => (
          <li key={t}><Link to="/portfolio" className="text-sm text-foreground hover:text-accent-blue transition-colors">{t}</Link></li>
        ))}
      </ul>
    </div>
    <div className="col-span-5">
      <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-4">Recent shipments</div>
      <div className="space-y-2">
        {[
          ["Helio", "AI Sales Workspace"],
          ["Northwind Capital", "Fintech Dashboard"],
          ["Loop Health", "Healthcare SaaS"],
        ].map(([n, d]) => (
          <Link key={n} to="/portfolio" className="flex items-center justify-between p-3 -mx-3 rounded-lg hover:bg-background-soft transition-colors">
            <div>
              <div className="font-semibold text-sm">{n}</div>
              <div className="text-xs text-muted-foreground">{d}</div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </Link>
        ))}
      </div>
    </div>
    <div className="col-span-4 rounded-xl p-6" style={{ background: "hsl(var(--accent-blue-soft))" }}>
      <div className="label-eyebrow mb-4">Featured</div>
      <div className="display font-bold text-base mb-2">Loop Health — Healthcare SaaS</div>
      <p className="text-sm text-muted-foreground mb-5">200+ enterprise teams. Built from scratch in 12 weeks.</p>
      <Link to="/portfolio" className="link-blue">View case study <ArrowUpRight className="w-3.5 h-3.5" /></Link>
    </div>
  </div>
);

/* ----- Mega: Company ----- */
const CompanyMega = () => (
  <div className="grid grid-cols-12 gap-6">
    <div className="col-span-7">
      <div className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-4">Inside CodersDive</div>
      <div className="grid grid-cols-2 gap-2">
        {[
          ["About Us", "/about"],
          ["How We Work", "/process"],
          ["Careers — We're Hiring", "/about"],
          ["Press & Recognition", "/about"],
        ].map(([n, p]) => (
          <Link key={n} to={p} className="p-3 -mx-3 rounded-lg hover:bg-background-soft transition-colors">
            <div className="font-semibold text-sm">{n}</div>
          </Link>
        ))}
      </div>
    </div>
    <div className="col-span-5 rounded-xl bg-background-soft p-6">
      <div className="display font-bold text-lg mb-2">Ready to build?</div>
      <p className="text-sm text-muted-foreground mb-5">Most clients see a working prototype in under 3 weeks.</p>
      <Link to="/contact" className="btn-primary" style={{ height: 44, padding: "0 20px" }}>
        Book a free call <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

/* ----- Mobile ----- */
const MobileNav = ({ sub, setSub }: { sub: string | null; setSub: (s: string | null) => void }) => {
  const groups: Record<string, [string, string][]> = {
    Services: [
      ["Full-Stack Development", "/services"],
      ["AI & Automation", "/services"],
      ["Web3 & Blockchain", "/services"],
      ["UI/UX Design", "/services"],
      ["Mobile Development", "/services"],
      ["Cloud & DevOps", "/services"],
    ],
    Work: [
      ["All Projects", "/portfolio"],
      ["SaaS Products", "/portfolio"],
      ["AI Applications", "/portfolio"],
      ["Mobile Apps", "/portfolio"],
    ],
    Company: [
      ["About Us", "/about"],
      ["How We Work", "/process"],
      ["Careers", "/about"],
    ],
  };
  return (
    <div className="divide-y divide-border">
      {Object.keys(groups).map((g) => (
        <div key={g}>
          <button
            className="w-full flex items-center justify-between py-4 text-left font-semibold"
            onClick={() => setSub(sub === g ? null : g)}
          >
            {g}
            <ChevronDown className={`w-4 h-4 transition-transform ${sub === g ? "rotate-180" : ""}`} />
          </button>
          {sub === g && (
            <div className="pb-4 space-y-2">
              {groups[g].map(([n, p]) => (
                <Link key={n} to={p} className="block py-2 text-sm text-muted-foreground hover:text-accent-blue">{n}</Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <Link to="/blog" className="block py-4 font-semibold">Insights</Link>
    </div>
  );
};

export default Header;
