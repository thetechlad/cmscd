import { useEffect } from "react";

const CAL_LINK = "tayyabirfan/15min";
const CAL_NS = "15min";

/**
 * Cal.com inline booking embed for consulting calls.
 * Loads the Cal embed script once and mounts the month-view calendar
 * into the target container.
 */
const CalEmbed = () => {
  useEffect(() => {
    // Cal.com official embed loader
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar);
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function (...a: any[]) {
              p(api, a);
            };
            const namespace = ar[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", CAL_NS, { origin: "https://app.cal.com" });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;

    Cal.ns[CAL_NS]("inline", {
      elementOrSelector: "#my-cal-inline-15min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: CAL_LINK,
    });
    Cal.ns[CAL_NS]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <div
      id="my-cal-inline-15min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      className="min-h-[640px] rounded-xl border border-border bg-background-soft overflow-hidden"
    />
  );
};

export default CalEmbed;
