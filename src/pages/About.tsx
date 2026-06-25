import Layout from "@/components/Layout";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

const PageHero = ({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) => (
  <section className="bg-background pt-[120px] pb-12 border-b border-border">
    <div className="container-tight">
      <div className="label-eyebrow mb-6">{eyebrow}</div>
      <h1 className="display text-[34px] md:text-[42px] lg:text-[68px] font-bold leading-[1.05] max-w-4xl">
        {title}
      </h1>
    </div>
  </section>
);

const AboutPage = () => (
  <Layout title="About" description="A small, senior product engineering team obsessed with shipping.">
    <PageHero eyebrow="The Studio" title={<>A small team that takes shipping <span style={{ color: "hsl(var(--accent-blue))" }}>very seriously</span>.</>} />
    <About />
    <Testimonials />
  </Layout>
);

export default AboutPage;
