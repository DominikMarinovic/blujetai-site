import HeroVertical from "@/components/HeroVertical"
import CaseStudies from "@/components/CaseStudies"
import WhoThisIsFor from "@/components/WhoThisIsFor"
import Faq from "@/components/Faq"
import WhatYouGet from "@/components/WhatYouGet"
import BluSalesRepSection from "@/components/BluSalesRepSection"
import WhyNowSection from "@/components/whynow"
import Bento from "@/components/bento"
import HowWeWork from "@/components/HowWeWork"
import PathToLaunch from "@/components/PathToLaunch"
import { BrokenModelSection } from "@/components/BrokenModel"
import { HowWeAreDifferentSection } from "@/components/HowWeAreDifferent"

export default function Page() {
  return (
    <>
      <HeroVertical />
      <BrokenModelSection />
      <HowWeAreDifferentSection />
    </>
  )
}
