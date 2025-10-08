export default function DemoPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl sm:text-4xl">Live Demo</h1>
        <p className="mt-2 text-muted-foreground">
          Watch a quick product walkthrough and book a strategy call when you’re ready.
        </p>
        <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-[#0F2130] bg-[#06090F]">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Product Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div id="cta" className="mt-8 overflow-hidden rounded-2xl border border-[#0F2130] bg-[#06090F]">
          <iframe
            title="Calendly"
            src="https://calendly.com/"
            className="h-[700px] w-full"
          />
        </div>
      </div>
    </div>
  )
}

