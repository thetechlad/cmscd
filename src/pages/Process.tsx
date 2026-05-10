import Layout from "@/components/Layout";
import WorkProcess from "@/components/WorkProcess";

const ProcessPage = () => (
  <Layout title="Process" description="A predictable, four-stage path from ambiguous brief to shipping product.">
    <section className="relative pt-12 pb-4">
      <div className="container-tight">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">How we work</div>
        <h1 className="display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-4xl">
          A predictable path to a <span className="text-gradient">real product.</span>
        </h1>
      </div>
    </section>
    <WorkProcess />
  </Layout>
);

export default ProcessPage;
