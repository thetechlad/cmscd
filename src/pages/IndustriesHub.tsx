import { Link } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { INDUSTRIES } from "@/content/industries";

export default function IndustriesHub() {
  return (
    <>
      <SeoHead title="Industries we work with | CodersDive" description="Concise industry overview across SaaS, fintech, healthcare, e-commerce, logistics, education, real estate, media, professional services, and manufacturing." path="/industries" />
      <section className="container-cd pt-20 md:pt-28 pb-16">
        <p className="mono text-foreground/45">/ Industries</p>
        <h1 className="display-1 mt-6 max-w-5xl">Your industry gives us context. Your operation gives us the real requirements.</h1>
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl">We bring patterns from engagements across product, regulated, and operations-heavy environments — and then take time to learn what makes yours different.</p>
      </section>

      <section className="section pt-0">
        <div className="container-cd">
          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
            {INDUSTRIES.map((i) => (
              <Link key={i.slug} to={`/industries/${i.slug}`} className="bg-ink p-7 hover:bg-graphite transition-colors">
                <h3 className="font-serif text-2xl md:text-3xl">{i.title}</h3>
                <p className="text-foreground/65 mt-3">{i.tagline}</p>
                <p className="mono text-aqua mt-5">Explore →</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand eyebrow="Discuss" title="Discuss your industry." primary={{ label: "Start a project", href: "/start-a-project" }} />
    </>
  );
}