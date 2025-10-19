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
    body: "If every brand uses the same email/SMS stack, your differentiation disappears. You end up with the same messaging next to your competitor emails",
  },
]

const contrast = [
  {
    old: "Blast the same email/SMS sequence to everyone and hope timing is right",
    new: "Agent monitors checkout intent and reaches out within minutes with a tailored conversation",
  },
  {
    old: "If a customer replies, your team has to jump in manually (usually hours later)",
    new: "AI handles the back-and-forth instantly, logging notes + outcomes into your stack",
  },
  {
    old: "Discounts become the default lever to recover revenue",
    new: "Objections are resolved in real time so customers buy at full price and stay on subscription",
  },
  {
    old: "MRR still leaks: passive campaigns miss 70-80% of high-intent shoppers",
    new: "Live conversations save the majority of at-risk orders, unlocking scalable MRR",
  },
]

export default function OldPlaybook() {
  return (
    <section className="container bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase text-transparent inline-block bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 bg-clip-text">
          The old playbook
        </p>
        <h2 className="mt-3 font-heading text-3xl capitalize font-semibold text-stone-900 sm:text-4xl">
          The ‘Guru’ Playbook is Broken
        </h2>
        <p className="mt-4 whitespace-pre-line text-base text-stone-600 sm:text-xl sm:mt-8">
          Problem is not in your ads. It's in the old playbook.
        </p>
        <p className="mt-4 whitespace-pre-line text-base text-stone-600 sm:text-xl sm:mt-8">
          You’ve set up the sophisticated email flows. You’re running the "logical" playbook that
          every marketing guru preaches.
        </p>
        <p className="mt-4 whitespace-pre-line text-base text-stone-900 font-bold sm:text-xl sm:mt-8">
          So why are you still losing most of your subscribers at checkout and first rebill?
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6  sm:px-64 md:grid-cols-1">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-stone-50 p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-stone-800">{card.title}</h3>
            <p className="mt-3 text-sm text-stone-600">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
