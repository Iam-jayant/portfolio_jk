"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TestimonialsProps {
  setCursorVariant: (variant: string) => void
}

export default function Testimonials({ setCursorVariant }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Yash Atkari",
      role: "Opem-source Contributor",
      quote:
        "Jayant's work on our blockchain remittance platform was exceptional. His technical expertise and problem-solving skills helped us launch a product that exceeded our expectations.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Manthan Nagose",
      role: "Project Mate",
      quote:
        "Worked with Jayant on our emotional AI was a pleasure. His understanding of both the technical and human aspects of the project made him an invaluable team member.",
      Image:"/manthan.png",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
            What People Say
          </h2>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                initial={false}
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-8 md:p-10 border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-purple-900/10">
                      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="flex-shrink-0">
                          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-md">
                            <Image
                              src={testimonial.image || "/manthan.png"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <Quote className="w-10 h-10 text-purple-400/30 mb-4 mx-auto md:mx-0" />
                          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-6 italic">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{testimonial.name}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex
                      ? "bg-purple-500"
                      : "bg-zinc-300 dark:bg-zinc-700 hover:bg-purple-300 dark:hover:bg-purple-700"
                  }`}
                  onClick={() => {
                    setAutoplay(false)
                    setActiveIndex(index)
                  }}
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-4 -translate-y-1/2 hidden md:flex border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:bg-white dark:hover:bg-zinc-900"
              onClick={handlePrev}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-4 -translate-y-1/2 hidden md:flex border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:bg-white dark:hover:bg-zinc-900"
              onClick={handleNext}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
