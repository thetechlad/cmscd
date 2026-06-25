import { useParams, Link, Navigate } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import Breadcrumb from "@/components/site/Breadcrumb";
import FAQAccordion from "@/components/site/FAQAccordion";
import { getService, SERVICES } from "@/content/services";
import { CASES } from "@/content/cases";

export default function ServiceDetail() {
  const { slug = "" } = useParams();
  const s = getService(slug);
  if (!s) return <Navigate to="/services" replace />;

  const related = CASES.filter((c) => c.services.some((x) => x.toLowerCase().includes(s.title.toLowerCase().split(" ")[0]))).slice(0, 2);

  return (
    <>
      <SeoHead title={s.seo.title} description={s.seo.description} path={`/services/${s.slug}`}
        jsonLd={{ "@context":"https://schema.org", "@type":"Service", name: s.title, description: s.tagline, provider: { "@type":"Organization", name:"CodersDive" } }} />

      <section className="container-cd pt-20 md:pt-28 pb-16">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: s.family }, { label: s.title }]} />
        <p className="mono text-aqua mt-8">{s.family}</p>
        <h1 className="display-1 mt-4 max-w-5xl">{s.title}</h1>
        <p className="display-3 mt-8 max-w-3xl text-foreground/80">{s.tagline}</p>
        <p className="mt-6 max-w-2xl text-foreground/70">{s.intro}</p>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">When useful</p>
            <h2 className="display-3 mt-5">Signs this engagement fits.</h2>
          </div>
          <ul className="col-span-12 md:col-span-7 space-y-4">
            {s.whenUseful.map((u) => <li key={u} className="flex gap-3 text-foreground/85 border-b border-foreground/10 pb-4"><span className="rule-aqua mt-3 shrink-0" /> <span>{u}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd">
          <div className="grid grid-cols-12 gap-10 mb-10">
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow">Capabilities</p>
              <h2 className="display-2 mt-5">What we do, specifically.</h2>
            </div>
          </div>
          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
            {s.capabilities.map((c) => (
              <div key={c.title} className="bg-ink p-7">
                <h3 className="font-serif text-2xl">{c.title}</h3>
                <p className="text-foreground/65 mt-3">{c.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section on-light bg-mist border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow">Approach</p>
            <h2 className="display-2 mt-5">How an engagement runs.</h2>
            <ol className="mt-8 space-y-4">{s.approach.map((a, i) => (
              <li key={a} className="flex gap-4 border-b border-foreground/10 pb-4"><span className="mono text-foreground/50">{String(i+1).padStart(2,"0")}</span><span>{a}</span></li>
            ))}</ol>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow">Deliverables</p>
            <h2 className="display-2 mt-5">What you walk away with.</h2>
            <ul className="mt-8 space-y-4">{s.deliverables.map((d) => <li key={d} className="flex gap-3 border-b border-foreground/10 pb-4"><span className="rule-aqua mt-3 shrink-0" /><span>{d}</span></li>)}</ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section border-t border-foreground/10">
          <div className="container-cd">
            <div className="grid grid-cols-12 gap-10 mb-10"><div className="col-span-12 md:col-span-6"><p className="eyebrow">Related work</p><h2 className="display-2 mt-5">Where this has shown up.</h2></div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((c) => (
                <Link key={c.slug} to={`/work/${c.slug}`} className="card-cd p-7">
                  <p className="mono text-aqua">{c.label}</p>
                  <h3 className="font-serif text-2xl mt-3">{c.client}</h3>
                  <p className="text-foreground/65 mt-2">{c.problem}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5"><p className="eyebrow">FAQs</p><h2 className="display-2 mt-5">Practical questions.</h2></div>
          <div className="col-span-12 md:col-span-7"><FAQAccordion items={s.faqs} /></div>
        </div>
      </section>

      <CTABand eyebrow="Next step" title={`Talk to us about ${s.title.toLowerCase()}.`} primary={{ label: "Start a project", href: "/start-a-project" }} secondary={{ label: "All services", href: "/services" }} />
    </>
  );
}

// Static helper to enable easy <Route /> typing
export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);