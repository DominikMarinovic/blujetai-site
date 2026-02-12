import { caseStudies } from "@/content/site"
import Script from "next/script"

export default function CaseStudies() {
  return (
    <section id="case-studies" className="container bg-white pt-16 pb-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-3 sm:pb-2 font-heading text-3xl font-semibold tracking-normal text-stone-800 sm:text-4xl">
          Results
        </h2>
        <h2 className="text-2xl mx-10 sm:text-2xl text-transparent inline-block mt-2 bg-stone-700 bg-clip-text">
          More than 300,000 AI conversations analyzed
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {caseStudies.map((c, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 bg-stone-50 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-md text-accent pb-2 font-serif">{c.brand}</div>
            <div className="text-lg font-semibold text-stone-900">{c.title}</div>
            {c.summary && (
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto bg-stone-50 border rounded-xl border-slate-200 mt-8 max-w-5xl"></div>
      <div className="pt-4 sm:pt-24 text-2xl sm:text-3xl mx-auto max-w-2xl text-center space-y-3">
        <p className=" text-stone-600">
          This is acutally working right now for other brands like yours.
        </p>
      </div>

      <div className="pt-4 sm:pt-24 text-2xl sm:text-3xl mx-auto max-w-2xl text-center space-y-3">
        <h2 className="text-stone-700 font-bold">Book a call here!</h2>
      </div>

      <div className="mx-auto mt-4 h-[650px] w-full max-w-6xl sm:h-[720px]">
        <div id="book-call" style={{ width: "100%", height: "100%", overflow: "scroll" }}></div>
        <Script id="cal-inline-recovery-plan" strategy="afterInteractive">{`
            (function (C, A, L) { 
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
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
            Cal("init", "recovery-plan", { origin: "https://app.cal.com" });
            Cal.ns["recovery-plan"]("inline", {
              elementOrSelector: "#my-cal-inline-recovery-plan",
              config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true", "theme": "light" },
              calLink: "blujetai/recovery-plan",
            });
            Cal.ns["recovery-plan"]("ui", {
              "theme": "light",
              "cssVarsPerTheme": { "light": { "cal-brand": "#137fd1" }, "dark": { "cal-brand": "#137fd1" } },
              "hideEventTypeDetails": false,
              "layout": "month_view"
            });
          `}</Script>
      </div>
    </section>
  )
}
