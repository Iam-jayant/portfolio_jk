"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
}

interface ProjectCardProps {
  project: Project
  setCursorVariant: (variant: string) => void
}

export default function ProjectCard({ project, setCursorVariant }: ProjectCardProps) {
  return (
    <div
      className="netflix-card group"
      onMouseEnter={() => setCursorVariant("card")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={450}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="netflix-card-overlay"></div>
        <div className="netflix-card-content">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-zinc-300 mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-black/50 border-zinc-700 text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("card")}
            >
              <Button size="sm" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("card")}
            >
              <Button size="sm" className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:opacity-90">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
