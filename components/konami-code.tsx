"use client"

import { useEffect, useState } from "react"

interface KonamiCodeProps {
  onKonamiCode: () => void
}

export default function KonamiCode({ onKonamiCode }: KonamiCodeProps) {
  const [keys, setKeys] = useState<string[]>([])
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()

      // Convert arrow keys to match our sequence
      const mappedKey =
        key === "arrowup"
          ? "ArrowUp"
          : key === "arrowdown"
            ? "ArrowDown"
            : key === "arrowleft"
              ? "ArrowLeft"
              : key === "arrowright"
                ? "ArrowRight"
                : key

      setKeys((prevKeys) => {
        const updatedKeys = [...prevKeys, mappedKey]
        // Only keep the last N keys where N is the length of the Konami sequence
        return updatedKeys.slice(-konamiSequence.length)
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    // Check if the current sequence matches the Konami code
    if (keys.length === konamiSequence.length) {
      let isMatch = true
      for (let i = 0; i < konamiSequence.length; i++) {
        if (keys[i] !== konamiSequence[i]) {
          isMatch = false
          break
        }
      }

      if (isMatch) {
        onKonamiCode()
        // Reset keys after triggering
        setKeys([])
      }
    }
  }, [keys, konamiSequence, onKonamiCode])

  return null // This component doesn't render anything
}
