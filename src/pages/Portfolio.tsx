import Layout from "@/components/Layout";
import Portfolio from "@/components/Portfolio";

const PortfolioPage = () => (
  <Layout title="Selected work" description="Products we've designed, engineered and shipped — and the metrics they moved.">
    <section className="relative pt-12 pb-4">
      <div className="container-tight">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Work</div>
        <h1 className="display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-4xl">
          Products that <span className="text-gradient">earn their keep.</span>
        </h1>
      </div>
    </section>
    <Portfolio />
  </Layout>
);

export default PortfolioPage;
