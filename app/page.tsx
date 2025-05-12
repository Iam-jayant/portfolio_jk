"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Projects from "@/components/projects"
import BlogPreview from "@/components/blog-preview"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import KonamiCode from "@/components/konami-code"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [hackerMode, setHackerMode] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleKonamiCode = () => {
    setHackerMode(!hackerMode)
  }

  return (
    <div
      className={`relative bg-white dark:bg-black text-zinc-900 dark:text-white min-h-screen overflow-x-hidden ${
        hackerMode ? "hacker-mode" : ""
      }`}
    >
      <CustomCursor cursorPosition={cursorPosition} cursorVariant={cursorVariant} />
      <KonamiCode onKonamiCode={handleKonamiCode} />
      <ParticleBackground />
      <Navbar setCursorVariant={setCursorVariant} />
      <main>
        <section id="hero">
          <Hero setCursorVariant={setCursorVariant} />
        </section>
        <section id="about">
          <About setCursorVariant={setCursorVariant} />
        </section>
        <section id="skills">
          <Skills setCursorVariant={setCursorVariant} />
        </section>
        <section id="certifications">
          <Certifications setCursorVariant={setCursorVariant} />
        </section>
        <section id="projects">
          <Projects setCursorVariant={setCursorVariant} />
        </section>
        <section id="blog">
          <BlogPreview setCursorVariant={setCursorVariant} />
        </section>
        <section id="testimonials">
          <Testimonials setCursorVariant={setCursorVariant} />
        </section>
        <section id="contact">
          <Contact setCursorVariant={setCursorVariant} />
        </section>
        <section id="footer">
          <Footer setCursorVariant={setCursorVariant} />
        </section>
      </main>
    </div>
  )
}
