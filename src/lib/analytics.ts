// Provider-agnostic analytics + conversion tracking.
//
// Events are pushed to a `dataLayer` array and forwarded to whichever provider
// is present on the page (Google Analytics `gtag`, or Plausible). This lets you
// wire a real provider later by only adding its snippet to index.html — the
// event calls throughout the app stay unchanged.
//
// To enable Google Analytics 4, set your Measurement ID below and the loader
// will inject the gtag script automatically.

export const GA_MEASUREMENT_ID = ""; // e.g. "G-XXXXXXXXXX" — leave empty to disable GA

type Props = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: Props }) => void;
  }
}

const isBrowser = typeof window !== "undefined";

export function initAnalytics() {
  if (!isBrowser) return;
  window.dataLayer = window.dataLayer || [];

  if (GA_MEASUREMENT_ID && !document.getElementById("ga4-src")) {
    const s = document.createElement("script");
    s.id = "ga4-src";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  }
}

/** Track a custom event across whichever analytics providers are available. */
export function track(event: string, props: Props = {}) {
  if (!isBrowser) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...props });

  if (typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
    window.gtag("event", event, props);
  }
  if (typeof window.plausible === "function") {
    window.plausible(event, { props });
  }
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, props);
  }
}

/** Track a page/route view. */
export function trackPageView(path: string) {
  track("page_view", { page_path: path });
  if (typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
    window.gtag("event", "page_view", { page_path: path, page_location: window.location.href });
  }
}
