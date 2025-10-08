import { features } from "@/content/site"
import * as Icons from "lucide-react"
import { cn } from "@/lib/utils"
import WorkflowStatusCard, { type WorkflowRow, type WorkflowStatusTab } from "@/components/WorkflowStatusCard"

export default function FeatureGrid() {
  const workflowData: Record<string, WorkflowRow[]> = {
    checkout: [
      {
        id: "checkout-1",
        name: "Funnel for Abandoned Checkouts - Initial Reminder",
        status: { label: "Live", className: "bg-emerald-100 text-emerald-700" },
      },
      {
        id: "checkout-2",
        name: "Funnel for Abandoned Checkouts - Second Follow-up",
        status: { label: "Live", className: "bg-emerald-100 text-emerald-700" },
      },
      {
        id: "checkout-3",
        name: "Funnel for Abandoned Checkouts - Loyalty Incentive",
        status: { label: "Testing", className: "bg-amber-100 text-amber-700" },
      },
      {
        id: "checkout-4",
        name: "Full Journey - Post-Purchase Upsell",
        status: { label: "Queued", className: "bg-slate-100 text-slate-700" },
      },
    ],
    subscription: [
      {
        id: "subscription-1",
        name: "Subscription Save - Expiring Card Outreach",
        status: { label: "Live", className: "bg-emerald-100 text-emerald-700" },
      },
      {
        id: "subscription-2",
        name: "Winback Series - Pause-to-Save Offers",
        status: { label: "Live", className: "bg-emerald-100 text-emerald-700" },
      },
      {
        id: "subscription-3",
        name: "VIP Retention - Tier Upgrade Reminder",
        status: { label: "Testing", className: "bg-indigo-100 text-indigo-700" },
      },
      {
        id: "subscription-4",
        name: "Churn Feedback Loop - Insight Collection",
        status: { label: "In Review", className: "bg-slate-100 text-slate-700" },
      },
    ],
  }

  const workflowTabs: WorkflowStatusTab[] = [
    { label: "Abandoned Checkout", value: "checkout", activeClassName: "bg-neutral-900 text-white" },
    { label: "Subscription", value: "subscription", activeClassName: "bg-indigo-100 text-indigo-700" },
  ]

  return (
    <section id="features" className="container py-16 sm:py-24">
      {/* 2-column etched grid with dashed separators */}
      <div
        className={
          "mt-10 grid grid-cols-1 md:grid-cols-2 border border-[#E5E7EB] border-dashed rounded-2xl overflow-hidden bg-white"
        }
      >
        {features.map((f, i) => {
          const Icon = (Icons as any)[f.icon] || (Icons as any).Circle
          const isRightCol = i % 2 === 1
          const isLastRow = i >= features.length - 2
          return (
            <div
              key={f.title}
              className={cn(
                "group relative min-h-[220px] sm:min-h-[260px]",
                "bg-white",
                !isRightCol && "md:border-r md:border-dashed md:border-[#E5E7EB]",
                !isLastRow && "border-b-2 border-dashed border-[#E5E7EB]"
              )}
            >
              <Icon
                className={cn(
                  "pointer-events-none absolute right-6 top-6 h-24 w-24 sm:h-32 sm:w-32",
                  "text-black/10 transition-colors group-hover:text-primary/30"
                )}
                strokeWidth={1.25}
              />

              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 top-1/4 h-40 w-48 rotate-[22deg] bg-gradient-to-b from-white/5 via-cyan-400/10 to-transparent blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"
              />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-lg font-semibold drop-shadow-[0_0_12px_rgba(0,212,255,0.15)]">
                  {f.title}
                </h3>
                <p className="mt-2 max-w-[46ch] text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <WorkflowStatusCard
          tabs={workflowTabs}
          defaultActiveTab="checkout"
            workflows={workflowData.checkout}
          workflowsByTab={workflowData}
          workflowColumnLabel="Workflow"
          statusColumnLabel="Status"
        />
      </div>
    </section>
  )
}

