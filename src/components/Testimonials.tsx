import Reveal from "./Reveal";
import { Star } from "lucide-react";

const quotes = [
  { quote: "They delivered a product I thought would take 6 months — in 5 weeks. The quality surpassed agencies charging 3× their rate.", name: "Sarah Chen", role: "Co-founder", company: "Loop Health", initials: "SC" },
  { quote: "The team treated our codebase like it was their own. Not contractors. Partners. Night-and-day difference.", name: "Marcus Webb", role: "CTO", company: "Northwind Capital", initials: "MW" },
  { quote: "CodersDive doesn't just build what you ask for. They catch what you missed. That's rare.", name: "Priya Nair", role: "CEO", company: "Atlas Logistics", initials: "PN" },
];

const Testimonials = () => (
  <Reveal as="section" className="on-dark relative bg-background section overflow-hidden">
    <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
    <div className="blob -bottom-24 left-1/4 w-[520px] h-[520px]" style={{ background: "hsl(var(--accent-blue) / 0.3)" }} />
    <div className="container-tight relative">
      <div className="max-w-3xl mb-16 reveal-child">
        <div className="label-eyebrow mb-6">Client Voices</div>
        <h2 className="display text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] text-white">
          What our clients actually say.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="reveal-child p-7 relative rounded-xl border transition-all duration-300 hover:-translate-y-1.5"
            style={{ background: "hsl(0 0% 8%)", borderColor: "hsl(0 0% 16%)", borderLeft: "4px solid hsl(var(--accent-blue))" }}
          >
            <div
              className="display text-[80px] font-bold leading-none absolute top-2 right-5 select-none"
              style={{ color: "hsl(var(--accent-blue) / 0.25)" }}
              aria-hidden
            >
              "
            </div>
            <div className="flex gap-0.5 mb-5">
              {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-accent-blue text-accent-blue" />)}
            </div>
            <blockquote className="text-[17px] text-white/85 leading-[1.65] mb-7 relative">
              {q.quote}
            </blockquote>
            <figcaption className="flex items-center gap-3 pt-5 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--accent-blue))] text-white flex items-center justify-center font-semibold text-sm">
                {q.initials}
              </div>
              <div>
                <div className="font-semibold text-sm text-white">{q.name}</div>
                <div className="text-xs text-white/50">{q.role} @ {q.company}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </Reveal>
);

export default Testimonials;
