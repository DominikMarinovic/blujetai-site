const cards = [
  {
    title: "Passive Patchwork",
    body: "Standard automations send reminders, but they can't actively engage a customer having second thoughts or facing a payment issue in the moment. They react after the leak starts.",
  },
  {
    title: "Generic Messages, Not Solutions",
    body: "Automated flows broadcast the same message to everyone. They can't diagnose why a specific customer is churning or abandoning their cart, nor address unique objections..",
  },
  {
    title: "Ignoring the Human Element",
    body: "Customers leave because of uncertainty, questions, or friction. Static messages can't provide the reassurance or answers a real (or human-like) conversation can.",
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
          The broken playbook
        </p>
        <h2 className="mt-3 font-heading text-3xl capitalize font-semibold text-stone-900 sm:text-4xl">
          Stop pouring ad spend into a leaky bucket
        </h2>
        <p className="mt-4 whitespace-pre-line text-base text-stone-600 sm:text-xl sm:mt-8">
          You've driving traffic, acquiring subscribers. Your ad spend climbs, you celebrate new
          subscriber numbers, but net MRR growth barely moves. Sound familiar?
        </p>
        <p className="mt-4 whitespace-pre-line text-base text-stone-900 font-bold sm:text-xl sm:mt-8">
          For many 7, 8, and 9-figure subscription brands, the problem isn't traffic. <br /> It's
          the leaks. You're pouring expensive ad spend into a funnel that's losing valuable revenue
          at critical points.
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
