import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mariettekelley Solutions - Global Cloud Telephony That Scales With You",
  description:
    "iGCT by Mariettekelley connects you worldwide through reliable, cloud-powered voice solutions for enterprise sales teams.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: "cloud telephony, global calling, voice solutions, iGCT, B2B sales tools, VoIP, Tacoma",
  authors: [{ name: "Mariettekelley Solutions" }],
  openGraph: {
    title: "Mariettekelley Solutions - Global Cloud Telephony",
    description: "Reliable, cloud-powered voice solutions for enterprise sales teams",
    url: "https://mariettekelley.com",
    siteName: "Mariettekelley Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariettekelley Solutions - Global Cloud Telephony",
    description: "Reliable, cloud-powered voice solutions for enterprise sales teams",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mariettekelley Solutions",
              url: "https://mariettekelley.com",
              logo: "https://mariettekelley.com/logo.png",
              description:
                "Global cloud telephony provider offering scalable voice and calling solutions for enterprise sales teams",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tacoma",
                addressRegion: "WA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-MARIETTE",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
