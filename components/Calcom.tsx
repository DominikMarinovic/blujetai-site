import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import Link from "next/link"

const heroVertical = {
  badge: "FOR STEM CELL, PRP & EXOSOME CLINICS",
  headline: "30 Financially Qualified Stem Cell Patients in 90 days - Guaranteed.",
  secondaryHeadline: "You only pay for qualified patients!",
  subhead:
    "Pre-sold, Educated and medically qualified patients fully done for you. Consistent patients without calling leads and dealing with no shows!",
  cta: { label: "Book Free Consultation", href: "#book-call" },
  subcta: "No retainer. Pay only for qualified patient!",
}

export default function MyApp() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: "recovery-plan" })
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#9044C9" }, dark: { "cal-brand": "#9044C9" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])
  return (
    <Link
      data-cal-namespace="recovery-plan"
      data-cal-link="blujetai/recovery-plan"
      href={heroVertical.cta.href}
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="inline-flex min-h-[48px] items-center uppercase justify-center rounded-lg bg-gradient-to-t from-purple-900 to-[#AC58EB] px-[36px] py-[18px] text-xl font-bold leading-[1.2] tracking-[-0.01em] text-white transition-colors hover:bg-purple-700"
    >
      {heroVertical.cta.label}
    </Link>
  )
}
