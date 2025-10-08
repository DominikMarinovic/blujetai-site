// Allow usage of the custom Wistia web component in TSX
// https://wistia.com/support/developers/player-api#web-component
import type React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        /** Wistia media id, e.g., "lt25cy83oo" */
        "media-id"?: string
        /** Aspect ratio (width/height), e.g., "1.777..." */
        aspect?: string
      }
    }
  }
}

export {}

