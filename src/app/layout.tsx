import type React from "react"
import type { Metadata } from "next"
import { Inter,} from "next/font/google"

import "./globals.css"
import "./config.json"
 

  


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Mercado Insight Solutions",
  description: "Created with v0",
  generator: "v0.dev",
  icons: {
    icon: "/img/logo3.png",
    
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <html lang="en" className={inter.className}>
  <body>{children}</body>
</html>

  )
}
