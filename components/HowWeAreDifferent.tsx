"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  Megaphone,
  PhoneCall,
  ShieldCheck,
  DollarSign,
  ArrowRight,
  Bot,
  CheckCircle2,
} from "lucide-react"

interface HowWeAreDifferentSectionProps {
  onOpenModal: () => void
}

export const HowWeAreDifferentSection: React.FC<HowWeAreDifferentSectionProps> = ({
  onOpenModal,
}) => {
  const steps = [
    {
      number: "01",
      badge: "Step 1: Clinical Authority Ads & Funnel",
      title: "Generate leads with authority & educational creative",
      desc: "We run Facebook and Instagram ads for you that educate your market, eliminate price-shoppers before they click, and establish your clinic as the premier authority. Built specifically for stem cell, PRP, and exosome compliant offers",
      icon: Megaphone,
      accentColor: "text-[#8426db]",
      bgAccent: "bg-purple-50",
      borderAccent: "border-purple-200",
    },
    {
      number: "02",
      badge: "Step 2: Instant 1-3 Min Response",
      title: "Patient Care Team books qualified consults",
      desc: "Leads get contacted by our setter within 1-3 minutes. Our goal isn't max lead volume. It's max revenue per lead. Tire-kickers and price shoppers get filtered before they ever waste your time. We use an AI text agent to text people who opt in at night while scrolling, ensuring zero lead leakage.",
      icon: PhoneCall,
      subBadge: "Includes 24/7 AI Text Agent",
      accentColor: "text-[#8426db]",
      bgAccent: "bg-purple-50",
      borderAccent: "border-purple-200",
    },
    {
      number: "03",
      badge: "Step 3: In-Depth Consultation & Deposit",
      title: "Financially qualified and expectations set",
      desc: "Our team takes the sales/consulting call and takes a deposit for the in-person consult inside of your clinic—guaranteeing high commitment and eliminating no-shows. Patients arrive educated on the mechanism, anchored to a $10–25K price range, and financially pre-qualified.",
      icon: ShieldCheck,
      accentColor: "text-[#52187e]",
      bgAccent: "bg-purple-50",
      borderAccent: "border-purple-200",
    },
  ]

  return (
    <section
      id="how-we-are-different-section"
      className="w-full bg-white py-20 sm:py-24 md:py-28 px-4 sm:px-6"
    >
      <div className="max-w-[768px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#52187e] text-xs sm:text-sm font-bold uppercase tracking-wider mb-5"
          >
            <span>The High-ticket Patient System</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0f172a] leading-[1.2] tracking-[-0.02em] mb-6 max-w-3xl mx-auto"
          >
            How We Are Different
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg sm:text-xl md:text-[21px] leading-relaxed max-w-3xl mx-auto font-normal"
          >
            We handle the entire patient journey from ad to deposit-backed, pre-educated
            consultation. You get patients that will help you scale your high-ticket treatments
          </motion.p>
        </div>

        {/* 4 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={`step-card-${step.number}`}
                className="relative bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center h-12 w-12 rounded-xl ${step.bgAccent} ${step.borderAccent} border`}
                      >
                        <Icon className={`h-6 w-6 ${step.accentColor}`} />
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                        {step.badge}
                      </span>
                    </div>
                    <span className="text-2xl sm:text-3xl font-normal text-slate-200">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Body */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 leading-snug mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-base sm:text-[17px] leading-normal">
                    {step.desc}
                  </p>
                </div>

                {step.subBadge && (
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-600">
                    <Bot className="h-4 w-4 text-[#8426db]" />
                    <span>{step.subBadge}</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Brand Congruency & Onboarding Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="brand-congruence-card"
          className="bg-white rounded-2xl border-2 border-purple-100 p-6 sm:p-9 shadow-sm mb-14"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-purple-50 text-[#52187e] border border-purple-200">
              <CheckCircle2 className="h-8 w-8 text-[#8426db]" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#137039] mb-1.5 block">
                100% On-Brand Experience
              </span>
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                Trained specifically on your treatments, doctors &amp; protocols
              </h4>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                To make a congruent experience for the patient to be on brand with your clinic, our
                patient care team is educated and screened on your treatments, prices, and
                qualification criteria.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-t from-purple-900 to-[#AC58EB] rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl shadow-purple-950/20"
        >
          <span className="inline-block text-purple-200 text-xs sm:text-sm font-bold uppercase tracking-normal mb-3">
            No Retainer • Zero Ad Waste • No Risk
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            Ready to Fill Your Schedule with Pre-Sold Patients?
          </h3>
          <p className="text-purple-100 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Check if your city/region is available. We work with strictly one clinic per location!
          </p>
          <button
            onClick={onOpenModal}
            id="how-we-are-different-cta-btn"
            className="bg-white hover:bg-slate-100 text-[#52187e] font-extrabold text-base sm:text-lg tracking-wider uppercase px-9 sm:px-11 py-4 sm:py-4.5 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            <span>SEE IF YOU QUALIFY</span>
          </button>
          <p className="italic text-purple-200/90 text-sm sm:text-base mt-4 font-normal">
            No retainer. Pay only for qualified patient!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
