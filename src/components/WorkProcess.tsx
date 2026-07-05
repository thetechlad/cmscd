import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Surface", body: "You bring the idea. We listen hard, ask harder questions, and map the full picture. No templates. No guesswork." },
  { n: "02", title: "Blueprint", body: "Architecture, tech stack, timelines, and design direction, all decided together. You approve before we build." },
  { n: "03", title: "Deep Build", body: "Senior engineers and designers building in focused sprints. Weekly demos keep you in the loop without slowing us down." },
  { n: "04", title: "Launch & Scale", body: "We don't disappear after deployment. Monitoring, support, and iteration. We're your long-term engineering partner.", highlight: true },
];

const WorkProcess = () => (
  <Reveal as="section" className="on-dark relative bg-background section overflow-hidden">
    {/* layered dark background */}
    <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
    <div className="blob top-0 right-0 w-[520px] h-[520px]" style={{ background: "hsl(var(--accent-blue) / 0.35)" }} />
    <div className="container-tight relative">
      <div className="max-w-3xl mb-20 reveal-child">
        <div className="label-eyebrow mb-6">Our Process</div>
        <h2 className="display text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] text-white">
          A predictable path from idea to shipped.
        </h2>
        <p className="text-white/60 leading-[1.7] mt-5 max-w-xl">
          Four disciplined phases, weekly checkpoints, and zero surprises. You always know what's being built and why.
        </p>
      </div>

      <div className="relative">
        {/* connecting dashed line (desktop) */}
        <div
          className="hidden lg:block absolute left-0 right-0 top-[28px] h-px"
          style={{ borderTop: "1px dashed rgba(255,255,255,0.18)" }}
        />
        <div className="grid lg:grid-cols-4 gap-6 relative">
          {steps.map((s) => (
            <div key={s.n} className="reveal-child relative">
              <div className="hidden lg:flex items-center justify-center w-[14px] h-[14px] rounded-full bg-white border-2 border-[hsl(var(--accent-blue))] mx-auto mb-6 relative z-10" />
              <div
                className="relative p-7 rounded-xl border transition-all duration-300 hover:-translate-y-1.5 h-full"
                style={{
                  background: s.highlight ? "hsl(var(--accent-blue) / 0.16)" : "hsl(0 0% 8%)",
                  borderColor: s.highlight ? "hsl(var(--accent-blue) / 0.5)" : "hsl(0 0% 16%)",
                }}
              >
                <div className="display text-[64px] font-bold text-white/10 leading-none absolute top-4 right-5 select-none">
                  {s.n}
                </div>
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.1em] text-[hsl(var(--accent-blue))] mb-2">Step {s.n}</div>
                  <h3 className="display text-xl font-bold mb-3 text-white">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-[1.7]">{s.body}</p>
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
