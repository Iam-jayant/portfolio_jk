"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import { useState, useEffect } from "react"

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
      <main className="container mx-auto py-20 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
          Resume
        </h1>
        <img
          src="/resume.png"
          alt="Resume"
          className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          style={{ objectFit: "contain", border: "none" }}
        />
      </main>
      <Footer setCursorVariant={setCursorVariant} />
    </div>
  )
}
