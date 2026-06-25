import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";

const PHASES = [
  { n: "01", t: "Discover", body: "Business goals, users, current workflows, data, constraints, risks, dependencies, and evidence." },
  { n: "02", t: "Define", body: "Outcome, scope, priorities, architecture direction, release plan, acceptance criteria, and decision owners." },
  { n: "03", t: "Design", body: "User flows, wireframes, prototypes, visual system, content hierarchy, edge states, and usability feedback." },
  { n: "04", t: "Engineer", body: "Incremental implementation, reviews, automated checks, demos, documentation, and deployment readiness." },
  { n: "05", t: "Launch", body: "Production configuration, migration, analytics, monitoring, training, support, and release communication." },
  { n: "06", t: "Improve", body: "Behaviour data, support signals, commercial priorities, technical health, and roadmap iteration." },
];

const WEEKLY = ["A visible priority list and clear owners.", "Working software or reviewable design — not status theatre.", "Risks and trade-offs raised early.", "Decisions documented in accessible language.", "A consistent communication rhythm appropriate to the engagement."];
const CLIENT = ["Access to the people who understand the problem.", "A named decision owner.", "Timely feedback on working material.", "Honesty about constraints, politics, data, and deadlines.", "Commitment to outcomes rather than attachment to every initial feature."];

export default function HowWeWork() {
  return (
    <>
      <SeoHead title="How We Work | CodersDive" description="See how CodersDive turns product ambiguity into accountable, visible delivery — six phases, weekly expectations, and what we need from clients." path="/how-we-work" />
      <section className="container-cd pt-20 md:pt-28 pb-16">
        <p className="mono text-foreground/45">/ Process</p>
        <h1 className="display-1 mt-6 max-w-5xl">A delivery process designed to reduce expensive surprises.</h1>
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl">We do not hide uncertainty behind long proposals or pretend every decision can be made on day one. We expose risk early, work in visible increments, and keep product, design, and engineering connected throughout delivery.</p>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd">
          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
            {PHASES.map((p) => (
              <div key={p.n} className="bg-ink p-7">
                <p className="mono text-aqua">{p.n}</p>
                <h3 className="font-serif text-2xl mt-4">{p.t}</h3>
                <p className="text-sm text-foreground/65 mt-3">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section on-light bg-mist border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow">Every week</p>
            <h2 className="display-2 mt-5">What clients can expect.</h2>
            <ul className="mt-8 space-y-4">{WEEKLY.map((l) => <li key={l} className="flex gap-3 text-foreground/85"><span className="rule-aqua mt-3 shrink-0" /> <span>{l}</span></li>)}</ul>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow">From clients</p>
            <h2 className="display-2 mt-5">What we need.</h2>
            <ul className="mt-8 space-y-4">{CLIENT.map((l) => <li key={l} className="flex gap-3 text-foreground/85"><span className="rule-aqua mt-3 shrink-0" /> <span>{l}</span></li>)}</ul>
          </div>
        </div>
      </section>

      <CTABand eyebrow="Plan it together" title="Good delivery feels calm because the hard conversations happen early." primary={{ label: "Plan a discovery call", href: "/contact" }} />
    </>
  );
}