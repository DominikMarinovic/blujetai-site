import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { site } from "@/content/site"

export default function Faq() {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="container py-24 text-center sm:py-32">
          <h2 className="font-heading text-3xl font-bold text-stone-800 sm:text-6xl md:text-7xl">
            While your competitors are still sending emails, you can be having conversations.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-stone-600">
            Book an audit call here where we'll go over your current recovery funnel, improvements
            that can be made, and what implementing the agentic recovery model would look like for
            your Brand! <br /> <br /> <br /> [Dodati calendar]
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/demo">
              <Button variant="secondary" className="min-h-16 min-w-[280px] sm:min-w-[320px]">
                <span className="cta-text-sheen">Stop Losing Paid Revenue!</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="container py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-stone-800">FAQ</h2>
          <p className="mt-3 text-stone-600">Answers to common questions</p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#E5E7EB] bg-white p-6">
          <Accordion type="single" collapsible>
            {site.faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
