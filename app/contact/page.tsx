"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
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
          <h1 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
            Get In Touch
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-xl border border-zinc-800 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Send Me a Message</h2>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-zinc-800/50 border-zinc-700 focus:border-purple-500 transition-all duration-300"
                    onMouseEnter={() => setCursorVariant("input")}
                    onMouseLeave={() => setCursorVariant("default")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-zinc-800/50 border-zinc-700 focus:border-purple-500 transition-all duration-300"
                    onMouseEnter={() => setCursorVariant("input")}
                    onMouseLeave={() => setCursorVariant("default")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={6}
                    className="bg-zinc-800/50 border-zinc-700 focus:border-purple-500 transition-all duration-300"
                    onMouseEnter={() => setCursorVariant("input")}
                    onMouseLeave={() => setCursorVariant("default")}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:opacity-90 transition-opacity"
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-xl border border-zinc-800 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-zinc-400">jayantkurekar1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-zinc-400">Nagpur, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Github className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-purple-400 transition-colors"
                      onMouseEnter={() => setCursorVariant("link")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      github.com/jayant
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-purple-400 transition-colors"
                      onMouseEnter={() => setCursorVariant("link")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      linkedin.com/in/jayant
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-purple-900/50 transition-colors"
                    onMouseEnter={() => setCursorVariant("link")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-purple-900/50 transition-colors"
                    onMouseEnter={() => setCursorVariant("link")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:jayantkurekar1@gmail.com"
                    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-purple-900/50 transition-colors"
                    onMouseEnter={() => setCursorVariant("link")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer setCursorVariant={setCursorVariant} />
    </div>
  )
}
