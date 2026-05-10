import Layout from "@/components/Layout";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

const ServicesPage = () => (
  <Layout title="Services" description="Product engineering, AI, mobile, cloud, design and growth — under one roof.">
    <section className="relative pt-12 pb-4">
      <div className="container-tight">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What we do</div>
        <h1 className="display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-4xl">
          Every layer of your product, <span className="text-gradient">handled.</span>
        </h1>
      </div>
    </section>
    <Services />
    <TechStack />
  </Layout>
);

export default ServicesPage;
