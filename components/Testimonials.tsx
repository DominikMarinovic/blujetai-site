export default function Testimonials() {
  const items = [
    {
      quote:
        "Blujet boosted our recovered revenue within two weeks. The calls sound natural and convert.",
      author: "DTC Cosmetics, COO"
    },
    { quote: "7.2x ROI last month with almost zero lift from our team.", author: "Home Fitness, VP Growth" },
    { quote: "Our response times dropped 38% and CSAT improved.", author: "Apparel Retailer, CX Lead" }
  ]
  return (
    <section className="container py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl sm:text-4xl">Loved by Operators</h2>
        <p className="mt-3 text-muted-foreground">Quotes from recent rollouts.</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <figure key={i} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-card">
            <blockquote className="text-sm text-slate-700">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-xs text-muted-foreground">{t.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
