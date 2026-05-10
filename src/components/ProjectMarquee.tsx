import helio from "@/assets/proj-helio.jpg";
import northwind from "@/assets/proj-northwind.jpg";
import loop from "@/assets/proj-loop.jpg";
import atlas from "@/assets/proj-atlas.jpg";
import skalable from "@/assets/proj-skalable.jpg";
import commerce from "@/assets/proj-commerce.jpg";
import Reveal from "./Reveal";

const row1 = [
  { img: helio, name: "Helio", tag: "AI Sales" },
  { img: northwind, name: "Northwind", tag: "Fintech" },
  { img: loop, name: "Loop Health", tag: "Healthcare" },
  { img: atlas, name: "Atlas", tag: "Logistics" },
  { img: skalable, name: "Skalable", tag: "Web3" },
  { img: commerce, name: "Merchly", tag: "Commerce" },
];
const row2 = [...row1].reverse();

const Card = ({ img, name, tag }: { img: string; name: string; tag: string }) => (
  <div className="group relative shrink-0 w-[460px] mx-3">
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.18)]">
      <img src={img} alt={name} loading="lazy" className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      <div className="absolute top-4 left-4 tag-pill !bg-white/90 !text-foreground">{tag}</div>
    </div>
    <div className="display font-bold text-lg mt-4 px-1">{name}</div>
  </div>
);

const Track = ({ items, speed }: { items: typeof row1; speed: "marquee-slow" | "marquee-fast" }) => (
  <div className={`flex w-max ${speed}`}>
    {[...items, ...items].map((p, i) => (
      <Card key={i} {...p} />
    ))}
  </div>
);

const ProjectMarquee = () => (
  <Reveal as="section" className="bg-background-soft section overflow-hidden">
    <div className="container-tight mb-14 reveal-child">
      <div className="label-eyebrow mb-6">Showreel</div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="display text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-[1.05] max-w-3xl">
          Recent shipments — <span style={{ color: "hsl(var(--accent-blue))" }}>live in production</span>.
        </h2>
        <p className="text-muted-foreground max-w-sm">A snapshot of products we've designed, built and shipped over the last 12 months.</p>
      </div>
    </div>

    <div className="marquee-pause space-y-6">
      <Track items={row1} speed="marquee-slow" />
      <Track items={row2} speed="marquee-fast" />
    </div>
  </Reveal>
);

export default ProjectMarquee;
