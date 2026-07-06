import Layout from "@/components/Layout";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

const ServicesPage = () => (
  <Layout title="Services" description="Product engineering, AI, mobile, cloud, design and growth — under one roof." path="/services">
    <section className="bg-background pt-[120px] pb-12 border-b border-border">
      <div className="container-tight">
        <div className="label-eyebrow mb-6">What we do</div>
        <h1 className="display text-[34px] md:text-[42px] lg:text-[68px] font-bold leading-[1.05] max-w-4xl">
          Every layer of your product, <span style={{ color: "hsl(var(--accent-blue))" }}>handled</span>.
        </h1>
      </div>
    </section>
    <Services />
    <TechStack />
  </Layout>
);

export default ServicesPage;
