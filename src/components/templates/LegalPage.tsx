import Layout from "@/components/Layout";
import Markdown from "@/components/Markdown";
import Breadcrumbs from "@/components/templates/Breadcrumbs";
import { ContentPage } from "@/data/pageData";
import { parseSections } from "@/lib/content";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const LegalPage = ({ page }: { page: ContentPage }) => {
  const { intro, sections } = parseSections(page.body);

  return (
    <Layout title={page.seoTitle || page.title} description={page.metaDescription}>
      <section className="bg-background-soft pt-[128px] pb-12 border-b border-border">
        <div className="container-tight">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: page.title }]} />
          <div className="label-eyebrow mb-5">{page.type}</div>
          <h1 className="display text-[30px] md:text-[42px] font-bold leading-[1.08] max-w-3xl mb-4">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="text-muted-foreground max-w-2xl leading-[1.6]">{page.subtitle}</p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-tight grid lg:grid-cols-12 gap-12">
          {/* Sticky TOC */}
          <aside className="lg:col-span-3 hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28">
              <div className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-medium mb-4">
                On this page
              </div>
              <ul className="space-y-2.5 text-sm">
                {sections.map((s) => (
                  <li key={s.title}>
                    <a
                      href={`#${slugify(s.title)}`}
                      className="text-muted-foreground hover:text-accent-blue transition-colors block leading-snug"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9 max-w-[760px]">
            {intro && (
              <div className="mb-10">
                <Markdown content={intro} />
              </div>
            )}
            <div className="space-y-12">
              {sections.map((s) => (
                <section key={s.title} id={slugify(s.title)} className="scroll-mt-28">
                  <h2 className="display text-xl md:text-2xl font-bold mb-4 leading-snug">
                    {s.title}
                  </h2>
                  <Markdown content={s.body} />
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPage;
