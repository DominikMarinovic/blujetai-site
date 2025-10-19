import { clsx } from "clsx"
import Image from "next/image"
import { BotIcon, MessageCircleIcon, HandshakeIcon, TrendingUpIcon } from "lucide-react"

const steps = [
  {
    id: "ingest",
    title: "Your Brand Voice, Cloned & Deployed.",
    body: "We Train AI on your Brand & products information. We give it sales script to convert customers based on their intent. Agent watches like a hawk for every event so nothing can go without the notice!",
    imageSrc: "/build-agent.png",
    imageAlt: "Building and training AI agent for your store",
  },
  {
    id: "decide",
    title: "Proactive Intervention at the Critical Moment!",
    body: "Agent gets cart/subscription details, customer details and calls customers with specific targeted message using your tone and offer logic to close them.",
    imageSrc: "/activation.png",
    imageAlt: "AI agent reaching abandoned cart shoppers",
  },
  {
    id: "engage",
    title: "Objections Handled. Revenue Recovered.",
    body: "Agent overcomes the objections, gets them over the fence and converts them. We then analyze call transcripts to provide you with data-driven insights to further optimize the customer experience.",
    imageSrc: "/convert.png",
    imageAlt: "AI agent converts customers and gathers valuable information",
  },
  {
    id: "verify",
    title: "A New Level of Scale",
    body: "You unlock a new level of scale with your brand. You can finally invest more into your brand with data-backed decisions! We continue to optimize agents to perform better based on call outcomes.",
    imageSrc: "/scale.png",
    imageAlt: "Higher MRR with more stable cashflow",
  },
]

export default function AiRecoveryFlow() {
  return (
    <section id="system" className="container bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase text-transparent inline-block bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 bg-clip-text">
          Here is how we fix this
        </p>
        <h2 className="mt-3 font-heading text-3xl capitalize font-semibold text-stone-900 sm:text-4xl">
          The AI Intervention Engine: A System, Not Just a Tool.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:px-12 md:px-16 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ id, title, body, imageSrc, imageAlt }) => (
          <div
            key={id}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-stone-50 p-6 lg:col-span-2"
          >
            {imageSrc ? (
              <div className="relative mb-6 h-52 sm:h-80 overflow-hidden rounded-lg bg-white">
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
            ) : null}
            <div>
              <h3 className="text-xl font-semibold text-stone-800">{title}</h3>
              <p className="mt-3 text-sm text-stone-600">{body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-20 sm:mx-64 whitespace-pre-line text-lg text-center font-bold text-stone-800 sm:text-2xl sm:mt-40">
        Emails are passive way of customer engagment. We have conversations with your customers
      </p>
    </section>
  )
}
