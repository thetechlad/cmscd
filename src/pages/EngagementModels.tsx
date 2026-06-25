import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { ENGAGEMENTS } from "@/content/engagements";

export default function EngagementModels() {
  return (
    <>
      <SeoHead title="Engagement Models | CodersDive" description="Five ways to work with CodersDive — discovery, MVP, project, dedicated team, and support — with explicit guidance on when each fits and when it does not." path="/engagement-models" />
      <section className="container-cd pt-20 md:pt-28 pb-16">
        <p className="mono text-foreground/45">/ Engagement</p>
        <h1 className="display-1 mt-6 max-w-5xl">Start with the model that protects the decision you need to make next.</h1>
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl">From an MVP to a long-term embedded team — five ways to work with us, with the trade-offs made explicit.</p>
      </section>

      <section className="section pt-0">
        <div className="container-cd">
          <Reveal stagger className="grid gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
            {ENGAGEMENTS.map((e, i) => (
              <div key={e.name} className="bg-ink p-7 grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-3"><p className="mono text-aqua">{String(i+1).padStart(2,"0")}</p><h2 className="font-serif text-2xl mt-3">{e.name}</h2></div>
                <div className="col-span-12 md:col-span-3"><p className="mono text-foreground/45">Best for</p><p className="mt-2 text-foreground/85">{e.bestFor}</p></div>
                <div className="col-span-12 md:col-span-3"><p className="mono text-foreground/45">Output</p><p className="mt-2 text-foreground/85">{e.output}</p></div>
                <div className="col-span-12 md:col-span-3"><p className="mono text-foreground/45">Team</p><p className="mt-2 text-foreground/85">{e.team}</p>
                  <p className="mono text-foreground/45 mt-4">When not</p><p className="mt-2 text-foreground/70 text-sm">{e.notWhen}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand eyebrow="Choose" title="Not sure which model fits?" body="Tell us where you are. We will recommend the smallest credible engagement." primary={{ label: "Choose the right model", href: "/start-a-project" }} />
    </>
  );
}