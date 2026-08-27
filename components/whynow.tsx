import { Button } from "@/components/ui/button"
import Link from "next/link"

const agentCapabilities = [
  "❌ 90% of your leads end up being 'Medicare Moms', price-shoppers, or tire-kickers who could never afford a $5,000+ cash-pay treatment.",
  "❌ Your front desk is too busy running the clinic to call web leads within 5 minutes. Leads go ghost, and your ad spend is entirely wasted.",
  "❌ When a patient actually does show up, they know nothing about regenerative medicine. You end up wasting an hour of your valuable time acting as a teacher, instead of a doctor.",
  "❌ Agencies are terrified of asking leads for a consultation deposit because it makes their 'cost-per-lead' look bad. So, your schedule fills up with empty chairs.",
]

const dottedBackground = {
  backgroundImage: "radial-gradient(88, 190, 205, 0.35) 1px, transparent 1px)",
  backgroundSize: "500px 20px",
}

export default function WhyNowSection() {
  return (
    <section id="why-now" className="relative overflow-hidden bg-white to-foreground py-8 sm:py-16">
      <div aria-hidden="true" />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto text-stone-800">
          <h2 className="mt-6 capitalize font-bold text-3xl sm:text-3xl">
            The "Marketing Agency" Model is Broken for{" "}
            <span className="bg-[#119c31] px-2 text-stone-100 rounded-md">
              Regenerative Medicine
            </span>
          </h2>
          <h3 className=" text-stone-800 py-1 pt-8 sm:mt-10 text-center text-xl font-semibold">
            {" "}
            A generic lead-gen agency to grow your cash-pay treatments, brag about getting you 100
            leads a month
          </h3>
        </div>

        <div className="mx-auto mt-4 max-w-3xl">
          <div className="mt-8 space-y-4 text-left text-lg text-stone-600 sm:text-xl">
            <p className="font-bold">Here is what happens when you rely on traditional agencies:</p>
            <ul className="mt-12 space-y-3 text-md text-stone-600">
              {agentCapabilities.map((item) => (
                <li key={item} className="flex items-start justify-start gap-3">
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
