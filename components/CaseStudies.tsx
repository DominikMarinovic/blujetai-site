import { caseStudies } from "@/content/site"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CaseStudies() {
  return (
    <section className="container bg-white pt-16 pb-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading  font-bold text-3xl sm:text-4xl">What about results?</h2>
        <p className="mt-3 text-muted-foreground">Real outcomes from recent launches.</p>
      </div>
      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {caseStudies.map((c, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-lg font-semibold text-stone-900">{c.title}</div>
            {c.summary && (
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
            )}
            {c.detail && <p className="mt-2 text-sm text-muted-foreground/90">{c.detail}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
