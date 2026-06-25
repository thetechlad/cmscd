import { useState } from "react";
import { Link } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { CASES } from "@/content/cases";

const FILTERS = ["All", "Product concept", "Internal venture"];

export default function WorkHub() {
  const [f, setF] = useState("All");
  const items = CASES.filter((c) => f === "All" || c.label === f);

  return (
    <>
      <SeoHead title="Our Work | CodersDive" description="Selected product concepts, internal ventures, and engagements engineered by CodersDive. Confidentiality and verification labels are explicit." path="/work" />
      <section className="container-cd pt-20 md:pt-28 pb-12">
        <p className="mono text-foreground/45">/ Work</p>
        <h1 className="display-1 mt-6 max-w-5xl">Selected work. Honestly labelled.</h1>
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl">Each project is labelled as a client engagement, product concept, or internal venture. Outcome metrics are published only after verification.</p>
        <div className="mt-10 flex gap-2 flex-wrap">
          {FILTERS.map((x) => (
            <button key={x} onClick={() => setF(x)} className={`mono px-4 h-9 rounded-full border transition-colors ${f === x ? "bg-aqua text-ink border-aqua" : "border-foreground/20 text-foreground/70 hover:border-foreground/50"}`}>{x}</button>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-cd">
          <Reveal stagger className="grid grid-cols-12 gap-6">
            {items.map((c, i) => (
              <Link key={c.slug} to={`/work/${c.slug}`} className={`card-cd p-8 ${i === 0 ? "col-span-12 lg:col-span-8" : i === 1 ? "col-span-12 lg:col-span-4" : "col-span-12 md:col-span-6"}`}>
                <p className="mono text-aqua">{c.label} · {c.type}</p>
                <h3 className="font-serif text-3xl md:text-4xl mt-4">{c.client}</h3>
                <p className="text-foreground/65 mt-3">{c.problem}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.tech.slice(0, 4).map((t) => <span key={t} className="mono px-2.5 py-1 border border-foreground/15 rounded-full">{t}</span>)}
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand eyebrow="Discuss" title="Have a project that belongs on this page?" primary={{ label: "Start a project", href: "/start-a-project" }} />
    </>
  );
}