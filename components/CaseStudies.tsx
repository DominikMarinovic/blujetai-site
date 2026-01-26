import { caseStudies } from "@/content/site"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CaseStudies() {
  return (
    <section id="case-studies" className="container bg-white pt-16 pb-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
      <h2 className="mt-3 sm:pb-2 font-heading text-3xl font-semibold tracking-tight text-stone-800 sm:text-4xl">
         Proof
        </h2>
        <h2 className="text-2xl mx-10 sm:text-3xl font-serif text-transparent inline-block italic bg-stone-600 bg-clip-text">
          And here are the results
        </h2>
      </div>
    
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {caseStudies.map((c, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 bg-stone-50 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-md text-accent pb-2 font-serif">{c.brand}</div>
            <div className="text-lg font-semibold text-stone-900">{c.title}</div>
            {c.summary && (
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
            )}

          </div>
        ))}
      </div>
      <div className="mx-auto bg-stone-50 border rounded-xl border-slate-200 mt-8 max-w-5xl">
          <div className="py-8 text-center  text-stone-900 text-xl sm:text-2xl font-normal ">
             <h3 className="font-serif text-foreground italic px-2">More than 260,000 conversations analyzed!</h3>
                <p className=" text-sm sm:text-lg pt-4 px-4 sm:px-20">
                  Here is one of our clients with more than 61,000 conversations handeld by agents in the last month.
                 </p>
                 <p className=" text-sm sm:text-lg pt-2 px-4 sm:px-20">
                  They average around 2,5k conversations per day!
                 </p>
           </div>
          <div className="overflow-hidden rounded-[10px] shadow-[0_28px_60px_-40px_rgba(15,23,42,0.45)]">
          <Image
            src="/calls.png"
            alt="Calls results visual"
            width={1062}
            height={576}
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>
        
      </div>
      <div className="pt-10 sm:pt-40 text-2xl sm:text-4xl mx-auto max-w-2xl text-center space-y-3"> 
            <p className=" font-serif text-stone-600">
            As you can see this is not theory.
            </p>
            <p className=" font-serif text-stone-600">
            This is acutally working for other brands like yours.
            </p>
            
            </div>
    </section>
  )
}
