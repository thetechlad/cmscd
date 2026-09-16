interface ProblemSectionProps {
  heading: string;
  symptoms: string[];
}

const ProblemSection = ({ heading, symptoms }: ProblemSectionProps) => (
  <section className="bg-background-soft section">
    <div className="container-tight">
      <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10 max-w-2xl">{heading}</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {symptoms.map((s) => (
          <div key={s} className="card-light p-6">
            <p className="text-foreground/90 leading-[1.6]">{s}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
