import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, track, trackPageView } from "@/lib/analytics";

/**
 * Analytics — mounts once inside the router. Initialises the analytics layer,
 * records a page_view on every route change, and delegates clicks so any
 * "Start a project" CTA (or Cal.com booking link) is tracked as a conversion
 * without instrumenting each button individually.
 */
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest("a") as HTMLAnchorElement | null;
      if (!el) return;
      const href = el.getAttribute("href") || "";
      if (href.includes("/start-a-project")) {
        track("start_project_click", { location: window.location.pathname, label: el.textContent?.trim() });
      } else if (href.includes("cal.com")) {
        track("book_call_click", { location: window.location.pathname });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
};

export default Analytics;
