import { Reveal } from "@/components/motion/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Visual Hero Section */}
      <section className="h-screen w-full relative bg-[#ececec] overflow-hidden">
        {/* Tagline overlayed subtly on the image */}
        <div className="absolute bottom-12 left-12 z-10">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-black/50 italic">
              Calm after the storm
            </p>
          </Reveal>
        </div>
        
        {/* This will be your main Hero image/video later */}
        <div className="w-full h-full bg-neutral-200" />
      </section>

      {/* The Visual Grid (The actual "Work" starts here) */}
      <section className="px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-24">
        {[1, 2, 3, 4].map((item) => (
          <Reveal key={item}>
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-neutral-100 overflow-hidden mb-4">
                <div className="w-full h-full bg-neutral-200 group-hover:scale-105 transition-transform duration-[2.5s] ease-out" />
              </div>
              <div className="flex justify-between items-center uppercase text-[9px] tracking-[0.2em] font-bold">
                <span>Object — 0{item}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 underline underline-offset-4">Detail</span>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}