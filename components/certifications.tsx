import React, { Dispatch, SetStateAction } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Award, Trophy, Medal, Briefcase, Eye } from "lucide-react";
import { motion } from "framer-motion";

type AchievementsSectionProps = {
  setCursorVariant: Dispatch<SetStateAction<string>>;
};

const achievements = [
    {
      title: (
        <>
          Healthcare Management <br /> System Hackathon
        </>
      ),
      issuer: "FLUXUS - IIT Indore",
      date: "2024",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      link: "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/iit%20indore.pdf",
    },
    {
      title: "Code Of Phoenix",
      issuer: "IIIT Naya Raipur",
      date: "2024",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      link: "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/code%20of%20phoenix.pdf",
    },
    {
      title: "Hack On",
      issuer: "GDG on Campus GCOEN",
      date: "2025",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      link: "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/Hack%20On%20GCOEN.pdf",
    },
    {
      title: "Tech-Kruti Hackathon",
      issuer: "TGP Nagpur",
      date: "2025",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      link: "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/Hack%20On%20GCOEN.pdf",
    },
    {
      title: "Krutiverse Hackathon",
      issuer: "TGP Nagpur",
      date: "2025",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      link: "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/TGP%20krutiverese%20Hackathon.pdf",
    },
  ]

  const skillCertificates = [
    {
      title: "GfG 160 - 160 Days of Problem Solving",
      issuer: "GeeksforGeeks",
      date: "2025",
      icon: <Award className="w-6 h-6 text-purple-400" />,
      link: "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/gfg%2022weeks.pdf",
    },
    {
      title: "C Programming",
      issuer: "The Digital Adda",
      date: "2024",
      icon: <Award className="w-6 h-6 text-purple-400" />,
      link: "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/C%20Programming%20-%20TDA.pdf",
    },
    {
      title: "Web Development",
      issuer: "The Digital Adda",
      date: "2024",
      icon: <Award className="w-6 h-6 text-purple-400" />,
      link: "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/Web%20Dev%20-%20TDA.pdf",
    },
    {
      title: "Gen Ai",
      issuer: "LinkedIn",
      date: "2025",
      icon: <Award className="w-6 h-6 text-purple-400" />,
      link: "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/CertificateOfCompletion_What%20Is%20Generative%20AI.pdf",
    }
  ];

const internships = [
  {
    title: "Software Developer Intern",
    issuer: "Prodigy Infotech",
    date: "2025",
    icon: <Briefcase className="w-6 h-6 text-green-400" />,
    link: "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/Prodigy%20infotech%20Certificate.pdf",
  },
  {
    title: "AI Foundation Intern",
    issuer: "Edunet Foundation",
    date: "2025",
    icon: <Briefcase className="w-6 h-6 text-green-400" />,
    link: "Not available",
  },
];

export default function AchievementsSection({ setCursorVariant }: AchievementsSectionProps) {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Highlights</h2>
      <Tabs defaultValue="achievements" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10">
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
          <TabsTrigger
            value="internships"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:via-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Internships
          </TabsTrigger>
        </TabsList>

        {/* Achievements Tab */}
        <TabsContent value="achievements">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glassmorphic rounded-xl p-6 hover-lift relative border border-zinc-700"
                    onMouseEnter={() => setCursorVariant("card")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {achievement.icon}
                      <h3 className="text-lg font-bold">{achievement.title}</h3>
                    </div>
                    <p className="text-zinc-400 mb-2">{achievement.issuer}</p>
                    <p className="text-sm text-zinc-500">{achievement.date}</p>

                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 text-blue-400 hover:text-blue-600 transition-colors duration-200"
                        onMouseEnter={() => setCursorVariant("button")}
                        onMouseLeave={() => setCursorVariant("default")}
                      >
                        <Eye className="w-5 h-5" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </TabsContent>

        {/* Certificates Tab */}
        <TabsContent value="certificates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCertificates.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphic rounded-xl p-6 hover-lift relative border border-zinc-700"
                onMouseEnter={() => setCursorVariant("card")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="flex items-center gap-3 mb-4">
                  {cert.icon}
                  <h3 className="text-lg font-bold">{cert.title}</h3>
                </div>
                <p className="text-zinc-400 mb-2">{cert.issuer}</p>
                <p className="text-sm text-zinc-500">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-blue-400 hover:text-blue-600 transition-colors duration-200"
                    onMouseEnter={() => setCursorVariant("button")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Internships Tab */}
        <TabsContent value="internships">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphic rounded-xl p-6 hover-lift relative border border-zinc-700"
                onMouseEnter={() => setCursorVariant("card")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="flex items-center gap-3 mb-4">
                  {internship.icon}
                  <h3 className="text-lg font-bold">{internship.title}</h3>
                </div>
                <p className="text-zinc-400 mb-2">{internship.issuer}</p>
                <p className="text-sm text-zinc-500">{internship.date}</p>
                {internship.link && (
                  <a
                    href={internship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-blue-400 hover:text-blue-600 transition-colors duration-200"
                    onMouseEnter={() => setCursorVariant("button")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
