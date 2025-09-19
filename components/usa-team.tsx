"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMember {
  name: string
  description: string
  image: string
}

export function UsaTeamSection({ id }: { id?: string }) {
  const teamMembers: TeamMember[] = [
    {
      name: "Sri Atluri",
      description: "Chief Information & Quality Officer J. Board, Advisory Strategic Visionary | QEF Top Talent | Promoting Excellence & Driving Growth | QEF President, ISF, USA",
      image: "/speakers/sri_atluri.jpg",
    },
{
      name: "Padma Alluri",
      description: "Entrepreneur, Impact Leader – Youth, Women & Innovation (CEO, ITS Corp – USA)",
      image: "/isf-team/padma_alluri.jpg",
    },
    {
      name: "Krishna Kumar",
      description: "Technologist, Innovator, Investor",
      image: "/speakers/krishna_kumar.jpg",
    },
    {
      name: "Prasad Gundumogula",
      description: "Chairman, CEO & Founder, Mondee Holdings Inc",
      image: "/speakers/PrasadGundumogula.jpg",
    },
    {
      name: "Mahesh Nandyala",
      description: "Founder and CEO, Startup Runway LLC",
      image: "/isf-team/mahesh_nandyala.jpg",
    },
    {
      name: "Swami Kakarla",
      description: "Chief Executive Officer, Signitives",
      image: "/isf-team/swami_kakarla.png",
    },
    {
      name: "Kishore Mellacheruvu",
      description: "President & CEO, SSVK Tech INC",
      image: "/isf-team/kishore_mellacheruvu.jpg",
    },
    {
      name: "Parameswara Reddy",
      description: "Founder & Director, Cure – Children for Urban and Rural Education",
      image: "/isf-team/parameswara_reddy.jpg",
    },
    {
      name: "Santosh Kumar Yamsani",
      description: "Head of EQE Core Engineering at BNY, Core Committee Member at QEF",
      image: "/isf-team/santosh_kumar_yamsani.png",
    },
  ]

  return (
    <section id={id || "usa-team"} className="relative py-12 md:py-16 bg-[#020817] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:40px_40px]" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-900/30 blur-[80px]"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          {/* <span className="px-2.5 py-1 text-xs font-medium tracking-wider uppercase bg-white/5 rounded-full mb-3 inline-block text-blue-300">
            USA Host Committee
          </span> */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
            USA Host <span className="text-blue-400">Committee</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
            Meet the team driving our mission in the USA
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col p-3 sm:p-3.5 md:p-3 lg:p-3.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-blue-500/10"
            >
              <div className="relative w-full aspect-[1/1] rounded-md overflow-hidden mb-2 md:mb-2.5 border border-white/10">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              </div>

              <div className="flex flex-col items-center text-center space-y-1 pb-1.5">
                <h3 className="text-sm md:text-xs lg:text-sm font-semibold text-white">{member.name}</h3>
                <p className="text-white/70 text-xs md:text-2xs lg:text-xs font-light">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}