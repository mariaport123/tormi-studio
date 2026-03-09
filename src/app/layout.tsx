import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import "./globals.css";

// Components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

const brandFont = localFont({
  src: "../fonts/Impact.ttf", 
  variable: "--font-brand",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tormi Studio",
  description: "Independent design practice and curated objects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${brandFont.variable} antialiased bg-[#fafafa] text-[#1a1a1a]`}>
        {/* Lenis wrapper for smooth momentum scrolling */}
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* Main content wrapper */}
            <main className="flex-grow">
              {children}
            </main>
            
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}