import { Button } from "@/components/ui/button"
import Link from "next/link"

const agentCapabilities = [
  "❌ LTV/CAC is under pressure. Pumping more money into ads doesn’t feel like a smart answer",
  "❌ Early churn that eats your LTV",
  "❌ Failed payments that never recover",
  "❌ Abandoned checkouts and visitors leaving the site without buying",
]

const dottedBackground = {
  backgroundImage: "radial-gradient(88, 190, 205, 0.35) 1px, transparent 1px)",
  backgroundSize: "500px 20px",
}

export default function WhyNowSection() {
  return (
    <section
      id="why-now"
      className="relative overflow-hidden bg-white to-foreground py-16 sm:py-20"
    >
      <div aria-hidden="true" className="absolute inset-0 opacity-60" />

      <div className="container mx-auto max-w-3xl relative">
        <div className=" text-center text-stone-800">
          <h2 className="mt-6 capitalize font-bold text-3xl sm:text-3xl">
            "It's Not Ads — It's Your{" "}
            <span className="bg-foreground px-2 text-stone-100 rounded-md">Conversations</span>."
          </h2>
          <h3 className=" text-stone-800 py-3 mt-10 text-2xl font-bold">You've done the work.</h3>
        </div>

        <div className="mx-auto mt-4 max-w-3xl">
          <div className="mt-8 space-y-4 text-left text-lg text-stone-600 sm:text-xl">
            <p className=" text-stone-600">
              You have product–market fit, steady traffic, and solid customer base.
            </p>

            <p className="font-bold">
              But your growth has slowed... And now you’re stuck in a loop:
            </p>
            <ul className="mt-12 space-y-3 text-md text-stone-600">
              {agentCapabilities.map((item) => (
                <li key={item} className="flex items-start justify-start gap-3">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-10 text-stone-600">
              You’ve tried the agencies. You’ve layered on the tools. You’ve optimized the flows.
              And what did it get you?
            </p>
            <p className="pt-10 text-stone-600">
              The same ceiling. Just more dashboards to stare at.
            </p>
          </div>
          <div className="pt-3 mt-10 space-y-3 bg-stone-50 p-3 border-dashed border-4 border-amber-300 text-lg rounded-md shadow-xl">
            <div className="py-4 space-y-4">
              <p className="text-stone-900 text-xl font-semibold">Here’s the truth:</p>

              <p className=" text-stone-600">
                Every competitor in your space now has access to the same AI ad tools, the same
                creative platforms, the same campaign playbooks. The acquisition game has been
                commoditized.
              </p>
              <p className=" text-stone-600">
                The brands that are winning aren’t winning just because they run better ads.
              </p>
              <p className=" text-stone-800 font-semibold">
                They’re winning because of what happens after someone hits the site.
              </p>
              <p className=" text-stone-800 font-semibold">
                For every $1 they spend, they get 5, 8, even 10 times more back in customer lifetime
                value.
              </p>
            </div>
          </div>

          {/*<div className="mt-12 text-center">
            <Link href="#book-call">
              <Button className="w-full sm:w-auto">Yes! Grow My Subscriptions</Button>
            </Link>
          </div>*/}
        </div>
      </div>
    </section>
  )
}
