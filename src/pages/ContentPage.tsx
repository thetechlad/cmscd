import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageByUrl } from "@/data/pageData";
import NotFound from "@/pages/NotFound";
import ServiceDetail from "@/components/templates/ServiceDetail";
import IndustryDetail from "@/components/templates/IndustryDetail";
import CaseStudyDetail from "@/components/templates/CaseStudyDetail";
import LegalPage from "@/components/templates/LegalPage";
import HubPage from "@/components/templates/HubPage";
import CompanyPage from "@/components/templates/CompanyPage";
import FaqPage from "@/components/templates/FaqPage";

const ContentPage = () => {
  const location = useLocation();
  const page = getPageByUrl(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!page) return <NotFound />;

  const type = page.type.toUpperCase();

  if (type.includes("SERVICE")) return <ServiceDetail page={page} />;
  if (type.includes("INDUSTRY")) return <IndustryDetail page={page} />;
  if (type.includes("CASE STUDY")) return <CaseStudyDetail page={page} />;
  if (type.includes("LEGAL") || type.includes("TRUST")) return <LegalPage page={page} />;
  if (type.includes("HUB")) return <HubPage page={page} />;
  if (page.url === "/faq" || type.includes("SUPPORT")) return <FaqPage page={page} />;

  return <CompanyPage page={page} />;
};

export default ContentPage;
