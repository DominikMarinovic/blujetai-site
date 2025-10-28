type Stat = { stat: string; label: string; blurb: string }

const stats: Stat[] = [
  {
    stat: "24/7",
    label: "Human + AI Support",
    blurb: "Real-time alerts and responses. We watch revenue around the clock.",
  },
  {
    stat: "3x",
    label: "Higher Checkout Recovery",
    blurb: "Get more revenue from the same amount of existing traffic",
  },
  {
    stat: "75,000+",
    label: "Calls Made",
    blurb: "We have large amount of calls under our belt",
  },
]

export default function StatsStrip() {
  return (
    <section aria-labelledby="stats-heading" className="container bg-white py-10 sm:py-28">
      <h2 id="stats-heading" className="sr-only">
        Proof points
      </h2>
      {/* Non-linear layout: staggered individual cards instead of one straight strip */}
      <div className="grid text-center justify-items-center grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={
              "rounded-2xl bg-white p-6  " +
              (i % 2 === 1 ? "md:-translate-y-1 lg:-translate-y-2" : "")
            }
          >
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              {s.stat}
            </div>
            <div className="mt-1 text-xl font-bold">{s.label}</div>
            <p className="mt-2 text-sm text-muted-foreground max-w-[36ch]">{s.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
