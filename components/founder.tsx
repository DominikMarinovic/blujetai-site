import Link from "next/link"
import { Button } from "@/components/ui/button"

const founderHighlights = [
  "Abandoned checkouts that never get a real conversation",
  "Failed rebills that quietly turn into churn",
  "Upsell moments that get missed after the first order",
  "Support bottlenecks that slow down conversions",
]

export default function Founder() {
  return (
    <section id="founder" aria-labelledby="founder-heading" className="container bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_28px_60px_-40px_rgba(15,23,42,0.45)]">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="relative aspect-[8/10] min-h-[220px] bg-stone-900 sm:aspect-[3/2] md:aspect-auto md:min-h-full">
                <img
                 src="/founder.jpg"
                 alt="Founder portrait placeholder"
                 className="h-full w-full object-cover object-top sm:object-center"
                 loading="lazy"
                decoding="async"
                  />
            </div>
            <div className="p-6 sm:p-10">
              <h2
                id="founder-heading"
                className="font-heading text-3xl font-medium text-stone-900 sm:text-4xl"
              >
                Dominik Marinovic
              </h2>
              <p className="mt-1 text-lg italic font-serif tracking text-stone-600">
                Founder | Blujet AI
              </p>

              <p className="mt-6 text-lg font-semibold text-stone-800">
                I know how brutal it feels to watch subscription revenue leak away after you paid
                for the traffic.
              </p>
              <p className="mt-4 text-md leading-relaxed text-stone-600">
                I built Blujet AI after seeing subscription brands lose revenue at the two most
                fragile moments: abandoned checkouts and failed rebills. Our AI agents step in with
                real conversations to recover sales and protect retention.
              </p>
              <p className="mt-4 text-md leading-relaxed text-stone-600">
                Here is what we usually uncover in the first week:
              </p>

              <ul className="mt-4 space-y-2 text-md text-stone-600">
                {founderHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-stone-500">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-md leading-relaxed text-stone-600">
                That is why we built Blujet AI so founders get a full recovery team without hiring
                or extra ad spend.
              </p>
              <p className="mt-4 text-lg font-semibold text-stone-800">
                Let me show you how we recover revenue before it becomes churn.
              </p>

              <div className="mt-6">
                <Link href="#pilot-widget">
                  <Button className="w-full text-xl sm:w-auto">Talk with the Founder</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
