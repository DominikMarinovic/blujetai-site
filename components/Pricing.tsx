import { pricing } from "@/content/site"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <section id="pricing" className="container py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl sm:text-4xl">Pricing</h2>
        <p className="mt-3 text-muted-foreground">Two ways to partner based on your needs.</p>
      </div>
      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {pricing.map((tier) => (
          <div key={tier.name} className="rounded-2xl border border-[#0F2130] bg-[#06090F] p-6 shadow-card">
            <h3 className="font-semibold">{tier.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{tier.blurb}</p>
            <div className="mt-4 text-3xl">{tier.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {tier.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
            <a href="/demo">
              <Button className="mt-6 w-full" aria-label={`Select ${tier.name}`}>
                Get Started
              </Button>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

