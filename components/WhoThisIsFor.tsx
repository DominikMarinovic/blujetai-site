import { Check, X } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const fitsList = [
  "You're a Shopify brand doing $3M-$80M+ per year",
  "You operate in Health & Beauty, Home, Pets, Food, or CPG",
  "You’ve hit a revenue plateau despite strong traffic and spend",
  "Your CAC keeps rising while LTV refuses to scale",
  "You want to scale to $20M, $30M, $50M+ without destroying margins",
  "You’re willing to invest in systems that produce real revenue",
]

const notFitsList = [
  "You're doing under $3M/year",
  "You're a dropshipper or info product ",
  "Your product is fundamentally broken (we fix conversion and retention, not bad products)",
  "You’re looking for a $99/month DIY tool",
  "You're not willing to invest 4-5 figures to build your AI sales & support team",
]

const dotBackgroundStyle = {
  backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)",
  backgroundSize: "16px 16px",
}

export default function WhoThisIsFor() {
  return (
    <section id="who-this-is-for" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10" style={dotBackgroundStyle} />
      <div className="container mx-auto max-w-3xl">
        <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
          <div className=" p-6  sm:p-8">
            <div className="text-center">
              <h3 className="font-serif italic text-stone-700 text-3xl">
                This Is For You If...
              </h3>
              <div className="mx-auto mt-1 h-[2px] w-40 rounded-full bg-accent" />
            </div>
            <ul className="mt-6 space-y-4 text-left text-md text-stone-700 sm:text-lg">
              {fitsList.map((item) => (
                <li key={item} className="flex items-start gap-2 bg-white px-4 py-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center bg-white text-accent">
                    <Check className="h-6 w-6"  strokeWidth="3"/>
                  </span>
                  <span className="font-medium text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className=" p-6 sm:p-8">
            <div className="text-center">
              <h3 className="font-serif italic text-stone-700 text-3xl">
                This Is NOT For You If...
              </h3>
              <div className="mx-auto mt-1 h-[2px] w-40 rounded-full bg-rose-600" />
            </div>
            <ul className="mt-6 space-y-4 text-left text-md text-stone-700 sm:text-lg">
              {notFitsList.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white px-4 py-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center bg-white text-rose-600">
                    <X className="h-6 w-6"  strokeWidth="3" />
                  </span>
                  <span className="font-medium text-stone-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
         
        </div>
        <div className="mt-12 text-center">
                    <Link href="#pilot-widget">
                      <Button className="w-full sm:w-auto">Get Revenue Recovery Plan</Button>
                    </Link>
                 </div>
        </div>
       
      
    </section>
  )
}
