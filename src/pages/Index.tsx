import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => (
  <Layout
    title="Engineering for the ambitious"
    description="CodersDive is a premium software agency for founders, executives and operators who want industry-leading products — built fast, without compromise."
  >
    <Hero />
    <LogoStrip />
    <About />
    <Services />
    <WorkProcess />
    <Portfolio />
    <TechStack />
    <Testimonials />
    <Contact />
  </Layout>
);

export default Index;
