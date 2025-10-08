import * as Icons from "lucide-react"
import type React from "react"

type Item = {
  title: string
  desc: string
  icon: keyof typeof Icons
}

const items: Item[] = [
  {
    title: "Boutique Implementation",
    desc:
      "Direct access to the lead team in Slack. Custom playbooks, offers, and scripts tuned to your brand—no faceless software.",
    icon: "Sparkle",
  },
  {
    title: "No Annuals, No Lock‑Ins",
    desc:
      "Stay because we drive revenue, not because of a contract. Month‑to‑month. Pause or cancel anytime.",
    icon: "FileX2",
  },
  {
    title: "24/7 Coverage",
    desc:
      "Voice + SMS follow‑ups run around the clock. Abandons, failed rebills, and VIPs get handled instantly.",
    icon: "Clock",
  },
  {
    title: "ROI Guarantee",
    desc:
      "If the system doesn’t pay for itself, we’ll fix it fast or you don’t pay for ops. Simple as that.",
    icon: "CircleDollarSign",
  },
  {
    title: "Weekly & Monthly Reports",
    desc:
      "Crystal‑clear visibility on recovered revenue, save rate, AOV lift, and key transcripts in Slack.",
    icon: "Calendar",
  },
  {
    title: "Slack Support",
    desc:
      "No tickets or ‘3–5 business days’. We’re in Slack with you, typically responding within 30 minutes.",
    icon: "MessagesSquare",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="container py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => {
            const Icon =
              ((Icons as any)[it.icon] || (Icons as any).Star) as React.ComponentType<
                React.SVGProps<SVGSVGElement>
              >
            return (
              <div
                key={it.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
              >
                <Icon className="h-6 w-6 text-blue-600" strokeWidth={2} />
                <h3 className="mt-3 text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
