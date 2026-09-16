import { Link } from "react-router-dom";
import { ArrowRight, Bot, LineChart, Headphones, Check } from "lucide-react";
import Reveal from "./Reveal";

const groups = [
  {
    icon: Bot,
    title: "Sales",
    items: ["Lead qualification", "CRM updates", "Proposal generation"],
  },
  {
    icon: LineChart,
    title: "Operations",
    items: ["Reporting", "Inventory", "Document processing"],
  },
  {
    icon: Headphones,
    title: "Support",
    items: ["Ticket triage", "Knowledge assistants", "WhatsApp automation"],
  },
];

const Automate = () => (
  <Reveal as="section" className="bg-background section relative overflow-hidden">
    <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
    <div className="container-tight relative">
      <div className="reveal-child mb-10 md:mb-14 max-w-3xl">
        <div className="label-eyebrow mb-5">Automation</div>
        <h2 className="display text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.05]">
          What can we <span style={{ color: "hsl(var(--accent-blue-ink))" }}>automate</span>?
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div key={g.title} className="reveal-child card-light p-7 group hover:-translate-y-1 transition-transform duration-500">
            <div className="w-12 h-12 rounded-xl bg-background-soft border border-border flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--accent-blue-soft))] group-hover:border-[hsl(var(--accent-blue))]/30 transition-colors">
              <g.icon className="w-5 h-5 text-foreground group-hover:text-accent-blue transition-colors" />
            </div>
            <h3 className="display text-xl font-bold mb-5">{g.title}</h3>
            <ul className="space-y-3">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-2.5 text-[15px] text-foreground/80">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "hsl(var(--accent-blue-soft))" }}
                  >
                    <Check className="w-3 h-3 text-accent-blue-ink" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="reveal-child mt-10 rounded-3xl border border-[hsl(var(--accent-blue))]/25 bg-white p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="display text-xl md:text-2xl font-bold mb-2">Not sure where to start?</div>
          <p className="text-muted-foreground text-[15px] leading-[1.7] max-w-xl">
            We'll identify the highest-value automation opportunity in your business.
          </p>
        </div>
        <Link to="/start-a-project" className="btn-primary btn-shine group shrink-0" style={{ height: 54, padding: "0 26px" }}>
          Get a Free Automation Audit
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </Reveal>
);

export default Automate;
