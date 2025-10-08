const challenges = [
  {
    title: "High Customer Acquisition Cost",
    body:
      "Paid traffic is getting more expensive every quarter. Without a recovery system you end up paying more for the same customer over and over again.",
  },
  {
    title: "Tightening Profit Margins",
    body:
      "Fulfillment, ads and discounts keep squeezing margins. Every lost checkout or failed rebill makes the math even harder.",
  },
  {
    title: "Missing Retention Infrastructure",
    body:
      "You can’t scale if retention relies on manual outreach. Brands need automated follow-up that plugs straight into checkout and subscription data.",
  },
  {
    title: "High Churn",
    body:
      "Subscribers leave at the first renewal or when a rebill fails. Without proactive saves you bleed MRR every single day.",
  },
  {
    title: "Commoditization",
    body:
      "Competitors copy offers fast. Differentiation comes from the experience you deliver after the customer signs up, not just the product.",
  },
]

export default function SubscriptionChallenges() {
  return (
    <section className="container bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">The Reality</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-stone-900 sm:text-4xl">
          Most Subscription Ecommerce Brands Face These Five Challenges
        </h2>
        <p className="mt-4 text-base text-stone-600 sm:text-lg">
          Solving them unlocks profitable growth. You can tackle each problem alone or bring us in to
          speed up implementation.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div>
              <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
              <p className="mt-3 text-sm text-stone-600">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-blue-50 px-6 py-5 text-center text-sm text-blue-900">
        Solving these challenges will boost your profits and are key to your business’s survival.
        Tackle them yourself, or book a call with us to speed it up.
      </div>
    </section>
  )
}
