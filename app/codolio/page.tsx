"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import { Button } from "@/components/ui/button"

export default function CodolioPage() {
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
      <main className="container mx-auto py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 mb-6">
            My Codolio Dashboard
          </h1>
          <p className="text-zinc-400 mb-8">
            This section is always up-to-date with my live Codolio profile.
          </p>

          {/* Embed Codolio profile */}
          <div className="w-full rounded-xl overflow-hidden border border-zinc-800 shadow-lg" style={{ minHeight: 600 }}>
            <iframe
              src="https://codolio.com/profile/Iamjayant"
              title="Codolio Profile"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="w-full"
              style={{ minHeight: 600, background: "#18181b" }}
            ></iframe>
          </div>

          {/* Direct link to Codolio profile */}
          <div className="text-center mt-6">
            <a
              href="https://codolio.com/profile/Iamjayant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Visit My Codolio Profile
            </a>
          </div>
        </motion.div>
      </main>
      <Footer setCursorVariant={setCursorVariant} />
    </div>
  )
}
