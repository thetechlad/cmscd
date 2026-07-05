import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import imgNook from "@/assets/shot-nooktravel.png";
import imgSuuper from "@/assets/shot-suuper.png";
import imgPlural from "@/assets/shot-plural.png";
import imgModisoft from "@/assets/shot-modisoft.png";
import imgKidan from "@/assets/shot-kidan.png";
import imgVinn from "@/assets/shot-vinncorp.png";
import imgOrganix from "@/assets/shot-ogorganix.png";

const projects = [
  { url: "https://suuper.cc",          name: "Suuper",          img: imgSuuper,   desc: "AI support that answers customers in seconds",  tags: ["AI", "React", "Realtime"] },
  { url: "https://kidan.co",           name: "Kidan",           img: imgKidan,    desc: "End-to-end IT services for Swiss enterprises",   tags: ["Enterprise", "Security", "Cloud"] },
  { url: "https://modisoft.com",       name: "Modisoft",        img: imgModisoft, desc: "Retail & restaurant POS + back-office platform",  tags: ["SaaS", "POS", "Stripe"] },
  { url: "https://pluraldynamics.com", name: "Plural Dynamics", img: imgPlural,   desc: "Global technology consulting & IT solutions",     tags: ["TypeScript", "AWS", "GraphQL"] },
  { url: "https://vinncorp.com",       name: "VinnCorp",        img: imgVinn,     desc: "On-demand engineering & product talent",          tags: ["Web", "Mobile", "Teams"] },
  { url: "https://nooktravel.space",   name: "NookTravel",      img: imgNook,     desc: "AI trip planning & itinerary platform",           tags: ["AI", "Next.js", "Postgres"] },
  { url: "https://ogorganix.com.pk",   name: "OG Organix",      img: imgOrganix,  desc: "Science-led skincare e-commerce store",           tags: ["E-commerce", "Shopify", "Brand"] },
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
            <img src={p.img} alt={`${p.name} website screenshot`} loading="lazy" />
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
