import type React from "react"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <Link href="/">DataViz Pro</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white hover:text-pink-200 transition-colors duration-300">
      {children}
    </Link>
  )
}

