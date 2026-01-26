
import Link from "next/link"



const grainDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23grain)' opacity='0.35'/%3E%3C/svg%3E"

const backgroundStyle = {
  backgroundImage:
    "radial-gradient(1200px 420px at 50% -10%, rgba(14,104,173,0.6), transparent 70%), linear-gradient(180deg, #0C2E49 0%, #0C2E49 52%, #0C2E49 100%)",
}

const vignetteStyle = {
  backgroundImage:
    "radial-gradient(120% 85% at 50% 40%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.55) 100%)",
}


export default function Footer() {
  return (
    <section className="relative overflow-hidden bg-foreground py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={backgroundStyle}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={vignetteStyle}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-[0.35]"
        style={{ backgroundImage: `url("${grainDataUrl}")`, backgroundSize: "220px 220px" }}
      />

      <div className="container relative">
        <div className="relative flex min-h-[200px] items-end justify-center pb-10 sm:min-h-[360px] sm:pb-14 lg:min-h-[460px]">
          <h2
            className=" font-serif text-center italic text-[clamp(80px,11vw,220px)] leading-[0.86] tracking-tight text-emerald-50/10 drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]`}"
          >
            Blujet AI
          </h2>
        </div>
       
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="relative container py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <p className="mt-3 text-sm text-stone-300 max-w-xs">
                AI Agents for Shopify subscription brands
              </p>
            </div>

            <div>
              <div className="mt-3 space-y-2 flex text-sm text-stone-300">
                <span className="grid gap-1">
                  <Link href="/home&pet">Home & Pet</Link>
                  <Link href="/health&wellness">Health & Wellness</Link>
                  <Link href="/food&beverage">Food & Beverage</Link>
                  <Link href="/beauty&personalcare">Beauty & Personal Care</Link>
                  
                </span>
              </div>
            </div>
            <div>
              <ul className="mt-3 space-y-2 flex text-sm text-stone-300">
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-xs text-stone-400 md:flex-row">
            <p>© {new Date().getFullYear()} Blujet AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
