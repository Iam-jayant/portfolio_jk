"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import Image from "next/image"
import { X } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function PhotographyPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage !== null) {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImage])

  const photos = [
    {
      id: 1,
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Landscape photography",
      category: "Nature",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Urban photography",
      category: "Urban",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Portrait photography",
      category: "Portrait",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Architecture photography",
      category: "Architecture",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Street photography",
      category: "Street",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Abstract photography",
      category: "Abstract",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Wildlife photography",
      category: "Wildlife",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Macro photography",
      category: "Macro",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Night photography",
      category: "Night",
    },
  ]

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
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
            Photography
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                onClick={() => setSelectedImage(photo.id)}
                onMouseEnter={() => setCursorVariant("card")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-500/80 text-white mb-2 inline-block">
                      {photo.category}
                    </span>
                    <h3 className="text-white font-medium">{photo.alt}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors"
              onClick={() => setSelectedImage(null)}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <X className="w-6 h-6" />
              <span className="sr-only">Close</span>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-5xl max-h-[80vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {photos
                .filter((photo) => photo.id === selectedImage)
                .map((photo) => (
                  <Image
                    key={photo.id}
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={1200}
                    height={800}
                    className="object-contain max-h-[80vh]"
                  />
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer setCursorVariant={setCursorVariant} />
    </div>
  )
}
