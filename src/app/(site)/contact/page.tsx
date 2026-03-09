"use client"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-40 px-10 pb-20 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Contact Info Header */}
        <div className="flex flex-col gap-10">
          <h1 
            className="uppercase"
            style={{ 
              fontFamily: 'var(--font-brand)',
              fontSize: '3rem', 
              letterSpacing: '0.04em',
              lineHeight: '0.9'
            }}
          >
            Contact
          </h1>
          <div className="space-y-4 text-[11px] uppercase tracking-[0.2em]">
            <p>For inquiries regarding bespoke pieces or collaborations:</p>
            <p className="font-bold underline cursor-pointer">hello@tormistudio.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-12 pt-4">
          <div className="flex flex-col gap-2 border-b border-black/10 pb-4">
            <label className="text-[9px] uppercase tracking-[0.3em] opacity-40">Name</label>
            <input type="text" className="bg-transparent border-none outline-none text-[11px] uppercase tracking-[0.1em]" />
          </div>

          <div className="flex flex-col gap-2 border-b border-black/10 pb-4">
            <label className="text-[9px] uppercase tracking-[0.3em] opacity-40">Email</label>
            <input type="email" className="bg-transparent border-none outline-none text-[11px] uppercase tracking-[0.1em]" />
          </div>

          <div className="flex flex-col gap-2 border-b border-black/10 pb-4">
            <label className="text-[9px] uppercase tracking-[0.3em] opacity-40">Message</label>
            <textarea rows={4} className="bg-transparent border-none outline-none text-[11px] uppercase tracking-[0.1em] resize-none" />
          </div>

          <button className="w-fit border border-black px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
            Send Message
          </button>
        </form>
        
      </div>
    </main>
  )
}