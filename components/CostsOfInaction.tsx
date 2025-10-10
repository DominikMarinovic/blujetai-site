import { cn } from "@/lib/utils"

const churnByDay = [
  { day: 1, value: 110 },
  { day: 2, value: 40 },
  { day: 3, value: 25 },
  { day: 4, value: 24 },
  { day: 5, value: 24 },
  { day: 6, value: 20 },
  { day: 7, value: 32 },
  { day: 8, value: 32 },
  { day: 9, value: 23 },
  { day: 10, value: 27 },
  { day: 11, value: 30 },
  { day: 12, value: 35 },
  { day: 13, value: 26 },
  { day: 14, value: 29 },
  { day: 15, value: 15 },
  { day: 16, value: 20 },
  { day: 17, value: 29 },
  { day: 18, value: 32 },
  { day: 19, value: 23 },
  { day: 20, value: 21 },
  { day: 21, value: 22 },
  { day: 22, value: 29 },
  { day: 23, value: 32 },
  { day: 24, value: 23 },
  { day: 25, value: 43 },
  { day: 26, value: 31 },
  { day: 27, value: 26 },
  { day: 28, value: 33 },
  { day: 29, value: 42 },
  { day: 30, value: 89 },
  { day: 31, value: 46 },
  { day: 32, value: 23 },
  { day: 33, value: 16 },
  { day: 34, value: 10 },
  { day: 35, value: 6 },
]

export default function CostsOfInaction() {
  const chart = { width: 360, height: 160, top: 28, bottom: 40, left: 28, gap: 6 }
  const maxValue = Math.max(...churnByDay.map((d) => d.value))
  const barWidth =
    (chart.width - chart.left * 2 - chart.gap * (churnByDay.length - 1)) / churnByDay.length

  return (
    <section id="costs" className="container  bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold pb-2 uppercase text-red-600">The Problem</p>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
          The Real Cost of Checkout & Subscription Leaks
        </h2>
        <p className="mt-3 text-muted-foreground">These problems affect your ROAS directly</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card
          title="Wasted Ad Spend"
          desc={
            <>
              You're pouring tens or hundreds of thousands of dollars a month into Meta, Google, and
              TikTok to acquire new subscribers. But with 70-80% of them abandoning the checkout,
              you're forced to watch your ad budget evaporate at the final, most critical step.
              <strong>This is a direct hit to your ROAS!</strong>
            </>
          }
        >
          <div className="space-y-3">
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-3 shadow-sm">
              <div className="flex items-center gap-2 pb-2 text-sm font-semibold">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-stone-200">
                  $
                </span>
                <span className="text-lg font-semibold text-stone-800">Lost Sale</span>
              </div>
              <p className="mt-1 text-sm text-stone-600">Health Supplement</p>
              <p className="mt-1 text-sm text-red-600">-$49.99</p>
            </div>
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 pb-2 text-sm font-semibold">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-stone-200">
                  ↺
                </span>
                <span className="text-lg font-semibold text-stone-800">Canceled Subscription</span>
              </div>
              <p className="mt-1 text-sm text-stone-600">Probiotic for Pets</p>
              <p className="mt-1 text-sm text-red-600">-$29.99/month</p>
            </div>
          </div>
        </Card>

        {/* Card 2: Stolen/Lost Revenue */}
        <Card
          title="A Leaky MRR Funnel"
          desc={
            <>
              You fight to acquire new subscribers, only to lose existing ones to failed payments or
              simple cancellation. This puts a<strong> hard ceiling</strong> on your growth.
            </>
          }
        >
          <div className="rounded-xl border border-[#E5E7EB] bg-white pt-6 shadow-sm">
            <div className="text-center">
              <div className="text-xs uppercase tracking-wide text-stone-500">MRR</div>
              <div className="mt-1 text-2xl font-bold">$MRR</div>
              <span className="mt-1 inline-block rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-600">
                - $32,440
              </span>
            </div>
            <svg viewBox="0 0 320 110" className="mt-6 w-full">
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
              />
            </svg>
          </div>
        </Card>

        <Card
          title="Flying Blind"
          desc={
            <>
              You have all the data—analytics, reports, dashboards. You know how many people are
              leaving. But you don't have the single most important piece of information:{" "}
              <strong> Why are they not buying?</strong>{" "}
            </>
          }
        >
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold uppercase text-stone-500">
                <span>Subscription cohort</span>
                <span className="rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-600">
                  -52% at day 30
                </span>
              </div>
              <svg viewBox={`0 0 ${chart.width} ${chart.height}`} className="mt-4 w-full">
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
    <div className="rounded-2xl border border-[#eaeaeb] bg-gradient-to-br from-stone-100 to-white p-5 sm:p-6">
      <div className="mb-4">{children}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-stone-700">{desc}</p>
    </div>
  )
}
