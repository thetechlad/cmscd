import Layout from "@/components/Layout";
import WorkProcess from "@/components/WorkProcess";

const ProcessPage = () => (
  <Layout title="Process" description="A predictable, four-stage path from brief to shipped product." path="/process">
    <section className="bg-background pt-[120px] pb-12 border-b border-border">
      <div className="container-tight">
        <div className="label-eyebrow mb-6">How we work</div>
        <h1 className="display text-[34px] md:text-[42px] lg:text-[68px] font-bold leading-[1.05] max-w-4xl">
          A predictable path from idea to <span style={{ color: "hsl(var(--accent-blue-ink))" }}>shipped</span>.
        </h1>
      </div>
    </section>
    <WorkProcess />
  </Layout>
);

export default ProcessPage;
