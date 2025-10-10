const introCopy = `You’ve done everything right. You’ve set up the sophisticated email flows in Klaviyo. You’ve added the SMS automations in Attentive. You’re running the "logical" playbook that every marketing guru preaches.
So why are you still losing 70-80% of your potential subscribers at checkout?
The hard truth is that the old playbook is broken. It’s built on a foundation of passive, one-way communication in a world that now demands a proactive, conversational experience.`

const cards = [
  {
    title: "Automations aren’t conversations",
    body: "Email flows and SMS drips send reminders, but they don’t actually handle objections in real time. Customers still leave with unanswered questions.",
  },
  {
    title: "One-way communication",
    body: "Today’s buyers expect back-and-forth. Passive messages, even well-timed ones, can’t match a human-style conversation that adapts on the fly.",
  },
  {
    title: "The playbook everyone runs",
    body: "If every brand uses the same email/SMS stack, your differentiation disappears. You end up competing on discounts instead of experience.",
  },
  {
    title: "MRR ceiling",
    body: "Recovering only a fraction of abandoned checkouts means you never escape the churn treadmill. Profits flatline while CAC keeps rising.",
  },
]

export default function OldPlaybook() {
  return (
    <section className="container bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">
          The Reason For That Is Simple
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-stone-900 sm:text-4xl">
          Your existing playbook talks at customers, not with them
        </h2>
        <p className="mt-4 whitespace-pre-line text-base text-stone-600 sm:text-lg">{introCopy}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:px-28 md:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-stone-900">{card.title}</h3>
            <p className="mt-3 text-sm text-stone-600">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
