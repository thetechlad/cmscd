import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import imgNook from "@/assets/proj-nooktravel.jpg";
import imgSuuper from "@/assets/proj-suuper.jpg";
import imgPlural from "@/assets/proj-plural.jpg";
import imgModisoft from "@/assets/proj-modisoft.jpg";
import imgKidan from "@/assets/proj-kidan.jpg";

const projects = [
  { url: "https://nooktravel.space",   name: "NookTravel",      img: imgNook,     desc: "Travel discovery & itinerary platform", tags: ["Next.js", "Mapbox", "Postgres"] },
  { url: "https://suuper.cc",          name: "Suuper",          img: imgSuuper,   desc: "Consumer super-app experience",         tags: ["React Native", "Node", "Realtime"] },
  { url: "https://pluraldynamics.com", name: "Plural Dynamics", img: imgPlural,   desc: "Enterprise systems engineering",        tags: ["TypeScript", "AWS", "GraphQL"] },
  { url: "https://modisoft.com",       name: "Modisoft",        img: imgModisoft, desc: "Retail & restaurant POS platform",      tags: ["React", "Node", "Stripe"] },
  { url: "https://kidan.cc",           name: "Kidan",           img: imgKidan,    desc: "Web3 product studio",                   tags: ["Solidity", "Next.js", "Wagmi"] },
];


const ProjectsGallery = () => (
  <Reveal as="section" className="bg-background section">
    <div className="container-tight">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal-child">
        <div>
          <div className="label-eyebrow mb-6">Our Work</div>
          <h2 className="display text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-[1.05] max-w-3xl">
            We design <span className="squiggle" style={{ color: "hsl(var(--accent-blue))" }}>SaaS products</span> for founders, creators and visionaries.
          </h2>
        </div>
        <Link to="/portfolio" className="link-blue shrink-0">View all <ArrowUpRight className="w-4 h-4" /></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <a href={p.url} target="_blank" rel="noreferrer" key={p.name} className="gallery-tile group reveal-child block hover:-translate-y-1 transition-transform duration-500">
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
          </a>
        ))}
      </div>
    </div>
  </Reveal>
);

export default ProjectsGallery;
