import { beforeAfter } from "@/content/site"
import { CheckCircle2, XCircle } from "lucide-react"

const tiers = [
  {
    label: "Before",
    tone: "text-rose-500",
    border: "border-rose-200",
    icon: XCircle,
    bg: "bg-rose-50",
  },
  {
    label: "After",
    tone: "text-emerald-600",
    border: "border-emerald-200",
    icon: CheckCircle2,
    bg: "bg-emerald-50",
  },
]

export default function BeforeAfter() {
  return (
    <section className="container py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0] text-indigo-600">
          Before vs After
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-stone-900 sm:text-5xl">
          {beforeAfter.title}
        </h2>
        <p className="mt-4 text-base text-stone-500 sm:text-lg">{beforeAfter.blurb}</p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {tiers.map((tier, idx) => {
          const items = idx === 0 ? beforeAfter.before : beforeAfter.after
          const Icon = tier.icon
          return (
            <div
              key={tier.label}
              className={`relative overflow-hidden rounded-3xl border ${tier.border} bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)]`}
            >
              <div className={`absolute inset-x-0 top-0 h-32 ${tier.bg}`} aria-hidden />
              <div className="relative">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-1.5 text-sm font-semibold ${tier.tone}`}
                >
                  <Icon className="h-4 w-4" />
                  {tier.label}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-stone-900">
                  {idx === 0 ? "Wthout Blujet AI Voice agent" : "With Blujet AI"}
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-stone-600">
                  {items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-2xl border border-stone-100 bg-white/70 px-4 py-3 shadow-sm"
                    >
                      <Icon className={`h-5 w-5 flex-shrink-0 ${tier.tone}`} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
