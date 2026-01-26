import { CheckCircle2, ShieldX, Workflow, Eye } from "lucide-react"

const promises = [
  {
    title: "We take care of the tech",
    desc: "We mine your best support tickets and sales calls to write brand-safe voice scripts that convert.",
    icon: CheckCircle2,
  },
  {
    title: "You don't set up flows",
    desc: "We build logic maps around your churn and abandonment patterns so every response is intentional.",
    icon: Workflow,
  },
  {
    title: "You don't monitor the AI",
    desc: "Our team reviews conversations daily, tightening quality while you stay focused on growth.",
    icon: Eye,
  },
]

export default function AntiApp() {
  return (
    <section id="anti-app" className="bg-white py-16 sm:py-24">
      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2D68E9]">
              We are not just another tool
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
              You don&apos;t need another login. You need results.
            </h2>
            <p className="text-lg text-slate-600">
              Most AI solutions hand you a piece of software and wish you luck. You&apos;re left
              figuring out how to use it, hire freelancers, agencies or internal talent to manage
              it.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-100/60">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2D68E9]"></p>
            <h3 className="text-2xl font-semibold text-stone-900 sm:text-3xl">We run this DFY!</h3>
            <div className="space-y-3">
              {promises.map(({ title, desc, icon: Icon }) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
                >
                  <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-2 ring-emerald-200/80">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-stone-900">{title}</p>
                    <p className="text-sm leading-snug text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
