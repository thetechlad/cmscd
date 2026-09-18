import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";

const FLAGSHIP = ["synko", "launch-my-store", "suuper"];

const copy: Record<string, { headline: string; sub: string; chips: string[] }> = {
  synko: {
    headline: "One platform for restaurant operations.",
    sub: "Everything a multi-location operator runs on, in one system.",
    chips: ["POS", "Inventory", "Ordering", "Analytics", "KDS", "Staff", "Delivery"],
  },
  "launch-my-store": {
    headline: "E-commerce infrastructure for faster launches.",
    sub: "Built to make launching and operating online stores easier.",
    chips: ["Storefronts", "Catalog", "Payments", "Fulfilment", "Analytics"],
  },
  suuper: {
    headline: "AI support that answers in seconds.",
    sub: "Trains on the business, replies across web and WhatsApp.",
    chips: ["AI Replies", "WhatsApp", "Knowledge Base", "Handover", "Insights"],
  },
};

const FlagshipWork = () => {
  const items = FLAGSHIP.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) as typeof projects;

  return (
    <Reveal as="section" className="bg-background-soft section">
      <div className="container-tight">
        <div className="reveal-child mb-10 md:mb-14">
          <div className="label-eyebrow mb-5">Flagship Work</div>
          <h2 className="display text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.05] max-w-3xl">
            Real products, running in production.
          </h2>
        </div>

        <div className="space-y-8 md:space-y-12">
          {items.map((p, i) => {
            const c = copy[p.slug];
            return (
              <Link
                to={`/portfolio/${p.slug}`}
                key={p.slug}
                className="reveal-child group block rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className={`grid lg:grid-cols-12 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                  {/* screenshot = dominant visual area */}
                  <div className="lg:col-span-8 relative overflow-hidden" style={{ background: p.bg }}>
                    <img
                      src={p.shot}
                      alt={`${p.name} product screenshot`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top aspect-[16/10] transition-transform duration-[900ms] group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="lg:col-span-4 p-7 md:p-10 flex flex-col justify-center [direction:ltr]">
                    <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="h-7 w-auto object-contain object-left mb-5 opacity-90" />
                    <h3 className="display text-2xl md:text-[30px] font-bold leading-[1.15] mb-3">{c.headline}</h3>
                    <p className="text-sm text-muted-foreground leading-[1.7] mb-5">{c.sub}</p>
                    <div className="flex flex-wrap gap-1.5 mb-7">
                      {c.chips.map((chip) => (
                        <span
                          key={chip}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-background-soft border border-border text-foreground/75"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <span className="link-blue font-semibold">
                      View Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
};

export default FlagshipWork;
