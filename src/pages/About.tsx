import Layout from "@/components/Layout";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

const AboutPage = () => (
  <Layout title="About the studio" description="A small, senior product engineering studio with a serious obsession for shipping.">
    <section className="relative pt-12 pb-4">
      <div className="container-tight">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The studio</div>
        <h1 className="display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-4xl">
          We're a small team that takes shipping <span className="text-gradient">very seriously.</span>
        </h1>
      </div>
    </section>
    <About />
    <Testimonials />
  </Layout>
);

export default AboutPage;
