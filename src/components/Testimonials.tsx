import Reveal from "./Reveal";

const quotes = [
  { quote: "They delivered a product I thought would take 6 months — in 5 weeks. The quality surpassed agencies charging 3× their rate.", name: "Sarah Chen", role: "Co-founder", company: "Loop Health", initials: "SC" },
  { quote: "The team treated our codebase like it was their own. Not contractors. Partners. Night-and-day difference.", name: "Marcus Webb", role: "CTO", company: "Northwind Capital", initials: "MW" },
  { quote: "CodersDive doesn't just build what you ask for. They catch what you missed. That's rare.", name: "Priya Nair", role: "CEO", company: "Atlas Logistics", initials: "PN" },
];

const Testimonials = () => (
  <Reveal as="section" className="bg-background-soft section">
    <div className="container-tight">
      <div className="max-w-3xl mb-16 reveal-child">
        <div className="label-eyebrow mb-6">Client Voices</div>
        <h2 className="display text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1]">
          What our clients actually say.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="reveal-child card-light p-7 relative"
            style={{ borderLeft: "4px solid hsl(var(--accent-blue))" }}
          >
            <div
              className="display text-[80px] font-bold leading-none absolute top-2 right-5 select-none"
              style={{ color: "hsl(var(--accent-blue-tint))" }}
              aria-hidden
            >
              "
            </div>
            <blockquote className="text-[17px] text-foreground/90 leading-[1.65] mb-7 relative">
              {q.quote}
            </blockquote>
            <figcaption className="flex items-center gap-3 pt-5 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-semibold text-sm">
                {q.initials}
              </div>
              <div>
                <div className="font-semibold text-sm">{q.name}</div>
                <div className="text-xs text-muted-foreground">{q.role} @ {q.company}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </Reveal>
);

export default Testimonials;
