import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="w-full px-10 py-20 border-t border-black/5 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
        
        {/* Navigation - keeping it simple for SEO */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Information</h4>
          <Link href="/about" className="text-[10px] uppercase tracking-[0.1em] hover:opacity-40 transition-opacity">About</Link>
          <Link href="/shipping" className="text-[10px] uppercase tracking-[0.1em] hover:opacity-40 transition-opacity">Shipping & Returns</Link>
          <Link href="/privacy" className="text-[10px] uppercase tracking-[0.1em] hover:opacity-40 transition-opacity">Privacy Policy</Link>
        </div>

        {/* Social presence */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Follow</h4>
          <a href="#" className="text-[10px] uppercase tracking-[0.1em] hover:opacity-40 transition-opacity">Instagram</a>
          <a href="#" className="text-[10px] uppercase tracking-[0.1em] hover:opacity-40 transition-opacity">Pinterest</a>
        </div>

        {/* Minimal Newsletter - just a field and a button */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Newsletter</h4>
          <form className="flex border-b border-black pb-2 max-w-sm">
            <input 
              type="email" 
              placeholder="YOUR@EMAIL.COM" 
              className="bg-transparent border-none outline-none text-[10px] uppercase tracking-[0.2em] w-full placeholder:text-black/20"
            />
            <button className="text-[10px] uppercase tracking-[0.2em] font-bold ml-4">Join</button>
          </form>
        </div>
      </div>

      {/* Credit line */}
      <div className="mt-20 flex justify-between items-end border-t border-black/5 pt-8 text-[9px] uppercase tracking-[0.3em] opacity-30">
        <p>© Tormi Studio 2026</p>
        <p>Tallinn, Estonia</p>
      </div>
    </footer>
  )
}