import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Surface", body: "You bring the idea. We listen hard, ask harder questions, and map the full picture. No templates. No guesswork." },
  { n: "02", title: "Blueprint", body: "Architecture, tech stack, timelines, and design direction — all decided together. You approve before we build." },
  { n: "03", title: "Deep Build", body: "Senior engineers and designers building in focused sprints. Weekly demos keep you in the loop without slowing us down." },
  { n: "04", title: "Launch & Scale", body: "We don't disappear after deployment. Monitoring, support, and iteration — we're your long-term engineering partner.", highlight: true },
];

const WorkProcess = () => (
  <Reveal as="section" className="bg-background-soft section border-y border-border">
    <div className="container-tight">
      <div className="max-w-3xl mb-20 reveal-child">
        <div className="label-eyebrow mb-6">Our Process</div>
        <h2 className="display text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1]">
          A predictable path from idea to shipped.
        </h2>
      </div>

      <div className="relative">
        {/* connecting dashed line (desktop) */}
        <div
          className="hidden lg:block absolute left-0 right-0 top-[28px] h-px"
          style={{ borderTop: "1px dashed #D1D5DB" }}
        />
        <div className="grid lg:grid-cols-4 gap-6 relative">
          {steps.map((s) => (
            <div key={s.n} className="reveal-child relative">
              <div className="hidden lg:flex items-center justify-center w-[14px] h-[14px] rounded-full bg-background border-2 border-foreground mx-auto mb-6 relative z-10" />
              <div
                className={`relative p-7 rounded-xl border ${s.highlight ? "border-[hsl(var(--accent-blue))]/30" : "border-border"}`}
                style={{ background: s.highlight ? "hsl(var(--accent-blue-soft))" : "white" }}
              >
                <div className="display text-[64px] font-bold text-muted-soft/30 leading-none absolute top-4 right-5 select-none">
                  {s.n}
                </div>
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.1em] text-muted-soft mb-2">Step {s.n}</div>
                  <h3 className="display text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Reveal>
);

export default WorkProcess;
