"use client"

import { useEffect } from "react"

const TARGET_HASH = "#book-call"
const TARGET_ID = "book-call"

export default function PilotScrollManager() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const clickTarget = event.target as HTMLElement | null
      const anchor = clickTarget?.closest("a[href]") as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !(href === TARGET_HASH || href.endsWith(TARGET_HASH))) return

      const target = document.getElementById(TARGET_ID)
      if (!target) return

      event.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top, behavior: "smooth" })

      if (typeof window !== "undefined") {
        const url = window.location.pathname + window.location.search
        window.history.replaceState(null, "", url)
      }
    }

    document.addEventListener("click", handler)

    return () => {
      document.removeEventListener("click", handler)
    }
  }, [])

  return null
}
