import Hero from "@/components/Hero"
import CostsOfInaction from "@/components/CostsOfInaction"
import AiRecoveryFlow from "@/components/AiRecoveryFlow"
import CaseStudies from "@/components/CaseStudies"
import OldPlaybook from "@/components/OldPlaybook"
import HowWeWork from "@/components/HowWeWork"
import StatsStrip from "@/components/StatsStrip"
import WhoThisIsFor from "@/components/WhoThisIsFor"
import Faq from "@/components/Faq"
import { LogoMarquee } from "@/components/LogoMarquee"

const HERO_LOGOS = [
  { label: "Skio", src: "/skio.png" },
  { label: "Shopify", src: "/Shopify.png" },
  { label: "Stay AI", src: "/stay ai.png" },
  { label: "Bold", src: "/Bold.png" },
  { label: "Shopify Plus", src: "/shopify plus.png" },
  { label: "Loop", src: "/loop.png" },
  { label: "Recharge", src: "/recharge.png" },
]

export default function Page() {
  return (
    <>
      <Hero />
      <LogoMarquee heading="Our trusted Partners" items={HERO_LOGOS} />
      <CostsOfInaction />
      <OldPlaybook />
      <AiRecoveryFlow />
      <HowWeWork />
      <CaseStudies />
      <StatsStrip />
      <WhoThisIsFor />
      <Faq />
    </>
  )
}
