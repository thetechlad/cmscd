import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import Markdown from "@/components/Markdown";
import Reveal from "@/components/Reveal";
import { getPageByUrl } from "@/data/pageData";
import NotFound from "@/pages/NotFound";

const ContentPage = () => {
  const location = useLocation();
  const page = getPageByUrl(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!page) return <NotFound />;

  return (
    <Layout title={page.title} description={page.metaDescription}>
      {/* Hero */}
      <section className="bg-background pt-[120px] pb-12 border-b border-border">
        <div className="container-tight">
          <div className="label-eyebrow mb-6">{page.type}</div>
          <h1 className="display text-[34px] md:text-[42px] lg:text-[60px] font-bold leading-[1.05] max-w-4xl mb-5">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-[1.6]">
              {page.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <Reveal as="section" className="bg-background section">
        <div className="container-tight max-w-3xl">
          <Markdown content={page.body} />
        </div>
      </Reveal>

      {/* CTA */}
      <section className="bg-background-soft section border-t border-border">
        <div className="container-tight">
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "hsl(var(--foreground))" }}>
            <h2 className="display text-2xl md:text-3xl font-bold mb-4" style={{ color: "hsl(var(--background))" }}>
              Let's build the right next step.
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "hsl(var(--background) / 0.7)" }}>
              Tell us what's slow, broken, unclear, or strategically important. We'll help turn it into a sensible plan.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://cal.com/tayyabirfan/15min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 h-11 px-6 rounded-full text-[13px] font-semibold transition-all hover:scale-[1.03]"
                style={{ background: "hsl(var(--accent-blue))", color: "#fff" }}
              >
                Book a discovery call <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 h-11 px-6 rounded-full text-[13px] font-semibold transition-all hover:scale-[1.03]"
                style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContentPage;
