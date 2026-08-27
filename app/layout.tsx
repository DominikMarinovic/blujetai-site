import "./globals.css"
import type { Metadata } from "next"
import { Inter, DM_Sans, Courier_Prime, Anton } from "next/font/google"
// next-seo components removed for App Router compatibility
import { site } from "@/content/site"
import PilotScrollManager from "@/components/PilotScrollManager"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import RB2BLoader from "@/components/RB2BLoader"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" })
const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel", // This creates the CSS variable
})
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Blujet AI — Stem Cell & Regenerative Patient Acquisition System",
  description: site.description,
  openGraph: {
    title: "Blujet AI — Stem Cell & Regenerative Patient Acquisition System",
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blujet AI — Stem Cell & Regenerative Patient Acquisition System",
    description: site.description,
    images: [site.ogImage],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dm.variable} ${courier.variable} ${anton.variable}`}
    >
      <head>
        <script
          key="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${site.url}/#organization`,
              name: "Blujet AI",
              url: site.url,
              logo: `${site.url}/logo-pixel.svg`,
              sameAs: [site.socials.x, site.socials.linkedin, site.socials.github],
            }),
          }}
        />
        <script
          key="product-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Blujet AI - AI Agents for Shopify Brands",
              description: site.description,
              brand: { "@type": "Brand", name: "Blujet AI" },
              image: [`${site.url}/log.png`],
            }),
          }}
        />
      </head>
      <body className="min-h-screen text-black">
        <RB2BLoader />

        <main id="main">{children}</main>

        <PilotScrollManager />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
