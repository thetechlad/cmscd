import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { SERVICES, SERVICE_FAMILIES } from "@/content/services";

const CHOOSE = [
  { when: "You have a promising idea but uncertainty is high", do: "Start with Discovery, MVP, or Proof of Concept." },
  { when: "You need a complete product or platform", do: "Choose Product Engineering or a Dedicated Product Team." },
  { when: "You have repeated manual work", do: "Begin with AI & Automation or Custom Software." },
  { when: "Your existing product is slow, fragile, or difficult to change", do: "Use Modernization, Cloud, Quality, or Support." },
  { when: "You need a specialist capability inside an existing roadmap", do: "Form a focused product pod around that outcome." },
];

export default function ServicesHub() {
  return (
    <>
      <SeoHead title="Software Engineering Services | CodersDive" description="Explore CodersDive services across AI, product engineering, design, cloud, and quality. One product partner from strategic uncertainty to production reality." path="/services" />
      <section className="container-cd pt-20 md:pt-28 pb-16">
        <p className="mono text-foreground/45">/ Services</p>
        <h1 className="display-1 mt-6 max-w-5xl">One product partner from strategic uncertainty to production reality.</h1>
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl">Bring CodersDive a new product, an underperforming platform, a manual operation, or a difficult modernization initiative. We assemble the right mix of product, design, engineering, AI, cloud, and quality expertise around the outcome.</p>
      </section>

      {SERVICE_FAMILIES.map((family, fi) => (
        <section key={family} className="section border-t border-foreground/10">
          <div className="container-cd grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-4">
              <p className="section-number">/ {String(fi+1).padStart(2,"0")}</p>
              <h2 className="display-2 mt-4">{family}</h2>
            </div>
            <Reveal stagger className="col-span-12 md:col-span-8 grid sm:grid-cols-2 gap-4">
              {SERVICES.filter((s) => s.family === family).map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card-cd p-6 group flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <p className="mono text-aqua">{s.title}</p>
                    <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-aqua transition-colors" />
                  </div>
                  <p className="font-serif text-xl leading-snug">{s.tagline}</p>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section on-light bg-mist border-t border-foreground/10">
        <div className="container-cd">
          <div className="grid grid-cols-12 gap-10 mb-12">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow">How to choose</p>
              <h2 className="display-2 mt-5">Describe the business problem. We will recommend the smallest credible engagement.</h2>
            </div>
          </div>
          <div className="grid gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
            {CHOOSE.map((c, i) => (
              <div key={i} className="bg-background grid grid-cols-12 gap-6 p-6 md:p-7">
                <p className="col-span-12 md:col-span-6 font-serif text-xl leading-snug">{c.when}</p>
                <p className="col-span-12 md:col-span-6 text-foreground/70">→ {c.do}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand eyebrow="Discuss" title="Not sure which service label fits? Good." body="Describe the business problem. We will recommend the smallest credible engagement." primary={{ label: "Discuss your needs", href: "/start-a-project" }} />
    </>
  );
}