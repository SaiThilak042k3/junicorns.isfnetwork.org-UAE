"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMember {
  name: string
  description: string
  image: string
}

export function JunicornTeamSection({ id }: { id?: string }) {
  const leadershipTeam: TeamMember[] = [
    {
      name: "Dr. JA Chowdary",
      description: "Founder & Chairman, International Startup Foundation",
      image: "/speakers/JA_chowdary.jpg",
    },
    {
      name: "Dr. Siva Mahesh Tangutooru",
      description: "Founder & CEO, Jama Botanics, TurfPearl Agritech, Co-Founder, ISF",
      image: "/isf-team/shiva.a623ce07.svg",
    },
    {
      name: "Seshadri Vangala",
      description: "Founder and Group CEO, IFIN Global Group & SGlobal Group, Co-Founder, ISF",
      image: "/isf-team/seshadri_vangala.png",
    },
    {
      name: "M. Sathyendra Kumar",
      description: "Business Unit Head – India, Maccaferri Environmental Solutions Pvt Ltd, Co-Founder, ISF",
      image: "/isf-team/sathyendra_kumar.jpg",
    },
    {
      name: "Sri Atluri",
      description: "Chief Information & Quality Officer, J Board member, Advisory, Strategic Visionary, Empowering Top Talent, Promoting Excellence & Driving Growth, QEF President, ISF, USA",
      image: "/speakers/sri_atluri.jpg",
    },
    {
      name: "Dr. Varla Bhanu Prakash Reddy",
      description: "Partner & Director Plural Technology, Chair & Director TiE Grad-Global, Co-Founder, ISF",
      image: "/isf-team/varla_bhanu.jpg",
    },
    {
      name: "Bipin Chandara Pendyala",
      description: "Strategist, Entrepreneur, Thinker & Doer, Program Chair, ISF",
      image: "/isf-team/bipun_chandar.jpeg",
    },
  ]

  const projectManagementTeam: TeamMember[] = [
    {
      name: "Vishala Reddy",
      description: "Project Orchestrator",
      image: "/isf-team/vishala.dca09632.svg",
    },
    {
      name: "Nagarjuna Reddy",
      description: "Project Head",
      image: "/isf-team/nagarjuna_reddy.jpg",
    },
    {
      name: "Sanjogita Mishra",
      description: "Student Mentor",
      image: "/isf-team/snajogita.e52dcdc5.svg",
    },
    {
      name: "Ashok Padapati",
      description: "Student Mentor",
      image: "/isf-team/ashok_padapati.jpg",
    },
    {
      name: "Shahista Fatima",
      description: "Public Relations & Social Media Lead",
      image: "/isf-team/shahista_fatima.jpg",
    },
    {
      name: "Raghavendra Velidendla",
      description: "Multimedia Specialist",
      image: "/isf-team/raghavendra_velidandi.jpg",
    },
    {
      name: "Rajesh Gottipamula",
      description: "Documentary Filmmaker",
      image: "/isf-team/rajesh_gottimukkala.jpg",
    },
    {
      name: "Udbhav Vanapalli",
      description: "Filmmaker",
      image: "/isf-team/udbhav_vanapalli.jpg",
    },
    {
      name: "Himanshu Shetty",
      description: "Website Lead",
      image: "/isf-team/himanshu_shetty.jpg",
    },
  ]

  return (
    <section id={id || "junicorn-team"} className="relative py-12 md:py-16 bg-[#020817] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:40px_40px]" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-900/30 blur-[80px]"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Leadership Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="px-2.5 py-1 text-xs font-medium tracking-wider uppercase bg-white/5 rounded-full mb-3 inline-block text-blue-300">
            Our Team
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
            ISF Junicorn Project <span className="text-blue-400">Leadership Team</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Meet the leaders driving the ISF Junicorn Project
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-[calc(50%-0.5rem)] sm:w-64 lg:w-72 flex flex-col items-center p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 shadow-md"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-3 border border-white/10">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-white/70 text-xs font-light leading-normal">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Management Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
            ISF Junicorn <span className="text-blue-400">Project Management Team</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Meet the team managing the ISF Junicorn Project
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {projectManagementTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-[calc(50%-0.5rem)] sm:w-64 flex flex-col items-center p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 shadow-md"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-3 border border-white/10">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              </div>

              <div className="flex flex-col items-center text-center space-y-1.5">
                <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-normal">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}