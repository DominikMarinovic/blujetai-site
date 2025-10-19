import { CheckCircle2, XCircle } from "lucide-react"

const fitsList = [
  "Your business is built on MRR, doing $250k - $5M/month in a high-LTV niche like beauty, health & fitness, pet supplies, or high-ticket goods.",
  "You're stuck on the \"founder's treadmill\" where rising ad costs and customer churn mean you're working harder just to keep your growth from flatlining.",
  "You believe the key to profitable scale isn't just buying more traffic, but maximizing the value of every visitor and subscriber you already have. You're looking for a strategic lever, not just another marketing channel.",
  "If you're nodding your head, we designed this for you.",
]

const notFitsList = [
  "You're just starting out (under $100k/month). Our system is a growth multiplier that requires a certain volume of traffic and transactions to deliver its full financial impact. We want you to succeed, and we would be happy to talk once you hit that milestone.",
  "Your primary business model is dropshipping or low-margin, one-off sales. Our system creates the most profound value for brands focused on building long-term customer relationships, subscriptions, and maximizing LTV.",
  "You're looking for another DIY software tool to add to your stack. We are a done-for-you growth partner that builds and manages a complete system for you. We are an investment in results, not another monthly software subscription you have to manage yourself.",
]

export default function WhoThisIsFor() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase text-transparent inline-block bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 bg-clip-text">
            Who This Is For
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-stone-800 sm:text-4xl">
            Is the AI Intervention Engine Right for You?
          </h2>
          <p className="mt-4 text-base text-stone-600 sm:text-lg">
            We are specialists. Our system is engineered for a specific type of e-commerce brand at
            a specific stage of growth. This focus is why we deliver such dramatic results. See if
            this describes you:
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-stone-900">
                This System is Built For You If...
              </h3>
            </div>
            <ul className="mt-6 space-y-4 text-left text-sm text-stone-700 sm:text-base">
              {fitsList.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <XCircle className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-stone-900">
                This is Probably Not For You If...
              </h3>
            </div>
            <ul className="mt-6 space-y-4 text-left text-sm text-stone-700 sm:text-base">
              {notFitsList.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-rose-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
