"use client"

import React from "react"
import { motion } from "framer-motion"

interface BrokenModelSectionProps {
  onOpenModal?: () => void
}

export const BrokenModelSection: React.FC<BrokenModelSectionProps> = ({ onOpenModal }) => {
  const painPoints = [
    {
      id: "pain-1",
      title: "Unqualified 'Medicare Moms' & Price-Shoppers",
      text: "90% of your leads end up being tire-kickers, 'Medicare Moms', or price-shoppers who could never afford a $5,000+ cash-pay treatment.",
    },
    {
      id: "pain-2",
      title: "Burdened Front Desk & Ghosted Leads",
      text: "Your front desk is too busy running the clinic to call web leads within 5 minutes. Leads go ghost, and your ad spend is entirely wasted.",
    },
    {
      id: "pain-3",
      title: "Acting as a Teacher Instead of a Doctor",
      text: "When a patient actually does show up, they know nothing about regenerative medicine. You end up wasting an hour of your valuable time acting as a teacher, instead of a doctor.",
    },
    {
      id: "pain-4",
      title: "Vanity Metrics & Empty Treatment Chairs",
      text: "Agencies are terrified of asking leads for a consultation deposit. So, your schedule fills up with empty chairs.",
    },
  ]

  return (
    <section
      id="broken-model-section"
      className="w-full bg-white py-20 sm:py-24 md:py-28 px-4 sm:px-6"
    >
      <div className="max-w-[768px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5"
          >
            <span>The Problem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0f172a] leading-[1.2] tracking-[-0.02em] mb-6 max-w-3xl mx-auto"
          >
            The &ldquo;Marketing Agency&rdquo; Model is Broken for Regenerative Medicine
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg sm:text-xl md:text-[21px] leading-relaxed max-w-2xl mx-auto font-normal mb-6"
          >
            A generic lead-gen agency will either get you unqualified leads or a letter from the FDA
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block border-b-2 border-[#52187e]/20 pb-1"
          >
            <p className="text-slate-800 font-bold text-base sm:text-lg">
              Here is what happens when you rely on traditional agencies:
            </p>
          </motion.div>
        </div>

        {/* 4 Pain Point Cards */}
        <div className="space-y-4 sm:space-y-5 mb-14">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              id={item.id}
              className="group relative bg-white border border-red-200/70 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-200"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-red-50 text-red-600 font-bold text-lg sm:text-xl border border-red-100">
                  ❌
                </div>
                <div className="flex-1 pt-0.5">
                  <p className="text-slate-800 text-base sm:text-lg md:text-[19px] leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
