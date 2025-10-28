"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

const churnByDay = [
  { day: 1, value: 45 },
  { day: 2, value: 15 },
  { day: 3, value: 9 },
  { day: 4, value: 14 },
  { day: 5, value: 14 },
  { day: 6, value: 10 },
  { day: 7, value: 12 },
  { day: 8, value: 12 },
  { day: 9, value: 13 },
  { day: 10, value: 17 },
  { day: 11, value: 10 },
  { day: 12, value: 15 },
  { day: 13, value: 16 },
  { day: 14, value: 19 },
  { day: 15, value: 15 },
  { day: 16, value: 10 },
  { day: 17, value: 14 },
  { day: 18, value: 12 },
  { day: 19, value: 13 },
  { day: 20, value: 11 },
  { day: 21, value: 12 },
  { day: 22, value: 17 },
  { day: 23, value: 12 },
  { day: 24, value: 13 },
  { day: 25, value: 16 },
  { day: 26, value: 21 },
  { day: 27, value: 26 },
  { day: 28, value: 110 },
  { day: 29, value: 32 },
  { day: 30, value: 33 },
  { day: 31, value: 40 },
  { day: 32, value: 156 },
  { day: 33, value: 55 },
  { day: 34, value: 50 },
  { day: 35, value: 36 },
  { day: 36, value: 20 },
  { day: 37, value: 16 },
  { day: 38, value: 10 },
  { day: 39, value: 10 },
  { day: 40, value: 16 },
]

