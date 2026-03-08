"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  )
}