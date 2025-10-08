"use client"

import { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react"
import { cn } from "@/lib/utils"

type Item = { text: string; bgClass?: string }

export default function RotatingHeadline({
  prefix,
  items,
  interval = 2500,
  pillClass = "bg-gradient-to-br from-stone-100 via-white to-stone-100",
  className,
  bare = false,
  animateWidth = true,
}: {
  prefix?: React.ReactNode
  items: Item[]
  interval?: number
  pillClass?: string
  className?: string
  /** When true, renders text without an inner pill container */
  bare?: boolean
  /** Animate container width between phrases (default true) */
  animateWidth?: boolean
}) {
  const [idx, setIdx] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  useEffect(() => {
    if (!items?.length) return
    const t = setInterval(() => {
      setPrev((p) => (p === null ? idx : (p + 1) % items.length))
      setIdx((i) => (i + 1) % items.length)
      // Clear prev after animation finishes
      const clear = setTimeout(() => setPrev(null), 500)
      return () => clearTimeout(clear)
    }, interval)
    return () => clearInterval(t)
  }, [items.length, interval, idx])

  const containerRef = useRef<HTMLSpanElement>(null)
  const currentRef = useRef<HTMLSpanElement>(null)
  const [width, setWidth] = useState<number | undefined>(undefined)

  useLayoutEffect(() => {
    const el = currentRef.current
    if (!el) return
    const w = Math.ceil(el.getBoundingClientRect().width)
    setWidth(w)
  }, [idx, items])

  const activeBg = items[idx]?.bgClass ?? pillClass

  return (
    <span className={cn("inline-flex items-center align-middle", className)}>
      {prefix ? <span className="block">{prefix}</span> : null}
      <span
        className={cn(
          "relative inline-flex items-center align-middle",
          bare ? "px-0 py-0 rounded-none shadow-none bg-transparent" : "rounded-2xl px-3 py-1 text-stone-900 shadow-sm",
          bare ? undefined : activeBg
        )}
        style={{ width, transition: animateWidth ? "width 260ms ease" : undefined }}
        >
        {/* animation container */}
        <span className="relative block h-[1.6em] leading-[1]">
          {/* current */}
          <span
            key={idx}
            ref={currentRef}
            className="swap-in absolute inset-0 flex items-center whitespace-nowrap"
          >
            {items[idx]?.text}
          </span>
          {/* previous fading out */}
          {prev !== null && prev !== idx ? (
            <span className="swap-out absolute inset-0 flex items-center whitespace-nowrap">
              {items[prev]?.text}
            </span>
          ) : null}
        </span>
      </span>

      <style jsx>{`
        .swap-in {
          animation: slideIn 120ms ease-out forwards;
        }
        .swap-out {
          animation: slideOut 100ms ease-in forwards;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-8px);
          }
        }
      `}</style>
    </span>
  )
}


