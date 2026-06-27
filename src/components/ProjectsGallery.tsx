import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import imgNook from "@/assets/proj-nooktravel.jpg";
import imgSuuper from "@/assets/proj-suuper.jpg";
import imgPlural from "@/assets/proj-plural.jpg";
import imgModisoft from "@/assets/proj-modisoft.jpg";
import imgKidan from "@/assets/proj-kidan.jpg";
import opsGraph from "@/assets/uploads/codersdive-ops-graph.png.asset.json";

const projects = [
  { url: "https://nooktravel.space", name: "NookTravel", img: imgNook, desc: "Travel discovery & itinerary platform", tags: ["Next.js", "Mapbox", "Postgres"] },
  { url: "https://suuper.cc", name: "Suuper", img: imgSuuper, desc: "Consumer super-app experience", tags: ["React Native", "Node", "Realtime"] },
  { url: "https://pluraldynamics.com", name: "Plural Dynamics", img: imgPlural, desc: "Enterprise systems engineering", tags: ["TypeScript", "AWS", "GraphQL"] },
  { url: "https://modisoft.com", name: "Modisoft", img: imgModisoft, desc: "Retail & restaurant POS platform", tags: ["React", "Node", "Stripe"] },
  { url: "https://kidan.cc", name: "Kidan", img: imgKidan, desc: "Web3 product studio", tags: ["Solidity", "Next.js", "Wagmi"] },
];

const ProjectsGallery = () => (
  <Reveal as="section" className="bg-background section overflow-hidden">
    <div className="container-tight">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-12 items-end mb-14 reveal-child">
        <div>
          <div className="label-eyebrow mb-6">Selected Projects</div>
          <h2 className="display text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-[1.05] max-w-3xl mb-5">
            Products that look credible at first glance and hold up under real use.
          </h2>
          <p className="text-muted-foreground max-w-xl leading-[1.7]">
            We combine clear product thinking, strong interface craft and engineering discipline so the final product feels expensive before anyone reads a line of copy.
          </p>
        </div>

        <div className="rounded-[26px] border border-border bg-white p-3 sm:p-4 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.18)]">
          <div className="overflow-hidden rounded-[18px] bg-background-soft aspect-[16/9]">
            <img
              src={opsGraph.url}
              alt="CodersDive product ecosystem with operations dashboard and connected business systems"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 reveal-child">
        <div className="text-sm text-muted-foreground">A mix of startup, SaaS and operational software work.</div>
        <Link to="/portfolio" className="link-blue shrink-0">View all <ArrowUpRight className="w-4 h-4" /></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <a href={p.url} target="_blank" rel="noreferrer" key={p.name} className="gallery-tile group reveal-child block hover:-translate-y-1 transition-transform duration-500 border border-border shadow-[0_12px_40px_-24px_rgba(0,0,0,0.18)]">
            <img src={p.img} alt={p.name} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-meta">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full" style={{ background: "hsl(var(--accent-blue))", color: "white" }}>{t}</span>
                  ))}
                </div>
                <div className="display text-2xl font-bold leading-tight">{p.name}</div>
                <div className="text-sm text-white/70 mt-1">{p.desc}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </Reveal>
);

export default ProjectsGallery;
