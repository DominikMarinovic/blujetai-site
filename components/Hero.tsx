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
    <section className="relative pt-2 overflow-hidden">
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
              className=" mx-2 flex w-auto justify-center"
            >
              <div className="inline-flex items-center justify-center px-6 py-2 text-[14px] font-medium text-blue-600 sm:text-lg">
                The Next Generation of Revenue Retention
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className=" font-bold tracking-tight text-[30px] mx-2 text-stone-700 sm:text-[52px] sm:pt-2 sm:font-[700]"
            >
              Have Conversations With Your Subscribers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 sm:text-[22px] sm:leading-tight text-[16px] sm:pt-4 font-medium text-stone-600"
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
                <Button variant="secondary" className="min-w-[280px] min-h-16">
                  <span className="">{heroCopy.secondaryCta.label}</span>
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
