import Layout from "@/components/Layout";
import Testimonials from "@/components/Testimonials";

const TestimonialsPage = () => (
  <Layout title="Testimonials" description="What founders and product leaders say about working with CodersDive." path="/testimonials">
    <section className="bg-background pt-[120px] pb-12 border-b border-border">
      <div className="container-tight">
        <div className="label-eyebrow mb-6">Testimonials</div>
        <h1 className="display text-[34px] md:text-[42px] lg:text-[68px] font-bold leading-[1.05] max-w-4xl">
          What our clients <span style={{ color: "hsl(var(--accent-blue))" }}>actually say</span>.
        </h1>
      </div>
    </section>
    <Testimonials />
  </Layout>
);

export default TestimonialsPage;
