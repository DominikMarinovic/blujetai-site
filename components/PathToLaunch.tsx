import Image from "next/image"

type Card = {
  title: string
  desc: string
  image: { src: string; alt: string; w?: number; h?: number; className?: string }
}

const cards: Card[] = [
  {
    title: "Discovery Call with an AI Commerce Specialist",
    desc: "Quick call to map your checkout leaks, choose the fastest first win (abandoned checkout, failed rebills, or upsell), and confirm fit.",
    image: {
      src: "/ss.png",
      alt: "Video call preview between specialist and merchant",
      w: 1100,
      h: 680,
      className: "object-cover",
    },
  },
  {
    title: "Connect Store & Sign",
    desc: "Complete a lightweight intake, connect Shopify and sign the short agreement + DPA. Takes <30 minutes.",
    image: {
      src: "/dashboard-overview.svg",
      alt: "Simple onboarding form and connection screens",
      w: 1200,
      h: 800,
      className: "object-contain bg-white",
    },
  },
  {
    title: "Dedicated Slack Channel",
    desc: "Real-time alerts, rapid responses, and weekly summaries. You get direct access to the team building and tuning your agents.",
    image: {
      src: "/ss.png",
      alt: "Slack channel mock showing alerts and updates",
      w: 1200,
      h: 760,
      className: "object-cover",
    },
  },
  {
    title: "Live Revenue Dashboard",
    desc: "Full visibility: recovered revenue, save rate, AOV lift, transcripts, and insights—all in one place.",
    image: {
      src: "/dashboard.jpg",
      alt: "Dashboard with metrics and recent activity",
      w: 1200,
      h: 760,
      className: "object-cover",
    },
  },
]

export default function PathToLaunch() {
  return (
    <section id="path" className="container py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl">
          Your Path to First Recovered Revenue
        </h2>
        <p className="mt-3 text-muted-foreground">
          Simple steps to go live fast and see results within days.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow transition-shadow"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-white">
              <Image
                src={c.image.src}
                alt={c.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={c.image.className ?? "object-cover"}
                priority={false}
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
