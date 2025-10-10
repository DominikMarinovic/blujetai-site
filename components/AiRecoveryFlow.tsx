import { clsx } from "clsx"
import { BotIcon, MessageCircleIcon, HandshakeIcon, TrendingUpIcon } from "lucide-react"

const steps = [
  {
    id: "ingest",
    icon: BotIcon,
    title: "We create custom AI Agents for your store",
    body: "We reain AI on your Brand & products information. We give it sales script to conver customers based on their intent. Agent watches like a hawk for every event so nothing can go without the notice!",
  },
  {
    id: "decide",
    icon: MessageCircleIcon,
    title: "AI Agent engages with your customers",
    body: "Agent gets cart/subscription details, customer details and calls customers with specific targeted outreach message. Based od the event (abandoned cart, subscription cancellation) agent kows what script to use!",
  },
  {
    id: "engage",
    icon: HandshakeIcon,
    title: "Customers Buy and You have More Money from the same Traffic",
    body: "AI Agent overcomes the objections, gets them over the fence and sends SMS with checkout link so they can finish the order, or help them stay on subcription with different offers ",
  },
  {
    id: "verify",
    icon: TrendingUpIcon,
    title: "A New Level of Scale",
    body: "We continue to optimize your AI agents and you unlock a new level of scale. You can finally have more to invest to your brand and get to the big numbers.",
  },
]

export default function AiRecoveryFlow() {
  return (
    <section id="system" className="container bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">Here is how we fix this</p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-stone-800 sm:text-5xl">
          DFY AI Recovery System. Not Just Another Tool
        </h2>
      </div>

      <div className="grid gap-6 pt-4 sm:px-28 md:grid-cols-2">
        {steps.map(({ id, icon: Icon, title, body }) => (
          <div
            key={id}
            className="relative mt-8 flex flex-col rounded-3xl border border-slate-200 bg-stone-50 p-6"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-stone-800">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-stone-600">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
