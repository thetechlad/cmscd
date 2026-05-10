import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <Layout
      title="Engineering software that compounds revenue"
      description="CodersDive is the elite product engineering studio for ambitious teams. We design, build and ship category-defining software — fast."
    >
      <Hero />
      <About />
      <Services />
      <WorkProcess />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
