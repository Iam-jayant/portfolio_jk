"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface CustomCursorProps {
  cursorPosition: { x: number; y: number }
  cursorVariant: string
}

export default function CustomCursor({ cursorPosition, cursorVariant }: CustomCursorProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const variants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
      mixBlendMode: "difference" as const,
      border: isDark ? "1px solid rgba(255, 255, 255, 0.5)" : "1px solid rgba(0, 0, 0, 0.5)",
    },
    button: {
      x: cursorPosition.x - 24,
      y: cursorPosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(192, 38, 211, 0.2)",
      mixBlendMode: "normal" as const,
      border: "1px solid rgba(192, 38, 211, 0.5)",
    },
    link: {
      x: cursorPosition.x - 20,
      y: cursorPosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      mixBlendMode: "normal" as const,
      border: "1px solid rgba(59, 130, 246, 0.5)",
    },
    card: {
      x: cursorPosition.x - 24,
      y: cursorPosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(239, 68, 68, 0.2)",
      mixBlendMode: "normal" as const,
      border: "1px solid rgba(239, 68, 68, 0.5)",
    },
    input: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(192, 38, 211, 0.2)",
      mixBlendMode: "normal" as const,
      border: "1px solid rgba(192, 38, 211, 0.5)",
    },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-50 rounded-full pointer-events-none hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 z-50 rounded-full pointer-events-none hidden md:block"
        animate={{
          x: cursorPosition.x - 4,
          y: cursorPosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
        style={{
          height: 8,
          width: 8,
          backgroundColor: isDark ? "white" : "black",
        }}
      />
    </>
  )
}
