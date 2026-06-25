import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";

const ACCEL = ["Drafting and review of routine code", "Documentation and test scaffolding", "Knowledge retrieval and summarisation", "Repeated workflow automation"];
const HUMAN = ["Architecture and security decisions", "Product framing and trade-offs", "Customer-facing communication", "Final code review and release"];
const GUARDRAILS = [
  { r: "Data", a: "We use providers and configurations that do not train on your data; data paths are documented." },
  { r: "Quality", a: "Every line that ships passes human review and the same quality bar as hand-written code." },
  { r: "Evaluation", a: "AI features ship with evaluation suites, not just prompts." },
  { r: "Cost & latency", a: "Operating economics are a deliverable, not a surprise." },
  { r: "Auditability", a: "Decisions, tool calls, and prompts are traceable in production." },
];

export default function AIFirst() {
  return (
    <>
      <SeoHead title="AI-First Engineering | CodersDive" description="Where AI accelerates the work, where humans remain accountable, and the guardrails that make AI in production credible." path="/ai-first" />
      <section className="container-cd pt-20 md:pt-28 pb-16">
        <p className="mono text-foreground/45">/ AI-first</p>
        <h1 className="display-1 mt-6 max-w-5xl">AI accelerates the work. Humans remain accountable for the outcome.</h1>
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl">We use modern AI tools where they create leverage without surrendering judgment, security, or code quality.</p>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6"><p className="eyebrow">Where AI accelerates</p><ul className="mt-8 space-y-4">{ACCEL.map((l) => <li key={l} className="flex gap-3 border-b border-foreground/10 pb-3"><span className="rule-aqua mt-3 shrink-0" /><span>{l}</span></li>)}</ul></div>
          <div className="col-span-12 md:col-span-6"><p className="eyebrow">Where humans remain accountable</p><ul className="mt-8 space-y-4">{HUMAN.map((l) => <li key={l} className="flex gap-3 border-b border-foreground/10 pb-3"><span className="rule-aqua mt-3 shrink-0" /><span>{l}</span></li>)}</ul></div>
        </div>
      </section>

      <section className="section on-light bg-mist border-t border-foreground/10">
        <div className="container-cd"><p className="eyebrow">Guardrails</p><h2 className="display-2 mt-5">Risk, mitigation, owner.</h2>
          <Reveal stagger className="mt-10 grid gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">{GUARDRAILS.map((g) => (
            <div key={g.r} className="bg-background p-6 grid grid-cols-12 gap-6"><p className="col-span-12 md:col-span-3 font-serif text-xl">{g.r}</p><p className="col-span-12 md:col-span-9 text-foreground/75">{g.a}</p></div>
          ))}</Reveal>
        </div>
      </section>

      <CTABand eyebrow="Discuss" title="Talk about AI in your product." primary={{ label: "Start a project", href: "/start-a-project" }} />
    </>
  );
}