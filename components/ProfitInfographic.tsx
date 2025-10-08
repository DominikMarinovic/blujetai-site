import { cn } from "@/lib/utils"

const phases = [
  {
    id: "detect",
    step: "01",
    badge: "Predict",
    title: "We find the silent revenue leaks",
    body: "BluJet scores every failed checkout, declined rebill, and lapse to predict who will respond before a human ever dials.",
  },
  {
    id: "recover",
    step: "02",
    badge: "Recover",
    title: "AI agents go to work instantly",
    body: "Voice-first AI reaches out within seconds, handles objections, and drops dynamic offers that feel one to one.",
  },
  {
    id: "oversight",
    step: "03",
    badge: "Oversight",
    title: "Human experts keep quality razor sharp",
    body: "Retention strategists review transcripts, tune scripts, and flag edge cases so brand tone never slips.",
  },
  {
    id: "profit",
    step: "04",
    badge: "Profit",
    title: "We prove real profit, not vanity metrics",
    body: "Revenue dashboards attribute every recovered dollar and show you ROI, AOV lift, and churn reduction in real time.",
  },
]

function CardVisual({ id }: { id: string }) {
  switch (id) {
    case "detect":
      return (
        <div className="relative h-32 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-white">
          <div className="absolute inset-4 rounded-2xl border border-emerald-100 bg-white/70" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200" />
          <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20" />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-600 shadow-sm">
            Risk radar
          </span>
        </div>
      )
    case "recover":
      return (
        <div className="relative h-32 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-white to-white">
          <div className="absolute inset-5 rounded-2xl border border-sky-100 bg-white/90 p-3 shadow-sm">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-400">
              Live calls
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  AI
                </span>
                <span className="font-semibold text-slate-700">
                  "Hey Jamie, I saw your renewal stalled. Want me to restart it now?"
                </span>
              </div>
              <div className="ml-9 rounded-lg bg-emerald-50 px-3 py-1 text-emerald-600">
                Yes, finish checkout
              </div>
            </div>
          </div>
        </div>
      )
    case "oversight":
      return (
        <div className="relative h-32 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 to-white">
          <div className="absolute inset-6 rounded-2xl border border-amber-100 bg-white/85 p-3 shadow-sm">
            <div className="flex justify-between text-xs text-amber-500">
              <span>QA queue</span>
              <span>Human review</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              {Array.from({ length: 4 }).map((_, idx) => (
                <span
                  key={idx}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-100 bg-white text-sm font-semibold text-amber-500"
                >
                  {idx === 0 ? "JR" : idx === 1 ? "AL" : idx === 2 ? "MS" : "QA"}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    case "profit":
    default:
      return (
        <div className="relative h-32 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white">
          <div className="absolute inset-5 rounded-2xl border border-slate-100 bg-white/90 p-4">
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              <span>Recovered</span>
              <span>30 day view</span>
            </div>
            <div className="mt-4 flex items-end gap-2">
              {[38, 42, 49, 55, 63, 70].map((h, idx) => (
                <span
                  key={idx}
                  className="inline-flex w-5 rounded-t-full bg-emerald-500/60"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      )
  }
}

export default function ProfitInfographic() {
  return (
    <section className="container py-20 sm:py-28" id="recovery-infographic">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          AI Recovery / Human Oversight / Real Profit
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-stone-900 sm:text-5xl">
          This is how we make you more money.
        </h2>
        <p className="mt-4 text-base text-stone-500 sm:text-lg">
          Every workflow blends instant AI outreach with a human safety net, then proves profit with
          transparent reporting.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className="relative flex flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_24px_45px_-30px_rgba(15,23,42,0.35)]"
          >
            <div className="absolute -top-4 left-6 inline-flex h-10 items-center gap-2 rounded-full border border-stone-200 bg-white px-4 text-sm font-semibold text-stone-500 shadow-sm">
              <span className="text-stone-400">{phase.step}</span>
              <span className="uppercase tracking-[0.28em] text-emerald-600">{phase.badge}</span>
            </div>
            <CardVisual id={phase.id} />
            <h3 className="mt-6 text-xl font-semibold text-stone-900">{phase.title}</h3>
            <p className="mt-3 text-sm text-stone-500">{phase.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
