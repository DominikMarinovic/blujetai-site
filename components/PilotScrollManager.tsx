"use client"

import { useEffect } from "react"

const TARGET_SELECTOR = 'a[href="#pilot-widget"]'
const TARGET_ID = "pilot-widget"
const DELAY_MS = 200

export default function PilotScrollManager() {
  useEffect(() => {
    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(TARGET_SELECTOR)
    )

    if (anchors.length === 0) return

    const handler = (event: MouseEvent) => {
      const target = document.getElementById(TARGET_ID)
      if (!target) return

      event.preventDefault()
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }, DELAY_MS)
    }

    anchors.forEach((anchor) => anchor.addEventListener("click", handler))

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handler))
    }
  }, [])

  return null
}
