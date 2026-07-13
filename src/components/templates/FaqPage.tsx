import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/templates/Breadcrumbs";
import CtaRibbon from "@/components/templates/CtaRibbon";
import FaqAccordion from "@/components/templates/FaqAccordion";
import FaqSection from "@/components/FaqSection";
import { ContentPage } from "@/data/pageData";
import { parseSections } from "@/lib/content";

const FaqPage = ({ page }: { page: ContentPage }) => {
  const { intro, sections } = parseSections(page.body);
  const items = sections.map((s) => ({ q: s.title, a: s.body.replace(/\s+/g, " ").trim() }));

  return (
    <Layout title={page.seoTitle || page.title} description={page.metaDescription}>
      <section className="bg-background-soft pt-[128px] pb-12 border-b border-border">
        <div className="container-tight">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: page.title }]} />
          <div className="label-eyebrow mb-5">{page.type}</div>
          <h1 className="display text-[32px] md:text-[48px] font-bold leading-[1.05] max-w-3xl mb-4">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="text-muted-foreground max-w-2xl leading-[1.6] text-lg">{page.subtitle}</p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-tight max-w-3xl">
          {intro && <p className="text-muted-foreground leading-[1.7] mb-10">{intro}</p>}
          <FaqAccordion items={items} defaultOpen={0} />
        </div>
      </section>

      <FaqSection withHeading />

      <CtaRibbon />
    </Layout>
  );
};

export default FaqPage;
