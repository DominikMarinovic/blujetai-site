import Hero from "@/components/Hero"
import CostsOfInaction from "@/components/CostsOfInaction"
import AiRecoveryFlow from "@/components/AiRecoveryFlow"
import CaseStudies from "@/components/CaseStudies"
import ExampleSection from "@/components/example"
import HowWeWork from "@/components/HowWeWork"
import StatsStrip from "@/components/StatsStrip"
import WhoThisIsFor from "@/components/WhoThisIsFor"
import Faq from "@/components/Faq"
import CostsOfInactionAlt from "@/components/CostsOfInactionAlt"
import BluSalesRepSection from "@/components/BluSalesRepSection"
import WhyNowSection from "@/components/whynow"
import Bento from "@/components/bento"
import Founder from "@/components/founder"


export default function Page() {
  return (
    <>
      <Hero />
      <CostsOfInactionAlt />
      <BluSalesRepSection />
      <Bento/>
      <WhyNowSection />
      <CaseStudies />
      <HowWeWork />
      <WhoThisIsFor />
     
      <Founder />
      <Faq />
    </>
  )
}
