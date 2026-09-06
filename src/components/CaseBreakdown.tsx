import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";

const SLUGS = ["synko", "launch-my-store", "suuper", "goodpath-ai"];

const CaseBreakdown = () => {
  const items = SLUGS.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) as typeof projects;
  const [active, setActive] = useState(0);
  const p = items[0] ? items[active] : undefined;
  if (!p) return null;

  const rows = [
    { label: "The Problem", value: p.challenge },
    { label: "What We Built", value: p.approach },
    { label: "The Product", value: p.overview },
    { label: "Engineering", value: p.tech.join(" · ") },
    { label: "Result", value: p.outcome },
  ];

  return (
    <Reveal as="section" className="on-dark relative bg-background section overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="blob top-0 right-0 w-[520px] h-[520px]" style={{ background: "hsl(var(--accent-blue) / 0.3)" }} />

      <div className="container-tight relative">
        <div className="reveal-child mb-10">
          <div className="label-eyebrow mb-5">Case Breakdown</div>
          <h2 className="display text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.05] max-w-3xl">
            How the work actually went.
          </h2>
        </div>

        <div className="reveal-child flex flex-wrap gap-2 mb-8">
          {items.map((it, i) => (
            <button
              key={it.slug}
              onClick={() => setActive(i)}
              className={`h-10 px-5 rounded-full text-[13px] font-semibold transition-all ${
                i === active ? "text-white" : "text-white/70 hover:text-white border border-white/20"
              }`}
              style={i === active ? { background: "hsl(var(--accent-blue))" } : undefined}
            >
              {it.name}
            </button>
          ))}
        </div>

        <div className="reveal-child grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-white/15">
            <img src={p.shot} alt={`${p.name} screenshot`} loading="lazy" className="w-full h-auto" />
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {rows.map((r) => (
                <div key={r.label} className="grid sm:grid-cols-[150px_1fr] gap-2 sm:gap-6 py-5">
                  <div className="text-[11px] uppercase tracking-[0.15em] font-semibold" style={{ color: "hsl(var(--accent-blue))" }}>
                    {r.label}
                  </div>
                  <p className="text-[15px] leading-[1.7] text-white/80">{r.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mt-7">
              {p.stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="display text-3xl font-bold">{s.value}</div>
                  <div className="text-xs text-white/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Link to={`/portfolio/${p.slug}`} className="link-blue mt-7 inline-flex font-semibold">
              View full case study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default CaseBreakdown;
