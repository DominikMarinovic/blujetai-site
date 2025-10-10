"use client"

import { useEffect, useRef } from "react"

const WIDGET_SRC = "https://app.iclosed.io/assets/widget.js"
const WIDGET_URL = "https://app.iclosed.io/e/blujetai/blujetai-pilot-program"
const WIDGET_TITLE = "BlujetAI Pilot Program"

declare global {
  interface Window {
    IClosedCTA?: { refresh?: () => void }
  }
}

export default function IClosedInlineWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const script = document.createElement("script")
    script.src = WIDGET_SRC
    script.async = true
    script.onload = () => {
      window.IClosedCTA?.refresh?.()
    }
    container.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <div
        className="iclosed-widget"
        data-url={WIDGET_URL}
        title={WIDGET_TITLE}
        style={{ width: "100%", height: "620px" }}
      />
    </div>
  )
}
