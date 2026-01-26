"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { heroCopy } from "@/content/site"
import Script from "next/script"
import { useEffect, useState } from "react"
import { BadgeCheck, } from "lucide-react"

const pillClassName =
  "inline-flex items-center drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-b from-foreground to-accent justify-center text-[0.95em] font-medium sm:leading-[1.2] "

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <section
      id="hero"
      className="relative overflow-auto max-sm:pt-12 bg-white"
    >
      <div className=" relative z-10 pt-2">
        <div className="pb-8 sm:pt-2 sm:pb-16">
          <div className="mx-auto py-1 sm:py-3 max-w-6xl sm:bg-gradient-to-b  from-slate-50 to-white sm:border-t-2 sm:border-x-2 sm:rounded-[40px] text-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className=" mx-2 flex w-auto justify-center"
            >
               <div className=" font-bold items-center px-4 justify-center py-2 text-xl text-stone-700  sm:text-2xl">
               For Subscription <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#abf583] to-[#4CA01E] ml-"> Shopify Brands </span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className=" text-stone-700 mx-2 font-serif leading-[1.1] sm:px-10 tracking-normal text-3xl sm:text-5xl pt-1 sm:pt-4 "
            >You're Losing $50K-$200K Per Month in Subscription Revenue <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#b1e993] to-[#4CA01E]"></span>
            {/*from-[#a9f083] to-[#4CA01E]*/}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-2 sm:mt-2 mx-6 sm:mx-20 sm:text-2xl text-[16px] sm:pt-2 sm:leading-snug text-stone-600"
            >
              We install an AI recovery system and guarantee at least $50,000 in recovered subscription revenue in 90 days!
            </motion.p>
            {/*  <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
            <Script
              src="https://fast.wistia.com/embed/lt25cy83oo.js"
              strategy="afterInteractive"
              type="module"
            />
            <style jsx global>{`
              wistia-player[media-id="lt25cy83oo"]:not(:defined) {
                background: center / contain no-repeat
                  url("https://fast.wistia.com/embed/medias/lt25cy83oo/swatch");
                display: block;
                filter: blur(5px);
                padding-top: 54.37%;
              }
            `}</style>

            <div className="mx-auto mt-4 w-full max-w-[400px] sm:max-w-3xl px-4 sm:mt-6">
              <div className=" rounded-lg overflow-hidden drop-shadow-2xl ">
             
                <div className="py-1 rounded-t-sm bg-gradient-to-r from-[#133d5d] to-accent text-xs sm:text-[16px] sm:py-2 font-medium text-stone-200 italic">Watch: How we recover $50k+ in subscription revenue</div>
          
                {mounted && (
                  <wistia-player
                    media-id="lt25cy83oo"
                    aspect="1.83"
                  ></wistia-player>
                )}
              </div>
            </div> */}
           
             
            

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 sm:mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link href={heroCopy.secondaryCta.href}>
                <Button className="text-xl sm:text-2xl">{heroCopy.secondaryCta.label}</Button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 sm:mx-20 sm:text-[16px] text-xs sm:pt-1 sm:leading-snug text-stone-700"
            >
              {/*Without spending a cent on ads or changing your funnel. Guaranteed!*/ }When you book a call, you will see:
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-2 flex justify-center items-center gap-1 sm:mx-auto font-semibold sm:text-lg text-[13px] sm:leading-snug text-stone-800"
            >
             <BadgeCheck className="h-4 w-4 text-accent" strokeWidth={2.2} /> Which high-intent revenue moments you’re missing
             </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-2 flex justify-center items-center gap-1 sm:mx-auto sm:text-lg font-semibold text-[13px] sm:leading-snug text-stone-800"
            >
             <BadgeCheck className="h-4 w-4 text-accent" strokeWidth={2.2} /> How much subscription revenue is leaking each month
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-2 flex justify-center items-center gap-1 sm:mx-auto sm:text-lg font-semibold text-[13px] sm:leading-snug text-stone-800"
            >
             <BadgeCheck className="h-4 w-4 text-accent" strokeWidth={2.2} /> How much we can recover specifically for your brand
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
