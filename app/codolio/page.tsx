"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Code, GitBranch, Github, LineChart, PieChart, Star, Trophy, Users } from "lucide-react"
import Image from "next/image"

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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                Codolio Dashboard
              </h1>
              <p className="text-zinc-400 mt-2">Track your coding journey and showcase your developer metrics</p>
            </div>
            <Button
              className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:opacity-90 transition-opacity"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Connect GitHub
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-zinc-900/70 backdrop-blur-sm border-zinc-800 shadow-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-zinc-400 text-sm">Total Repositories</p>
                    <h3 className="text-3xl font-bold mt-1">24</h3>
                  </div>
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Github className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-purple-500 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <p className="text-zinc-400 text-xs mt-2">75% increase from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/70 backdrop-blur-sm border-zinc-800 shadow-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-zinc-400 text-sm">Total Commits</p>
                    <h3 className="text-3xl font-bold mt-1">1,248</h3>
                  </div>
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <GitBranch className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <p className="text-zinc-400 text-xs mt-2">60% increase from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/70 backdrop-blur-sm border-zinc-800 shadow-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-zinc-400 text-sm">Stars Received</p>
                    <h3 className="text-3xl font-bold mt-1">87</h3>
                  </div>
                  <div className="bg-red-500/20 p-2 rounded-lg">
                    <Star className="w-6 h-6 text-red-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <p className="text-zinc-400 text-xs mt-2">45% increase from last month</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <Card className="bg-zinc-900/70 backdrop-blur-sm border-zinc-800 shadow-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <LineChart className="w-5 h-5 mr-2 text-purple-400" />
                  Commit Activity
                </h3>
                <div className="h-64 w-full relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Commit Activity Chart"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/70 backdrop-blur-sm border-zinc-800 shadow-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-blue-400" />
                  Language Distribution
                </h3>
                <div className="h-64 w-full relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Language Distribution Chart"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-10">
            <Card className="bg-zinc-900/70 backdrop-blur-sm border-zinc-800 shadow-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart className="w-5 h-5 mr-2 text-red-400" />
                  Contribution Timeline
                </h3>
                <div className="h-64 w-full relative">
                  <Image
                    src="/placeholder.svg?height=400&width=1200"
                    alt="Contribution Timeline"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900/70 backdrop-blur-sm border-zinc-800 shadow-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg">
                    <div className="bg-yellow-500/20 p-2 rounded-lg">
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">First 100 Commits</h4>
                      <p className="text-zinc-400 text-sm">Reached 100 commits milestone</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Code className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Polyglot Programmer</h4>
                      <p className="text-zinc-400 text-sm">Used 5+ programming languages</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Open Source Contributor</h4>
                      <p className="text-zinc-400 text-sm">Contributed to 3+ open source projects</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/70 backdrop-blur-sm border-zinc-800 shadow-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Top Repositories</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-500/20 p-2 rounded-lg">
                        <Github className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">BridgePay</h4>
                        <p className="text-zinc-400 text-sm">Web3 Remittance Platform</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>32</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-500/20 p-2 rounded-lg">
                        <Github className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">VibeSync</h4>
                        <p className="text-zinc-400 text-sm">AI-Powered Emotional Assistant</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>28</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <Github className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Aarogyam</h4>
                        <p className="text-zinc-400 text-sm">Healthcare Management System</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>15</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>
      <Footer setCursorVariant={setCursorVariant} />
    </div>
  )
}
