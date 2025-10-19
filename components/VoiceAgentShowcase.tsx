"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Bot, Phone, Share2, Sparkles, Voicemail, Waves } from "lucide-react"
import { cn } from "@/lib/utils"

type MenuItem = {
  icon: LucideIcon
  label: string
  meta: string
}

const menuItems: MenuItem[] = [
  { icon: Phone, label: "Company line", meta: "(415) 889-1162" },
  { icon: Bot, label: "Smart menu", meta: "Predictive routing" },
  { icon: Voicemail, label: "Voicemail", meta: "Summaries & tickets" },
  { icon: Share2, label: "Transfer call", meta: "Escalate to humans" },
  { icon: Sparkles, label: "AI voice", meta: "Autonomous closer" },
  { icon: Waves, label: "Recordings & notes", meta: "Synced instantly" },
]

type Stage = {
  id: string
  menuIndex: number
  caller: {
    name: string
    initials: string
  }
  callTime: string
  status: string
  metric: string
  script: { role: string; text: string }[]
}

const callStages: Stage[] = [
  {
    id: "checkout",
    menuIndex: 4,
    caller: { name: "John Miller", initials: "JM" },
    callTime: "00:28",
    status: "Recovering checkout",
    metric: "+$287 recovered",
    script: [
      {
        role: "Blujet AI",
        text: "Hi John, your TechFlow starter kit is still waiting. I can finish the order with your saved details if you are ready.",
      },
      {
        role: "John",
        text: "Yes, send the checkout link and I will complete it now.",
      },
    ],
  },
  {
    id: "subscription",
    menuIndex: 1,
    caller: { name: "Taylor Reeves", initials: "TR" },
    callTime: "01:12",
    status: "Saving subscription",
    metric: "82% retention",
    script: [
      {
        role: "Blujet AI",
        text: "Taylor, your Lumen Glow renewal declined an hour ago. Want me to retry with the preferred card ending in 4431?",
      },
      {
        role: "Taylor",
        text: "Please do. Run it on that card and confirm once it goes through.",
      },
    ],
  },
  {
    id: "vip",
    menuIndex: 3,
    caller: { name: "Noah Patel", initials: "NP" },
    callTime: "00:47",
    status: "VIP assist",
    metric: "Transfer booked",
    script: [
      {
        role: "Blujet AI",
        text: "Noah, I can rush your monthly case or bring in our retention lead. Should I transfer you right now?",
      },
      {
        role: "Noah",
        text: "Yes, connect me live so we can lock the order in.",
      },
    ],
  },
]

const featurePoints: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Instant outreach that feels human",
    body: "Agentic voice flows trigger within seconds of abandonment, using your tone and offer logic to close gracefully.",
    icon: Sparkles,
  },
  {
    title: "Escalations with full context",
    body: "Warm transfer high intent buyers to your team with the call summary, sentiment notes, and next steps already packaged.",
    icon: Share2,
  },
  {
    title: "Transcripts that power CRO",
    body: "Automatic recordings, AI notes, and tags sync back into Shopify, Klaviyo, and Slack for your growth squad.",
    icon: Waves,
  },
]

const AUTO_ADVANCE_MS = 6000

