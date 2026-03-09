import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

// Primary brand typeface
const brandFont = localFont({
  src: "../fonts/Impact.ttf", 
  variable: "--font-brand",
});

// Clean sans for UI and body copy
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
      <body
        className={`${geistSans.variable} ${brandFont.variable} antialiased bg-[#fafafa] text-[#1a1a1a]`}
      >
        {/* Lenis wrapper for momentum scrolling */}
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}