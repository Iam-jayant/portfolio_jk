"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

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
      <main className="container mx-auto py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
              Resume
            </h1>
            <Button
              variant="outline"
              className="border-purple-500 hover:bg-purple-900/20 text-white"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <FileDown className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-xl border border-zinc-800 shadow-xl">
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Founder, JK Creatives</h3>
                  <p className="text-zinc-400">Present</p>
                  <p className="mt-2">
                    Delivered over 50+ high-quality visual projects for resorts, cultural events, and personal branding
                    initiatives. Enhanced video content with dynamic editing, leading to consistently high engagement on
                    social media.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Software Development Intern, Prodigy Infotech</h3>
                  <p className="text-zinc-400">04/2025 – Present | Remote</p>
                  <p className="mt-2">
                    Developed and delivered 5 projects utilizing JAVA, contributing to the full software development
                    lifecycle, from planning to deployment. Gained hands-on experience in coding, debugging & optimizing
                    software solutions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">AI & Cloud Internship Trainee, Edunet with Microsoft</h3>
                  <p className="text-zinc-400">04/2025 – 05/2025 | Remote</p>
                  <p className="mt-2">
                    Completed a 4-week AI internship under Microsoft AINSI & Edunet Foundation. Worked on ML, Deep
                    Learning, Generative AI, and Azure AI tools. Developed and deployed a real-world AI project with
                    mentor guidance. Certified by AICTE for hands-on proficiency in AI and cloud technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Education</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">G H Raisoni College of Engineering, Nagpur</h3>
                  <p className="text-zinc-400">
                    Full-time B.Tech in Mechanical Engineering and Minor in Computer Science
                  </p>
                  <p className="text-zinc-400">08/2023 – Present | Nagpur, India</p>
                  <p className="mt-2">CGPA: 7.63</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">S P Junior College, Narkhed</h3>
                  <p className="text-zinc-400">Full-time Pre-University (XII)</p>
                  <p className="text-zinc-400">07/2020 – 03/2022 | Narkhed, India</p>
                  <p className="mt-2">Percentage: 77%</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Skills</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
                  <p>Java, JavaScript, Node.js, C, Python, HTML, CSS</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Libraries/Frameworks</h3>
                  <p>React.js, Express.js, OpenAI API, Web3.js</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Tools / Platforms</h3>
                  <p>Git, GitHub, VS Code, Microsoft Azure, IntelliJ IDEA</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Databases</h3>
                  <p>MongoDB, PostgreSQL, Firebase</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">CS Fundamentals</h3>
                  <p>Data Structures & Algorithms (DSA), OOPs, Operating Systems, DBMS</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Blockchain Tools & Tech</h3>
                  <p>Solidity, Ethereum, Smart Contracts, MetaMask, Remix IDE</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">AI/ML Tools & Platforms</h3>
                  <p>Azure AI, Scikit-learn, OpenAI API, Hugging Face, LangChain</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Projects / Open-Source</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">BridgePay Web3 Remittance Platform</h3>
                  <p className="mt-2">
                    Developed a cross-border payment system leveraging blockchain technology to eliminate banking
                    intermediaries. Implemented Ethereum smart contracts for secure, transparent, and low-cost
                    transactions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">VibeSync AI-Powered Emotional Assistant</h3>
                  <p className="mt-2">
                    Created an AI-driven chatbot that detects user emotions and delivers personalized mental health
                    insights using NLP and sentiment analysis. Integrated OpenAI APIs to ensure high accuracy in
                    emotional detection and user interaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Aarogyam Student Healthcare Management System</h3>
                  <p className="mt-2">
                    Built a real-time medical record management platform for educational institutions, ensuring secure
                    data storage and streamlined healthcare tracking using React.js, Node.js, and MongoDB.
                  </p>
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
