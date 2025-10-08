import { cn } from "@/lib/utils"
import { CalendarCheck, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Strategy call",
    desc: "Map current checkout leaks, pick the first revenue win, and align on guardrails.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "Connect + configure",
    desc: "Hook up Shopify, billing, and CRM, then approve scripts, offers, and compliance settings.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Slack & alerts live",
    desc: "Get a shared channel for transcripts, approvals, and rapid tweaks as we deploy playbooks.",
    icon: MessageCircle,
  },
  {
    step: "04",
    title: "Revenue dashboard",
    desc: "Track recovered orders, saved subscriptions, and insights that feed back into your CRO roadmap.",
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
        <h2 className="mt-4 font-heading text-3xl font-bold text-stone-800 sm:text-5xl">
          3 Step Process to Get You more Profit with More Saved Checkouts
        </h2>
      </div>

      <div className="mt-4 grid gap-1 md:grid-cols-2 xl:grid-cols-4">
        {steps.map(({ step, title, desc, icon: Icon }) => (
          <div
            key={step}
            className="relative flex h-full flex-col items-center bg-white px-8 py-6 text-center"
          >
            <div className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-600">
              <span className="rounded-full bg-white px-1 py-0.5 text-stone-500">{step}</span>
              <span className="uppercase">Step</span>
            </div>
            <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-stone-800">{title}</h3>
            <p className="mt-3 text-sm text-stone-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
