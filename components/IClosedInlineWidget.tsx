"use client"

import Script from "next/script"

const WIDGET_SRC = "https://app.iclosed.io/assets/widget.js"
const WIDGET_URL = "https://app.iclosed.io/e/blujetai/blujetai-pilot-program"
const WIDGET_TITLE = "BlujetAI Pilot Program"

declare global {
  interface Window {
    IClosedCTA?: { refresh?: () => void }
  }
}

export default function IClosedInlineWidget() {
  return (
    <>
      <div
        className="iclosed-widget"
        data-url={WIDGET_URL}
        title={WIDGET_TITLE}
        style={{ width: "100%", height: "620px" }}
      />
      <Script
        src={WIDGET_SRC}
        strategy="afterInteractive"
        onLoad={() => window.IClosedCTA?.refresh?.()}
      />
    </>
  )
}
