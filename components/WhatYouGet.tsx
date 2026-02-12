import { Brain, Check, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const highlights = [
  {
    icon: MessageSquare,
    text: "You get more than AI agents.",
  },
  {
    icon: Brain,
    text: "You get the findings from thousands of conversations...",
  },
  {
    icon: Sparkles,
    text: "(the wins, and the lessons...)",
  },
]

/**  {
  title: "Failed Payment Recovery System",
  body: "Proactive outreach via SMS and phone within minutes of decline\u2014before they churn, before they forget.",
},
{
  title: "Cancellation Save Protocols",
  body: "Real conversations BEFORE they cancel\u2014offering pauses, discounts, alternatives\u2014personalized to their history and behavior.",
},*/

const glimpseItems = [
  {
    title: "DFY 1-To-1 Conversation Engine",
    body: "Fully managed agents that monitor your funnel 24/7 and initiate real conversations via SMS, email, and phone call at every critical moment",
  },
  {
    title: "Real-Time Slack Notifications",
    body: "See revenue captured live\u2014every conversation, every dollar\u2014posted to your dedicated Slack channel as it happens.",
  },
  {
    title: "Conversation Intelligence Reports",
    body: "Weekly summaries showing WHY people hesitate, what objections come up most, and what messaging actually works.",
  },
  {
    title: "Custom Agent Training",
    body: "Your agents learn your products, your brand voice, your FAQs, and your offers\u2014so every conversation sounds like YOU, not a bot.",
  },

  {
    title: "Post-Purchase Upsell Engine",
    body: "Strategic timing-based outreach for complementary products, upgrades, and bundles\u2014increasing AOV without feeling pushy.",
  },
  {
    title: "Dedicated Revenue Manager",
    body: "Your personal strategist who monitors performance, optimizes conversation flows, and unlocks new revenue opportunities so you can finally scale past your ceiling.",
  },
]

export default function WhatYouGet() {
  return (
    <section id="recovery" className="bg-white py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[28px] bg-stone-50 border-2 border-foreground px-6 py-10 sm:px-10 sm:py-12">
            <h3 className="text-2xl text-center capitalize font-bold text-stone-700 sm:text-3xl">
              A glimpse of what you&apos;ll get access to:
            </h3>

            <ul className="mt-6 space-y-6">
              {glimpseItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 sm:h-8 sm:w-8">
                    <Check
                      className="h-4 w-4 text-emerald-600 sm:h-[18px] sm:w-[18px]"
                      strokeWidth={3}
                    />
                  </span>
                  <p className="text-base leading-relaxed text-stone-800 sm:text-lg">
                    <span className="font-semibold text-stone-900">{item.title}:</span> {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 items-center text-center">
            <Link href="#book-call">
              <Button className="mt-8 text-center text-md font-semibold text-stone-100 sm:text-lg">
                Grow My subscriptions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
