"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
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

  const projects = [
    {
      id: 1,
      title: "BridgePay Web3 Remittance Platform",
      description:
        "A cross-border payment system leveraging blockchain technology to eliminate banking intermediaries. Implemented Ethereum smart contracts for secure, transparent, and low-cost transactions.",
      image: "/remittance.png",
      tags: ["Blockchain", "Smart Contracts", "Web3.js"],
      github: "https://github.com/Iam-jayant/BridgePay",
      demo: "Not Available",
    },
    {
      id: 2,
      title: "VibeSync AI-Powered Emotional Assistant",
      description:
        "An AI-driven chatbot that detects user emotions and delivers personalized mental health insights using NLP and sentiment analysis. Integrated OpenAI APIs to ensure high accuracy in emotional detection and user interaction.",
      image: "/vibesync.png",
      tags: ["AI", "NLP", "Node.js"],
      github: "https://github.com/Iam-jayant/VibeSync",
      demo: "not available",
    },
    {
      id: 3,
      title: "Aarogyam Student Healthcare Management System",
      description:
        "A real-time medical record management platform for educational institutions, ensuring secure data storage and streamlined healthcare tracking using React.js, Node.js, and MongoDB.",
      image: "/healthcare.jpg",
      tags: ["React", "Node.js", "MongoDB", "Healthcare"],
      github: "https://github.com/Iam-jayant/aarogyam_xenos",
      demo: "not available",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, visually stunning personal portfolio website with a futuristic, cinematic aesthetic inspired by Netflix. Features include smooth animations, custom cursor, and a clean fullscreen layout.",
      image: "/portfolio.png",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/Iam-jayant/portfolio_jk",
      demo: "https://jayantkurekar.netlify.app/",
    },
    {
      id: 5,
      title: "Jeevan Setu - Organ Donation Platform",
      description:
        "Jeevan Setu is a centralized platform connecting organ donors and recipients, acting as a bridge to prevent organ wastage and streamline the donation process. Built with a modern tech stack for reliability and security.",
      image: "/jeevan-setu.png",
      tags: ["React", "Full-Stack Dev", "Tailwind CSS"],
      github: "https://github.com/Iam-jayant/Jeevan-Setu",
      demo: "https://jeevan-setu-xenos.vercel.app/",
    },
    {
    id: 6,
      title: "Notified - Event Discovery Platform",
      description:
        "Notified is a city-based event discovery platform that helps students and professionals find nearby tech events, workshops, and meetups in real-time. With smart filtering and a sleek UI, it keeps you in the loop without the FOMO.",
      image: "/notified.png",
      tags: ["React", "Full-Stack Dev", "Tailwind CSS", "AI"],
      github: "https://github.com/Iam-jayant/notifiED",
      demo: "https://www.notified.tech/",
    },
  ]

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
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} setCursorVariant={setCursorVariant} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer setCursorVariant={setCursorVariant} />
    </div>
  )
}
