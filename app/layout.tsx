import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Footer } from "../components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Orion Africa - Premium Tanzanian Agricultural Exports",
  description:
    "Your trusted partner for high-quality agricultural exports from Tanzania. Serving governments and enterprises worldwide since 2021 with premium crops including coffee, cashews, avocados, and more.",
  keywords: [
    "Orion Africa",
    "Tanzanian agricultural exports",
    "premium crops",
    "coffee exports",
    "cashew nuts",
    "avocados",
    "agricultural products",
    "Tanzania exports",
    "global agriculture",
    "sustainable farming"
  ],
  authors: [{ name: "Orion Africa" }],
  creator: "Orion Africa",
  publisher: "Orion Africa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://orionafrica.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orion Africa - Premium Tanzanian Agricultural Exports",
    description: "Your trusted partner for high-quality agricultural exports from Tanzania. Serving governments and enterprises worldwide since 2021.",
    url: "https://orionafrica.com",
    siteName: "Orion Africa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orion Africa - Premium Tanzanian Agricultural Exports",
    description: "Your trusted partner for high-quality agricultural exports from Tanzania.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/orionlogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/orionlogo.png" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
