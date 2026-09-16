interface Stat {
  value: string;
  label: string;
}

interface ProofSectionProps {
  heading: string;
  /** Render nothing structural is missing — pass either stats or a note, never invented figures. */
  stats?: Stat[];
  note?: string;
}

const ProofSection = ({ heading, stats, note }: ProofSectionProps) => (
  <section className="bg-background-soft section">
    <div className="container-tight">
      <h2 className="display text-2xl md:text-4xl font-bold leading-tight mb-10">{heading}</h2>
      {stats && stats.length > 0 && (
        <div className="grid sm:grid-cols-3 gap-6 mb-6">
          {stats.map((s) => (
            <div key={s.label} className="card-light p-6 text-center">
              <div className="display text-4xl font-bold mb-2">{s.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.08em]">{s.label}</div>
            </div>
          ))}
        </div>
      )}
      {note && <p className="text-muted-foreground leading-[1.6] max-w-2xl">{note}</p>}
    </div>
  </section>
);

export default ProofSection;
