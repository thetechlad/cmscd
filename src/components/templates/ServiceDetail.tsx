import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Markdown from "@/components/Markdown";
import Breadcrumbs from "@/components/templates/Breadcrumbs";
import CtaRibbon from "@/components/templates/CtaRibbon";
import ProofStrip from "@/components/templates/ProofStrip";
import FaqAccordion from "@/components/templates/FaqAccordion";
import RelatedContent from "@/components/templates/RelatedContent";
import Motif from "@/components/templates/Motif";
import { ContentPage } from "@/data/pageData";
import {
  parseSections,
  findSection,
  parseSubsections,
  parseBullets,
  parseSteps,
  parseCta,
} from "@/lib/content";

const ServiceDetail = ({ page }: { page: ContentPage }) => {
  const { intro, sections } = parseSections(page.body);

  const whenUseful = findSection(sections, "when this service is useful", "when this is useful");
  const deliver = findSection(sections, "what we can deliver", "what we build");
  const approach = findSection(sections, "our approach", "approach");
  const receive = findSection(sections, "what you receive");
  const why = findSection(sections, "why codersdive");
  const faqSection = findSection(sections, "frequently asked questions", "faq");
  const ctaSection = findSection(sections, "cta");

  const capabilities = deliver ? parseSubsections(deliver.body) : [];
  const usefulBullets = whenUseful ? parseBullets(whenUseful.body) : [];
  const receiveBullets = receive ? parseBullets(receive.body) : [];
  const steps = approach ? parseSteps(approach.body) : [];
  const faqs = faqSection
    ? parseSubsections(faqSection.body).map((s) => ({ q: s.title, a: s.body }))
    : [];
  const cta = parseCta(ctaSection?.body);

  return (
    <Layout title={page.seoTitle || page.title} description={page.metaDescription}>
      {/* Hero */}
      <section className="bg-mesh pt-[132px] pb-16 md:pb-24 border-b border-border relative overflow-hidden">
        <div className="container-tight relative">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: page.title },
            ]}
          />
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="label-eyebrow mb-6">AI & Product Engineering</div>
              <h1 className="display text-[34px] md:text-[46px] lg:text-[58px] font-bold leading-[1.04] mb-6">
                {page.title}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-[1.55] mb-8">
                {page.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/start-a-project" className="btn-blue btn-shine h-12 px-7">
                  {cta.action || "Discuss this service"} <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-secondary h-12">
                  All services
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-square max-w-[380px] mx-auto rounded-3xl bg-background-soft border border-border p-6 glow-ring">
                <Motif seed={page.slug} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProofStrip />

      {/* Intro statement */}
      {intro && (
        <Reveal as="section" className="section">
          <div className="container-tight">
            <p className="display text-2xl md:text-[32px] font-semibold leading-[1.3] max-w-4xl">
              {intro}
            </p>
          </div>
        </Reveal>
      )}

      {/* When useful */}
      {usefulBullets.length > 0 && (
        <Reveal as="section" className="bg-background-soft section border-y border-border">
          <div className="container-tight grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="label-eyebrow mb-5">When this helps</div>
              <h2 className="display text-2xl md:text-3xl font-bold leading-snug">
                Signals it's time to bring us in
              </h2>
            </div>
            <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {usefulBullets.map((b, i) => (
                <li key={i} className="reveal-child flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-accent-blue-soft flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent-blue" />
                  </span>
                  <span className="text-muted-foreground leading-[1.6] text-[15px]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

      {/* Capabilities */}
      {capabilities.length > 0 && (
        <Reveal as="section" className="section">
          <div className="container-tight">
            <div className="max-w-2xl mb-12">
              <div className="label-eyebrow mb-5">What we deliver</div>
              <h2 className="display text-2xl md:text-4xl font-bold leading-tight">
                Capabilities, built to operate in the real world
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c, i) => (
                <div key={i} className="reveal-child card-light p-7">
                  <div className="text-xs font-mono text-muted-foreground mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="display text-lg font-bold mb-3 leading-snug">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.65]">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* Approach */}
      {steps.length > 0 && (
        <Reveal as="section" className="bg-foreground/[0.02] section border-y border-border">
          <div className="container-tight grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="label-eyebrow mb-5">Our approach</div>
              <h2 className="display text-2xl md:text-3xl font-bold leading-snug">
                A path from uncertainty to shipped
              </h2>
            </div>
            <ol className="lg:col-span-8 space-y-6">
              {steps.map((s, i) => (
                <li key={i} className="reveal-child flex gap-5">
                  <span className="shrink-0 display text-2xl font-bold text-accent-blue/40 w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-muted-foreground leading-[1.7] pt-1">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      )}

      {/* What you receive + why */}
      {(receiveBullets.length > 0 || why) && (
        <Reveal as="section" className="section">
          <div className="container-tight grid lg:grid-cols-2 gap-12">
            {receiveBullets.length > 0 && (
              <div>
                <div className="label-eyebrow mb-5">What you receive</div>
                <ul className="space-y-4">
                  {receiveBullets.map((b, i) => (
                    <li key={i} className="flex gap-3 border-b border-border pb-4">
                      <Check className="w-4 h-4 text-accent-blue shrink-0 mt-1" />
                      <span className="text-muted-foreground leading-[1.6] text-[15px]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {why && (
              <div className="lg:pl-4">
                <div className="label-eyebrow mb-5">Why CodersDive</div>
                <Markdown content={why.body} />
              </div>
            )}
          </div>
        </Reveal>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <Reveal as="section" className="bg-background-soft section border-y border-border">
          <div className="container-tight grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="label-eyebrow mb-5">Questions</div>
              <h2 className="display text-2xl md:text-3xl font-bold leading-snug">
                Common questions
              </h2>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </Reveal>
      )}

      <RelatedContent currentUrl={page.url} />

      <CtaRibbon headline={cta.headline} action={cta.action} />
    </Layout>
  );
};

export default ServiceDetail;
