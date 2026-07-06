import Layout from "@/components/Layout";
import Portfolio from "@/components/Portfolio";
import BrandWork from "@/components/BrandWork";
import CTABand from "@/components/CTABand";

const PortfolioPage = () => (
  <Layout title="Selected Work" description="Products we've designed, engineered and shipped, plus brand identities, logos and websites crafted for founders worldwide." path="/portfolio">
    <section className="bg-background pt-[120px] pb-12 border-b border-border">
      <div className="container-tight">
        <div className="label-eyebrow mb-6">Client Work</div>
        <h1 className="display text-[34px] md:text-[42px] lg:text-[68px] font-bold leading-[1.05] max-w-4xl">
          Products that <span style={{ color: "hsl(var(--accent-blue))" }}>earn their keep</span>.
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl">
          Shipped software, brand identities, logofolios, social content and websites, built end to end for founders and operators across the globe.
        </p>
      </div>
    </section>
    <Portfolio />
    <BrandWork />
    <CTABand />
  </Layout>
);

export default PortfolioPage;
