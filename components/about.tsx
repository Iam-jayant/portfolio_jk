"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AboutProps {
  setCursorVariant: (variant: string) => void
}

export default function About({ setCursorVariant }: AboutProps) {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-xl glassmorphic">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Jayant Kurekar"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full border-4 border-black bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 animate-pulse-glow"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">
                Hello, I'm <span className="text-gradient">Jayant Kurekar</span>
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                I'm a passionate software developer with a strong foundation in both frontend and backend technologies.
                Currently pursuing B.Tech in Mechanical Engineering with a Minor in Computer Science at G H Raisoni
                College of Engineering, Nagpur.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                My journey in tech has led me to explore various domains including Web Development, Blockchain, and
                Artificial Intelligence. I'm particularly interested in building innovative solutions that leverage
                cutting-edge technologies to solve real-world problems.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                When I'm not coding, I enjoy creating visual content through my creative venture, JK Creatives, where
                I've delivered over 50 high-quality visual projects for various clients.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="font-semibold mb-2 text-purple-400">Location</h4>
                  <p>Nagpur, India</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-400">Email</h4>
                  <p>jayantkurekar1@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-400">Study</h4>
                  <p>G H Raisoni College of Engineering</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-400">Degree</h4>
                  <p>B.Tech in Mechanical Engineering</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
