import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
export default function Booker() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: "recovery-plan" })
      cal("ui", {
        cssVarsPerTheme: { light: { "cal-brand": "#9547CF" }, dark: { "cal-brand": "#9547CF" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])
  return (
    <Cal
      namespace="recovery-plan"
      calLink="blujetai/recovery-plan"
      style={{ width: "auto", height: "100%" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  )
}