export default function CostsOfInaction() {
  const chart = { width: 360, height: 160, top: 28, bottom: 40, left: 28, gap: 2 }
  const maxValue = Math.max(...churnByDay.map((d) => d.value))
  const barWidth =
    (chart.width - chart.left * 2 - chart.gap * (churnByDay.length - 1)) / churnByDay.length

  return (
    <section id="costs" className=" container bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl sm:mb-12 text-center">
        <p className="inline-block bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 bg-clip-text pb-2 text-sm font-semibold uppercase text-transparent">
          The problem
        </p>
        <h2 className="mt-3 font-heading text-3xl capitalize font-semibold text-stone-900 sm:text-4xl">
          The High Cost of Scaling a Leaky Funnel
        </h2>
        <p className="mt-3 text-muted-foreground">
          You know the subscription model promises predictable revenue. But right now, you're
          battling leaks that make growth feel like an uphill fight, forcing you to spend more and
          more money on ads just to stay afloat.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card
          title="Abandoned Checkout = Wasted Ad Spend"
          desc={
            <>
              You&apos;re spending tens or hundreds of thousands of dollars a month on ads to
              acquire new subscribers. <br /> <br /> But you&apos;re forced to watch your{" "}
              <strong>ad budget evaporate</strong> at the final step.
            </>
          }
        >
          <div className="space-y-3">
            <div className="relative overflow-hidden rounded-2xl bg-stone-50 p-2">
              <Image
                src="/wasted-ad-spend.png"
                alt="Wasted ad spend leads to lower Roas"
                width={560}
                height={320}
                className="h-60 w-full rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </Card>

        <Card
          title="Uphill batle for Growth"
          desc={
            <>
              You fight to acquire new subscribers, only to lose existing ones to failed payments or
              simple cancellation. <br />
              <br />
              This puts a<strong> hard ceiling</strong> on your growth.
            </>
          }
        >
          <div className="rounded-xl bg-stone-50 pt-6 ">
            <div className="text-center">
              <div className="mt-1 text-2xl font-bold">$MRR</div>
              <span className="mt-1 inline-block rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-600">
                - $32,440
              </span>
            </div>
            <svg viewBox="0 0 320 110" className="mt-6 h-36 w-full">
              <defs>
                <linearGradient id="loss" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fecaca" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>
              <path
                d="M0,18 C15,12 35,20 55,18 C75,22 95,26 115,28 C135,32 155,38 175,42 C195,48 215,56 235,66 C250,75 270,85 285,90 C300,88 310,82 320,80"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M0,110 L0,18 C15,12 35,20 55,18 C75,22 95,26 115,28 C135,32 155,38 175,42 C195,48 215,56 235,66 C250,75 270,85 285,90 C300,88 310,82 320,80 L320,110 Z"
                fill="url(#loss)"
                opacity={0.35}
              />
            </svg>
          </div>
        </Card>

        <Card
          title="The First Renewal Cliff"
          desc={
            <>
              That spike in cancellations right before or after the first renewal? <br />
              <br />
              It's where nearly half your cohort vanishes, taking the LTV you paid to acquire them
              right along with them. Relying solely on acquisition to outpace this is unsustainable.
            </>
          }
        >
          <div className="space-y-4">
            <div className="rounded-xl bg-stone-50 p-3">
              <div className="flex items-center justify-between text-xs font-semibold uppercase text-stone-500">
                <span>Subscription cohort</span>
                <span className="rounded-full bg-stone-50 px-2 py-0.5 text-[11px] font-semibold text-stone-600">
                  -52% at day 30
                </span>
              </div>
              <svg viewBox={`0 0 ${chart.width} ${chart.height}`} className="mt-2 h-48 w-full">
                <defs>
                  <linearGradient id="barFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="100%" stopColor="#dbeafe" />
                  </linearGradient>
                </defs>
                <line
                  x1={chart.left}
                  y1={chart.height - chart.bottom}
                  x2={chart.width - chart.left}
                  y2={chart.height - chart.bottom}
                  stroke="#cbd5f5"
                  strokeWidth={1.5}
                />
                <line
                  x1={chart.left}
                  y1={chart.top}
                  x2={chart.left}
                  y2={chart.height - chart.bottom}
                  stroke="#cbd5f5"
                  strokeWidth={1.5}
                />
                <text
                  x={chart.left}
                  y={chart.height - chart.bottom + 16}
                  textAnchor="middle"
                  className="fill-slate-400 text-[9px] font-semibold"
                >
                  0
                </text>
                {churnByDay.map((point, idx) => {
                  const usableHeight = chart.height - chart.top - chart.bottom
                  const barHeight = Math.max((point.value / maxValue) * usableHeight, 2)
                  const x = chart.left + idx * (barWidth + chart.gap)
                  const y = chart.top + (usableHeight - barHeight)
                  const showTick = point.day % 5 === 0
                  return (
                    <g key={point.day}>
                      <rect
                        x={x}
                        y={y}
                        width={barWidth}
                        height={barHeight}
                        rx={barWidth / 3}
                        fill="url(#barFill)"
                      />
                      {showTick && (
                        <text
                          x={x + barWidth / 2}
                          y={chart.height - chart.bottom + 16}
                          textAnchor="middle"
                          className="fill-slate-400 text-[9px] font-semibold"
                        >
                          {point.day}
                        </text>
                      )}
                    </g>
                  )
                })}
                <text
                  x={(chart.width - chart.left) / 2 + chart.left / 2}
                  y={chart.top - 12}
                  textAnchor="middle"
                  className="fill-slate-500 text-[12px] font-semibold"
                >
                  Churn by day
                </text>
                <text
                  x={chart.left}
                  y={chart.top - 12}
                  textAnchor="start"
                  className="fill-slate-500 text-[10px] uppercase"
                >
                  cancellations
                </text>
                <text
                  x={chart.width - chart.left}
                  y={chart.height - chart.bottom + 32}
                  textAnchor="end"
                  className="fill-slate-400 text-[10px] uppercase"
                >
                  days
                </text>
              </svg>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

function Card({
  title,
  desc,
  children,
}: {
  title: string
  desc: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="rounded-3xl bg-stone-50 shadow border-stone-300 p-5 sm:p-6">
      <div className="mb-4">{children}</div>
      <h3 className="text-lg font-semibold text-stone-800">{title}</h3>
      <p className="mt-2 text-sm text-stone-600">{desc}</p>
    </div>
  )
}
