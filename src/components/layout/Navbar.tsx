"use client"

import Link from "next/link"

export const Navbar = () => {
  return (
    // Fixed: added z-[100] to stay on top, and text-black
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-10 py-8 text-black bg-transparent">
      {/* Left side links */}
      <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium w-1/3">
        <Link href="/work" className="hover:opacity-40 transition-opacity">Work</Link>
        <Link href="/shop" className="hover:opacity-40 transition-opacity">Shop</Link>
      </div>

      {/* Center Logo */}
      <Link href="/" className="text-sm font-black tracking-[0.3em] uppercase whitespace-nowrap">
        Tormi Studio
      </Link>
      
      {/* Right side links */}
      <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium w-1/3 justify-end">
        <Link href="/studio" className="hover:opacity-40 transition-opacity">Studio</Link>
        <Link href="/contact" className="hover:opacity-40 transition-opacity">Contact</Link>
      </div>
    </nav>
  )
}