"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import BlogCard from "@/components/blog-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function BlogPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "Building a Web3 Remittance Platform",
      excerpt:
        "Learn how I built a cross-border payment system leveraging blockchain technology to eliminate banking intermediaries and reduce transaction costs.",
      date: "May 10, 2025",
      category: "Blockchain",
      image: "/placeholder.svg?height=600&width=800",
      slug: "building-web3-remittance-platform",
    },
    {
      id: 2,
      title: "Implementing Emotion Detection with OpenAI",
      excerpt:
        "A deep dive into how I created an AI-driven chatbot that detects user emotions and delivers personalized mental health insights using NLP and sentiment analysis.",
      date: "April 25, 2025",
      category: "AI",
      image: "/placeholder.svg?height=600&width=800",
      slug: "implementing-emotion-detection-openai",
    },
    {
      id: 3,
      title: "The Future of Healthcare Management Systems",
      excerpt:
        "Exploring how technology is transforming healthcare management and the development of my student healthcare management platform.",
      date: "April 12, 2025",
      category: "Healthcare Tech",
      image: "/placeholder.svg?height=600&width=800",
      slug: "future-healthcare-management-systems",
    },
    {
      id: 4,
      title: "Mastering Framer Motion Animations",
      excerpt:
        "A comprehensive guide to creating smooth, engaging animations in React applications using Framer Motion.",
      date: "March 30, 2025",
      category: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
      slug: "mastering-framer-motion-animations",
    },
    {
      id: 5,
      title: "Creating a Netflix-Inspired Portfolio",
      excerpt:
        "How I designed and built a cinematic, Netflix-inspired portfolio website with React, Tailwind CSS, and Framer Motion.",
      date: "March 15, 2025",
      category: "Design",
      image: "/placeholder.svg?height=600&width=800",
      slug: "creating-netflix-inspired-portfolio",
    },
    {
      id: 6,
      title: "Smart Contracts for Beginners",
      excerpt:
        "An introduction to Ethereum smart contracts and how to start building your own decentralized applications.",
      date: "February 28, 2025",
      category: "Blockchain",
      image: "/placeholder.svg?height=600&width=800",
      slug: "smart-contracts-beginners",
    },
  ]

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="relative bg-white dark:bg-black text-zinc-900 dark:text-white min-h-screen overflow-x-hidden">
      <CustomCursor cursorPosition={cursorPosition} cursorVariant={cursorVariant} />
      <ParticleBackground />
      <Navbar setCursorVariant={setCursorVariant} />
      <main className="container mx-auto py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
              Blog
            </h1>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
              <Input
                type="text"
                placeholder="Search posts..."
                className="pl-10 bg-zinc-100 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onMouseEnter={() => setCursorVariant("input")}
                onMouseLeave={() => setCursorVariant("default")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard post={post} setCursorVariant={setCursorVariant} />
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-2">No posts found</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Try adjusting your search criteria</p>
            </div>
          )}
        </motion.div>
      </main>
      <Footer setCursorVariant={setCursorVariant} />
    </div>
  )
}
