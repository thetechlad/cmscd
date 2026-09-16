import { Suspense, lazy, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./components/Analytics";
import { initCms } from "@/lib/cmsBootstrap";

const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/Services"));
const PortfolioPage = lazy(() => import("./pages/Portfolio"));
const ProjectCaseStudy = lazy(() => import("./pages/ProjectCaseStudy"));
const ProcessPage = lazy(() => import("./pages/Process"));
const TestimonialsPage = lazy(() => import("./pages/Testimonials"));
const ContactPage = lazy(() => import("./pages/Contact"));
const BlogPage = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ContentPage = lazy(() => import("./pages/ContentPage"));
const StartProject = lazy(() => import("./pages/StartProject"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const MarketingHub = lazy(() => import("./pages/marketing/MarketingHub"));
const SocialMediaManagement = lazy(() => import("./pages/marketing/SocialMediaManagement"));
const ContentWriting = lazy(() => import("./pages/marketing/ContentWriting"));
const Ppc = lazy(() => import("./pages/marketing/Ppc"));

const queryClient = new QueryClient();

/** Blocks rendering until content has been fetched from Strapi once. Every
 * page reads from src/data/* modules that this fills in — see cmsBootstrap.ts. */
const CmsGate = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    initCms()
      .then(() => setReady(true))
      .catch((err) => setError(err instanceof Error ? err : new Error(String(err))));
  }, []);

  if (error) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <p>Couldn't load content from the CMS. Please refresh, or check that Strapi is running.</p>
      </div>
    );
  }
  if (!ready) return null;
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Analytics />
        <CmsGate>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<ProjectCaseStudy />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/insights" element={<BlogPage />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
            <Route path="/start-a-project" element={<StartProject />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/marketing" element={<MarketingHub />} />
            <Route path="/marketing/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/marketing/content-writing" element={<ContentWriting />} />
            <Route path="/marketing/ppc" element={<Ppc />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            {/* Content-driven marketing pages (industries, services, careers, legal, etc.) */}
            <Route path="*" element={<ContentPage />} />
          </Routes>
        </Suspense>
        </CmsGate>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
