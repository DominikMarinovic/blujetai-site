"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { heroCopy } from "@/content/site"

const navItems = [
  { label: "The Problem", href: "/#recovery" },
  { label: "How it works", href: "/#bento" },
  { label: "Results", href: "/#case-studies" },
  { label: "Who It's For", href: "/#who-this-is-for" },
  { label: "FAQ", href: "/#faq" },
]

export default function Navbar() {
  // Solid navbar with responsive spacing for mobile and desktop
  return (
    <header className="max-sm:hidden container items-center bg-white max-w-5xl pt-3 pb-2">
      <div className=" sm:px-6 lg:px-6">
        <div className="flex justify-left sm:justify-center gap-1 items-center sm:px-4 py-1 sm:py-2">
          <Link href="/">
            <Image
              src="/logo-round.svg"
              alt="Blujet AI Logo"
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
              priority
            />
          </Link>

          {/* <nav
            className="hidden items-center gap-x-5 gap-y-2 text-sm font-semibold text-stone-500 sm:flex sm:flex-wrap sm:mx-auto sm:justify-end"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors font-semibold hover:text-stone-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>  */}
        </div>
      </div>
    </header>
  )
}
