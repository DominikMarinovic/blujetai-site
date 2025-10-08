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
    <section className="relative pt-4 overflow-hidden">
      {/* Hero background image – place file at public/hero-fuji.jpg */}
      <div className="bg-white">
        <ParticlesDynamic />
        <div className="container pb-24 sm:pt-2 sm:pb-28">
          <div className="mx-auto max-w-6xl text-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="mb-6 mx-6 flex w-auto justify-center"
            >
              <div className="inline-flex items-center justify-center rounded-full px-6 py-2 text-[14px] bg-blue-50 border border-blue-300 border-double font-bold text-stone-600 shadow-sm sm:text-lg">
                {heroCopy.badge}
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className=" font-heading font-[700] text-[30px] leading-snug mx-2 text-stone-800 sm:text-[52px] sm:leading-tight sm:pt-2 sm:font-bold"
            >
              The Next Generation of
              <span className="text-blue-600"> Revenue Recovery & Retention</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 sm:text-[22px] sm:leading-tight text-[20px] sm:pt-4 font-medium text-stone-600"
            >
              {heroCopy.subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 sm:mb-36 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link href={heroCopy.secondaryCta.href}>
                <Button variant="secondary" className="min-w-[360px] min-h-16">
                  <span className="cta-text-sheen">{heroCopy.secondaryCta.label}</span>
                </Button>
              </Link>
            </motion.div>

            {/* VSL (Wistia) embed 
            <div className="mx-auto md:px-24 sm:mt-8 mt-16 w-full">
              {/* External player scripts 
              <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
              <Script
                src="https://fast.wistia.com/embed/lt25cy83oo.js"
                strategy="afterInteractive"
                type="module"
              />

              {/* Placeholder styling while custom element hydrates 
              <style jsx global>{`
                /* Wistia placeholder with swatch while hydrating *
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
                  {/* eslint-disable-next-line react/no-unknown-property *
                  <wistia-player media-id="lt25cy83oo" aspect="1.839080459770115"></wistia-player>
                </div>
              )}
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
