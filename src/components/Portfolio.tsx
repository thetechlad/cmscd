import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Helio — AI sales workspace",
    category: "SaaS · AI",
    metric: "+38% pipeline conversion",
    body: "Designed and shipped a full agentic workspace that drafts, prioritises and follows up on outbound — replacing five point-tools.",
    accent: "from-cyan-400/30 to-violet-500/20",
  },
  {
    title: "Northwind Capital",
    category: "Fintech · Web",
    metric: "$12M assets onboarded in Q1",
    body: "An institutional-grade investor portal with bank-level security, real-time reporting and a frictionless KYC flow.",
    accent: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    title: "Loop Health",
    category: "Mobile · Health",
    metric: "4.9★ App Store, 92% retention",
    body: "A consumer health app rebuilt from scratch — native-feel performance, offline support and a design system that scales.",
    accent: "from-emerald-400/30 to-cyan-400/20",
  },
  {
    title: "Atlas Logistics",
    category: "Platform · Cloud",
    metric: "11× faster dispatch decisions",
    body: "Real-time logistics platform, event-driven architecture, observability stack and zero-downtime migrations from a 12-year-old monolith.",
    accent: "from-amber-400/20 to-rose-500/20",
  },
];

const Portfolio = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="container-tight relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Surfaced Work</div>
            <h2 className="display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
              Things we pulled<br />from the <span className="text-gradient">deep.</span>
            </h2>
          </div>
          <Link to="/contact" className="btn-ghost shrink-0 group">
            Start your case study
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group card-elev relative overflow-hidden p-0">
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="display text-5xl md:text-6xl font-semibold text-foreground/90 tracking-tight px-6 text-center">
                    {p.title.split("—")[0].trim()}
                  </span>
                </div>
                <div className="absolute top-5 left-5 text-[11px] uppercase tracking-widest text-foreground/80 bg-background/40 backdrop-blur rounded-full px-3 py-1 border border-border">
                  {p.category}
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="display text-xl font-semibold">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                </div>
                <div className="text-sm text-primary font-medium mb-3">{p.metric}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
