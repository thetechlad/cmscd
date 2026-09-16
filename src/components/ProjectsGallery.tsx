import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { projects, CATEGORY_LABELS } from "@/data/projects";

// Featured selection for the homepage gallery (one strong pick per category + more)
const featured = projects.slice(0, 6);

const ProjectsGallery = () => (
  <Reveal as="section" className="bg-background section">
    <div className="container-tight">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal-child">
        <div>
          <div className="label-eyebrow mb-6">Our Work</div>
          <h2 className="display text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-[1.05] max-w-3xl">
            We design <span className="squiggle" style={{ color: "hsl(var(--accent-blue-ink))" }}>SaaS products</span> for founders, creators and visionaries.
          </h2>
        </div>
        <Link to="/portfolio" className="link-blue shrink-0">View all <ArrowUpRight className="w-4 h-4" /></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((p) => (
          <Link to={`/portfolio/${p.slug}`} key={p.slug} className="gallery-tile group reveal-child block hover:-translate-y-1 transition-transform duration-500">
            <img src={p.shot} alt={`${p.name} website screenshot`} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-meta">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
                        style={{ background: "hsl(var(--accent-blue))", color: "hsl(var(--primary))" }}>{CATEGORY_LABELS[p.category]}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-white/15 text-white">{p.tag}</span>
                </div>
                <div className="display text-2xl font-bold leading-tight">{p.name}</div>
                <div className="text-sm text-white/70 mt-1">{p.summary}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </Reveal>
);

export default ProjectsGallery;
