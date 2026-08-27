import Image from "next/image"

type Card = {
  title: string
  desc: string
  image: { src: string; alt: string; w?: number; h?: number; className?: string }
}

const cards: Card[] = [
  {
    title: "Step 1: FDA 361-Compliant, Educational Marketing",
    desc: "We don’t run cheap '$21 Groupon-style' discounts that attract price-shoppers. We deploy high-quality, symptom-specific campaigns (targeting severe knee pain, neuropathy, etc.) that position you as the premium medical authority in your market. We educate the patient before they ever click, so only high-intent prospects enter the funnel.",
    image: {
      src: "/ss.png",
      alt: "Video call preview between specialist and merchant",
      w: 1100,
      h: 680,
      className: "object-cover",
    },
  },
  {
    title: "Step 2: The 'Hybrid' Qualification Engine (Dedicated Human + AI)",
    desc: "Speed-to-lead is everything, but your front desk is too busy. So, we replace them. We assign a dedicated, highly-trained human Appointment Setter to your clinic. They call every inquiry within 5 minutes to verify their medical need, confirm financial readiness (or credit eligibility), and weed out the tire-kickers. What if a prospect clicks an ad at 2:00 AM? Our AI Patient Concierge instantly takes over via SMS, answering FAQs and keeping the lead hot until your human setter gets on the phone the next morning. Zero gaps.",
    image: {
      src: "/dashboard-overview.svg",
      alt: "Simple onboarding form and connection screens",
      w: 1200,
      h: 800,
      className: "object-contain bg-white",
    },
  },
  {
    title: "Step 3: The Pre-Paid Appointment",
    desc: "This is where we completely separate from other agencies. Once a prospect is medically and financially qualified, our setter integrates directly with your EMR to collect a non-refundable consultation deposit over the phone. If they aren't willing to invest a deposit, they don't get a slot on your calendar. Period.",
    image: {
      src: "/ss.png",
      alt: "Slack channel mock showing alerts and updates",
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
          Our end-to-end patient acquisition machine tailored specifically for high-ticket
          regenerative medicine.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Here is our 3-step process to turning strangers into premium patients
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow transition-shadow"
          >
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
