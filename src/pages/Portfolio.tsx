import Layout from "@/components/Layout";
import Portfolio from "@/components/Portfolio";

const PortfolioPage = () => (
  <Layout title="Selected Work" description="Products we've designed, engineered and shipped — and the metrics they moved.">
    <section className="bg-background pt-[120px] pb-12 border-b border-border">
      <div className="container-tight">
        <div className="label-eyebrow mb-6">Client Work</div>
        <h1 className="display text-[34px] md:text-[42px] lg:text-[68px] font-bold leading-[1.05] max-w-4xl">
          Products that <span style={{ color: "hsl(var(--accent-blue))" }}>earn their keep</span>.
        </h1>
      </div>
    </section>
    <Portfolio />
  </Layout>
);

export default PortfolioPage;
