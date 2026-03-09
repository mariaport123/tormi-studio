"use client"

import Link from "next/link"

export const Navbar = () => {
  return (
    // Added z-[100] to stay on top, and text-black
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-10 py-8 text-black bg-transparent">
      {/* Left side links */}
      <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium w-1/3">
        <Link href="/work" className="hover:opacity-40 transition-opacity">Work</Link>
        <Link href="/shop" className="hover:opacity-40 transition-opacity">Shop</Link>
      </div>

      {/* Center Logo */}
      <Link 
  href="/" 
  className="uppercase whitespace-nowrap transition-all duration-500 hover:opacity-50"
  style={{ 
    fontFamily: 'var(--font-brand)',
    fontSize: '1.8rem', 
    letterSpacing: '0.04em', 
    // OPTICAL WEIGHT: Standard fonts don't have "light" versions, 
    // so we use opacity to "soften" the boldness visually.
    opacity: '0.9',
    lineHeight: '1',
    fontSmooth: 'antialiased',
    WebkitFontSmoothing: 'antialiased'
  }}
>
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

