"use client"

import Image from "next/image"
import { useMemo } from "react"

import { cn } from "@/lib/utils"

type LogoMarqueeItem = string | { label: string; src?: string }

type NormalizedLogoItem = {
  label: string
  src?: string
}

interface LogoMarqueeProps {
  items: LogoMarqueeItem[]
  className?: string
  heading?: string
}

export function LogoMarquee({ items = [], className, heading }: LogoMarqueeProps) {
  const normalizedItems = useMemo<NormalizedLogoItem[]>(
    () =>
      items.map((item) =>
        typeof item === "string" ? { label: item } : { label: item.label, src: item.src }
      ),
    [items]
  )

  const repeated = useMemo(() => {
    const count = normalizedItems.length
    if (!count) {
      return []
    }

    const repeats = Math.max(4, Math.ceil(24 / count))
    const totalItems = repeats * count

    return Array.from({ length: totalItems }, (_, index) => normalizedItems[index % count])
  }, [normalizedItems])

  if (!repeated.length) {
    return null
  }

  const headingLabel = heading ?? "Our trusted partners"
  const animationDurationSeconds = 32

  return (
    <div aria-hidden="true">
      {headingLabel ? (
        <p className="mb-4 text-center text-sm font-semibold uppercase text-stone-600 sm:mb-5 sm:text-[18px]">
          {headingLabel}
        </p>
      ) : null}
      <div className={cn("marquee-container", className)}>
        <div
          className="marquee-track"
          style={{ animationDuration: `${animationDurationSeconds}s` }}
        >
          {repeated.map((item, index) => (
            <span key={`${item.label}-${index}`} className="marquee-item">
              {item.src ? (
                <span className="relative flex h-8 items-center sm:h-10 lg:h-12">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={160}
                    height={48}
                    className="h-full w-auto object-contain"
                    draggable={false}
                    sizes="(min-width: 1024px) 160px, (min-width: 640px) 120px, 96px"
                  />
                </span>
              ) : (
                item.label
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
