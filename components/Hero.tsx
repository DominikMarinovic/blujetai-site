"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { heroCopy } from "@/content/site"
import Script from "next/script"
import { useEffect, useState } from "react"
import { BadgeCheck } from "lucide-react"
import Image from "next/image"

const pillClassName =
  "inline-flex items-center drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-b from-foreground to-accent justify-center text-[0.95em] font-medium sm:leading-[1.2] "

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-accent max-sm:pt-12"
    >
      <div className=" relative z-10 pt-2 sm:pt-4">
        <div className="pb-12 sm:pt-2 sm:pb-20">
          <div className="mx-auto py-1 sm:py-3 max-w-6xl text-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className=" mx-2 flex w-auto justify-center"
            >
              <div className=" font-semibold flex items-center px-4 justify-center py-2 text-md text-stone-100  sm:text-2xl">
                For Subscription Brands on
                <img
                  src="/shop-logo.png"
                  alt="Founder portrait placeholder"
                  className="mx-2 h-auto w-20 sm:w-28 object-cover object-top sm:object-center"
                  loading="lazy"
                  decoding="async"
                />{" "}
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className=" text-stone-100 uppercase mx-3 capitaliz font-extrabold leading-tight sm:leading-[1.2] sm:px-10 tracking-normal text-3xl sm:text-5xl pt-3 sm:pt-4 "
            >
              We'll Add 10-20% To Your Yearly Revenue Without Spending More On Traffic-Guaranteed
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-2 sm:mt-2 mx-6 sm:mx-20 sm:text-2xl font-semibold text-[18px] sm:pt-2 sm:leading-snug text-stone-200"
            >
              By installing a{" "}
              <span className="bg-blue-600 px-1 font-bold text-stone-100 rounded-md">
                1‑to‑1 Conversation Engine
              </span>{" "}
              that turns abandoned carts, failed payments, and cancellations into recurring
              revenue—Done for you!
            </motion.p>

            {/*  <script src="https://fast.wistia.com/player.js" async></script><script src="https://fast.wistia.com/embed/w3b5z5x796.js" async type="module"></script><styl>wistia-player[media-id='w3b5z5x796'] */}

            <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
            <Script
              src="https://fast.wistia.com/embed/w3b5z5x796.js"
              strategy="afterInteractive"
              type="module"
            />
            <style jsx global>{`
              wistia-player[media-id="w3b5z5x796"]:not(:defined) {
                background: center / contain no-repeat
                  url("https://fast.wistia.com/embed/w3b5z5x796.js");
                display: block;
                filter: blur(5px);
                padding-top: 54.37%;
              }
            `}</style>

            <div className="mx-auto mt-4 w-full sm:max-w-[880px] px-4 sm:mt-6">
              <div className="overflow-hidden drop-shadow-2xl ">
                {mounted && <wistia-player media-id="w3b5z5x796" aspect="1.77"></wistia-player>}
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 sm:mt-6 flex justify-center items-center gap-1 italic mx-10 sm:mx-auto sm:text-[16px] text-[13px] sm:leading-snug text-stone-700"
            >
              We captured multiple 6-figures in subscriptions using this exact AI system!
            </motion.p>

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
          </div>
        </div>
      </div>

      <div className="relative z-0 -mt-60 sm:-mt-80">
        <div className="bg-white shadow-[0_-18px_40px_rgba(0,0,0,0.35)]">
          <div className="mx-auto max-w-4xl px-6 pb-10 pt-24 text-center sm:pb-14 sm:pt-48">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-28 sm:mt-6 flex justify-center items-center gap-1 italic sm:mx-auto sm:text-[16px] text-[12px] sm:leading-snug text-stone-700"
            >
              When you book a call, you'll see:
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-2 flex justify-center items-center gap-1 sm:mx-auto font-semibold sm:text-lg text-[12px] sm:leading-snug text-stone-800"
            >
              <BadgeCheck className="h-4 w-4 text-foreground" strokeWidth={2.1} />
              Your biggest bottleneck stopping you from scaling
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-2 flex justify-center items-center gap-1 sm:mx-auto font-semibold sm:text-lg text-[12px] sm:leading-snug text-stone-800"
            >
              <BadgeCheck className="h-4 w-4 text-foreground" strokeWidth={2.1} />
              The exact amount of money you are missing out every day
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-2 flex justify-center items-center gap-1 sm:mx-auto font-semibold sm:text-lg text-[12px] sm:leading-snug text-stone-800"
            >
              <BadgeCheck className="h-4 w-4 text-foreground" strokeWidth={2.1} />
              How you can have 1 to 1 conversations work for your Brand
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
