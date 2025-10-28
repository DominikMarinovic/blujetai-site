import { CheckCircle2, XCircle } from "lucide-react"

const fitsList = [
  "Your business is built on MRR, doing $250k - $5M/month in a high-LTV niche like beauty, health & fitness, pet supplies, or high-ticket goods.",
  "You feel stuck on the 'founder's treadmill'. Rising ad costs and stubborn churn mean you're working harder just to keep growth from flatlining, preventing truly profitable scale.",
  "You believe the key to sustainable growth isn't just buying more traffic, but maximizing the value and retention of every visitor and subscriber you already fought hard to acquire. You're seeking a strategic lever, not just another marketing channel.",
]

const notFitsList = [
  "You're just starting out (under $100k/month). Our system needs a certain volume to deliver its full financial impact. We'd love to talk once you reach that milestone!",
  "Your primary model is dropshipping or low-margin, single-purchase sales. Our greatest value lies in boosting LTV and retention for brands focused on long-term customer relationships and subscriptions.",
  "You're looking for another DIY software tool. We are a done-for-you growth partner. We build, manage, and optimize the entire system for you. This is an investment in results, not another software subscription to manage",
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
            <div className="flex items-center gap">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full text-emerald-600">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-stone-900">This is Right For You If...</h3>
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
            <div className="flex items-center gap">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full text-rose-600">
                <XCircle className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-stone-900">This is Not For You If...</h3>
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
