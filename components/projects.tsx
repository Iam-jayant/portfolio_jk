"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"

interface ProjectsProps {
  setCursorVariant: (variant: string) => void
}

export default function Projects({ setCursorVariant }: ProjectsProps) {
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
      demo: "https://aarogyam-hypg.onrender.com/",
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
  ]

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Featured Projects</h2>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-purple-500 hover:bg-purple-900/20"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                View All Projects
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} setCursorVariant={setCursorVariant} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
