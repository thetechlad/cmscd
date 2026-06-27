import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Markdown from "@/components/Markdown";
import Breadcrumbs from "@/components/templates/Breadcrumbs";
import CtaRibbon from "@/components/templates/CtaRibbon";
import { ContentPage } from "@/data/pageData";
import { parseSections, parseBullets, Section } from "@/lib/content";

/* ---- Specialized: Engagement models comparison ---- */
const EngagementLayout = ({ sections, last }: { sections: Section[]; last?: Section }) => (
  <Reveal as="section" className="section">
    <div className="container-tight">
      <div className="grid md:grid-cols-2 gap-5">
        {sections.map((s, i) => (
          <div key={s.title} className="reveal-child card-light p-8 flex flex-col">
            <div className="text-xs font-mono text-accent-blue mb-4">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h2 className="display text-xl font-bold mb-3 leading-snug">{s.title}</h2>
            <div className="text-sm">
              <Markdown content={s.body} />
            </div>
          </div>
        ))}
      </div>
      {last && (
        <div className="mt-12 max-w-3xl">
          <h2 className="display text-2xl font-bold mb-4">{last.title}</h2>
          <Markdown content={last.body} />
        </div>
      )}
    </div>
  </Reveal>
);

/* ---- Specialized: Technology constellation ---- */
const TechLayout = ({ sections }: { sections: Section[] }) => (
  <Reveal as="section" className="section">
    <div className="container-tight">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
        {sections.map((s) => {
          const tags = parseBullets(s.body);
          return (
            <div key={s.title} className="reveal-child">
              <h2 className="display text-lg font-bold mb-5 pb-3 border-b border-border">
                {s.title}
              </h2>
              {tags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {tags.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-background-soft border border-border text-sm text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-sm">
                  <Markdown content={s.body} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </Reveal>
);

/* ---- Generic: alternating framed sections ---- */
const GenericLayout = ({ intro, sections }: { intro: string; sections: Section[] }) => (
  <>
    {intro && (
      <Reveal as="section" className="section">
        <div className="container-tight">
          <p className="display text-2xl md:text-[32px] font-semibold leading-[1.3] max-w-4xl">
            {intro}
          </p>
        </div>
      </Reveal>
    )}
    {sections.map((s, i) => (
      <Reveal
        key={s.title}
        as="section"
        className={`section ${i % 2 === 0 ? "bg-background-soft border-y border-border" : ""}`}
      >
        <div className="container-tight grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono text-accent-blue mb-3">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h2 className="display text-2xl md:text-3xl font-bold leading-snug">{s.title}</h2>
          </div>
          <div className="lg:col-span-8 max-w-2xl">
            <Markdown content={s.body} />
          </div>
        </div>
      </Reveal>
    ))}
  </>
);

const CompanyPage = ({ page }: { page: ContentPage }) => {
  const { intro, sections } = parseSections(page.body);

  let layout;
  if (page.url === "/engagement-models") {
    const last = sections.find((s) => /commercial/i.test(s.title));
    const models = sections.filter((s) => s !== last);
    layout = <EngagementLayout sections={models} last={last} />;
  } else if (page.url === "/technology-stack") {
    layout = <TechLayout sections={sections} />;
  } else {
    layout = <GenericLayout intro={intro} sections={sections} />;
  }

  return (
    <Layout title={page.seoTitle || page.title} description={page.metaDescription}>
      <section className="bg-mesh pt-[132px] pb-16 md:pb-20 border-b border-border">
        <div className="container-tight">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: page.title }]} />
          <div className="label-eyebrow mb-5">{page.type}</div>
          <h1 className="display text-[32px] md:text-[48px] lg:text-[58px] font-bold leading-[1.05] max-w-3xl mb-5">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-[1.55]">
              {page.subtitle}
            </p>
          )}
        </div>
      </section>

      {layout}

      <CtaRibbon />
    </Layout>
  );
};

export default CompanyPage;
