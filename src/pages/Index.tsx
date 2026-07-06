import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import ProjectsGallery from "@/components/ProjectsGallery";
import ProjectMarquee from "@/components/ProjectMarquee";
import Pricing from "@/components/Pricing";
import TickerBand from "@/components/TickerBand";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";

const Index = () => (
  <Layout
    title="Engineering for the ambitious"
    description="CodersDive is a premium software agency for founders, executives and operators who want industry-leading products — built fast, without compromise."
    path="/"
  >
    <Hero />
    <LogoStrip />
    <ProjectMarquee />
    <About />
    <TickerBand />
    <Services />
    <WorkProcess />
    <ProjectsGallery />
    <CTABand />
    <TechStack />
    <Testimonials />
    <Pricing />
    <Contact />
  </Layout>
);

export default Index;
