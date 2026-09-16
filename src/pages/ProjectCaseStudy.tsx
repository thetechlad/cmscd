import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/templates/Breadcrumbs";
import CtaRibbon from "@/components/templates/CtaRibbon";
import { getProject, projects, CATEGORY_LABELS } from "@/data/projects";
import { breadcrumbSchema } from "@/lib/seo";

const BrowserFrame = ({ src, alt, bg }: { src: string; alt: string; bg: string }) => (
  <div className="rounded-2xl overflow-hidden border border-border shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] bg-white">
    <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border bg-background-soft">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
    </div>
    <div style={{ background: bg }}>
      <img src={src} alt={alt} className="w-full block" loading="eager" />
    </div>
  </div>
);

const ProjectCaseStudy = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/portfolio" replace />;

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const blocks: { title: string; body: string }[] = [
    { title: "Overview", body: project.overview },
    { title: "The challenge", body: project.challenge },
    { title: "Our approach", body: project.approach },
    { title: "The outcome", body: project.outcome },
  ];

  return (
    <Layout
      title={`${project.name} — ${project.tag} Case Study`}
      description={project.summary}
      path={`/portfolio/${project.slug}`}
      type="article"
      jsonLd={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/portfolio" },
          { name: project.name, path: `/portfolio/${project.slug}` },
        ]),
      ]}
    >
      {/* Hero */}
      <section className="bg-background pt-[120px] pb-14 border-b border-border">
        <div className="container-tight">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Work", to: "/portfolio" }, { label: project.name }]}
          />
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="tag-pill">{CATEGORY_LABELS[project.category]}</span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                  {project.tag}
                </span>
              </div>
              <h1 className="display text-[36px] md:text-[46px] lg:text-[60px] font-bold leading-[1.03]">
                {project.name}
              </h1>
              <p className="text-muted-foreground mt-5 max-w-xl leading-[1.7] text-lg">{project.summary}</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-blue btn-shine h-12 px-7"
                >
                  Visit live site <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link to="/portfolio" className="btn-secondary h-12">
                  <ArrowLeft className="w-4 h-4" /> All work
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <BrowserFrame src={project.shot} alt={`${project.name} website`} bg={project.bg} />
            </div>
          </div>
        </div>
      </section>

      {/* Meta strip */}
      <section className="bg-background-soft border-b border-border">
        <div className="container-tight py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["Client", project.name],
            ["Sector", project.sector],
            ["Our role", project.role],
            ["Year", project.year],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-1.5">
                {k}
              </div>
              <div className="text-sm font-medium text-foreground leading-snug">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative blocks (alternating surfaces) */}
      {blocks.map((b, i) => (
        <Reveal
          as="section"
          key={b.title}
          className={`${i % 2 === 0 ? "bg-background" : "bg-background-soft"} py-16 md:py-20`}
        >
          <div className="container-tight max-w-4xl reveal-child">
            <div className="label-eyebrow mb-4">{`0${i + 1}`}</div>
            <h2 className="display text-2xl md:text-4xl font-bold leading-[1.1] mb-5">{b.title}</h2>
            <p className="text-muted-foreground leading-[1.8] text-lg">{b.body}</p>
          </div>
        </Reveal>
      ))}

      {/* Stats band (blue accent for energy) */}
      <section className="section" style={{ background: "hsl(var(--accent-blue))" }}>
        <div className="container-tight grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {project.stats.map((s) => (
            <div key={s.label}>
              <div className="display text-4xl md:text-5xl font-bold text-primary">{s.value}</div>
              <div className="text-primary/80 text-sm mt-2 uppercase tracking-[0.12em]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features + Tech stack */}
      <Reveal as="section" className="bg-background section">
        <div className="container-tight grid lg:grid-cols-12 gap-12 reveal-child">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5">What we built</div>
            <h2 className="display text-2xl md:text-3xl font-bold mb-7">Key features</h2>
            <ul className="space-y-4">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: "hsl(var(--accent-blue-tint))", color: "hsl(var(--accent-blue-ink))" }}>
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-foreground/90 leading-[1.6]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="label-eyebrow mb-5">Highlights</div>
            <h2 className="display text-2xl md:text-3xl font-bold mb-7">Tech stack</h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-border bg-background-soft text-sm font-medium text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Related */}
      <Reveal as="section" className="bg-background-soft section">
        <div className="container-tight">
          <div className="flex items-end justify-between gap-6 mb-10 reveal-child">
            <h2 className="display text-2xl md:text-4xl font-bold">More work</h2>
            <Link to="/portfolio" className="link-blue shrink-0">
              View all <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/portfolio/${p.slug}`}
                className="reveal-child card-light overflow-hidden group hover:-translate-y-1 transition-transform duration-500 block"
              >
                <div className="overflow-hidden" style={{ background: p.bg }}>
                  <img
                    src={p.shot}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-44 object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="display text-lg font-bold group-hover:text-accent-blue transition-colors">
                    {p.name}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{p.tag}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <CtaRibbon headline={`Have a project like ${project.name}?`} />
    </Layout>
  );
};

export default ProjectCaseStudy;
