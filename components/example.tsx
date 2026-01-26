const tasks = [
  "Cart abandonment rate",
  "Failed payment recovery rate",
  "Churn at 30/60/90 days",
  "Average order value and upsell rate",
]

const tasks2 = [
  "Watches every visitor in real-time",
  "Reaches out via SMS within 10 minutes",
  "Addresses their specific objection",
  "Offers time-sensitive incentives",
  "Answers questions instantly",
]

const tasks3 = [
  "Your product catalog and benefits",
  "Your brand voice and tone",
  "Your most common customer questions",
  "Your objection handling scripts",
  "Your existing customer data",
]

const tasks4 = [
  "Shopify (tracks every visitor and purchase)",
  "Recharge/Loop (monitors subscriptions and billing)",
  "Klaviyo (coordinates with existing flows)",
  "Gorgias (handles support conversations)",
  "Stripe (catches failed payments)",
]

const tasks5 = [
  "Reviewing weekly performance reports",
  "Checking the dashboard",
  "Seeing recovered revenue in real-time",
]

const responsibilities = [
  { title: "Set up the AI agents", detail: "takes a few hours" },
  { title: "Check the quality of what they produce", detail: "takes 2-3 hours/week" },
  { title: "Communicate with the client", detail: "takes 1-2 hours/week" },
]

const dotBackgroundStyle = {
  backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)",
  backgroundSize: "16px 16px",
}

export default function ExampleSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20" id="example">
      <div aria-hidden="true" className="absolute inset-0 -z-10" style={dotBackgroundStyle} />
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            <span className="block">What Makes This</span>
            <span className="block">Different?</span>
          </h2>
          <div className="mx-auto sm:mt-1 h-[3px] w-40 -rotate-2 rounded-full bg-[#057387]" />

          <div className="mt-8 text-left">
            <p className="text-xl font-semibold text-stone-900">
              You're not replacing your team. You're giving them superpowers.
            </p>
            <p className="mt-4 font-medium text-stone-700 sm:text-xl">
              <span className="font-semibold text-stone-800">Step 1: </span>We Analyze Your
              Funnel{" "}
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 sm:text-xl">
              {tasks.map((task) => (
                <li key={task} className="flex items-center gap-3">
                  <span className="mt-[3px] font-bold text-[#057387]">&raquo;</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
            <p className="mt-12 font-medium text-stone-700 sm:text-xl">
              <span className="font-semibold text-stone-800">Step 2: </span>We Build Your AI Sales
              Team
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 sm:text-xl">
              {tasks2.map((task) => (
                <li key={task} className="flex items-center gap-3">
                  <span className="mt-[3px] font-bold text-[#057387]">&raquo;</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
            <p className="mt-12 font-medium text-stone-700 sm:text-xl">
              <span className="font-semibold text-stone-800">Step 3: </span>We Train Them on Your
              Brand
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 sm:text-xl">
              {tasks3.map((task) => (
                <li key={task} className="flex items-center gap-3">
                  <span className="mt-[3px] font-bold text-[#057387]">&raquo;</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
            <p className="mt-12 font-medium text-stone-700 sm:text-xl">
              <span className="font-semibold text-stone-800">Step 4: </span> We Integrate With Your
              Stack
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 sm:text-xl">
              {tasks4.map((task) => (
                <li key={task} className="flex items-center gap-3">
                  <span className="mt-[3px] font-bold text-[#057387]">&raquo;</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
            <p className="mt-12 font-medium text-stone-700 sm:text-xl">
              <span className="font-semibold text-stone-800">Step 5: </span>You Watch Revenue Grow
            </p>
            <ul className="mt-4 space-y-3 text-stone-700 sm:text-xl">
              {tasks5.map((task) => (
                <li key={task} className="flex items-center gap-3">
                  <span className="mt-[3px] font-bold text-[#057387]">&raquo;</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-heading text-2xl font-semibold text-stone-900 sm:text-3xl">
              <span className="block">Instead, You Set Up AI Agents</span>
              <span className="block">
                That Do All Of This{" "}
                <span className="underline decoration-[#057387] decoration-[3px] underline-offset-[6px]">
                  Automatically.
                </span>
              </span>
            </h3>
          </div>

          <div aria-hidden="true" className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-20 sm:h-24" />
            ))}
          </div>


          <ul className="mt-4 space-y-3 text-sm text-stone-700 sm:text-base">
            {responsibilities.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="mt-[2px] text-lg font-bold text-[#14afcc]">&#10003;</span>
                <p>
                  <span className="font-semibold text-stone-900">{item.title}</span>{" "}
                  <span className="text-stone-500">({item.detail})</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-[#1c2a32] font-serif px-5 py-4 text-sm text-slate-100 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.6)] sm:px-6 sm:py-5 sm:text-xl">
            <p>
              <span className="font-bold text-[#14afcc]">Total time:</span> 20-25 hours per week for
              4-5 clients.
            </p>
            <p className="mt-2">
              <span className="font-bold text-[#14afcc]">Total income:</span> $10,000-$20,000 per
              month.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
