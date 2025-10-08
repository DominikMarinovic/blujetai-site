"use client"

import { useEffect } from "react"

const WIDGET_SRC = "https://app.iclosed.io/assets/widget.js"
const WIDGET_ID = "EyGnQmcqM2Qn"

export function IClosedWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-cta-widget="${WIDGET_ID}"]`
    )
    if (existing) return

    const script = document.createElement("script")
    script.src = WIDGET_SRC
    script.async = true
    script.dataset.ctaWidget = WIDGET_ID
    document.body.appendChild(script)
  }, [])

  return null
}
