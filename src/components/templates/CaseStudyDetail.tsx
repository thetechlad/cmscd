import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Markdown from "@/components/Markdown";
import Breadcrumbs from "@/components/templates/Breadcrumbs";
import CtaRibbon from "@/components/templates/CtaRibbon";
import RelatedContent from "@/components/templates/RelatedContent";
import CoverArt from "@/components/templates/CoverArt";
import ContrastBand from "@/components/templates/ContrastBand";
import FeatureImage from "@/components/templates/FeatureImage";
import MediaGallery from "@/components/templates/MediaGallery";
import ProblemSolution from "@/components/templates/ProblemSolution";
import FeatureWalkthrough from "@/components/templates/FeatureWalkthrough";
import { getPageImage } from "@/data/pageImages";
import { breadcrumbSchema, articleSchema } from "@/lib/seo";
import { ContentPage } from "@/data/pageData";
import { parseSections, findSection, parseSubsections, parseCta } from "@/lib/content";

const CaseStudyDetail = ({ page }: { page: ContentPage }) => {
  const { intro, sections } = parseSections(page.body);

  const challenge = findSection(sections, "the challenge", "challenge");
  const direction = findSection(sections, "product direction", "direction");
  const includes = findSection(sections, "what the product includes", "product includes");
  const experience = findSection(sections, "experience principles");
  const engineering = findSection(sections, "engineering considerations");
  const outcome = findSection(sections, "outcome");
  const next = findSection(sections, "next evolution");
  const ctaSection = findSection(sections, "cta");

  const features = includes ? parseSubsections(includes.body) : [];
  const cta = parseCta(ctaSection?.body);
  const heroImg = getPageImage(page.slug);

  const narrative = [direction, experience, engineering, outcome, next].filter(Boolean) as {
    title: string;
    body: string;
  }[];

  const jsonLd = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Work", path: "/portfolio" },
      { name: page.title, path: page.url },
    ]),
    articleSchema({
      title: page.seoTitle || page.title,
      description: page.metaDescription || page.subtitle,
      path: page.url,
      image: heroImg || "",
      section: "Case study",
    }),
  ];

  return (
    <Layout
      title={page.seoTitle || page.title}
      description={page.metaDescription}
      path={page.url}
      image={heroImg}
      type="article"
      jsonLd={jsonLd}
    >
      <section className="bg-mesh pt-[132px] pb-14 md:pb-20 border-b border-border">
        <div className="container-tight">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Work", to: "/portfolio" },
              { label: page.title },
            ]}
          />
          <span className="tag-pill mb-6">Case study · Draft</span>
          <h1 className="display text-[32px] md:text-[46px] lg:text-[56px] font-bold leading-[1.05] max-w-4xl mb-6">
            {page.title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-[1.55] mb-10">
            {page.subtitle}
          </p>
          {heroImg ? (
            <img
              src={heroImg}
              alt={page.title}
              width={1280}
              height={896}
              className="w-full h-56 md:h-96 rounded-2xl glow-ring object-cover"
            />
          ) : (
            <CoverArt
              seed={page.slug}
              label={page.title}
              className="w-full h-56 md:h-80 rounded-2xl glow-ring"
            />
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-tight grid lg:grid-cols-12 gap-12">
          {/* Sticky facts */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="card-light p-6">
                <div className="label-eyebrow mb-5">Project facts</div>
                <dl className="space-y-4 text-sm">
                  {[
                    ["Type", "Product engineering"],
                    ["Status", "Reference draft"],
                    ["Disclosure", "Details generalized"],
                    ["Metrics", "Verification pending"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-medium text-foreground text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <Link to="/start-a-project" className="btn-blue w-full mt-6 h-11">
                  Start a project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Narrative */}
          <div className="lg:col-span-8 space-y-14">
            {intro && (
              <p className="display text-xl md:text-2xl font-semibold leading-[1.4]">{intro}</p>
            )}

            {challenge && (
              <Reveal>
                <div className="label-eyebrow mb-4">The challenge</div>
                <Markdown content={challenge.body} />
              </Reveal>
            )}

            {features.length > 0 && (
              <Reveal>
                <div className="label-eyebrow mb-6">What the product includes</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((f, i) => (
                    <div key={i} className="reveal-child card-light p-6">
                      <h3 className="display text-base font-bold mb-2 leading-snug">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-[1.6]">{f.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {narrative.map((s, i) => (
              <div key={i} className="space-y-14">
                <Reveal>
                  <div className="label-eyebrow mb-4">{s.title}</div>
                  <Markdown content={s.body} />
                </Reveal>
                {i === 0 && (
                  <FeatureImage
                    slug={page.slug}
                    label={page.title}
                    aspect="aspect-[16/10]"
                    caption="Representative product surface. Client details generalized for confidentiality."
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContrastBand
        eyebrow="What this build demonstrates"
        headline="How we turn an ambiguous brief into a working product"
        intro="Every engagement is different, but the operating principles behind this work are consistent — and they're the reason projects like this ship and stay shipped."
        points={[
          { title: "Clear problem framing", body: "We start from the outcome and the riskiest assumption, not a feature wishlist." },
          { title: "Design + engineering as one", body: "Interface, data, and architecture decisions made together, not in silos." },
          { title: "Production discipline", body: "Testing, monitoring, and documentation built in so launch isn't a cliff edge." },
          { title: "Room to evolve", body: "Foundations that support the next phase instead of blocking it." },
        ]}
      />

      <RelatedContent currentUrl={page.url} />

      <CtaRibbon headline={cta.headline} action={cta.action} />
    </Layout>
  );
};

export default CaseStudyDetail;
