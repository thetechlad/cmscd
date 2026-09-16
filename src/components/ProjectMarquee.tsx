import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";

const row1 = projects.slice(0, Math.ceil(projects.length / 2));
const row2 = projects.slice(Math.ceil(projects.length / 2)).reverse();

type CardP = { shot: string; name: string; tag: string; slug: string; bg: string };
const Card = ({ shot, name, tag, slug, bg }: CardP) => (
  <Link to={`/portfolio/${slug}`} className="group relative shrink-0 w-[460px] mx-3 block">
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.28)] group-hover:border-[hsl(var(--accent-blue))]/40">
      <div style={{ background: bg }}>
        <img src={shot} alt={name} loading="lazy" className="w-full h-[280px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className="absolute top-4 left-4 tag-pill !bg-white/90 !text-foreground">{tag}</div>
    </div>
    <div className="display font-bold text-lg mt-4 px-1 group-hover:text-accent-blue transition-colors">{name}</div>
  </Link>
);

const Track = ({ items, speed }: { items: CardP[]; speed: "marquee-slow" | "marquee-fast" }) => (
  <div className={`flex w-max ${speed}`}>
    {[...items, ...items].map((p, i) => (
      <Card key={i} {...p} />
    ))}
  </div>
);

const toCard = (p: (typeof projects)[number]): CardP => ({ shot: p.shot, name: p.name, tag: p.tag, slug: p.slug, bg: p.bg });

const ProjectMarquee = () => (
  <Reveal as="section" className="bg-background-soft section overflow-hidden">
    <div className="container-tight mb-14 reveal-child">
      <div className="label-eyebrow mb-6">Showreel</div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="display text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-[1.05] max-w-3xl">
          Recent shipments, <span style={{ color: "hsl(var(--accent-blue-ink))" }}>live in production</span>.
        </h2>
        <p className="text-muted-foreground max-w-sm">A snapshot of products we've designed, built and shipped over the last 12 months.</p>
      </div>
    </div>

    <div className="marquee-pause space-y-6">
      <Track items={row1.map(toCard)} speed="marquee-slow" />
      <Track items={row2.map(toCard)} speed="marquee-fast" />
    </div>
  </Reveal>
);

export default ProjectMarquee;
