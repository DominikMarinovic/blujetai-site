"use client"

import { useEffect, useRef } from "react"

export default function GradientGridReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = ref.current!
    const colorLayer = host.querySelector<HTMLElement>(".color-layer")!
    const onScroll = () => {
      const r = host.getBoundingClientRect()
      const viewport = window.innerHeight
      const start = Math.min(viewport, Math.max(0, viewport - r.top))
      const total = viewport + r.height
      const progress = Math.min(1, Math.max(0, (start + (viewport - r.bottom)) / total))
      colorLayer.style.setProperty("--reveal", `${(progress * 120).toFixed(1)}%`)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      ref={ref}
      className="relative h-[60vh] overflow-hidden bg-black"
      style={
        {
          // tuneables
          "--grid-gap": "28px",
          "--grid-line": "1px",
          "--grid-grey": "#9CA3AF",
          "--reveal": "0%"
        } as React.CSSProperties
      }
    >
      {/* Color gradient layer revealed by mask */}
      <div
        className="absolute inset-0 color-layer pointer-events-none"
        style={
          {
            background:
              "linear-gradient(120deg,#00D4FF 0%, #39CAFF 35%, #8BE9FF 70%, #ffffff 100%)",
            WebkitMaskImage:
              "linear-gradient(135deg, transparent calc(var(--reveal) - 20%), black var(--reveal))",
            maskImage:
              "linear-gradient(135deg, transparent calc(var(--reveal) - 20%), black var(--reveal))",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            mixBlendMode: "screen"
          } as React.CSSProperties
        }
      />

      {/* Neutral grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,   var(--grid-grey), var(--grid-grey) var(--grid-line), transparent var(--grid-line), transparent var(--grid-gap)),
            repeating-linear-gradient(90deg,  var(--grid-grey), var(--grid-grey) var(--grid-line), transparent var(--grid-line), transparent var(--grid-gap))`,
          opacity: 0.35
        }}
      />

      {/* Colorized grid revealed by same mask */}
      <div
        className="absolute inset-0 color-layer pointer-events-none"
        style={
          {
            backgroundImage: `repeating-linear-gradient(0deg,   #00D4FF, #00D4FF var(--grid-line), transparent var(--grid-line), transparent var(--grid-gap)),
              repeating-linear-gradient(90deg,  #00D4FF, #00D4FF var(--grid-line), transparent var(--grid-line), transparent var(--grid-gap))`,
            WebkitMaskImage:
              "linear-gradient(135deg, transparent calc(var(--reveal) - 20%), black var(--reveal))",
            maskImage:
              "linear-gradient(135deg, transparent calc(var(--reveal) - 20%), black var(--reveal))",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            mixBlendMode: "screen",
            opacity: 0.9
          } as React.CSSProperties
        }
      />

      {/* Content slot (optional) */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h2 className="text-white/90 text-3xl md:text-5xl font-semibold">Grid Reveal Section</h2>
      </div>

      {/* Optional micro-noise to reduce banding on large screens */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.03] bg-[url('/noise.png')]" />
    </section>
  )
}

