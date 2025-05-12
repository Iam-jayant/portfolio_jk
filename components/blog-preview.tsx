"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog-card"

interface BlogPreviewProps {
  setCursorVariant: (variant: string) => void
}

export default function BlogPreview({ setCursorVariant }: BlogPreviewProps) {
  const featuredPosts = [
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
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
              Latest Articles
            </h2>
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-purple-500 hover:bg-purple-900/20 dark:hover:bg-purple-900/20"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                View All Articles
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard post={post} setCursorVariant={setCursorVariant} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
