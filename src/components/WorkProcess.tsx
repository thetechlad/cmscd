const steps = [
  { n: "01", title: "Surface", depth: "0m", body: "We align on the problem, the user and the metric that matters. We leave with a sharp brief and a fixed scope." },
  { n: "02", title: "Descend", depth: "200m", body: "Interface design, system architecture and a clickable prototype — we de-risk the build before production code is written." },
  { n: "03", title: "Deep work", depth: "1,200m", body: "Weekly demos, production releases every sprint. You see progress in your hands, not in a status doc." },
  { n: "04", title: "Resurface & scale", depth: "0m", body: "We stick around. Performance, observability, growth experiments and the next bet — engineered with you." },
];

const WorkProcess = () => {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/20 border-y border-border overflow-hidden">
      <div className="absolute inset-0 dot-bg-dense opacity-40" />
      <div className="container-tight relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The Dive</div>
          <h2 className="display text-4xl md:text-5xl font-semibold leading-tight">
            A predictable path<br />from <span className="text-gradient">surface to shipped.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 hover:bg-secondary/40 transition-colors group">
              <div className="flex items-baseline justify-between mb-6">
                <div className="display text-5xl font-semibold text-gradient">{s.n}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2 py-0.5">{s.depth}</div>
              </div>
              <h3 className="display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
