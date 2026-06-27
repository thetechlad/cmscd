import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/templates/Breadcrumbs";
import CtaRibbon from "@/components/templates/CtaRibbon";
import { ContentPage } from "@/data/pageData";
import { parseSubsections, getIndustries, findPageByTitle } from "@/lib/content";

/**
 * Generic hub page (currently /industries). Renders the lead-in paragraph and a
 * grid of sector cards linked to their detail pages.
 */
const HubPage = ({ page }: { page: ContentPage }) => {
  const items = parseSubsections(page.body);
  // Lead paragraph = text before the first ### heading.
  const lead = page.body.split(/\n###\s/)[0].trim();

  return (
    <Layout title={page.seoTitle || page.title} description={page.metaDescription}>
      <section className="bg-mesh pt-[132px] pb-16 md:pb-20 border-b border-border">
        <div className="container-tight">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: page.title }]} />
          <div className="label-eyebrow mb-5">{page.type}</div>
          <h1 className="display text-[34px] md:text-[52px] lg:text-[60px] font-bold leading-[1.04] max-w-3xl mb-5">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-[1.55]">
              {page.subtitle}
            </p>
          )}
        </div>
      </section>

      {lead && (
        <section className="section pb-0">
          <div className="container-tight">
            <p className="display text-xl md:text-2xl font-semibold leading-[1.4] max-w-4xl">
              {lead}
            </p>
          </div>
        </section>
      )}

      <Reveal as="section" className="section">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((s) => {
              const match = findPageByTitle("INDUSTRY", s.title) || findPageByTitle("SERVICE", s.title);
              const inner = (
                <>
                  <h2 className="display text-lg font-bold mb-3 leading-snug group-hover:text-accent-blue transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-[1.6] line-clamp-4">{s.body}</p>
                  {match && (
                    <span className="link-blue mt-5">
                      Explore <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </>
              );
              return match ? (
                <Link key={s.title} to={match.url} className="reveal-child group card-light p-7 flex flex-col">
                  {inner}
                </Link>
              ) : (
                <div key={s.title} className="reveal-child card-light p-7 flex flex-col">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <CtaRibbon />
    </Layout>
  );
};

export default HubPage;
