"use client"

import { useEffect } from "react"

const DELAY_MS = 200
const TARGET_SELECTOR = 'a[href="#pilot-widget"]'
const TARGET_ID = "pilot-widget"

export default function PilotScrollManager() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = document.getElementById(TARGET_ID)
      if (!target) return

      event.preventDefault()
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }, DELAY_MS)

      if (typeof window !== "undefined") {
        const url = window.location.pathname + window.location.search
        window.history.replaceState(null, "", url)
      }
    }

    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>(TARGET_SELECTOR))
    anchors.forEach((anchor) => anchor.addEventListener("click", handler))

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handler))
    }
  }, [])

  return null
}
