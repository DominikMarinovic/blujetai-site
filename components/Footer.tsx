import Link from "next/link"
import { site } from "@/content/site"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t bg-stone-900 border-border/50">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-white text-lg">Blujet AI</span>
            </div>
            <p className="mt-3 text-sm text-stone-200 max-w-xs">
              AI voice agents that recover abandoned checkouts and grow revenue without extra ad
              spend.
            </p>
          </div>

          <div>
            <h4 className="text-sm text-stone-200 font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
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
    </footer>
  )
}
