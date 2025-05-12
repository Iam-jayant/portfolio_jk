"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  slug: string
}

interface BlogCardProps {
  post: BlogPost
  setCursorVariant: (variant: string) => void
}

export default function BlogCard({ post, setCursorVariant }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        className="group h-full bg-zinc-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-lg dark:hover:shadow-purple-900/10 transition-all duration-300"
        whileHover={{ y: -5 }}
        onMouseEnter={() => setCursorVariant("card")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={450}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-red-500 hover:bg-red-600 text-white border-none">{post.category}</Badge>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-3">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 line-clamp-3">{post.excerpt}</p>
          <div className="mt-4 text-purple-600 dark:text-purple-400 font-medium text-sm group-hover:underline">
            Read More
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
