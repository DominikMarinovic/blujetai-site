const steps = [
  {
    step: "STEP 1",
    title: "Free Demo Call",
    desc: "15-minute demo call where we'll map your current revenue leaks, identify how much money you lose everyday",
  },
  {
    step: "STEP 2",
    title: "Build & Results",
    desc: "We build your custom AI agents. We rigorously test everything behind the scenes to ensure seamless performance before launch.",
  },
  {
    step: "STEP 3",
    title: "Results & Optimization",
    desc: "Your AI agents go live. You'll see abandoned checkouts recovered and churn reduced, directly impacting your ROAS and MRR stability.",
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="container bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="inline-block bg-gradient-to-br from-foreground to-accent bg-clip-text text-sm font-semibold uppercase text-transparent">
          Next steps
        </p>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          <span className="block">Getting started is easy</span>
          <span className="block mt-2 font-serif font-normal italic text-stone-500">It's Done-For-You</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {steps.map(({ step, title, desc }, index) => {
          const stepNumber = step.match(/\d+/)?.[0] ?? `${index + 1}`
          const paddedNumber = stepNumber.padStart(2, "0")
          return (
            <div
              key={step}
              className="h-full rounded-[28px] border border-stone-200 bg-[#f4f6f7] p-1 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.4)]"
            >
              <div className="flex h-full flex-col rounded-[24px] border border-stone-200 bg-white px-7 pb-9 pt-7 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-foreground to-accent text-white shadow-[0_7px_18px_rgba(14,104,173,0.6)]">
                  <span className="text-base font-semibold">{paddedNumber}</span>
                </div>
                <span className="sr-only">{step}</span>
                <h3 className="mt-5 text-lg font-semibold text-stone-800">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">{desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
