"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { heroCopy } from "@/content/site"
import Script from "next/script"
import { useEffect, useState } from "react"

const ParticlesDynamic = dynamic(() => import("@/components/ParticlesBackground"), { ssr: false })

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <section className="relative overflow-hidden bg-white">
      {" "}
      <div className="container relative z-10 pt-6">
        <div className="pb-24 sm:pt-2 sm:pb-28">
          <div className="mx-auto max-w-6xl text-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className=" mx-2 flex w-auto justify-center"
            >
              <div className="inline-flex items-center justify-center px-2 py-2 text-sm font-semibold text-[#2D68E9] sm:text-lg">
                Attention 7 & 8-Figure Subscription Brands
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className=" font-semibold tracking-tight sm:leading-tight text-3xl text-stone-800 sm:text-5xl sm:pt-2 "
            >
              Stop Losing Subscribers with Proactive Voice & SMS Conversations That Email Can't
              Handle
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 sm:mx-20 sm:text-xl text-md sm:pt-4 sm:leading-snug font-medium text-stone-900"
            >
              We deploy done-for-you AI agents that have{" "}
              <span className=" text-[#2D68E9] font-semibold">human-like conversations</span> your
              email flows can't, turning abandoned checkouts and subscriber churn into profit
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 sm:mb-20 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link href={heroCopy.secondaryCta.href}>
                <Button
                  variant="secondary"
                  className="min-w-[280px] sm:mt-12 min-h-16 shadow-neutral-400"
                >
                  <span className="">{heroCopy.secondaryCta.label}</span>
                </Button>
              </Link>
            </motion.div>
            {false && (
              <div className="mx-auto md:px-24 sm:mt-8 mt-8 w-full">
                <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
                <Script
                  src="https://fast.wistia.com/embed/lt25cy83oo.js"
                  strategy="afterInteractive"
                  type="module"
                />

                <style jsx global>{`
                  /* Wistia placeholder with swatch while hydrating */
                  wistia-player[media-id="lt25cy83oo"]:not(:defined) {
                    background: center / contain no-repeat
                      url("https://fast.wistia.com/embed/medias/lt25cy83oo/swatch");
                    display: block;
                    filter: blur(6px);
                    padding-top: 54.37%;
                    border-radius: 1rem;
                  }
                `}</style>
                {mounted && (
                  <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-card">
                    <wistia-player media-id="lt25cy83oo" aspect="1.839080459770115"></wistia-player>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
