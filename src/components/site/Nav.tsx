import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { PRIMARY_NAV, SERVICES_GROUPS, COMPANY_NAV } from "@/content/navigation";

const CAL = "https://cal.com/tayyabirfan/15min";

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => { setMobile(false); setOpen(null); }, [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(null); setMobile(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${scrolled || open || mobile ? "bg-ink/85 backdrop-blur-md border-b border-foreground/10" : "bg-transparent"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-aqua focus:text-ink focus:px-3 focus:py-2 focus:rounded">Skip to content</a>
      <div className="container-cd flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-serif text-2xl tracking-tight" aria-label="CodersDive home">
          <span className="inline-block w-2 h-2 rounded-full bg-aqua" aria-hidden />
          CodersDive
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {PRIMARY_NAV.map((item) => {
            const isServices = item.label === "Services";
            const isCompany = item.label === "Company";
            const hasMenu = isServices || isCompany;
            const active = loc.pathname === item.href || (item.href !== "/" && loc.pathname.startsWith(item.href));
            return (
              <div key={item.label} className="relative" onMouseEnter={() => hasMenu && setOpen(item.label)} onMouseLeave={() => hasMenu && setOpen(null)}>
                {hasMenu ? (
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={open === item.label}
                    onClick={() => setOpen(open === item.label ? null : item.label)}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm rounded-full transition-colors ${active ? "text-foreground" : "text-foreground/70 hover:text-foreground"}`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ) : (
                  <Link to={item.href} className={`px-3 py-2 text-sm rounded-full transition-colors ${active ? "text-foreground" : "text-foreground/70 hover:text-foreground"}`}>
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/start-a-project" className="hidden md:inline-flex btn btn-primary">
            Start a project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button type="button" onClick={() => setMobile((v) => !v)} className="lg:hidden p-2 -mr-2 text-foreground" aria-label="Toggle menu" aria-expanded={mobile}>
            {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Services mega-menu */}
      {open === "Services" && (
        <div className="hidden lg:block border-t border-foreground/10 bg-ink/95 backdrop-blur-xl" onMouseEnter={() => setOpen("Services")} onMouseLeave={() => setOpen(null)}>
          <div className="container-cd grid grid-cols-12 gap-8 py-10">
            <div className="col-span-3">
              <p className="mono text-foreground/50 mb-3">Services</p>
              <h3 className="display-3 mb-3">One product partner from strategic uncertainty to production reality.</h3>
              <Link to="/services" className="btn-link">View all services →</Link>
            </div>
            {SERVICES_GROUPS.map((group) => (
              <div key={group.title} className="col-span-2">
                <p className="mono text-foreground/45 mb-3">{group.title}</p>
                <ul className="space-y-2">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="text-sm text-foreground/85 hover:text-aqua transition-colors">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-3">
              <p className="mono text-foreground/45 mb-3">Featured insight</p>
              <Link to="/insights/ai-and-engineering/ai-that-actually-ships" className="block card-cd p-5 hover:border-aqua/50">
                <p className="mono text-aqua mb-2">AI & Engineering</p>
                <p className="font-serif text-xl leading-snug">AI that actually ships.</p>
                <p className="text-sm text-foreground/60 mt-2">A short field guide to building features that pass real evaluation and real economics.</p>
              </Link>
            </div>
          </div>
        </div>
      )}

      {open === "Company" && (
        <div className="hidden lg:block border-t border-foreground/10 bg-ink/95 backdrop-blur-xl" onMouseEnter={() => setOpen("Company")} onMouseLeave={() => setOpen(null)}>
          <div className="container-cd grid grid-cols-12 gap-8 py-10">
            <div className="col-span-4">
              <p className="mono text-foreground/50 mb-3">Company</p>
              <h3 className="display-3">More than extra hands. A product team that thinks with you.</h3>
            </div>
            <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-3">
              {COMPANY_NAV.map((l) => (
                <Link key={l.href} to={l.href} className="text-sm text-foreground/85 hover:text-aqua transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobile && (
        <div className="lg:hidden border-t border-foreground/10 bg-ink/98 backdrop-blur-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container-cd py-6 space-y-6">
            {PRIMARY_NAV.map((item) => (
              <div key={item.label}>
                <Link to={item.href} className="block font-serif text-2xl py-1">{item.label}</Link>
                {item.label === "Services" && (
                  <div className="mt-3 pl-3 border-l border-foreground/10 space-y-3">
                    {SERVICES_GROUPS.map((g) => (
                      <details key={g.title} className="group">
                        <summary className="mono text-foreground/60 cursor-pointer">{g.title}</summary>
                        <ul className="mt-2 space-y-1.5 pl-1">
                          {g.links.map((l) => (
                            <li key={l.href}><Link to={l.href} className="text-sm text-foreground/80">{l.label}</Link></li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                )}
                {item.label === "Company" && (
                  <ul className="mt-3 pl-3 border-l border-foreground/10 space-y-1.5">
                    {COMPANY_NAV.map((l) => <li key={l.href}><Link to={l.href} className="text-sm text-foreground/80">{l.label}</Link></li>)}
                  </ul>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-foreground/10 sticky bottom-0 bg-ink/98">
              <Link to="/start-a-project" className="btn btn-primary w-full">Start a project <ArrowUpRight className="w-4 h-4" /></Link>
              <a href={CAL} className="btn btn-ghost w-full mt-2">Book a discovery call</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}