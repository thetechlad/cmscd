import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import HowWeWork from "./pages/HowWeWork";
import ServicesHub from "./pages/ServicesHub";
import ServiceDetail from "./pages/ServiceDetail";
import WorkHub from "./pages/WorkHub";
import WorkDetail from "./pages/WorkDetail";
import IndustriesHub from "./pages/IndustriesHub";
import IndustryDetail from "./pages/IndustryDetail";
import EngagementModels from "./pages/EngagementModels";
import TechnologyStack from "./pages/TechnologyStack";
import AIFirst from "./pages/AIFirst";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import StartProject from "./pages/StartProject";
import ThankYou from "./pages/ThankYou";
import InsightsHub from "./pages/InsightsHub";
import InsightsCategory from "./pages/InsightsCategory";
import BlogArticle from "./pages/BlogArticle";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/work" element={<WorkHub />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/industries" element={<IndustriesHub />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/engagement-models" element={<EngagementModels />} />
            <Route path="/technology-stack" element={<TechnologyStack />} />
            <Route path="/ai-first" element={<AIFirst />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/start-a-project" element={<StartProject />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/insights" element={<InsightsHub />} />
            <Route path="/insights/:category" element={<InsightsCategory />} />
            <Route path="/insights/:category/:slug" element={<BlogArticle />} />
            <Route path="/privacy" element={<Legal slug="privacy" />} />
            <Route path="/terms" element={<Legal slug="terms" />} />
            <Route path="/cookies" element={<Legal slug="cookies" />} />
            <Route path="/accessibility" element={<Legal slug="accessibility" />} />
            <Route path="/security-responsible-ai" element={<Legal slug="security-responsible-ai" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