export default function VoiceAgentShowcase() {
  const [stageIndex, setStageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return

    const timer = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % callStages.length)
    }, AUTO_ADVANCE_MS)

    return () => clearInterval(timer)
  }, [prefersReducedMotion, isPaused])

  useEffect(() => {
    if (!isPaused) return

    const resumeTimer = setTimeout(() => setIsPaused(false), AUTO_ADVANCE_MS * 2)

    return () => clearTimeout(resumeTimer)
  }, [isPaused])

  const stage = callStages[stageIndex]

  const navigationOptions = useMemo(
    () =>
      callStages.map((item, idx) => ({
        id: item.id,
        label: item.status,
        hint: item.metric,
        index: idx,
      })),
    []
  )

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute left-[6%] top-12 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl sm:h-56 sm:w-56"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-10 right-[12%] h-48 w-48 translate-y-1/2 rounded-full bg-blue-200/40 blur-3xl sm:h-64 sm:w-64"
        aria-hidden
      />

      <div className="container bg-white relative">
        <div className="grid gap-14 lg:gap-20 lg:grid-cols-2 lg:items-start xl:grid-cols-2">
          <div className="mx-auto max-w-xl space-y-8 text-slate-600 lg:mx-0">
            <div>
              <p className="text-xs font-semibold uppercase text-sky-500">AI Voice Engine</p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-slate-900 sm:text-5xl">
                Dynamic recovery calls that close revenue for you
              </h2>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Blujet AI spins up an agentic voice rep that handles objections, captures payments,
                and keeps shoppers engaged with timely follow ups.
              </p>
            </div>

            <div className="space-y-4">
              {featurePoints.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_40px_-28px_rgba(15,118,110,0.25)]"
                  >
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">{feature.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-6 sm:justify-start lg:gap-4 xl:pt-8">
              {navigationOptions.map((option) => {
                const isActive = stageIndex === option.index
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      setStageIndex(option.index)
                      setIsPaused(true)
                    }}
                    onFocus={() => setIsPaused(true)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onBlur={() => setIsPaused(false)}
                    className={cn(
                      "flex min-w-[200px] flex-none items-center justify-between rounded-full border px-4 py-3 text-left text-xs font-semibold uppercase transition sm:flex-auto lg:min-w-[220px] lg:flex-none lg:px-5 lg:py-3.5 xl:min-w-[240px]",
                      isActive
                        ? "border-blue-400 bg-emerald-50 text-blue-700 shadow-[0_18px_45px_-25px_rgba(16,185,129,0.45)]"
                        : "border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-blue-600"
                    )}
                    aria-pressed={isActive}
                  >
                    <span>{option.label}</span>
                    <span className="text-[11px] normal-case text-blue-500">{option.hint}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div
            className="relative flex flex-col items-center gap-10 lg:grid lg:grid-cols-[minmax(0,380px)_minmax(0,280px)] lg:gap-12 lg:items-start xl:grid-cols-[minmax(0,420px)_minmax(0,320px)] xl:gap-16"
            onPointerEnter={() => setIsPaused(true)}
            onPointerLeave={() => setIsPaused(false)}
          >
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[420px] lg:justify-self-end xl:max-w-[440px]">
              <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[38px] border border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-[0_28px_70px_-50px_rgba(15,118,110,0.35)]">
                <div
                  className="absolute left-1/2 top-3 h-6 w-32 -translate-x-1/2 rounded-full bg-slate-300/70"
                  aria-hidden
                />
                <div className="absolute inset-0 px-4 pb-6 pt-9 sm:px-6 sm:pb-7 sm:pt-10">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between text-[10px] font-semibold uppercase text-slate-500 sm:text-[11px]">
                      <span>In call</span>
                      <span>{stage.callTime}</span>
                    </div>

                    <div className="mt-6 sm:mt-8">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={stage.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -16 }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                          className="flex flex-col items-center gap-4 text-center"
                        >
                          <div className="relative">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-sky-500 text-2xl font-semibold text-slate-950 shadow-[0_18px_40px_-20px_rgba(16,185,129,0.6)]">
                              {stage.caller.initials}
                            </div>
                            <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2">
                              <span className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase text-emerald-600">
                                {stage.status}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-1 pt-6">
                            <p className="text-lg font-semibold text-stone-900 sm:text-xl">
                              {stage.caller.name}
                            </p>
                          </div>

                          <span className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-[11px] font-semibold uppercase text-emerald-600">
                            {stage.metric}
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="mt-8 flex-1 sm:mt-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${stage.id}-script`}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -18 }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                          className="flex flex-col items-center gap-3"
                        >
                          {stage.script.map((line, idx) => (
                            <div
                              key={`${stage.id}-${idx}`}
                              className={cn(
                                "w-full max-w-[260px] sm:max-w-[280px] rounded-3xl border px-4 py-3 text-left text-sm leading-relaxed",
                                idx === 0
                                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                  : "ml-4 border-slate-200 bg-white text-stone-600 sm:ml-10"
                              )}
                            >
                              <span className="text-[10px] font-semibold uppercase text-emerald-600">
                                {line.role}
                              </span>
                              <p className="mt-2 text-[13px] leading-relaxed text-stone-700 sm:text-sm">
                                {line.text}
                              </p>
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-3">
                      <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
                        {[0, 1, 2].map((ring) => (
                          <motion.span
                            key={ring}
                            className="absolute inset-0 rounded-full border border-emerald-200/40"
                            animate={{ opacity: [0.45, 0], scale: [1, 1.45] }}
                            transition={{
                              duration: 2.8,
                              repeat: Infinity,
                              delay: ring * 0.45,
                              ease: "easeOut",
                            }}
                            aria-hidden
                          />
                        ))}
                        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400 text-slate-950 shadow-[0_25px_55px_-25px_rgba(16,185,129,0.65)] sm:h-20 sm:w-20">
                          <Phone className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="text-[10px] font-semibold uppercase text-stone-500">
                        Live AI Call
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
