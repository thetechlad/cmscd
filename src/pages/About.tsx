import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { TEAM } from "@/content/team";

const BELIEFS = [
  "Clarity is a delivery advantage.",
  "A smaller committed team can outperform a larger fragmented one.",
  "The best architecture is appropriate, explainable, and maintainable.",
  "AI should improve a workflow, not merely decorate a pitch.",
  "Clients should own their code, accounts, documentation, and decisions.",
  "A successful launch is the start of learning, not the end of responsibility.",
];

const STANDARD = [
  "Understand the actual operating context.",
  "Make trade-offs visible.",
  "Communicate before uncertainty becomes delay.",
  "Test what matters, including failure states.",
  "Leave the product and team stronger than we found them.",
];

export default function About() {
  return (
    <>
      <SeoHead title="About CodersDive | Product engineering with accountability" description="Meet the product thinkers, designers, and engineers behind CodersDive. We build software with the care of a product company and the accountability of a partner." path="/about" />
      <section className="container-cd pt-20 md:pt-28 pb-20">
        <p className="mono text-foreground/45">/ Company</p>
        <h1 className="display-1 mt-6 max-w-5xl">We build software with the care of a product company and the accountability of a partner.</h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/70">CodersDive exists for teams that need more than extra hands. We combine product strategy, experience design, engineering, AI, and delivery discipline to turn difficult business problems into software people can rely on.</p>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">Our point of view</p>
            <h2 className="display-2 mt-5">Most software problems are not purely technical.</h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:pt-16 text-foreground/70 text-lg">
            They are a mixture of unclear ownership, fragmented workflows, competing priorities, hidden exceptions, and decisions delayed until development. We bring those questions forward. The result is a product that is easier to use, easier to operate, and easier to improve.
          </div>
        </div>
      </section>

      <section className="section on-light bg-mist text-foreground border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">What we believe</p>
            <h2 className="display-2 mt-5">Six convictions that shape every engagement.</h2>
          </div>
          <Reveal stagger className="col-span-12 md:col-span-7 grid gap-4">
            {BELIEFS.map((b, i) => (
              <div key={b} className="flex gap-5 py-5 border-t border-foreground/10">
                <span className="mono text-foreground/45">{`0${i+1}`}</span>
                <p className="font-serif text-xl md:text-2xl leading-snug">{b}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">The CodersDive standard</p>
            <h2 className="display-2 mt-5">How we operate.</h2>
          </div>
          <ol className="col-span-12 md:col-span-7 space-y-5">
            {STANDARD.map((s, i) => (
              <li key={s} className="flex gap-5 border-b border-foreground/10 pb-5">
                <span className="mono text-aqua">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-lg text-foreground/85">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd">
          <div className="grid grid-cols-12 gap-10 mb-10">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow">Team</p>
              <h2 className="display-2 mt-5">A small senior team. Real names coming soon.</h2>
              <p className="mt-4 text-foreground/65 max-w-xl">We only publish verified team profiles. Placeholders below show the shape of how each profile will appear.</p>
            </div>
          </div>
          <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((t, i) => (
              <article key={i} className="card-cd p-6">
                <div className="aspect-[4/5] rounded-lg bg-graphite border border-foreground/10 mb-5 grid place-items-center text-foreground/30 mono">portrait — pending</div>
                <p className="mono text-aqua">{t.role}</p>
                <h3 className="font-serif text-xl mt-2">{t.name}</h3>
                <p className="text-sm text-foreground/65 mt-3">{t.line}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand eyebrow="Partnership" title="A serious product deserves a serious build partner." body="Tell us where you are, what is at stake, and what has made progress difficult." primary={{ label: "Talk to our team", href: "/contact" }} />
    </>
  );
}