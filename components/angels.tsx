"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface Angel {
  name: string
  description: string
  image: string
}

export function AngelsSection({ id }: { id?: string }) {
  const angels: Angel[] = [
    {
      name: "Jayasekhar Talluri",
      description: "Chairman, Hallmark Group of Companies (Supported 2 innovators)",
      image: "/speakers/Jayasekhar_Talluri.jpg",
    },
    {
      name: "Mr. Sidhartha Mohanty",
      description: "Seasoned Serial Entrepreneur & Angel Investor (Supported 2 innovators)",
      image: "/isf-team/sid_mohanty.png",
    },
    {
      name: "Dr. Lenin Pinnamaneni MD",
      description: "Internal Medicine, Pineywoods Diagnostic Clinic, USA (Supported 1 innovator)",
      image: "/isf-team/lenin_pinnamaneni.jpg",
    },
    {
      name: "Mr. Rajesh Rangisetti",
      description: "Founder & CEO Elbert Technology Private Limited (Supported 1 innovator)",
      image: "/isf-team/rajesh_rangisetti.jpg",
    },
    {
      name: "Mr. Allamaprabhu Navadgere",
      description: "Managing Director Vachana Constructions (Supported 1 innovator)",
      image: "/isf-team/allamaprabhu_navadgere.jpg",
    },
    {
      name: "Mr. P. Chandra Seshu",
      description: "Managing Director, The Great Builds (Supported 1 innovator)",
      image: "/isf-team/chandra_seshu.jpg",
    },
  ]

  return (
    <section id={id || "angels"} className="relative py-12 md:py-16 bg-[#020817] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:40px_40px]" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-900/30 blur-[80px]"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="px-2.5 py-1 text-xs font-medium tracking-wider uppercase bg-white/5 rounded-full mb-3 inline-block text-blue-300">
            Our Supporters
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Idea Seed Angels & <span className="text-blue-400">Mentors</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-sm">
            Meet the visionaries supporting our mission
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {angels.map((angel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col p-2 sm:p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-blue-500/10"
            >
              <div className="relative w-full aspect-[3/3] rounded-md overflow-hidden mb-2 md:mb-2.5 border border-white/10">
                <Image
                  src={angel.image || "/placeholder.svg"}
                  alt={angel.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              </div>

              <div className="flex flex-col items-center text-center space-y-0.5 pb-1 md:pb-1.5">
                <h3 className="text-xs md:text-xs lg:text-sm font-semibold text-white px-1">
                  {angel.name}
                </h3>
                <p className="text-white/70 text-[0.7rem] md:text-xs font-light leading-tight px-1">
                  {angel.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}