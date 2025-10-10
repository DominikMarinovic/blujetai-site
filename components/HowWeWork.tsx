import { cn } from "@/lib/utils"
import { CalendarCheck, CheckCircle2, MessageCircleMore, PhoneCall } from "lucide-react"

const steps = [
  {
    step: "STEP 1",
    title: "Strategy call",
    desc: "Map current checkout leaks, pick the first revenue win, and align on Brand Voice.",
    icon: PhoneCall,
  },
  {
    step: "STEP 2",
    title: "We build & test",
    desc: "We build and test your AI recovery system. We will make sure everything is running smoothly before lauching!",
    icon: MessageCircleMore,
  },
  {
    step: "STEP 3",
    title: "Results",
    desc: "New money startes coming in and you can see it on your dashboard",
    icon: CheckCircle2,
  },
]

const commitments = [
  {
    title: "Boutique execution",
    points: [
      "Direct access to the lead team-no ticket queues",
      "Playbooks tuned to your tone, offers, and policies",
      "Month-to-month engagement with performance guardrails",
    ],
  },
  {
    title: "Operational rigor",
    points: [
      "24/7 AI outreach with human oversight on every edge case",
      "Weekly revenue reviews and transcript QA",
      "ROI guarantee: we keep working free until targets are hit",
    ],
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="container bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">Next steps</p>
        <h2 className="mt-4 font-heading text-3xl font-semibold text-stone-800 sm:text-4xl">
          3-Step Process to Get You more Profit
        </h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:justify-items-center">
        {steps.map(({ step, title, desc, icon: Icon }) => (
          <div
            key={step}
            className="flex h-full max-w-sm flex-col items-center bg-white px-8 py-7 text-center"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {step}
            </div>
            <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 text-white">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-stone-800">{title}</h3>
            <p className="mt-3 text-sm text-stone-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
