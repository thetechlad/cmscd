import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Code2, Brain, Smartphone, Cloud, Palette, LineChart, Compass, Layers, BookOpen, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const services = [
  { icon: Code2, title: "Web & SaaS", desc: "Production React, Next.js, Node.", path: "/services" },
  { icon: Brain, title: "AI Engineering", desc: "LLM products, agents, RAG.", path: "/services" },
  { icon: Smartphone, title: "Mobile Products", desc: "Native-feel cross-platform apps.", path: "/services" },
  { icon: Cloud, title: "Cloud & Platform", desc: "AWS, Vercel, Supabase, CI/CD.", path: "/services" },
  { icon: Palette, title: "Product Design", desc: "Design systems & interfaces.", path: "/services" },
  { icon: LineChart, title: "Growth Engineering", desc: "CRO, analytics, experiments.", path: "/services" },
];

const studio = [
  { icon: Compass, title: "Our Process", desc: "How we ship in weeks.", path: "/process" },
  { icon: Layers, title: "Selected Work", desc: "Case studies & outcomes.", path: "/portfolio" },
  { icon: BookOpen, title: "Journal", desc: "Notes from the deep.", path: "/blog" },
  { icon: MessageSquare, title: "Testimonials", desc: "What operators say.", path: "/testimonials" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<null | "services" | "studio">(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(null);
  }, [location.pathname]);

  const linkCls = (active: boolean) =>
    `px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
      active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
      onMouseLeave={() => setMega(null)}
    >
      <div className="container-tight">
        <div className={`flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all duration-300 ${scrolled || mega ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : ""}`}>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="CodersDive" className="h-8 w-auto" width={120} height={32} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-secondary/40 rounded-full p-1 border border-border">
            <Link to="/portfolio" className={linkCls(location.pathname === "/portfolio")}>Work</Link>
            <button
              onMouseEnter={() => setMega("services")}
              className={linkCls(location.pathname === "/services") + " inline-flex items-center gap-1"}
            >
              Services
            </button>
            <button
              onMouseEnter={() => setMega("studio")}
              className={linkCls(["/process", "/about", "/blog", "/testimonials"].includes(location.pathname)) + " inline-flex items-center gap-1"}
            >
              Studio
            </button>
            <Link to="/about" className={linkCls(location.pathname === "/about")}>About</Link>
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary group">
              Book a dive
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mega menu */}
        {mega && (
          <div
            className="hidden lg:block mt-3 glass rounded-3xl p-6 animate-fade-in"
            onMouseEnter={() => setMega(mega)}
          >
            {mega === "services" && (
              <div className="grid grid-cols-3 gap-3">
                {services.map((s) => (
                  <Link key={s.title} to={s.path} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/60 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0">
                      <s.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm flex items-center gap-1">
                        {s.title}
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {mega === "studio" && (
              <div className="grid grid-cols-2 gap-3">
                {studio.map((s) => (
                  <Link key={s.title} to={s.path} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/60 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0">
                      <s.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{s.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {open && (
          <div className="lg:hidden mt-3 glass rounded-3xl p-4">
            <nav className="flex flex-col">
              {[
                ["Work", "/portfolio"],
                ["Services", "/services"],
                ["Process", "/process"],
                ["About", "/about"],
                ["Journal", "/blog"],
                ["Testimonials", "/testimonials"],
              ].map(([n, p]) => (
                <Link key={n} to={p} className="px-4 py-3 text-sm font-medium text-foreground border-b border-border last:border-0">
                  {n}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary mt-4">Book a dive</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
