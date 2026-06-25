import { useParams, Link, Navigate } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Breadcrumb from "@/components/site/Breadcrumb";
import Reveal from "@/components/site/Reveal";
import { CASES, getCase } from "@/content/cases";

export default function WorkDetail() {
  const { slug = "" } = useParams();
  const c = getCase(slug);
  if (!c) return <Navigate to="/work" replace />;
  const next = CASES[(CASES.indexOf(c) + 1) % CASES.length];

  return (
    <>
      <SeoHead title={c.seo.title} description={c.seo.description} path={`/work/${c.slug}`} type="article" />
      <section className="container-cd pt-20 md:pt-28 pb-16">
        <Breadcrumb items={[{ label: "Work", href: "/work" }, { label: c.client }]} />
        <p className="mono text-aqua mt-8">{c.label} · {c.type}</p>
        <h1 className="display-1 mt-4 max-w-5xl">{c.client}</h1>
        <p className="mt-8 text-lg text-foreground/70 max-w-2xl">{c.problem}</p>
      </section>

      <section className="section pt-0">
        <div className="container-cd grid grid-cols-12 gap-10">
          <aside className="col-span-12 lg:col-span-3 lg:sticky lg:top-28 h-fit space-y-6">
            <div><p className="mono text-foreground/45">Industries</p><p className="mt-2">{c.industries.join(", ")}</p></div>
            <div><p className="mono text-foreground/45">Services</p><p className="mt-2">{c.services.join(", ")}</p></div>
            <div><p className="mono text-foreground/45">Stack</p><p className="mt-2">{c.tech.join(", ")}</p></div>
            <div><p className="mono text-foreground/45">Status</p><p className="mt-2">{c.outcomeNote}</p></div>
          </aside>
          <div className="col-span-12 lg:col-span-9 space-y-12">
            <Reveal>
              <h2 className="display-3">Challenge</h2>
              <p className="mt-4 text-foreground/75 text-lg">{c.problem}</p>
            </Reveal>
            <Reveal>
              <h2 className="display-3">Approach</h2>
              <ol className="mt-4 space-y-4">
                {c.approach.map((a, i) => (
                  <li key={a} className="flex gap-4 border-b border-foreground/10 pb-4"><span className="mono text-aqua">{String(i+1).padStart(2,"0")}</span><span className="text-foreground/85">{a}</span></li>
                ))}
              </ol>
            </Reveal>
            <Reveal>
              <h2 className="display-3">Deliverables</h2>
              <ul className="mt-4 space-y-3">
                {c.deliverables.map((d) => <li key={d} className="flex gap-3 border-b border-foreground/10 pb-3"><span className="rule-aqua mt-3 shrink-0" /><span>{d}</span></li>)}
              </ul>
            </Reveal>
            <div className="card-cd p-6">
              <p className="mono text-foreground/45">Outcomes</p>
              <p className="mt-2 text-foreground/75">{c.outcomeNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-7"><p className="eyebrow">Next case</p><h2 className="display-2 mt-4">{next.client}</h2></div>
          <div className="col-span-12 md:col-span-5 md:text-right"><Link to={`/work/${next.slug}`} className="btn btn-ghost">Read next →</Link></div>
        </div>
      </section>

      <CTABand eyebrow="Build with us" title="Have a project that belongs in here?" primary={{ label: "Start a project", href: "/start-a-project" }} />
    </>
  );
}