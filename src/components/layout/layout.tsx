import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Adding a clean font
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tormi Studio | Minimal Design & Objects",
  description: "A digital design studio and curated collection of physical objects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#fafafa] text-[#1a1a1a]`}>
        <SmoothScroll>
          <Navbar />
          <main>
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}