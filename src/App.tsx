import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import PortfolioPage from "./pages/Portfolio";
import ProcessPage from "./pages/Process";
import TestimonialsPage from "./pages/Testimonials";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContentPage from "./pages/ContentPage";
import StartProject from "./pages/StartProject";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import Analytics from "./components/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/insights" element={<BlogPage />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          <Route path="/start-a-project" element={<StartProject />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* Content-driven marketing pages (industries, services, careers, legal, etc.) */}
          <Route path="*" element={<ContentPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
