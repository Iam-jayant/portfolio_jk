"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ResumePage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      <CustomCursor cursorPosition={cursorPosition} cursorVariant={cursorVariant} />
      <Navbar setCursorVariant={setCursorVariant} />
      <main className="flex items-start justify-center py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto w-full"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
              Resume
            </h1>
            <div className="glassmorphic rounded-xl p-2 overflow-hidden shadow-xl border border-zinc-700">
              <div className="w-full aspect-[210/297] max-h-[calc(100vh-200px)] rounded-lg overflow-hidden bg-zinc-900/50">
                <iframe
                  src="/jayant_software_dev_2025.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit"
                  className="w-full h-full"
                  style={{ border: "none" }}
                  title="Resume PDF"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer setCursorVariant={setCursorVariant} />
    </div>
  )
}
