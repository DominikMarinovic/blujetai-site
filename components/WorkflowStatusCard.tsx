"use client"

import { useMemo, useState } from "react"
import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"

export type WorkflowStatusTab = {
  label: string
  value: string
  /** Optional classes applied when this tab is active */
  activeClassName?: string
  /** Optional inline style applied when this tab is active */
  activeStyle?: CSSProperties
}

export type WorkflowRow = {
  id: string
  name: string
  /** Optional status pill overrides */
  status?: {
    label?: string
    className?: string
    style?: CSSProperties
  }
}

export interface WorkflowStatusCardProps {
  tabs?: WorkflowStatusTab[]
  /** Set the initial active tab for uncontrolled usage */
  defaultActiveTab?: string
  /** Control the active tab externally */
  activeTab?: string
  onTabChange?: (value: string) => void
  workflows?: WorkflowRow[]
  workflowColumnLabel?: string
  statusColumnLabel?: string
  workflowsByTab?: Record<string, WorkflowRow[]>
  className?: string
  headerClassName?: string
}

const baseTabs: WorkflowStatusTab[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
]

const baseStatus = {
  label: "Active",
  className: "bg-emerald-100 text-emerald-700",
} satisfies WorkflowRow["status"]

export default function WorkflowStatusCard({
  tabs = baseTabs,
  defaultActiveTab,
  activeTab,
  onTabChange,
  workflows,
  workflowColumnLabel = "Workflow",
  statusColumnLabel = "Status",
  className,
  headerClassName,
  workflowsByTab,
}: WorkflowStatusCardProps) {
  const [internalActive, setInternalActive] = useState(defaultActiveTab ?? tabs[0]?.value ?? "all")
  const currentActive = activeTab ?? internalActive

  const tabCount = tabs.length

  const visibleWorkflows = useMemo(() => {
    if (workflowsByTab) {
      return workflowsByTab[currentActive] ?? []
    }
    return workflows ?? []
  }, [currentActive, workflowsByTab, workflows])

  const handleTabClick = (value: string) => {
    if (activeTab === undefined) {
      setInternalActive(value)
    }
    onTabChange?.(value)
  }

  return (
    <div
      className={cn(
        "rounded-3xl border border-neutral-200 bg-white p-4 shadow-[0_24px_50px_-35px_rgba(15,23,42,0.45)]",
        className
      )}
    >
      <div
        className={cn(
          "rounded-2xl border border-neutral-100 bg-neutral-50/80 p-1 text-sm font-medium text-neutral-600",
          headerClassName
        )}
      >
        <div className="flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = tab.value === currentActive
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => handleTabClick(tab.value)}
                className={cn(
                  "flex-1 rounded-2xl px-4 py-2 transition-all duration-200",
                  "hover:text-neutral-900",
                  isActive
                    ? cn(
                        "bg-white text-neutral-900 shadow-sm ring-1 ring-black/5",
                        tab.activeClassName
                      )
                    : "text-neutral-500"
                )}
                style={isActive ? tab.activeStyle : undefined}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            )
          })}
          {tabCount < 3 && tabCount > 0 ? <div className="flex-1" aria-hidden /> : null}
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-100">
        <div className="flex items-center justify-between gap-4 bg-neutral-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
          <span className="pl-1">{workflowColumnLabel}</span>
          <span>{statusColumnLabel}</span>
        </div>

        {visibleWorkflows.map((workflow, index) => {
          const status = {
            ...baseStatus,
            ...(workflow.status ?? {}),
          }
          const isLast = index === visibleWorkflows.length - 1
          return (
            <div
              key={workflow.id}
              className={cn(
                "flex items-center justify-between gap-4 px-4 py-4 text-sm",
                !isLast && "border-b border-neutral-100"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium text-neutral-900">{workflow.name}</span>
              </div>
              <span
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold",
                  status?.className
                )}
                style={status?.style}
              >
                {status?.label ?? "Active"}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
