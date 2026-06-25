import { useParams, Navigate } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";
import CTABand from "@/components/site/CTABand";
import Breadcrumb from "@/components/site/Breadcrumb";
import Reveal from "@/components/site/Reveal";
import { getIndustry } from "@/content/industries";

export default function IndustryDetail() {
  const { slug = "" } = useParams();
  const i = getIndustry(slug);
  if (!i) return <Navigate to="/industries" replace />;
  return (
    <>
      <SeoHead title={i.seo.title} description={i.seo.description} path={`/industries/${i.slug}`} />
      <section className="container-cd pt-20 md:pt-28 pb-16">
        <Breadcrumb items={[{ label: "Industries", href: "/industries" }, { label: i.title }]} />
        <h1 className="display-1 mt-8 max-w-5xl">{i.title}</h1>
        <p className="display-3 mt-8 max-w-3xl text-foreground/80">{i.tagline}</p>
      </section>

      <section className="section border-t border-foreground/10">
        <div className="container-cd grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6"><p className="eyebrow">Common challenges</p><h2 className="display-3 mt-5">What we usually find.</h2>
            <Reveal stagger><ul className="mt-8 space-y-4">{i.challenges.map((c) => <li key={c} className="flex gap-3 border-b border-foreground/10 pb-3"><span className="rule-aqua mt-3 shrink-0" /><span>{c}</span></li>)}</ul></Reveal>
          </div>
          <div className="col-span-12 md:col-span-6"><p className="eyebrow">What we build</p><h2 className="display-3 mt-5">Typical engagements.</h2>
            <Reveal stagger><ul className="mt-8 space-y-4">{i.whatWeBuild.map((c) => <li key={c} className="flex gap-3 border-b border-foreground/10 pb-3"><span className="rule-aqua mt-3 shrink-0" /><span>{c}</span></li>)}</ul></Reveal>
          </div>
        </div>
      </section>

      <section className="section on-light bg-mist border-t border-foreground/10">
        <div className="container-cd"><p className="eyebrow">Trust requirements</p><h2 className="display-2 mt-5">Where engineering meets compliance.</h2>
          <Reveal stagger className="mt-10 grid sm:grid-cols-3 gap-6">{i.trust.map((t) => <div key={t} className="card-cd p-6 bg-background"><p className="font-serif text-xl">{t}</p></div>)}</Reveal>
        </div>
      </section>

      <CTABand eyebrow="Discuss" title={`Discuss ${i.title.toLowerCase()}.`} primary={{ label: "Start a project", href: "/start-a-project" }} />
    </>
  );
}