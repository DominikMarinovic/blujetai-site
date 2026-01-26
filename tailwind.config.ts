import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0C2E49",
        primary: {
          DEFAULT: "#114B7B",
          foreground: "#0C2E49",
        },
        accent: {
          DEFAULT: "#137fd1",
          foreground: "#0C2E49",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
        border: "#E5E7EB",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        heading: ["DM Sans", ...fontFamily.sans],
        pixel: ["var(--font-pixel)", ...fontFamily.mono],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        glow: "0 0 30px rgba(57, 202, 255, 0.25)",
        card: "0 10px 30px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid-radial": "radial-gradient(1200px 600px at 50% -10%, #F4F7FB 10%, #FFFFFF 60%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
