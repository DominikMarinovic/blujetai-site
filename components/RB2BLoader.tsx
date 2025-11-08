"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const RB2B_SCRIPT_ID = process.env.RB2B_ID

export default function RB2BLoader() {
  const pathname = usePathname()

  useEffect(() => {
    if (!RB2B_SCRIPT_ID) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("RB2B script ID missing; set NEXT_PUBLIC_RB2B_ID to enable tracking.")
      }
      return
    }

    const existing = document.getElementById("rb2b-script")
    if (existing) existing.remove()

    const script = document.createElement("script")
    script.id = "rb2b-script"
    script.src = `https://ddwl4m2hdecbv.cloudfront.net/b/${RB2B_SCRIPT_ID}/${RB2B_SCRIPT_ID}.js.gz`
    script.async = true
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [pathname])

  return null
}
