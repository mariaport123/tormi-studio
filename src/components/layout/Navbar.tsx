"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
      <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
        Tormi Studio
      </Link>
      
      <div className="flex gap-8 text-sm font-medium uppercase tracking-widest">
        <Link href="/work" className="hover:opacity-50 transition-opacity">Work</Link>
        <Link href="/shop" className="hover:opacity-50 transition-opacity">Shop</Link>
        <Link href="/studio" className="hover:opacity-50 transition-opacity">Studio</Link>
        <Link href="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
      </div>
    </nav>
  )
}