import type { Metadata, Viewport } from "next"
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Anthony Faria Dos Santos | Développeur Fullstack & Cybersécurité",
  description:
    "Portfolio d'Anthony Faria Dos Santos - Développeur Fullstack JavaScript spécialisé en cybersécurité et systèmes & réseaux. En recherche d'alternance pour septembre 2026.",
  keywords: [
    "développeur fullstack",
    "cybersécurité",
    "systèmes et réseaux",
    "alternance",
    "DSNS",
    "SOC",
    "SIEM",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Anthony Faria Dos Santos" }],
  creator: "Anthony Faria Dos Santos",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Anthony Faria Dos Santos | Développeur Fullstack & Cybersécurité",
    description:
      "Portfolio d'Anthony Faria Dos Santos - Développeur Fullstack JavaScript spécialisé en cybersécurité et systèmes & réseaux.",
    siteName: "Anthony Faria Dos Santos Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Faria Dos Santos | Développeur Fullstack & Cybersécurité",
    description:
      "Portfolio d'Anthony Faria Dos Santos - Développeur Fullstack JavaScript spécialisé en cybersécurité et systèmes & réseaux.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#0b0b12",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
