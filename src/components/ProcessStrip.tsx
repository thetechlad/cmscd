import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Understand", note: "Business + workflow audit" },
  { n: "02", title: "Design", note: "Solution architecture" },
  { n: "03", title: "Build", note: "Rapid implementation" },
  { n: "04", title: "Improve", note: "Measure and iterate" },
];

const ProcessStrip = () => (
  <Reveal as="section" className="bg-background-soft section">
    <div className="container-tight">
      <div className="reveal-child mb-10">
        <div className="label-eyebrow mb-5">Process</div>
        <h2 className="display text-[26px] md:text-[36px] font-bold leading-[1.1]">Four steps. No theatre.</h2>
      </div>

      <div className="relative grid md:grid-cols-4 gap-5">
        {/* connecting line */}
        <div
          className="hidden md:block absolute left-0 right-0 top-[34px] h-[2px]"
          style={{ background: "linear-gradient(90deg, hsl(var(--accent-blue) / 0.5), hsl(var(--accent-blue) / 0.12))" }}
        />
        {steps.map((s) => (
          <div key={s.n} className="reveal-child relative bg-white rounded-2xl border border-border p-6">
            <div
              className="w-[18px] h-[18px] rounded-full mb-6 ring-4 ring-white"
              style={{ background: "hsl(var(--accent-blue))" }}
            />
            <div className="text-xs font-semibold text-muted-foreground mb-1">{s.n}</div>
            <div className="display text-lg font-bold mb-1">{s.title}</div>
            <div className="text-sm text-muted-foreground">{s.note}</div>
          </div>
        ))}
      </div>
    </div>
  </Reveal>
);

export default ProcessStrip;
