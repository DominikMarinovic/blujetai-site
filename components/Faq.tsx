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
        <div id="pilot-widget" className="container py-24 text-center sm:py-32">
          <h2 className="font-heading text-3xl font-bold text-stone-800 sm:text-4xl md:text-5xl">
            Have Conversations with Customers!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-stone-600">
            Book an audit call here where we'll go over your current recovery funnel, improvements
            that can be made, and what implementing the agentic recovery model would look like for
            your Brand!
          </p>
          <div>
            <div
              className="iclosed-widget mt-10 width: 100%; height: 620px"
              data-url="https://app.iclosed.io/e/blujetai/blujetai-pilot-program"
              title="BlujetAI Pilot Program"
            ></div>
            <script
              type="text/javascript"
              src="https://app.iclosed.io/assets/widget.js"
              async
            ></script>
          </div>
        </div>
      </section>

      <section id="faq" className="container bg-white py-16 sm:py-24">
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

        {/* <div className="mx-auto px-4 mt-12 max-w-2xl rounded-2xl bg-stone-200 py-5 text-center">
          <h3 className="my-2 font-heading text-xl font-semibold">
            Don't see what you're looking for?
          </h3>
          <p className="text-md mb-4 text-stone-900">
            Reach to our team directly and we'll get back to you.
          </p>
          <Button id="#pilot-widget" className="font-semibold text-md bg-stone-700">
            Get in touch
          </Button>
        </div>*/}
      </section>
    </>
  )
}
