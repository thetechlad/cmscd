import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const projects = [
  { name: "Helio", tag: "AI Sales Workspace", body: "We rebuilt their entire prospecting pipeline with AI. Result: 3× pipeline growth in 60 days.", bg: "#EFF6FF", text: "#1E3A8A" },
  { name: "Northwind Capital", tag: "Fintech Dashboard", body: "Real-time trading data, custom charting, role-based access — in 6 weeks flat.", bg: "#F0FDF4", text: "#14532D" },
  { name: "Loop Health", tag: "Healthcare SaaS", body: "A multi-tenant health benefits platform used by 200+ enterprise teams. Built from scratch.", bg: "#FFF7ED", text: "#7C2D12" },
  { name: "Atlas Logistics", tag: "Operations Platform", body: "End-to-end logistics management. Reduced manual ops by 70%. Scaled to 5 countries.", bg: "#F5F3FF", text: "#4C1D95" },
];

const Portfolio = () => (
  <Reveal as="section" className="bg-background section">
    <div className="container-tight">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal-child">
        <div>
          <div className="label-eyebrow mb-6">Client Work</div>
          <h2 className="display text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1]">
            Things we've built.
          </h2>
        </div>
        <Link to="/portfolio" className="link-blue">See all case studies <ArrowRight className="w-4 h-4" /></Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="reveal-child card-light overflow-hidden flex flex-col"
            style={{ minHeight: 400 }}
          >
            <div
              className="flex-1 flex flex-col justify-end p-8"
              style={{ background: p.bg, color: p.text, minHeight: 200 }}
            >
              <div className="text-[11px] uppercase tracking-[0.15em] font-medium opacity-70 mb-3">{p.tag}</div>
              <div className="display text-3xl md:text-4xl font-bold tracking-tight">{p.name}</div>
            </div>
            <div className="p-7 bg-white">
              <p className="text-sm text-muted-foreground leading-[1.7] mb-5">{p.body}</p>
              <Link to="/portfolio" className="link-blue">View Project <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </Reveal>
);

export default Portfolio;
