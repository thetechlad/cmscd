import { Link } from "react-router-dom";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Markdown from "@/components/Markdown";
import Breadcrumbs from "@/components/templates/Breadcrumbs";
import CtaRibbon from "@/components/templates/CtaRibbon";
import RelatedContent from "@/components/templates/RelatedContent";
import Motif from "@/components/templates/Motif";
import { ContentPage } from "@/data/pageData";
import {
  parseSections,
  findSection,
  parseSubsections,
  parseBullets,
  parseCta,
} from "@/lib/content";

const IndustryDetail = ({ page }: { page: ContentPage }) => {
  const { intro, sections } = parseSections(page.body);

  const challenges = findSection(sections, "common challenges", "challenges");
  const build = findSection(sections, "what we build", "what we can deliver");
  const approach = findSection(sections, "our approach", "approach");
  const engagement = findSection(sections, "possible engagement", "engagement");
  const ctaSection = findSection(sections, "cta");

  const challengeBullets = challenges ? parseBullets(challenges.body) : [];
  const buildItems = build ? parseSubsections(build.body) : [];
  const cta = parseCta(ctaSection?.body);

  return (
    <Layout title={page.seoTitle || page.title} description={page.metaDescription}>
      <section className="bg-mesh pt-[132px] pb-16 md:pb-24 border-b border-border relative overflow-hidden">
        <div className="container-tight relative">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Industries", to: "/industries" },
              { label: page.title },
            ]}
          />
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="label-eyebrow mb-6">Industry</div>
              <h1 className="display text-[34px] md:text-[46px] lg:text-[56px] font-bold leading-[1.05] mb-6">
                {page.title}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-[1.55] mb-8">
                {page.subtitle}
              </p>
              <Link to="/start-a-project" className="btn-blue btn-shine h-12 px-7">
                {cta.action || "Discuss your product"} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-square max-w-[380px] mx-auto rounded-3xl bg-background-soft border border-border p-6 glow-ring">
                <Motif seed={page.slug} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {intro && (
        <Reveal as="section" className="section">
          <div className="container-tight">
            <p className="display text-2xl md:text-[32px] font-semibold leading-[1.3] max-w-4xl">
              {intro}
            </p>
          </div>
        </Reveal>
      )}

      {challengeBullets.length > 0 && (
        <Reveal as="section" className="bg-background-soft section border-y border-border">
          <div className="container-tight">
            <div className="max-w-2xl mb-12">
              <div className="label-eyebrow mb-5">Common challenges</div>
              <h2 className="display text-2xl md:text-4xl font-bold leading-tight">
                What slows teams down in this space
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {challengeBullets.map((b, i) => (
                <div key={i} className="reveal-child flex gap-4 card-light p-6">
                  <AlertCircle className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-[1.6] text-[15px]">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {buildItems.length > 0 && (
        <Reveal as="section" className="section">
          <div className="container-tight">
            <div className="max-w-2xl mb-12">
              <div className="label-eyebrow mb-5">What we build</div>
              <h2 className="display text-2xl md:text-4xl font-bold leading-tight">
                Systems tuned to how this industry operates
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {buildItems.map((c, i) => (
                <div key={i} className="reveal-child card-light p-7">
                  <h3 className="display text-lg font-bold mb-3 leading-snug">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.65]">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {(approach || engagement) && (
        <Reveal as="section" className="bg-foreground/[0.02] section border-y border-border">
          <div className="container-tight grid lg:grid-cols-2 gap-12">
            {approach && (
              <div>
                <div className="label-eyebrow mb-5">Our approach</div>
                <Markdown content={approach.body} />
              </div>
            )}
            {engagement && (
              <div>
                <div className="label-eyebrow mb-5">Possible engagement</div>
                <Markdown content={engagement.body} />
              </div>
            )}
          </div>
        </Reveal>
      )}

      <RelatedContent currentUrl={page.url} />

      <CtaRibbon headline={cta.headline} action={cta.action} />
    </Layout>
  );
};

export default IndustryDetail;
