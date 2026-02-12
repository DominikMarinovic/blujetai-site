import Hero from "@/components/Hero"
import CaseStudies from "@/components/CaseStudies"
import WhoThisIsFor from "@/components/WhoThisIsFor"
import Faq from "@/components/Faq"
import WhatYouGet from "@/components/WhatYouGet"
import BluSalesRepSection from "@/components/BluSalesRepSection"
import WhyNowSection from "@/components/whynow"
import Bento from "@/components/bento"

export default function Page() {
  return (
    <>
      <Hero />
      <WhyNowSection />
      <BluSalesRepSection />
      <Bento />
      <CaseStudies />
      <WhatYouGet />
      <WhoThisIsFor />
      <Faq />
    </>
  )
}
