interface Step {
  title: string;
  description: string;
  timeframe: string;
}

interface ProcessStepsProps {
  heading: string;
  steps: Step[];
}

const ProcessSteps = ({ heading, steps }: ProcessStepsProps) => (
  <section className="bg-background-soft section">
    <div className="container-tight">
      <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">{heading}</h2>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <li key={s.title} className="card-light p-6">
            <div className="display text-3xl font-bold text-accent-blue-ink mb-3">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="display text-base font-bold mb-2 leading-snug">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-[1.6] mb-3">{s.description}</p>
            <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground font-medium">{s.timeframe}</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSteps;
