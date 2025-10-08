"use client"

import dynamic from "next/dynamic"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { roiAssumptions } from "@/content/site"

const Rechart = dynamic(async () => import("./charts/BarBeforeAfter"), { ssr: false })

type Inputs = {
  monthlyRevenue: number
  aov: number
  currentRecoveryRate: number // 0-100
}

const defaults: Inputs = {
  monthlyRevenue: 100000,
  aov: 80,
  currentRecoveryRate: 4, // typical email/SMS recovery on abandoned checkouts
}

type ScenarioKey = "low" | "average" | "best"

const SCENARIO_RATES: Record<ScenarioKey, number> = {
  low: 8,
  average: 14,
  best: 18,
}

export default function RoiCalculator() {
  const [values, setValues] = useState<Inputs>(defaults)
  const [calculated, setCalculated] = useState(false)
  const [aiScenario, setAiScenario] = useState<ScenarioKey>("average")
  const [inputStr, setInputStr] = useState<{
    monthlyRevenue: string
    aov: string
    currentRecoveryRate: string
  }>({
    monthlyRevenue: String(defaults.monthlyRevenue),
    aov: String(defaults.aov),
    currentRecoveryRate: String(defaults.currentRecoveryRate),
  })

  const { orders, abandonedOrders, recoveredNowRevenue, recoveredAIRevenue, additionalRevenue } =
    useMemo(() => {
      const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n || 0, min), max)
      const abandonmentRate = clamp(roiAssumptions.abandonmentRate, 0, 100) / 100
      const currentRecovery = clamp(values.currentRecoveryRate, 0, 100) / 100
      const aiRecovery = clamp(SCENARIO_RATES[aiScenario], 0, 100) / 100

      const orders = Math.max(0, Math.round((values.monthlyRevenue || 0) / (values.aov || 1)))
      // From orders and abandonment rate, infer abandoned orders
      // S = orders / (1 - a), abandoned = S * a = orders * a / (1 - a)
      const abandonedOrders = Math.round((orders * abandonmentRate) / (1 - abandonmentRate))

      const recoveredNowOrders = Math.round(abandonedOrders * currentRecovery)
      const recoveredAIOrders = Math.round(abandonedOrders * aiRecovery)

      const recoveredNowRevenue = recoveredNowOrders * (values.aov || 0)
      const recoveredAIRevenue = recoveredAIOrders * (values.aov || 0)
      const additionalRevenue = Math.max(0, recoveredAIRevenue - recoveredNowRevenue)

      return { orders, abandonedOrders, recoveredNowRevenue, recoveredAIRevenue, additionalRevenue }
    }, [values, aiScenario])

  const handleChange = (key: keyof Inputs) => (raw: string) => {
    let next = raw
    // Strip leading zeros except for decimals like 0.5
    if (next.length > 1 && /^0+\d/.test(next)) next = next.replace(/^0+/, "")
    setInputStr((s) => ({ ...s, [key]: next }))
    const n = Number(next)
    if (next !== "" && Number.isFinite(n)) setValues((v) => ({ ...v, [key]: n }))
  }

  const fmtMoney = (n: number) => `$${n.toLocaleString()}`

  return (
    <section id="roi" className="container bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl">ROI Calculator</h2>
        <p className="mt-3 text-muted-foreground">
          Enter your monthly revenue, AOV and current recovery rate to see what results you can
          have!
        </p>
      </div>

      {/* Layout: inputs left, results right */}

      <div
        className={`mt-6 grid gap-6 max-w-6xlmx-auto ${
          calculated ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"
        }`}
      >
        <form
          className={`rounded-2xl border border-[#E5E7EB] bg-stone-50 p-6 ${
            calculated ? "lg:col-span-2" : "max-w-3xl mx-auto"
          }`}
          aria-label="ROI calculator form"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Monthly revenue */}
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Monthly revenue</span>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={1000}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white pl-7 pr-3 py-2 outline-none ring-primary/30 focus:ring-2"
                  value={inputStr.monthlyRevenue}
                  onChange={(e) => handleChange("monthlyRevenue")(e.target.value)}
                  aria-label="Monthly revenue"
                />
              </div>
            </label>

            {/* AOV */}
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Average order value</span>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={1}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white pl-7 pr-3 py-2 outline-none ring-primary/30 focus:ring-2"
                  value={inputStr.aov}
                  onChange={(e) => handleChange("aov")(e.target.value)}
                  aria-label="Average order value"
                />
              </div>
            </label>

            {/* Current recovery rate */}
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">
                Current recovery rate (email/SMS)
              </span>
              <div className="relative">
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={100}
                  step={1}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 pr-10 outline-none ring-primary/30 focus:ring-2"
                  value={inputStr.currentRecoveryRate}
                  onChange={(e) => handleChange("currentRecoveryRate")(e.target.value)}
                  aria-label="Current recovery rate %"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  %
                </span>
              </div>
            </label>
          </div>

          {/* Inline computed helpers like Rebuy left panel */}
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Orders Per Month</div>
              <div className="mt-1 font-semibold">{orders.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Baseline Recovered</div>
              <div className="mt-1 font-semibold">{fmtMoney(recoveredNowRevenue)}</div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              Using {roiAssumptions.abandonmentRate}% default abandonment. Scenario:{" "}
              {SCENARIO_RATES[aiScenario]}% AI recovery.
            </div>
            <Button type="button" variant="default" onClick={() => setCalculated(true)}>
              Calculate
            </Button>
          </div>

          {/* Comparison chart under inputs */}
          {calculated && (
            <div className="mt-6">
              <Rechart
                labelA="Current"
                labelB="With Blujet AI"
                valueA={recoveredNowRevenue}
                valueB={recoveredAIRevenue}
              />
            </div>
          )}
        </form>

        {calculated && (
          <div className="rounded-2xl border border-[#E5E7EB] bg-stone-50 p-6">
            <div className="text-sm font-semibold">Your Results</div>
            <div className="mt-3 space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-700">
                + {fmtMoney(additionalRevenue * 12)}
                <span className="ml-2 align-middle text-sm font-medium text-muted-foreground">
                  /year
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
                + {fmtMoney(additionalRevenue)}
                <span className="ml-2 align-middle text-sm font-medium text-muted-foreground">
                  /month
                </span>
              </div>
            </div>

            <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

            {/* Scenario selector: Low / Average / Best */}
            <div>
              <div className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">
                Recovery Scenario
              </div>
              <div className="inline-flex rounded-full bg-stone-100 p-1 shadow-inner">
                {(
                  [
                    { key: "low", label: "Low" },
                    { key: "average", label: "Average" },
                    { key: "best", label: "Best" },
                  ] as const
                ).map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setAiScenario(key)}
                    className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                      aiScenario === key
                        ? "bg-white text-[#2d71df] shadow-sm"
                        : "text-stone-700 hover:text-stone-900"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Using {SCENARIO_RATES[aiScenario]}% AI recovery assumption
              </div>
            </div>

            {/* Breakdown list */}
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div className="text-muted-foreground">Orders Per Month</div>
              <div className="text-right font-medium">{orders.toLocaleString()}</div>
              <div className="text-muted-foreground">Abandoned Orders</div>
              <div className="text-right font-medium">{abandonedOrders.toLocaleString()}</div>
              <div className="text-muted-foreground">Recovered Now</div>
              <div className="text-right font-medium">{fmtMoney(recoveredNowRevenue)}</div>
              <div className="text-muted-foreground">With Our AI</div>
              <div className="text-right font-medium">{fmtMoney(recoveredAIRevenue)}</div>
              <div className="text-muted-foreground">Additional Recovery</div>
              <div className="text-right font-semibold">{fmtMoney(additionalRevenue)}</div>
            </div>

            <a href="/demo">
              <Button
                variant="default"
                className="mt-4 w-full shadow-none"
                aria-label="Book a Strategy Call"
              >
                Book a Strategy Call
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
