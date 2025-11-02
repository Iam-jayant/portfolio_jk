"use client"

import { motion } from "framer-motion"
import { Code, Database, FileCode, GitBranch, Globe, Layers, Server, Cpu } from "lucide-react"

interface SkillsProps {
  setCursorVariant: (variant: string) => void
}

export default function Skills({ setCursorVariant }: SkillsProps) {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <FileCode className="w-6 h-6 text-red-400" />,
      skills: ["Java", "JavaScript", "Node.js", "C" , "Solidity" , "Python", "HTML", "CSS"],
    },
    {
      name: "Libraries & Frameworks",
      icon: <Code className="w-6 h-6 text-purple-400" />,
      skills: ["React.js", "Express.js", "Web3.js"],
    },
    {
      name: "Tools & Platforms",
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      skills: ["Git", "GitHub", "VS Code", "Microsoft Azure", "Remix IDE" , "Supabase", "IntelliJ IDEA" , "Vercel"],
    },
    {
      name: "Databases",
      icon: <Database className="w-6 h-6 text-green-400" />,
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      name: "CS Fundamentals",
      icon: <Cpu className="w-6 h-6 text-yellow-400" />,
      skills: ["Data Structures & Algorithms", "OOPs", "Operating Systems", "DBMS"],
    },
    {
      name: "Blockchain",
      icon: <GitBranch className="w-6 h-6 text-orange-400" />,
      skills: ["Solidity", "Ethereum", "Smart Contracts", "MetaMask", "Remix IDE"],
    },
    {
      name: "AI/ML",
      icon: <Server className="w-6 h-6 text-pink-400" />,
      skills: ["Azure AI", "Scikit-learn", "OpenAI API", "Hugging Face", "LangChain"],
    },
    {
      name: "Web Development",
      icon: <Globe className="w-6 h-6 text-teal-400" />,
      skills: ["Responsive Design", "RESTful APIs", "Frontend", "Backend", "Full Stack"],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphic rounded-xl p-6 hover-lift"
                onMouseEnter={() => setCursorVariant("card")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-bold">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></div>
                      <span className="text-zinc-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
