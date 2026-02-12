import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { site } from "@/content/site"

export default function Faq() {
  return (
    <section id="faq" className="container bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-stone-800">FAQ</h2>
        <p className="mt-3 text-2xl italic text-stone-500">Answers to your questions</p>
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
  )
}
