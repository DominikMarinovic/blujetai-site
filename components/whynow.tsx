
import { Button } from "@/components/ui/button"
import Link from "next/link"


const agentCapabilities = [
  "Have specific jobs (cart recovery, failed payments,...)",
  "Work continuously across multiple channels",
  "Learn and improve from every conversation",
  "Produce volume results that beat human teams and static flows",
]


const dottedBackground = {
  backgroundImage: "radial-gradient(88, 190, 205, 0.35) 1px, transparent 1px)",
  backgroundSize: "500px 20px",
}

export default function WhyNowSection() {
  return (
    <section id="why-now" className="relative overflow-hidden bg-white to-foreground py-16 sm:py-20">
      <div aria-hidden="true" className="absolute inset-0 opacity-60" style={dottedBackground} />

      <div className="container mx-auto max-w-3xl relative">
        <div className=" text-center text-stone-800">
          <h2 className="mt-6 font-heading text-3xl font-medium sm:text-5xl">
            How is this different
            <span className="mt-2 block text-2xl font-serif italic text-accent sm:text-4xl">
              (than Email & SMS?)
            </span>
          </h2>
            <div className="mx-auto mt-2 h-[3px] -rotate-1 w-40 rounded-full bg-accent" />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="mt-16 space-y-4 text-left text-lg text-stone-600 sm:text-xl">
          <p className=" text-stone-800 pb-4 font-semibold">
              Conversational data is the New Oil.
            </p>
            <p className=" text-stone-600">
              Static email and SMS flows are being replaced by active AI agents who engage with your customers.
            </p>
            <p className="pb-10">I'm not talking about chatbots that say "How can I help you?"</p>
            <p>I'm talking about AI agents that:</p>
            <ul className="mt-12 space-y-3 text-md text-stone-600">
              {agentCapabilities.map((item) => (
                <li key={item} className="flex items-start justify-start gap-3">
                  <span className="mt-[2px] text-lg font-bold text-[##2fa9ba]">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-10 space-y-3"> 
            <p className=" text-stone-600">
            As you can see there is no signup button this page.
            </p>
            <p className=" text-stone-600">
            We are here to get you results, not just the software.
            </p>
            <p className="pt-10 text-stone-600">
            We don't hand you a login and a manual only.
            
            
            </p>
            <p className=" text-stone-600">
           
             We build, train, and manage your AI team for you.
            
            </p>
            <p className=" text-stone-600">
           Your only job is to check the recovery dashboard!
            
            </p>
            </div>
           
          </div>
          <div className="mt-12 text-center">
                <Link href="#pilot-widget">
                  <Button className="w-full sm:w-auto">Get Revenue Recovery Plan</Button>
                </Link>
              </div>
        </div>
      </div>
    </section>
  )
}
