import { ShoppingBag, CreditCard,RefreshCw} from "lucide-react"
import Image from "next/image"
const pillClassName =
  "inline-flex items-center drop-shadow-sm text-transparent bg-gradient-to-b from-[#abf583] to-[#4CA01E] bg-clip-text justify-center text-[0.95em] sm:leading-[1.2] "

  const responsibilities = [
    { title: "Cart Abandonemnt", detail: "reaches out with custom message" },
    { title: "Failed payment", detail: "takes 2-3 hours/week" },
    { title: "Communicate with the client", detail: "takes 1-2 hours/week" },
  ]


export default function Bento(){
    return(
<section id="bento"className="bg-gradient-to-t from-foreground via-sky-800 to-cyan-950 ">
<div className="w-full bg-foregroud py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:grid-rows-2">
            <div className="flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_22px_50px_-40px_rgba(15,23,42,0.45)] sm:p-8">
            <div className="mt-2 mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold text-stone-700"><span className="text-5xl font-semibold text-transparent bg-gradient-to-b from-foreground to-sky-600 bg-clip-text">1 </span>Monitoring</p>
                  <p className="mt-1 text-md text-stone-600">
                    Agents live inside your funnel and watch for every event.
                  </p>
                </div>
            
              </div>
          

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-lg border-l-4 border border-[#057387] bg-white px-4 py-3 shadow-[#057387] shadow-[0_10px_20px_-16px_rgba(15,23,42,0.2)]">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Sarah J.</p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-stone-800">
                      <ShoppingBag/>
                      
                      Abandoned Checkout
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#18535D]">$142.00</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-4 py-3 shadow-[0_10px_20px_-16px_rgba(15,23,42,0.2)]">
                  <div>
                    <p className="text-sm font-semibold text-stone-400">Mike R.</p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-stone-400">
                      <CreditCard/>
                      Failed Payment (Stripe)
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#b1c1c4]">$55.00</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-4 py-3 shadow-[0_10px_20px_-16px_rgba(15,23,42,0.2)]">
                  <div>
                    <p className="text-sm font-semibold text-stone-400">Jessica K.</p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-stone-400">
                      <RefreshCw/>
                      Renewal Upcoming
                    </div>
                  </div>
                  <span className="rounded-full bg-rose-800/50 px-3 py-1 text-[11px] font-semibold text-rose-200">
                    High Risk
                  </span>
                </div>
              </div>

              
            </div>

            <div className="flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_22px_50px_-40px_rgba(15,23,42,0.45)] sm:p-8">
            <div className="mt-2 mb-12">
                <h3 className="text-2xl font-semibold text-stone-700">
                <span className="text-5xl font-semibold text-transparent bg-gradient-to-b from-foreground to-sky-600 bg-clip-text">2 </span>Analysis
                  
                </h3>
                <p className="mt-2 text-md max-w-[35rem] text-stone-600">
                Each visitor is analyzed using their behavior, history, and context —
                so messages are relevant, personal, and actually worth responding to.
                </p>
              </div>
              
              <div className="grid gap-4 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-stone-200 bg-white text-sm font-semibold text-stone-600">
                  <Image
            src="/icon1.png"
            alt="120k calls visual"
            width={1062}
            height={576}
            className="h-auto w-full object-cover"
            priority={false}
          />
                  </div>
                  <p className="text-sm font-semibold text-stone-900">Sarah J.</p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-semibold">
                    <span className="rounded-full text-[#057387] px-3 py-1 bg-white">
                      3 Orders
                    </span>
                    <span className="rounded-full bg-gradient-to-b from-foreground to-accent px-3 py-1 text-stone-100">
                      Sensitive Skin
                    </span>
                    <span className="rounded-full bg-gradient-to-b from-foreground to-accent px-3 py-1 text-stone-100">
                      Pregnant
                    </span>
                  </div>
                </div>

                <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#18535D]">
                    <span className="h-2 w-2 rounded-full bg-[#14afcc]" />
                    Agent Logic
                  </div>
                  <p className="mt-3 text-sm text-stone-600">
                    <span className="font-semibold text-stone-900">Analysis:</span> Sarah has sensitive skin;{" "}
                    <span className="rounded bg-[#dff1f8] px-1 text-[#18455d]">
                      address ingredient safety
                    </span>{" "}
                    before sending the checkout link to increase trust.
                  </p>
                  <div className="mt-6">
                    <div className="h-1 rounded-full bg-stone-100">
                      <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-foreground to-sky-400" />
                    </div>
                    <p className="mt-2 text-right text-xs text-stone-600">Confidence 94%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:col-span-2 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
            <div className="flex h-[36rem] overflow-clip flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_22px_50px_-40px_rgba(15,23,42,0.45)] sm:p-8">
            <div className="mt-2 mb-6">
                <h3 className="text-2xl font-semibold text-stone-700"><span className="text-5xl font-semibold text-transparent bg-gradient-to-b from-foreground to-sky-600 bg-clip-text">3 </span>Interact</h3>
                <p className="mt-3 text-md text-stone-600">
                  Two-way conversation that feels personal, not automated. Agents can reach out via Phone Call, SMS or Email!
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[280px] aspect-[9/16]">
                  <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-stone-100 via-white to-stone-300" />
                  <div className="absolute inset-[2px] rounded-[2.85rem] bg-stone-900" />
                  <span className="absolute -left- top-24 h-10 w-1 rounded-full bg-stone-700" />
                  <span className="absolute -left- top-36 h-14 w-1 rounded-full bg-stone-700" />
                  <span className="absolute -right-0 top-28 h-16 w-1 rounded-full bg-stone-700" />

                  <div className="absolute inset-[7px] overflow-hidden rounded-[2.6rem] bg-[#f6f7fb]">
                    <div className="absolute left-1/2 top-2 h-7 w-28 -translate-x-1/2 rounded-full bg-black/90" />

                    <div className="flex h-full flex-col px-4 pb-4 pt-9">
                      <div className="flex items-center justify-between text-[10px] text-stone-600">
                        <span className="font-semibold">9:41</span>
                        <div className="flex items-center justify-center gap-1">
                          
                          <span className="text-stone-800">5G</span>
                          <span className="h-2 w-4 rounded-md bg-green-600 border border-stone-400" />
                         
                        </div>
                      </div>

                      <div className=" flex items-center justify-between border-b border-stone-200 pb-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2293a8] shadow-sm">
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-sm font-semibold text-stone-600">
                  <Image
            src="/icon1.png"
            alt="120k calls visual"
            width={1062}
            height={576}
            className="h-auto w-full object-cover"
            priority={false}
          />
                  </div>
                          <span className="mt-1 text-[10px] font-semibold text-stone-700">Sarah</span>
                        </div>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-accent shadow-sm">
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect x="4" y="7" width="12" height="10" rx="2" />
                            <path d="M16 10l4-2v8l-4-2" />
                          </svg>
                        </span>
                      </div>

                      <div className="mt-3 flex-1 space-y-2 text-[11px] text-stone-700">
                        <div className="max-w-[85%] rounded-2xl bg-stone-100 px-3 py-2 shadow-sm">
                          Hey Sarah, noticed you were looking at the starter bundle. Any questions
                          about ingredients?
                        </div>
                        <div className="flex justify-end">
                          <div className="max-w-[80%] rounded-2xl bg-sky-500 px-3 py-2 font-medium text-white">
                            Yes! Is the cleanser alcohol-free?
                          </div>
                        </div>
                        <div className="max-w-[85%] rounded-2xl bg-stone-100 px-3 py-2 shadow-sm">
                          100%. Formulated specifically for your skin type. Here is your saved cart
                          link.
                        </div>
                        <div className="max-w-[75%] rounded-xl border border-stone-200 bg-white px-3 py-2 text-[10px] font-semibold text-[#18535D]">
                          checkout.com/cart/29a...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      
            </div>
         
            <div className="flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_22px_50px_-40px_rgba(15,23,42,0.45)] sm:p-8">
            <div>
                  <h4 className="text-2xl mt-2 mb-6 font-semibold text-stone-700">
                  <span className="text-5xl font-semibold text-transparent bg-gradient-to-b from-foreground to-sky-600 bg-clip-text">4 </span>Collect Revenue & Data
                  </h4>
                  <p className="mt-2 text-md text-stone-600">
                  Conversations turn into recovered subscriptions and completed checkouts. The insights feed back into your messaging, offers, and retention strategy.
                  </p>
                
                </div>
              <div className="mt-10 text-center">
                <p className="text-md font-semibold tracking-wide uppercase text-stone-500">
                  Total Recovered Value
                </p>
                <p className="mt-3 text-4xl font-semibold text-transparent bg-gradient-to-b from-blue-900 via-accent to-blue-100 bg-clip-text sm:text-6xl">$142.00</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#e6f0f8] px-3 py-1 text-xs font-semibold text-[#18535D]">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-white">
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 12h12M12 6l6 6-6 6" strokeLinecap="round" />
                    </svg>
                  </span>
                  Recovered from 1 user
                </div>
              </div>

                <div className="my-6 h-px w-full bg-stone-100" />

              <div className=" text-center ">
                <div className="rounded-2xl border-2 border-stone-300 bg-stone-50 p-4">
                  <p className="text-lg font-bold tracking-wide text-stone-700">
                    New angle for skin concerns
                  </p>
                  <p className="mt-2 text-sm text-stone-400">
                    "Alcohol-free" is the primary driver for Sarah's segment.
                  </p>
                </div>

              
              </div>
             
            </div>
            </div>
         
          </div>
          
          
        </div>  
      <div className="container flex min-h-[40vh] flex-col items-center justify-center py-24 sm:min-h-[50vh] sm:py-30 lg:py-36">
        <div className="mx-auto sm:max-w-3xl text-center">
          <p className=" font-serif text-2xl leading-tight itali text-stone-200 sm:text-4xl sm:leading-[1.2]">
          <span className="block mb-8">It’s like a full-time  <span className={pillClassName}>Shopify sales employee</span> who never misses a moment.</span>
            <span className="block">Recover abandoned carts </span>
            <span className="block sm:mt-2">Fix failed payments instantly</span>
            <span className="block sm:mt-2">Check in before renewals</span>
            <span className="block sm:mt-2"> Upsell bundles and upgrades automatically</span>
         
          </p>
          
         
        </div>
      </div>
        </div>
       
      
        </section>

)

}

{/*It’s like a full-time Shopify sales employee who never misses a moment.

Recover abandoned carts
Fix failed payments instantly
Check in before renewals
Upsell bundles and upgrades automatically */}
