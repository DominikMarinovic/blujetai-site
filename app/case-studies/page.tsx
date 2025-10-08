import { caseStudies } from "@/content/site"

export default function CaseStudiesPage() {
  return (
    <div className="container py-12">
      <h1 className="font-heading text-3xl sm:text-4xl">Case Studies</h1>
      <p className="mt-2 text-muted-foreground">A few quick examples from recent launches.</p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {caseStudies.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
          >
            <div className="text-lg font-semibold text-stone-900">{c.title}</div>
            {c.summary && (
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
            )}
            {c.detail && (
              <p className="mt-2 text-sm text-muted-foreground/90">{c.detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
