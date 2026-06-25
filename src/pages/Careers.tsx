import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";

const PRINCIPLES = [
  "Quiet competence over loud activity.",
  "Write things down. Decisions, trade-offs, and what we learned.",
  "Clarity is a kindness. Vagueness is not.",
  "Use AI to remove drudgery, not to replace judgement.",
  "Leave the product and the team better than we found them.",
];

const PROCESS = [
  { t: "Conversation", b: "A short talk about what you do, what you want, and what we are working on." },
  { t: "Practical exercise", b: "A small piece of real work — paid where appropriate — to see how we think together." },
  { t: "Team meet", b: "Meet the people you would actually work with." },
  { t: "Decision", b: "Honest yes or no. We share what we saw either way." },
];

export default function Careers() {
  return (
    <>
      <SeoHead title="Careers at CodersDive" description="Join a small senior team building product engineering with calm and craft. Roles in product, design, engineering, AI, and operations." path="/careers" />
      <section className="container-cd pt-20 md:pt-28 pb-16">
        <p className="mono text-foreground/45">/ Careers</p>
        <h1 className="display-1 mt-6 max-w-5xl">A small senior team. Calm, craft, and accountability.</h1>
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl">We hire slowly and deliberately. If you build software you would still respect in five years, we should talk.</p>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5"><p className="eyebrow">How we work</p><h2 className="display-2 mt-5">Five principles, in plain language.</h2></div>
          <ul className="col-span-12 md:col-span-7 space-y-5">{PRINCIPLES.map((p, i) => <li key={p} className="flex gap-5 border-b border-foreground/10 pb-5"><span className="mono text-aqua">{String(i+1).padStart(2,"0")}</span><span className="text-lg text-foreground/85">{p}</span></li>)}</ul>
        </div>
      </section>

      <section className="section on-light bg-mist border-t border-foreground/10">
        <div className="container-cd"><p className="eyebrow">Hiring process</p><h2 className="display-2 mt-5">Four steps. No theatre.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">{PROCESS.map((p, i) => (
            <div key={p.t} className="card-cd p-6 bg-background"><p className="mono text-aqua">{String(i+1).padStart(2,"0")}</p><h3 className="font-serif text-xl mt-3">{p.t}</h3><p className="text-foreground/65 mt-3 text-sm">{p.b}</p></div>
          ))}</div>
        </div>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd"><p className="eyebrow">Open roles</p><h2 className="display-2 mt-5">Currently — speculative applications welcome.</h2>
          <p className="mt-5 text-foreground/70 max-w-2xl">We post specific roles when we are ready to hire. If your background fits one of our service families, send us a short note and a link to work you are proud of.</p>
        </div>
      </section>

      <CTABand eyebrow="Apply" title="Send a short note and a link to your work." primary={{ label: "Email us", href: "mailto:hello@codersdive.com" }} secondary={{ label: "Read about how we work", href: "/how-we-work" }} />
    </>
  );
}