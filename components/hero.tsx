"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Github, Linkedin, Mail } from "lucide-react"
import Typewriter from "typewriter-effect"

interface HeroProps {
  setCursorVariant: (variant: string) => void
}

export default function Hero({ setCursorVariant }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
    }[] = []

    const colors = ["#EF4444", "#C026D3", "#3B82F6"]

    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 2 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
          particle.velocity.x = -particle.velocity.x
        }

        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
          particle.velocity.y = -particle.velocity.y
        }
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white dark:from-black/70 dark:via-black/50 dark:to-black"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
              Jayant Kurekar
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 h-12 text-zinc-800 dark:text-zinc-200"
          >
            <Typewriter
              options={{
                strings: ["Software Developer", "Blockchain Enthusiast", "AI Explorer", "Creative Thinker"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-purple-500 hover:opacity-90 transition-opacity"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                View Projects
              </Button>
            </Link>
            <Link href="/resume" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 hover:bg-purple-900/20 dark:hover:bg-purple-900/20"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="https://github.com/Iam-jayant"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center hover:bg-purple-900/50 dark:hover:bg-purple-900/50 transition-colors"
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jayant-kurekar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center hover:bg-purple-900/50 dark:hover:bg-purple-900/50 transition-colors"
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jayantkurekar1@gmail.com"
              className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center hover:bg-purple-900/50 dark:hover:bg-purple-900/50 transition-colors"
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
