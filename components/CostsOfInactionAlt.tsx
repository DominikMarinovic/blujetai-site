import { BadgeHelp, Banknote, TrendingDown, BugOff, UserX, type LucideIcon } from "lucide-react"

const intro = {
  titleLine1: "Does this sound familiar?",
  titleLine2: "You’re driving traffic… but subscription revenue isn’t scaling with it.",
  descriptionLine1: "You have decent traffic on your site",
  descriptionLine2: "But still you feel like you are stuck for months!",
}

type CostCardContent = {
  title: string
  description: string
  icon: LucideIcon
}

const cards: CostCardContent[] = [
  {
    title: "Low Subscription Conversion",
    description:
      "You’re spending aggressively on ads to acquire customers — but the most of visitors never convert into subscribers",
    icon: TrendingDown,
  },
  {
    title: "Early Subscriber Churn",
    description:
      "Sign-ups come in… then cancellations hit before or right after the first renewal. Your LTV collapses before it ever compounds",
    icon: UserX,
  },
  {
    title: "Scaling Feels Impossible",
    description:
      "Every time you increase ad spend, ROAS drops. More traffic doesn’t equal more revenue — it just exposes the leaks.",
    icon: BugOff,
  },
  
]

const gridStyle = {
  backgroundImage:
    "linear-gradient(to right, rgba(15, 23, 42, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.06) 1px, transparent 1px)",
  backgroundSize: "240px 240px",
}

export default function CostsOfInactionAlt() {
  return (
    <section id="recovery" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10" style={gridStyle} />
      <div className="container relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div className="mx-auto max-w-4xl text-center">
        <p className="inline-block bg-gradient-to-br font-serif italic from-[#18535D] to-blue-400 bg-clip-text text-xl font-semibld text-transparent">
          The Problem
        </p>
        <h2 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-stone-800 sm:text-4xl">
          <span className="block">{intro.titleLine1}</span>
          <span className="block mt-2 font-serif font-normal text-2xl sm:text-3xl itali text-stone-500">{intro.titleLine2}</span>
        </h2>
       
      </div>

          <div className="mt-12 w-full rounded-[32px] border-2 border-stone-200/80 bg-slate-50 p-4 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.4)] sm:p-6">
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
              {cards.map((card) => (
                <CostCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CostCard({ title, description, icon: Icon }: CostCardContent) {
  return (
    <div className="rounded-2xl border border-stone-200/80 bg-white px-6 pb-6 pt-8 text-center shadow-[0_14px_30px_-26px_rgba(15,23,42,0.35)]">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-accent to-foreground text-white shadow-[0_8px_20px_rgba(14,104,173,0.6)] ">
        <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={2.1} />
      </div>
      <h3 className="mt-5 text-base font-semibold text-stone-800">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">{description}</p>
    </div>
  )
}
