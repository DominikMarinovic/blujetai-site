import { cn } from "@/lib/utils"

const cards = [
  {
    id: "revenue",
    label: "Lost Revenue Recovered",
    metric: "$47,653.22",
    delta: "+18%",
    title: "Track everything",
    body: "Live dashboards show every checkout we recover and the exact conversations that closed the sale.",
    span: "md:col-span-3",
  },
  {
    id: "team",
    label: "Live Calls & Recoveries",
    metric: "24/7 Watching",
    title: "Your agentic sales pod",
    body: "AI closers call and text churned customers instantly, handle objections, and book revenue without extra headcount.",
    span: "md:col-span-3",
  },
  {
    id: "custom",
    label: "Training",
    metric: "< 14 days",
    delta: "from onboarding",
    title: "Brand-trained recovery playbooks",
    body: "We ingest your offer, tone, and retention policies so every outreach sounds like your best rep.",
    span: "md:col-span-2",
  },
  {
    id: "sequence",
    label: "Sequences",
    metric: "Voice + SMS",
    delta: "coordinated",
    title: "Conversational follow ups",
    body: "Voice calls trigger human-like SMS threads that keep shoppers engaged until they repurchase.",
    span: "md:col-span-2",
  },
  {
    id: "guarantee",
    label: "Guarantee",
    metric: "Money-back",
    delta: "if we miss target",
    title: "Instant profit lift",
    body: "We guarantee more recovered revenue than your current stack or we keep working for free.",
    span: "md:col-span-2",
  },
]

function CardVisual({ id }: { id: string }) {
  switch (id) {
    case "revenue":
      return (
        <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 to-white">
          <div className="absolute inset-x-6 bottom-6 flex items-end gap-2">
            {[18, 32, 24, 44, 87, 64, 44, 72, 65].map((h, idx) => (
              <span
                key={idx}
                className="inline-flex w-6 rounded-md bg-blue-200"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <span className="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
            $
          </span>
        </div>
      )
    case "team":
      return (
        <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 via-white to-white">
          <div className="absolute inset-4 rounded-xl border border-sky-100 bg-white/80 p-3 shadow-sm">
            {["Recovered", "Waiting", "Waiting"].map((state, idx) => (
              <div
                key={idx}
                className="mb-2 flex items-center justify-between rounded-lg border border-sky-50 bg-white px-3 py-2 text-xs last:mb-0"
              >
                <span className="flex items-center gap-2 font-medium text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    {idx === 0 ? "K" : idx === 1 ? "M" : "N"}
                  </span>
                  {idx === 0 ? "Recovered" : idx === 1 ? "Follow up" : "Queued"}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                    idx === 0 ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
                  )}
                >
                  {state}
                </span>
              </div>
            ))}
          </div>
        </div>
      )
    case "custom":
      return (
        <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white to-stone-100">
          <div className="absolute inset-0 grid grid-cols-6 gap-1 p-6">
            {Array.from({ length: 18 }).map((_, idx) => (
              <span
                key={idx}
                className="h-1.5 rounded-full bg-stone-200"
                style={{ opacity: 0.4 + (idx % 3) * 0.2 }}
              />
            ))}
          </div>
          <div className="absolute inset-4 rounded-xl border border-stone-200 bg-white/90 p-4 text-sm font-semibold text-stone-600">
            SOP upload - Playbooks synced
          </div>
        </div>
      )
    case "sequence":
      return (
        <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50">
          <div className="absolute inset-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>Shopify Store</span>
              <span>Live</span>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-700">
              "Your BluJet order is waiting!" Tap to finish checkout or reply for help.
            </div>
          </div>
        </div>
      )
    case "guarantee":
    default:
      return (
        <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br bg-stone-50">
          <div className="absolute inset-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
            <div className="flex items-end gap-3">
              <div className="relative flex-1">
                <div className="h-24 w-full rounded-full bg-blue-50" />
                <div className="absolute inset-4 rounded-full border border-dashed border-blue-200" />
              </div>
              <div className="flex flex-col text-right text-xs text-stone-500">
                <span>ROI target</span>
                <span className="text-base font-semibold text-emerald-600">+20%</span>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default function BetterThanSMS() {
  return (
    <section className="container bg-white py-20 sm:py-28" id="better-than-sms">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold text-stone-900 sm:text-5xl">
          SMS on Steroids
        </h2>
        <p className="mt-4 text-base text-stone-500 sm:text-lg">
          Blujet agentic recovery pairs human-level conversations with automated playbooks so you
          recover more subscriptions and checkouts in couple of days
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={cn(
              "flex flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_24px_45px_-30px_rgba(15,23,42,0.35)]",
              card.span
            )}
          >
            <CardVisual id={card.id} />
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-stone-500">
              {card.label}
            </div>
            <div className="mt-2 flex items-center gap-2 text-2xl font-bold text-stone-900">
              {card.metric}
              <span className="text-sm font-semibold text-emerald-600">{card.delta}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-stone-900">{card.title}</h3>
            <p className="mt-2 text-sm text-stone-500">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
