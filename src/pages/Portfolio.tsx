import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import BrandWork from "@/components/BrandWork";
import CTABand from "@/components/CTABand";
import { projects, CATEGORY_LABELS, ProjectCategory } from "@/data/projects";

type Filter = "all" | ProjectCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "AI", label: "AI" },
  { id: "Design", label: "Design" },
  { id: "SaaS", label: "SaaS Products" },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout title="Selected Work" description="Products we've designed, engineered and shipped — AI platforms, SaaS products and brand-led experiences for founders worldwide." path="/portfolio">
      <section className="bg-background pt-[120px] pb-12 border-b border-border">
        <div className="container-tight">
          <div className="label-eyebrow mb-6">Client Work</div>
          <h1 className="display text-[34px] md:text-[42px] lg:text-[68px] font-bold leading-[1.05] max-w-4xl">
            Products that <span style={{ color: "hsl(var(--accent-blue-ink))" }}>earn their keep</span>.
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl">
            Shipped software across AI, SaaS and design — built end to end for founders and operators across the globe. Explore a case study for the full story.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-background-soft border-b border-border sticky top-0 z-30">
        <div className="container-tight py-4 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => {
            const on = filter === f.id;
            const count = f.id === "all" ? projects.length : projects.filter((p) => p.category === f.id).length;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={on}
                className={`px-4 h-10 rounded-full text-[13px] font-semibold transition-all border inline-flex items-center gap-2 ${
                  on
                    ? "text-white border-transparent"
                    : "bg-card text-foreground/75 border-border hover:text-foreground hover:border-foreground/30"
                }`}
                style={on ? { background: "hsl(var(--accent-blue))" } : undefined}
              >
                {f.label}
                <span className={`text-[11px] ${on ? "text-white/80" : "text-muted-foreground"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      <Reveal as="section" className="bg-background section">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((p) => (
              <Link
                to={`/portfolio/${p.slug}`}
                key={p.slug}
                className="reveal-child card-light overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.25)]"
              >
                <div className="relative overflow-hidden" style={{ background: p.bg, minHeight: 200 }}>
                  <img
                    src={p.shot}
                    alt={`${p.name} website screenshot`}
                    loading="lazy"
                    className="w-full h-[200px] object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <span className="text-[10px] uppercase tracking-[0.12em] font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-foreground">{CATEGORY_LABELS[p.category]}</span>
                  </div>
                </div>
                <div className="p-6 bg-card flex-1 flex flex-col">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold mb-2">{p.tag}</div>
                  <div className="display text-2xl font-bold tracking-tight mb-2 group-hover:text-accent-blue transition-colors">{p.name}</div>
                  <p className="text-sm text-muted-foreground leading-[1.7] mb-5 flex-1">{p.summary}</p>
                  <span className="link-blue">View case study <ArrowUpRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <BrandWork />
      <CTABand />
    </Layout>
  );
};

export default PortfolioPage;
