import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import FlagshipWork from "@/components/FlagshipWork";
import Automate from "@/components/Automate";
import CaseBreakdown from "@/components/CaseBreakdown";
import ProcessStrip from "@/components/ProcessStrip";
import Team from "@/components/Team";
import Services from "@/components/Services";
import ProjectsGallery from "@/components/ProjectsGallery";
import ProjectMarquee from "@/components/ProjectMarquee";
import FaqSection from "@/components/FaqSection";
import Pricing from "@/components/Pricing";
import TickerBand from "@/components/TickerBand";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";

const Index = () => (
  <Layout
    title="We build AI-powered software that eliminates manual work"
    description="CodersDive builds AI-powered software and automation that removes manual work from sales, operations and support. Get a free automation audit."
    path="/"
  >
    <Hero />
    <LogoStrip />
    <FlagshipWork />
    <Automate />
    <CaseBreakdown />
    <ProcessStrip />
    <TickerBand />
    <Services />
    <ProjectsGallery />
    <Team />
    <CTABand />
    <TechStack />
    <Testimonials />
    <Pricing />
    <FaqSection />
    <Contact />
  </Layout>
);

export default Index;
