"use client"

import { cn } from "@/lib/utils"

interface LogoMarqueeProps {
  items: string[]
  className?: string
}

export function LogoMarquee({ items, className }: LogoMarqueeProps) {
  const repeated = [...items, ...items]

  return (
    <div className={cn("marquee-container", className)} aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((label, index) => (
          <span key={`${label}-${index}`} className="marquee-item">
            <span className="marquee-dot" />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
