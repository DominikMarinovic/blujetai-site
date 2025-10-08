"use client"

import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export default function BarBeforeAfter({
  labelA = "Before",
  labelB = "After",
  valueA,
  valueB,
}: {
  labelA?: string
  labelB?: string
  valueA: number
  valueB: number
}) {
  const data = [
    { name: labelA, value: valueA },
    { name: labelB, value: valueB },
  ]
  const maxVal = Math.max(valueA || 0, valueB || 0)
  const buffer = Math.max(500, Math.round(maxVal * 0.12)) // 12% headroom, min $500
  return (
    <div className="w-full overflow-x-auto h-56 sm:h-64 md:h-72">
      <div className="min-w-[380px] pr-2 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: 12, right: 12, top: 24, bottom: 8 }}>
            <XAxis dataKey="name" stroke="#6B7280" axisLine={false} tickLine={false} />
            <YAxis hide domain={[0, maxVal + buffer]} allowDecimals={false} />
            <Tooltip
              cursor={{ fill: "rgba(57,202,255,0.06)" }}
              contentStyle={{
                background: "#ffffff",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
              }}
              formatter={(val: number, name, props: any) => [
                `$${Math.round(val).toLocaleString()}`,
                props?.payload?.name || "",
              ]}
            />
            <Bar dataKey="value" radius={[10, 10, 0, 0]} isAnimationActive>
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={idx === 0 ? "#52504F" : "#2563EB"} />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                formatter={(val: number) => `$${Math.round(val).toLocaleString()}`}
                className="fill-[#111827] text-sm"
                offset={12}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
