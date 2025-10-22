import "./globals.css"
import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
// next-seo components removed for App Router compatibility
import { site } from "@/content/site"
import { IClosedWidget } from "@/components/IClosedWidget"
import PilotScrollManager from "@/components/PilotScrollManager"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PromoBanner from "@/components/PromoBanner"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Blujet AI — AI Voice Agent for E-commerce",
  description: site.description,
  openGraph: {
    title: "Blujet AI — AI Voice Agent for E-commerce",
    description: site.description,
    images: [{ url: site.ogImage }],
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blujet AI — AI Voice Agent for E-commerce",
    description: site.description,
    images: [site.ogImage],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dm.variable}`}>
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
              logo: `${site.url}/logo.png`,
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
              name: "Blujet AI Voice Agent for Ecommerce Brands",
              description: site.description,
              brand: { "@type": "Brand", name: "Blujet AI" },
              image: [`${site.url}/log.png`],
            }),
          }}
        />

        <script
          type="text/javascript"
          src="https://app.iclosed.io/assets/widget.js"
          data-cta-widget="EyGnQmcqM2Qn"
          async
        ></script>
      </head>
      <body className="min-h-screen bg-grid-radial text-black">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <IClosedWidget />
        <PilotScrollManager />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
