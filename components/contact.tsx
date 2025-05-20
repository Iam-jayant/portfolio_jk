"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

interface ContactProps {
  setCursorVariant: (variant: string) => void
}

export default function Contact({ setCursorVariant }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setError(null)

    const formData = new FormData()
    formData.append("access_key", "963691be-34b2-4b20-8abd-7e937f953850")
    formData.append("name", form.name)
    formData.append("email", form.email)
    formData.append("message", form.message)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()
    if (result.success) {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } else {
      setStatus("error")
      setError(result.message || "Something went wrong. Please try again.")
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glassmorphic rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Send Me a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="bg-zinc-800/50 border-zinc-700 focus:border-purple-500 transition-all duration-300"
                    onMouseEnter={() => setCursorVariant("input")}
                    onMouseLeave={() => setCursorVariant("default")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="bg-zinc-800/50 border-zinc-700 focus:border-purple-500 transition-all duration-300"
                    onMouseEnter={() => setCursorVariant("input")}
                    onMouseLeave={() => setCursorVariant("default")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="bg-zinc-800/50 border-zinc-700 focus:border-purple-500 transition-all duration-300"
                    onMouseEnter={() => setCursorVariant("input")}
                    onMouseLeave={() => setCursorVariant("default")}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:opacity-90 transition-opacity"
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
                {status === "success" && (
                  <p className="text-green-400 mt-2">Thank you! Your message has been sent.</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 mt-2">{error || "Something went wrong."}</p>
                )}
              </form>
            </motion.div>

            {/* ...Contact Information block remains unchanged... */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphic rounded-xl p-8"
            >
              {/* ...Contact info and social links as in your original file... */}
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h3>
              <div className="space-y-6">
                {/* Email, Location, GitHub, LinkedIn blocks */}
                {/* ...copy from your original file... */}
              </div>
              <div className="mt-10">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {/* Social icons */}
                  {/* ...copy from your original file... */}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
