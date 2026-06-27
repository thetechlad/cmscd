import Reveal from "./Reveal";
import workflowSystem from "@/assets/uploads/codersdive-workflow-system.png.asset.json";

const steps = [
  { n: "01", title: "Surface", body: "We get clear on the business model, product scope, technical constraints and user reality before anything moves." },
  { n: "02", title: "Blueprint", body: "We shape the system, flows and priorities so design, engineering and delivery all move in one direction." },
  { n: "03", title: "Deep Build", body: "Senior designers and engineers ship in focused cycles, with clear visibility and momentum every week." },
  { n: "04", title: "Launch & Scale", body: "After release, we help harden, iterate and extend the product as usage, complexity and stakes increase.", highlight: true },
];

const WorkProcess = () => (
  <Reveal as="section" className="bg-background-soft section border-y border-border overflow-hidden">
    <div className="container-tight">
      <div className="grid xl:grid-cols-[0.92fr_1.08fr] gap-10 xl:gap-14 items-start">
        <div>
          <div className="max-w-3xl mb-14 reveal-child">
            <div className="label-eyebrow mb-6">Our Process</div>
            <h2 className="display text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] mb-5">
              A predictable path from idea to shipped.
            </h2>
            <p className="text-muted-foreground max-w-xl leading-[1.7]">
              Structured enough for high-stakes delivery, flexible enough to adapt as product truths change.
            </p>
          </div>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0 top-[28px] h-px"
              style={{ borderTop: "1px dashed hsl(var(--border))" }}
            />
            <div className="grid sm:grid-cols-2 gap-5 relative">
              {steps.map((s) => (
                <div key={s.n} className="reveal-child relative">
                  <div className="hidden lg:flex items-center justify-center w-[14px] h-[14px] rounded-full bg-background border-2 border-foreground mb-5 relative z-10" />
                  <div
                    className={`relative p-7 rounded-xl border ${s.highlight ? "border-[hsl(var(--accent-blue))]/30" : "border-border"}`}
                    style={{ background: s.highlight ? "hsl(var(--accent-blue-soft))" : "white" }}
                  >
                    <div className="display text-[56px] font-bold text-muted-soft/30 leading-none absolute top-4 right-5 select-none">
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

        <div className="reveal-child">
          <div className="relative rounded-[28px] border border-border bg-white p-4 md:p-5 shadow-[0_30px_90px_-34px_rgba(0,0,0,0.18)]">
            <div className="absolute inset-0 rounded-[28px] dot-grid opacity-40 pointer-events-none" />
            <div className="relative overflow-hidden rounded-[22px] bg-background aspect-[16/11]">
              <img
                src={workflowSystem.url}
                alt="CodersDive product delivery workflow with governance and reporting layers"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Reveal>
);

export default WorkProcess;
