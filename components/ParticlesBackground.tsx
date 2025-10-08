"use client"

import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      await initParticlesEngine(async (engine) => {
        // we use the default bundles - no custom presets to keep it light
      })
      if (mounted) setReady(true)
    })()
    return () => {
      mounted = false
    }
  }, [])

  const options = useMemo(
    () => ({
      fpsLimit: 45,
      detectRetina: true,
      background: { color: { value: "transparent" } },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: {
          density: { enable: true, area: 800 },
          value: 70
        },
        color: { value: "#39CAFF" },
        links: {
          enable: true,
          distance: 110,
          color: "#39CAFF",
          opacity: 0.25,
          width: 1
        },
        move: {
          enable: true,
          speed: { min: 0.3, max: 0.7 },
          direction: "none",
          outModes: { default: "out" }
        },
        size: { value: { min: 1, max: 2 } },
        opacity: { value: 0.6 },
        shape: { type: "circle" }
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: {
          repulse: { distance: 80, duration: 0.4 }
        }
      },
      responsive: [
        {
          maxWidth: 768,
          options: { particles: { number: { value: 40, density: { enable: true, area: 700 } } } }
        }
      ]
    }),
    []
  )

  // Respect reduced motion
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  if (prefersReduced) return null
  if (!ready) return null

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <Particles id="tsparticles" options={options as any} />
    </div>
  )
}
