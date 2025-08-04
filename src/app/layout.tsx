import type React from "react"
import type { Metadata } from "next"
import { Inter,} from "next/font/google"

import "./globals.css"
import "./config.json"
 
// const fetchConfig = async () =>{
//   try{
//     const response = await fetch("/config.json");
//     const config = await response.json();
//     window.APP_CONFIG=config;
//   }catch(error){
//     console.error("Failed to load to config :",error)
//     window.APP_CONFIG={
//         "SERVICE_ID":"",
//         "TEMPLATE_ID":"",
//         "PUBLIC_KEY":""
//       }
//     }
//   }
  


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Mercado Insight Solution",
  description: "Created with v0",
  generator: "v0.dev",
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
