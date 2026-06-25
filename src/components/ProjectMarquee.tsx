import Reveal from "./Reveal";

const shot = (url: string) =>
  `https://image.thum.io/get/width/1200/crop/800/noanimate/${url}`;

const row1 = [
  { url: "https://nooktravel.space",   name: "NookTravel",       tag: "Travel" },
  { url: "https://suuper.cc",          name: "Suuper",           tag: "Consumer" },
  { url: "https://pluraldynamics.com", name: "Plural Dynamics",  tag: "Enterprise" },
  { url: "https://modisoft.com",       name: "Modisoft",         tag: "Retail SaaS" },
  { url: "https://kidan.cc",           name: "Kidan",            tag: "Web3" },
].map((p) => ({ ...p, img: shot(p.url) }));

const row2 = [...row1].reverse();

type CardP = { img: string; name: string; tag: string; url: string };
const Card = ({ img, name, tag, url }: CardP) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="group relative shrink-0 w-[460px] mx-3 block"
  >
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.28)] group-hover:border-[hsl(var(--accent-blue))]/40">
      <img src={img} alt={name} loading="lazy" className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      <div className="absolute top-4 left-4 tag-pill !bg-white/90 !text-foreground">{tag}</div>
    </div>
    <div className="display font-bold text-lg mt-4 px-1 group-hover:text-accent-blue transition-colors">{name}</div>
  </a>
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
          Recent shipments, <span style={{ color: "hsl(var(--accent-blue))" }}>live in production</span>.
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
