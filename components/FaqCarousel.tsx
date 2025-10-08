"use client"

import { useCallback, useRef } from "react"
import { cn } from "@/lib/utils"

export type FaqCarouselItem = {
  question: string
  answer: string
}

interface FaqCarouselProps {
  items: FaqCarouselItem[]
  className?: string
}

export function FaqCarousel({ items, className }: FaqCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback((direction: "prev" | "next") => {
    const container = scrollerRef.current
    if (!container) return

    const scrollAmount = container.clientWidth * 0.85
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    })
  }, [])

  const slides = items.length > 1 ? [...items, ...items] : items
  const total = items.length

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto py-4 pr-4 scrollbar-hide"
      >
        {slides.map(({ question, answer }, index) => {
          const displayIndex = (index % total) + 1
          return (
            <article
              key={`${question}-${index}`}
              className="min-w-[92%] snap-center rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200 sm:min-w-[460px] sm:p-9"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs font-semibold uppercase text-blue-600 sm:text-sm">
                  {displayIndex.toString().padStart(2, "0")} / {total.toString().padStart(2, "0")}
                </span>
                <span className="h-px flex-1 rounded bg-gradient-to-r from-blue-200 via-blue-100 to-transparent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-stone-900 sm:text-xl">{question}</h3>
              <p className="mt-3 text-sm text-stone-600 sm:text-base">{answer}</p>
            </article>
          )
        })}
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous question"
            onClick={() => handleScroll("prev")}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 translate-x-[-50%] items-center justify-center rounded-full border border-stone-200 bg-white p-3 shadow-sm transition hover:-translate-x-[55%] hover:bg-stone-50"
          >
            <span className="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next question"
            onClick={() => handleScroll("next")}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-[50%] items-center justify-center rounded-full border border-stone-200 bg-white p-3 shadow-sm transition hover:translate-x-[55%] hover:bg-stone-50"
          >
            <span className="sr-only">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}
