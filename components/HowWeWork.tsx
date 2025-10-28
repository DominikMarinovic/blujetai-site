import { cn } from "@/lib/utils"
import {
  CalendarCheck,
  CheckCircle2,
  MessageCircleMore,
  PhoneCall,
  CalendarCheck2,
  FlaskConical,
} from "lucide-react"

const steps = [
  {
    step: "STEP 1",
    title: "Strategy call",
    desc: "Book a free audit. We'll map your current revenue leaks, identify the highest-impact area for intervention, and align on cloning your Brand Voice.",
    icon: CalendarCheck2,
  },
  {
    step: "STEP 2",
    title: "We build & test",
    desc: "Our team builds your custom AI Voice & SMS agents based on the strategy call. We rigorously test everything behind the scenes to ensure seamless performance before launch.",
    icon: FlaskConical,
  },
  {
    step: "STEP 3",
    title: "Results & Optimization",
    desc: "Your AI Intervention Engine goes live. You'll see abandoned checkouts recovered and churn reduced, directly impacting your ROAS and MRR stability.",
    icon: CheckCircle2,
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="container bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase text-transparent inline-block bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 bg-clip-text">
          Next steps
        </p>
        <h2 className="mt-3 font-heading text-3xl capitalize font-semibold text-stone-900 sm:text-4xl">
          Your Path to More Stable MRR Growth
        </h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:justify-items-center">
        {steps.map(({ step, title, desc, icon: Icon }) => (
          <div
            key={step}
            className="flex h-full max-w-sm flex-col items-center bg-white px-8 py-7 text-center"
          >
            <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 text-white">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div className="mt-4 text-xs font-semibold uppercase text-slate-600">{step}</div>
            <h3 className="mt-2 text-xl font-semibold text-stone-800">{title}</h3>
            <p className="mt-3 text-md text-stone-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
