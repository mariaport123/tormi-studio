"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, User, ShoppingBag, ChevronDown } from "lucide-react"

export const Navbar = () => {
  // Simple toggle for the currency menu
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const currencies = ['Eur', 'Usd', 'Gbp']

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-10 py-8 text-black bg-transparent">
      
      {/* 1. Left: Navigation */}
      <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-medium w-1/3">
        <Link href="/" className="hover:opacity-40 transition-opacity">Home</Link>
        <Link href="/shop" className="hover:opacity-40 transition-opacity">Shop</Link>
        <Link href="/about" className="hover:opacity-40 transition-opacity">About</Link>
        <Link href="/contact" className="hover:opacity-40 transition-opacity">Contact</Link>
      </div>

      {/* 2. Center: Brand Identity */}
      <div className="flex justify-center w-1/3">
        <Link 
          href="/" 
          className="uppercase whitespace-nowrap transition-all duration-500 hover:opacity-50"
          style={{ 
            fontFamily: 'var(--font-brand)',
            fontSize: '1.8rem', 
            letterSpacing: '0.04em', 
            opacity: '0.9',
            lineHeight: '1',
            fontSmooth: 'antialiased',
            WebkitFontSmoothing: 'antialiased'
          }}
        >
          Tormi Studio
        </Link>
      </div>

      {/* 3. Right: Interaction Zone */}
      <div className="flex gap-5 items-center justify-end w-1/3">
        
        {/* Currency Selector with a relative container for the absolute dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
            className="flex items-center gap-1 text-[10px] uppercase tracking-[0.1em] hover:opacity-40 transition-opacity"
          >
            <span>Eur</span>
            <ChevronDown size={10} strokeWidth={2.5} />
          </button>

          {/* Absolute positioning keeps the navbar from jumping when this opens */}
          {isCurrencyOpen && (
            <div className="absolute top-full right-0 mt-2 flex flex-col gap-2 bg-white/80 backdrop-blur-md p-3 border border-black/5 min-w-[60px]">
              {currencies.map((curr) => (
                <button 
                  key={curr} 
                  className="text-[9px] uppercase tracking-widest hover:font-bold text-left"
                  onClick={() => setIsCurrencyOpen(false)}
                >
                  {curr}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="hover:opacity-40 transition-opacity">
          <Search size={16} strokeWidth={1.5} />
        </button>
        <button className="hover:opacity-40 transition-opacity">
          <User size={16} strokeWidth={1.5} />
        </button>
        <button className="hover:opacity-40 transition-opacity">
          <ShoppingBag size={16} strokeWidth={1.5} />
        </button>
      </div>

    </nav>
  )
}