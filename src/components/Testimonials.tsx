const quotes = [
  {
    quote: "CodersDive shipped in six weeks what our internal team had been planning for nine months. They operate like founders — opinionated, fast and brutally honest.",
    name: "Sarah Lin",
    role: "CEO, Helio",
  },
  {
    quote: "The most senior team we've ever worked with. They didn't just build the product — they reframed the problem. Our conversion is up 38%.",
    name: "Daniel Marks",
    role: "Head of Product, Northwind Capital",
  },
  {
    quote: "Design and engineering working as one. Every demo felt like Christmas morning. Our App Store rating jumped from 3.6 to 4.9.",
    name: "Priya Shah",
    role: "Founder, Loop Health",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/20 border-y border-border">
      <div className="container-tight">
        <div className="max-w-3xl mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Signals from the surface</div>
          <h2 className="display text-4xl md:text-5xl font-semibold leading-tight">
            Operators who took<br />the <span className="text-gradient">plunge with us.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.name} className="card-elev flex flex-col">
              <blockquote className="text-foreground/90 leading-relaxed flex-1 text-[15px]">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{q.name}</div>
                <div className="text-sm text-muted-foreground">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
