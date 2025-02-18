import type React from "react"
import "./globals.css"
import { Poppins, Playfair_Display } from "next/font/google"
import Navbar from "../components/Navbar"

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "Multi-Task Data Visualization Dashboard",
  description: "Track finance, health, and marketing data with AI-driven insights",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen`}
      >
        <Navbar />
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  )
}

