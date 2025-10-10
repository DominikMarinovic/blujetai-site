import Hero from "@/components/Hero"
import FeatureGrid from "@/components/FeatureGrid"
import CostsOfInaction from "@/components/CostsOfInaction"
import AiRecoveryFlow from "@/components/AiRecoveryFlow"
import CaseStudies from "@/components/CaseStudies"
import OldPlaybook from "@/components/OldPlaybook"
import BeforeAfter from "@/components/BeforeAfter"
import RoiCalculator from "@/components/RoiCalculator"
import Faq from "@/components/Faq"
import StatsStrip from "@/components/StatsStrip"
import BetterThanSMS from "@/components/BetterThanSMS"
import ProfitInfographic from "@/components/ProfitInfographic"
import HowWeWork from "@/components/HowWeWork"
import VoiceAgentShowcase from "@/components/VoiceAgentShowcase"

export default function Page() {
  return (
    <>
      <Hero />
      <CostsOfInaction />
      <OldPlaybook />
      <AiRecoveryFlow />
      <HowWeWork />
      <CaseStudies />
      <StatsStrip />
      <Faq />
    </>
  )
}
