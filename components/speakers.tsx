"use client";
import { motion } from "framer-motion";
import { LinkedinIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedIn?: string;
  featured?: boolean;
}

export function SpeakersSection({ id }: { id?: string }) {
  const [visibleSpeakers, setVisibleSpeakers] = useState(8);

  const speakers: Speaker[] = [
    {
      name: "Sri D Sridhar Babu",
      role: "Minister for Industries & Commerce, Legislative Affairs",
      company: "GoT (Government of Telangana)",
      image: "/speakers/Sridhar_Babu.jpg",
      linkedIn: "https://www.linkedin.com/in/sridharbabududdilla/",
      featured: false,
    },
    {
      name: "Dr. JA Chowdary",
      role: "Founder & Chairman",
      company: "International Startup Foundation",
      image: "/speakers/JA_chowdary.jpg",
      linkedIn:
        "https://www.linkedin.com/in/jachowdary/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      featured: false,
    },
    {
      name: "Sri Atluri",
      role: "Chief Information & Quality Officer | Board Member | Advisory | Strategic Visionary | Empowering Top Talent | Promoting Excellence & Driving Growth | QEF",
      company: " President, ISF, USA",
      image: "/speakers/sri_atluri.jpg",
      linkedIn: "https://www.linkedin.com/in/sriatluri9/",
      featured: false,
    },
    {
      name: "Jay Talluri",
      role: "Founder Chairman",
      company: "Hallmark Group",
      image: "/speakers/Jayasekhar_Talluri.jpg",
      linkedIn: "https://www.linkedin.com/in/jay-talluri-4109b81/",
      featured: false,
    },
    {
      name: "Dayakar Puskoor",
      role: "Founder and Managing Director",
      company: "Dallas Venture Capital",
      image: "/speakers/dayakar_puskoor.jpg",
      linkedIn: "https://www.linkedin.com/in/dayakarp/",
      featured: false,
    },
    {
      name: "Angelos Angelou",
      role: "CEO, Chief Strategist",
      company: "AngelouEconomics",
      image: "/speakers/AngelosAngelou.jpg",
      linkedIn: "https://www.linkedin.com/in/angelosangelou/",
      featured: false,
    },
    {
      name: "Prasad Gundumogula",
      role: "Chairman, CEO, and Founder",
      company: "Mondee Holdings Inc.",
      image: "/speakers/PrasadGundumogula.jpg",
      linkedIn: "https://www.linkedin.com/in/prasadgundumogula/",
      featured: false,
    },
    {
      name: "Joginder Tanikella",
      role: "CEO",
      company: "T-Works",
      image: "/speakers/joginder_tanikela.jpg",
      linkedIn:
        "https://www.linkedin.com/in/jogindertanikella/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Dr Kiranmai Dutt Pendyala",
      role: "Former CVP HR",
      company: "UPS & AMD",
      image: "/speakers/kiranmai_pendyala.png",
      linkedIn: "https://www.linkedin.com/in/kiranmai-pendyala-94335427/?originalSubdomain=in",
      featured: false,
    },
    // {
    //   name: "Vikrant Varshney",
    //   role: "Managing Partner, Chairperson",
    //   company: "SucSEED Indovation GROWTH Fund",
    //   image: "/speakers/vikrant_varshney.jpeg",
    //   linkedIn:
    //     "https://www.linkedin.com/in/vikrantvarshney-indovation/?originalSubdomain=in",
    //   featured: false,
    // },
    {
      name: "Sreekanth K Arimanithaya",
      role: "Entrepreneur In Residence and CHRO",
      company: "Machani Group",
      image: "/speakers/Sreekanth_k.jpg",
      linkedIn:
        "https://www.linkedin.com/in/sreekanth-k-arimanithaya-80aa9b3/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Nagesh Pabbisetty",
      role: "Founder CEO",
      company: "BusinessFirst & RealtySlices",
      image: "/speakers/nagesh_pabbisetty.jpg",
      linkedIn: "https://www.linkedin.com/in/nageshp/",
      featured: false,
    },
    {
      name: "Prakash Bodla",
      role: "Founder CEO",
      company: "aAROHAN Consulting",
      image: "/speakers/prakash_bodla.jpg",
      linkedIn: "https://www.linkedin.com/in/bodla/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Raviprasad Pisupati",
      role: "Founder & Managing Partner",
      company: "Tempus Law Associates",
      image: "/speakers/raviprasad_pisupati.png",
      linkedIn: "https://tempuslaw.co.in/ravi-profile/",
      featured: false,
    },
    {
      name: "Sridevi Koneru",
      role: "VP Customer Success for Industries and Revenue Cloud",
      company: "Salesforce",
      image: "/speakers/sridevi_koneru.jpg",
      linkedIn: "https://www.linkedin.com/in/sridevikoneru/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Dr. Sara R.",
      role: "Venture Capitalist & Next-Gen Family Office Investor",
      company: "", // You can specify a firm or family office if known
      image: "/speakers/SaraR.jpg",
      linkedIn: "https://www.linkedin.com/in/sararana/",
      featured: false,
    },
    {
      name: "Robert Synak",
      role: "Founder, General Manager & Chief Revenue Officer",
      company: "SkillLab360",
      image: "/speakers/RobertSynak.jpg",
      linkedIn: "https://www.linkedin.com/in/rsynak/",
      featured: false,
    },
    {
      name: "Srihari Bhat",
      role: "Founder Director",
      company: "PACE Wisdom Solutions",
      image: "/speakers/srihari_bhat.jpg",
      linkedIn: "https://www.linkedin.com/in/fayarjomandi/",
      featured: false,
    },
    {
      name: "Krishna Kumar",
      role: "Technologist, Innovator, Investor",
      company: "",
      image: "/speakers/krishna_kumar.jpg",
      linkedIn: "https://www.linkedin.com/in/kkrishkumar/",
      featured: false,
    },
    {
      name: "Satish Madhira",
      role: "General Partner & Founder CEO",
      company: "Shift Left Ventures, Zemoso Labs",
      image: "/speakers/satish.jpg",
      linkedIn: "https://www.linkedin.com/in/satishmadhira/",
      featured: false,
    },
    {
      name: "Dr. Sanjay Ramchander",
      role: "Dean",
      company: "McCoy College of Business at Texas State University",
      image: "/speakers/Dr_SanjayRamchander.jpg",
      linkedIn: "https://www.linkedin.com/in/sanjay-ramchander-66435a2/",
      featured: false,
    },
    {
      name: "Teresa Quinn",
      role: "Director",
      company: "Center for Innovation & Entrepreneurship, Texas State University",
      image: "/speakers/TeresaQuinn.jpg",
      linkedIn: "https://www.linkedin.com/in/teresa-quinn/",
      featured: false,
    },
  {
    "name": "Dr. Kurapati Krishnaiah",
    "role": "CEO",
    "company": "Basavatarakam Indo-American Cancer Hospital & Research Institute",
    "image": "/speakers/krishnaiah_kurapati.jpg",
    "linkedIn": "",
    "featured": false
  },
    {
    "name": "Hari Kumar",
    "role": "Global Business Leader",
    "company": "Managing Director, PWC",
    "image": "/speakers/hari_kumar.jpg",
    "linkedIn": "https://www.linkedin.com/in/harinkumar/",
    "featured": false
  },
  {
    "name": "Rezarta Tabaku",
    "role": "Director, Global Engineering (1LOD) Control Management",
    "company": "BNY Mellon",
    "image": "/speakers/rezarta_tabaku.jpg",
    "linkedIn": "https://www.linkedin.com/in/rezarta-tabaku/",
    "featured": false
  },
  {
    "name": "Shantanu Patil",
    "role": "Director",
    "company": "Directorate of Entrepreneurship and Innovation, SRM University, Kattankulathur",
    "image": "/speakers/shantanu_patil.jpg",
    "linkedIn": "https://www.linkedin.com/in/shantanu-patil-2355122/?originalSubdomain=in",
    "featured": false
  },
  {
    "name": "Tan Moorthy",
    "role": "CEO",
    "company": "Revature",
    "image": "/speakers/tan_moorthy.jpg",
    "linkedIn": "https://www.linkedin.com/in/tanmoorthy/",
    "featured": false
  },
  {
    "name": "Kavikrut",
    "role": "CEO",
    "company": "T-Hub",
    "image": "/speakers/kavikrut.jpg",
    "linkedIn": "https://www.linkedin.com/in/kavikrut/?originalSubdomain=in",
    "featured": false
  },
  {
    "name": "Manohar Reddy",
    "role": "Founder, CEO",
    "company": "Feuji, Inc",
    "image": "/speakers/manohar_reddy.jpg",
    "linkedIn": "https://www.linkedin.com/in/emailmanohar/",
    "featured": false
  },
    {
    name: "Sri Sanjay Kumar",
    role: "IAS, Special Chief Secretary, ITE&C, Industries & Commerce, and Sports Departments",
    company: "Government of Telangana",
    image: "/speakers/sri_sanjay_kumar.jpg",
    linkedIn: "",
    featured: false
  },
  {
    name: "Vinai Thummalapally",
    role: "President",
    company: "Thummalapally LLC (earlier U.S. Ambassador to Belize)",
    image: "/speakers/vinai_thummalapally.jpg",
    linkedIn: "https://www.linkedin.com/in/vinai-thummalapally-89b27737/",
    featured: false
  },
  {
    name: "Ravi Tangirala",
    role: "Vice President & Market Leader - SAIC | Former Head of MassMutual GBSI",
    company: "SAIC",
    image: "/speakers/ravi_tangirala.jpg",
    linkedIn: "https://www.linkedin.com/in/ravitangirala/",
    featured: false
  },
  {
    name: "Lax Chepuri",
    role: "Founder & CEO",
    company: "Technogen INC",
    image: "/speakers/lax_chepuri.jpg",
    linkedIn: "https://www.linkedin.com/in/lax-rao-chepuri-9325362/",
    featured: false
  },
  {
    name: "Peter Voss",
    role: "CEO, Chief Scientist, Founder",
    company: "Aigo.ai",
    image: "/speakers/peter_voss.jpg",
    linkedIn: "https://www.linkedin.com/in/vosspeter/",
    featured: false
  },
  {
    name: "Andres Pelenur J.D.",
    role: "Founding Partner, Borders Law Firm PC & Senior Policy Advisor",
    company: "MBIE New Zealand",
    image: "/speakers/andres_pelenur.jpg",
    linkedIn: "https://www.linkedin.com/in/andrespelenur/",
    featured: false
  },
  {
    name: "Anupam Govil",
    role: "Founding Chair, US India Chamber of Commerce Austin, President & Partner",
    company: "Avasant",
    image: "/speakers/anupam_govil.jpg",
    linkedIn: "https://www.linkedin.com/in/anupamgovil/",
    featured: false
  },
  {
    name: "Vattem Narendra Babu",
    role: "CEO",
    company: "iSpatial Techno Solutions",
    image: "/speakers/vattem_narendra_babu.jpg",
    linkedIn: "https://www.linkedin.com/in/vnbabu/",
    featured: false
  },
  {
    name: "Dr B Chidambar",
    role: "Trustee, Each One Educate One Foundation & Assistant Professor",
    company: "Sri Sathya Sai University for Human Excellence",
    image: "/speakers/dr_b_chidambar.jpg",
    linkedIn: "https://www.linkedin.com/in/chidambar-b-635473119/",
    featured: false
  },
  {
    name: "Harshal Shah",
    role: "Founder and CEO, The Venture Build, President",
    company: "TiE Austin",
    image: "/speakers/harshal_shah.jpg",
    linkedIn: "https://www.linkedin.com/in/shahharshal/",
    featured: false
  },
  {
    name: "Usha Boddapu",
    role: "President / Co-Founder / Chief Artificial Intelligence Scientist",
    company: "Arytic Inc & CEO/Founder, Esolvit Inc",
    image: "/speakers/usha_boddapu.jpg",
    linkedIn: "https://www.linkedin.com/in/ushaboddapu/",
    featured: false
  },
  {
    "name": "Mahesh Nandyala",
    "role": "Founder and CEO",
    "company": "Startup Runway",
    "image": "/isf-team/mahesh_nandyala.jpg",
    "linkedIn": "https://www.linkedin.com/in/mahesh-nandyala-6869a342/",
    "featured": false
  },
  {
    "name": "Ram Alluri",
    "role": "Consulting CFO",
    "company": "iSparkQ",
    "image": "/speakers/ram_alluri.jpg",
    "linkedIn": "https://www.linkedin.com/in/ramalluri/",
    "featured": false
  },
  {
    "name": "Ram Pratti",
    "role": "Founder CEO",
    "company": "AI Driven Quant Fund",
    "image": "/speakers/ram_pratti.jpg",
    "linkedIn": "https://www.linkedin.com/in/rampratti/",
    "featured": false
  },
  {
    "name": "Somesh Chablani",
    "role": "Global Head of Go-to-Market & Business Development",
    "company": "FIS Global",
    "image": "/speakers/somesh_chablani.jpg",
    "linkedIn": "https://www.linkedin.com/in/someshchablani/",
    "featured": false
  },
  {
    "name": "Ranjeet Tayi",
    "role": "Director User Experience",
    "company": "Informatica",
    "image": "/speakers/ranjeet_tayi.jpg",
    "linkedIn": "https://www.linkedin.com/in/ranzeeth/",
    "featured": false
  },
  {
    "name": "Sathya Krishnamurthy",
    "role": "Chief Product Officer",
    "company": "Milestone Inc",
    "image": "/speakers/sathya_krishnamurthy.jpg",
    "linkedIn": "https://www.linkedin.com/in/sathyakrishnamurthy/",
    "featured": false
  },
  {
    "name": "Sanjeev Deshpande",
    "role": "Former EVP & Head of APAC",
    "company": "NTT Data Business Solutions",
    "image": "/speakers/sanjeev_deshpande.jpg",
    "linkedIn": "https://www.linkedin.com/in/sdeshpande/?originalSubdomain=in",
    "featured": false
  },
  {
    "name": "Daniel Sloan",
    "role": "Founder",
    "company": "RealSplit & Future Tech",
    "image": "/speakers/daniel_sloan.jpg",
    "linkedIn": "https://www.linkedin.com/in/sloandaniel/",
    "featured": false
  },
  {
    "name": "Suseela Santhosh",
    "role": "Director",
    "company": "Vishwa Vidyapeeth Group of Schools",
    "image": "/speakers/suseela_santhosh.jpg",
    "linkedIn": "https://www.linkedin.com/in/suseela-santhosh/?originalSubdomain=in",
    "featured": false
  },
  {
    "name": "Mic Mann",
    "role": "CEO, UBU / Co-CEO",
    "company": "SingularityU South Africa / Mann Made",
    "image": "/speakers/mic_mann.png",
    "linkedIn": "https://www.linkedin.com/in/mic-mann-8960692/",
    "featured": false
  },
  {
    "name": "Kiran Chandra",
    "role": "Chief Technologist & Centre Head",
    "company": "Viswam.AI",
    "image": "/speakers/kiran_chandra.jpg",
    "linkedIn": "https://www.linkedin.com/in/kiranchandray/?originalSubdomain=in",
    "featured": false
  },
  {
    "name": "Dr. Raghava Yerram",
    "role": "Chief Data Officer & Head of Data Consulting (UK)",
    "company": "Rplus Consulting",
    "image": "/speakers/raghava_yerram.jpg",
    "linkedIn": "https://www.linkedin.com/in/raghavayerra/?originalSubdomain=uk",
    "featured": false
  },
  {
    "name": "Vijay Madduri",
    "role": "Chairman and Co-Founder",
    "company": "Impact Hub Hyderabad",
    "image": "/speakers/vijay_madduri.jpg",
    "linkedIn": "https://www.linkedin.com/in/vijay-madduri-7541891/",
    "featured": false
  }
  ];

  const handleViewMore = () => {
    setVisibleSpeakers((prev) => Math.min(prev + 8, speakers.length));
  };

  return (
    <section id={id || "speakers"} className="relative py-20 bg-[#020817] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px]" />
      </div>
      
      {/* Single glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-900/30 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white/5 rounded-full mb-4 inline-block text-blue-300">
            Featured Speakers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry Leaders & <span className="text-blue-400">Innovators</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Learn from the brightest minds in AI and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {speakers.slice(0, visibleSpeakers).map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex flex-col p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-lg transition-all duration-200 h-full hover:-translate-y-2 shadow-lg hover:shadow-blue-500/10 border border-white/10 ${
                speaker.featured
                  ? "bg-blue-950/40 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                  : "bg-white/5"
              }`}
            >
              <div className="relative w-full aspect-square rounded-lg md:rounded-xl overflow-hidden mb-3 md:mb-4 border border-white/10">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                {speaker.featured && (
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-blue-500/90 text-white text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="flex-grow space-y-2 md:space-y-3">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-white break-words line-clamp-2">
                  {speaker.name}
                </h3>
                <div className="space-y-1">
                  <p className="text-blue-200/90 text-xs md:text-sm font-medium break-words line-clamp-2">
                    {speaker.role}
                  </p>
                  <p className="text-white/60 text-xs md:text-sm font-light break-words line-clamp-2">
                    {speaker.company}
                  </p>
                </div>
              </div>

              {speaker.linkedIn && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 md:mt-4 w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-medium transition-colors text-xs md:text-sm"
                  onClick={() => window.open(speaker.linkedIn, "_blank")}
                >
                  <LinkedinIcon className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                  LinkedIn
                  <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 opacity-70" />
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {speakers.length > visibleSpeakers && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 text-center"
          >
            <Button
              size="lg"
              onClick={handleViewMore}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              View More Speakers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}