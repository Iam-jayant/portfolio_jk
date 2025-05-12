"use client"

import { motion } from "framer-motion"
import { Award, Medal, Trophy } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CertificationsProps {
  setCursorVariant: (variant: string) => void
}

export default function Certifications({ setCursorVariant }: CertificationsProps) {
  const achievements = [
    {
      title: "Healthcare Management System Hackathon",
      issuer: "FLUXUS - IIT Indore",
      date: "2024",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "Code Of Phoenix",
      issuer: "IIIT Naya Raipur",
      date: "2024",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "Hack On",
      issuer: "GDG on Campus GCOEN",
      date: "2023",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    },
  ]

  const skillCertificates = [
    {
      title: "SDE Internship",
      issuer: "Prodigy InfoTech",
      date: "2025",
      icon: <Award className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "GfG 160 - 160 Days of Problem Solving",
      issuer: "GeeksforGeeks",
      date: "2024",
      icon: <Award className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "C Programming",
      issuer: "The Digital Adda",
      date: "2023",
      icon: <Award className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Web Development",
      issuer: "The Digital Adda",
      date: "2023",
      icon: <Award className="w-6 h-6 text-purple-400" />,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            Certifications & Achievements
          </h2>

          <Tabs defaultValue="achievements" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
              <TabsTrigger
                value="achievements"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:via-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <Trophy className="w-4 h-4 mr-2" />
                Achievements
              </TabsTrigger>
              <TabsTrigger
                value="certificates"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:via-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <Medal className="w-4 h-4 mr-2" />
                Certificates
              </TabsTrigger>
            </TabsList>

            <TabsContent value="achievements">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glassmorphic rounded-xl p-6 hover-lift"
                    onMouseEnter={() => setCursorVariant("card")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {achievement.icon}
                      <h3 className="text-lg font-bold">{achievement.title}</h3>
                    </div>
                    <p className="text-zinc-400 mb-2">{achievement.issuer}</p>
                    <p className="text-sm text-zinc-500">{achievement.date}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificates">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCertificates.map((certificate, index) => (
                  <motion.div
                    key={certificate.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glassmorphic rounded-xl p-6 hover-lift"
                    onMouseEnter={() => setCursorVariant("card")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {certificate.icon}
                      <h3 className="text-lg font-bold">{certificate.title}</h3>
                    </div>
                    <p className="text-zinc-400 mb-2">{certificate.issuer}</p>
                    <p className="text-sm text-zinc-500">{certificate.date}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
