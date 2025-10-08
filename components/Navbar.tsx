"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  // Solid navbar with responsive spacing for mobile and desktop
  return (
    <header className="bg-white backdrop-blur-sm pt-2">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-2 justify-center sm:h-20">
          <Link href="/" className="flex items-center" aria-label="Blujet AI home">
            {/* Logo and brand name */}
            <Image
              src="/log.png"
              alt="Blujet AI logo"
              width={96}
              height={70}
              className="h-6 w-auto sm:h-10"
              priority
            />
            <span className="rounded-xl py-4 pl-1 text-lg font-bold text-stone-800 sm:text-xl">
              BlujetAI
            </span>
          </Link>
          {/* Right: CTA button 
          <Link href={site.cta.href} className="shrink-0">
            <Button
              className="rounded-[8px] bg-white px-5 sm:px-5 py-2 text-sm text-black hover:bg-black-50"
              aria-label={site.cta.label}
            >
              {site.cta.label}
            </Button>
          </Link>*/}
        </div>
      </div>
    </header>
  )
}
