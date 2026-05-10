import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import helio from "@/assets/proj-helio.jpg";
import northwind from "@/assets/proj-northwind.jpg";
import loop from "@/assets/proj-loop.jpg";
import atlas from "@/assets/proj-atlas.jpg";
import skalable from "@/assets/proj-skalable.jpg";
import commerce from "@/assets/proj-commerce.jpg";

const projects = [
  { img: helio, name: "Helio", desc: "AI Sales Workspace", tags: ["Next.js", "OpenAI", "Postgres"] },
  { img: skalable, name: "Skalable", desc: "Web3 Wallet Platform", tags: ["React", "Solidity", "Web3.js"] },
  { img: northwind, name: "Northwind Capital", desc: "Fintech Trading Dashboard", tags: ["TypeScript", "WebSocket", "D3"] },
  { img: loop, name: "Loop Health", desc: "Healthcare SaaS", tags: ["React", "Node", "HIPAA"] },
  { img: atlas, name: "Atlas Logistics", desc: "Operations Platform", tags: ["Next.js", "GraphQL", "Mapbox"] },
  { img: commerce, name: "Merchly", desc: "E-commerce Admin", tags: ["Remix", "Stripe", "Shopify"] },
];

const ProjectsGallery = () => (
  <Reveal as="section" className="bg-background section">
    <div className="container-tight">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal-child">
        <div>
          <div className="label-eyebrow mb-6">Our Work</div>
          <h2 className="display text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-[1.05] max-w-3xl">
            We design <span style={{ color: "hsl(var(--accent-blue))" }}>SaaS products</span> for founders, creators and visionaries.
          </h2>
        </div>
        <Link to="/portfolio" className="link-blue shrink-0">View all <ArrowUpRight className="w-4 h-4" /></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Link to="/portfolio" key={p.name} className="gallery-tile group reveal-child block">
            <img src={p.img} alt={p.name} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-meta">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
                          style={{ background: "hsl(var(--accent-blue))", color: "white" }}>{t}</span>
                  ))}
                </div>
                <div className="display text-2xl font-bold leading-tight">{p.name}</div>
                <div className="text-sm text-white/70 mt-1">{p.desc}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </Reveal>
);

export default ProjectsGallery;
