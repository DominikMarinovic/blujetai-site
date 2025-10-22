import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import { LogoMarquee } from "@/components/LogoMarquee"
import { VidalyticsPlayer } from "@/components/VidalyticsPlayer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { site } from "@/content/site"

const TRUST_BADGES = [
  { label: "Shopify Plus", src: "/shopify plus.png" },
  { label: "Shopify", src: "/Shopify.png" },
  { label: "Recharge", src: "/recharge.png" },
  { label: "Bold", src: "/Bold.png" },
  { label: "Loop", src: "/loop.png" },
  { label: "Skio", src: "/skio.png" },
  { label: "Stay AI", src: "/stay ai.png" },
  { label: "Tapcart" },
  { label: "Klaviyo" },
]

const STEP_VIDEOS: Record<"step1" | "step2", string> = {
  step1: "",
  step2: "",
}

type VidalyticsEmbed = {
  embedId: string
  scriptUrl: string
  aspectRatio?: string
}

const StepHeader = ({
  step: _step,
  title,
  subtitle,
}: {
  step: string
  title: string
  subtitle?: string
}) => (
  <header className="mx-auto max-w-3xl text-center">
    <h2 className="mt-3 text-2xl font-semibold text-stone-900 sm:text-3xl">{title}</h2>
    {subtitle ? <p className="mt-3 text-base text-stone-600 sm:text-lg">{subtitle}</p> : null}
  </header>
)

const VideoEmbed = ({
  src,
  title,
  vidalytics,
  className,
}: {
  src?: string
  title: string
  vidalytics?: VidalyticsEmbed
  className?: string
}) => {
  if (vidalytics) {
    return (
      <div
        className={cn(
          "relative mt-8 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-stone-950/90 shadow-xl shadow-blue-950/10",
          className
        )}
      >
        <VidalyticsPlayer
          embedId={vidalytics.embedId}
          scriptUrl={vidalytics.scriptUrl}
          aspectRatio={vidalytics.aspectRatio}
        />
      </div>
    )
  }

  if (src) {
    return (
      <div
        className={cn(
          "relative mt-8 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-stone-950/90 shadow-xl shadow-blue-950/10",
          className
        )}
      >
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    )
  }

  return (
    <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-stone-950/90 shadow-xl shadow-blue-950/10">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 px-6 py-16 text-center">
        <p className="max-w-md text-sm text-stone-200 sm:text-base">
          Drop your video embed URL in{" "}
          <code className="rounded bg-stone-900 px-1.5 py-0.5 text-xs">STEP_VIDEOS.step2</code> or
          pass embed props inside
          <code className="ml-1 rounded bg-stone-900 px-1.5 py-0.5 text-xs">
            app/booked-call/page.tsx
          </code>
          .
        </p>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Call Confirmed | Blujet AI",
  description:
    "Thanks for booking a strategy call with Blujet AI. Follow the onboarding steps so we can personalize your recovery plan before we meet.",
}

export default function BookedCallPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-stone-200 bg-white pb-8 pt-6 sm:pb-24 sm:pt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-sm text-center font-semibold uppercase text-blue-600 sm:text-3xl">
            Call booked! Follow the steps below
          </h2>

          <div className="mx-auto mt-2 flex max-w-5xl flex-col items-center gap-4 sm:mt-8">
            <div className="w-full lg:max-w-md">
              <StepHeader
                step="Step 1"
                title="Step 1 : Watch this 2-min video to confirm your 1-1 call"
              />
            </div>
            <div className="w-full lg:flex-1">
              <VideoEmbed
                title="Blujet AI call confirmation video"
                vidalytics={{
                  embedId: "vidalytics_embed_dJJXAWovjubjzlKH",
                  scriptUrl: "https://fast.vidalytics.com/embeds/JqUaIjL4/dJJXAWovjubjzlKH/",
                  aspectRatio: "100%",
                }}
                className="max-w-[320px] sm:max-w-[720px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <StepHeader
            step="Step 2"
            title="Step 2 : See how the recovery system works end-to-end"
            subtitle="Walk through the exact flows, automations, and guarantees we use so you know what to expect in the first 14 days."
          />

          <VideoEmbed src={STEP_VIDEOS.step2} title="Blujet AI recovery walkthrough" />

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white px-6 py-5 text-center shadow-sm ring-1 ring-stone-200">
            <p className="text-sm font-semibold uppercase text-blue-600">Very Important!</p>
            <p className="mt-3 text-base text-stone-600">
              Jot down any questions about integrations, voice tone, or compliance. We'll cover them
              live so you're ready to launch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">FAQ</h2>
            <p className="mt-3 text-stone-600">Answers to common questions before we meet.</p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8">
            <Accordion type="single" collapsible>
              {site.faq.map((item, index) => (
                <AccordionItem key={`${item.q}-${index}`} value={`item-${index}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
