"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import MyApp from "@/components/Calcom"

// Hand-ported from the Framer export "Hero / Vertical-08".
// Breakpoints match Framer's: <810px phone, 810–1199px tablet, >=1200px desktop.

const heroVertical = {
  badge: "FOR STEM CELL, PRP & EXOSOME CLINICS",
  headline: "40 Financially Qualified Stem Cell Patients in 90 days - Guaranteed.",
  secondaryHeadline: "You only pay for qualified patients!",
  subhead:
    "Pre-sold, educated & medically qualified patients fully done for you. Consistent patients without calling leads and dealing with no shows!",
  cta: { label: "See if you Qualify", href: "#book-call" },
  subcta: "No retainer. We don't get paid until you get patients!",
}

export default function HeroVertical() {
  return (
    <section id="hero" className="flex w-full flex-col items-center overflow-hidden bg-white">
      <div className="relative w-full max-w-[1280px] px-5 py-12 sm:py-16 min-[810px]:px-10 min-[1200px]:px-20">
        <div className="flex w-full flex-col items-center gap-[26px]">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-4">
            <Link
              href={heroVertical.cta.href}
              className="inline-flex items-center py-1 pl-2 pr-1.5 text-purple-800"
            >
              <span className="px-1 text-sm sm:text-lg font-semibold leading-4 tracking-[-0.005em]">
                {heroVertical.badge}
              </span>
            </Link>

            <div className="flex w-full flex-col items-center gap-6">
              <h1 className="w-full text-center text-3xl capitalize font-extrabold leading-[1.2] tracking-[-0.03em] text-[#292929] min-[810px]:text-[42px] min-[1200px]:text-[48px]">
                {heroVertical.headline}
              </h1>
              <h2 className="w-full text-center text-[22px] font-bold leading-[1.2] italic uppercase tracking-[-0.03em] text-purple-600 min-[810px]:text-[28px] min-[1200px]:text-[32px]">
                {heroVertical.secondaryHeadline}
              </h2>
              {/*
              <Image
                className="h-auto max-w-full w-full"
                src="/image.png"
                alt="BlujetAI patient acquisition system"
                width={1155}
                height={650}
                priority
              />*/}
              <p className="w-85% text-center text-[18px] font-normal leading-[1.5] tracking-[-0.012em] text-neutral-600">
                {heroVertical.subhead}
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-col items-center justify-center gap-4 pt-4 min-[810px]:flex-row"
          >
            <div className="bg-white">
              <MyApp />
            </div>
          </motion.div>

          <p className="w-85% text-center text-[18px] italic font-normal leading-[1.5] tracking-[-0.012em] text-neutral-600">
            {heroVertical.subcta}
          </p>
        </div>
      </div>
    </section>
  )
}
