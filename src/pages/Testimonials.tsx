import Layout from "@/components/Layout";
import Testimonials from "@/components/Testimonials";

const TestimonialsPage = () => (
  <Layout title="Testimonials" description="What founders and product leaders say about working with CodersDive.">
    <section className="relative pt-12 pb-4">
      <div className="container-tight">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Testimonials</div>
        <h1 className="display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-4xl">
          Operators we've helped <span className="text-gradient">move faster.</span>
        </h1>
      </div>
    </section>
    <Testimonials />
  </Layout>
);

export default TestimonialsPage;
