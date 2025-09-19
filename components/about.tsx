"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AboutCard {
  title: string;
  description: string;
  link: string;
  image: string;
  buttonText: string;
}

interface AboutSectionProps {
  id?: string;
}

const aboutCards: AboutCard[] = [
  {
    title: "International Startup Foundation (ISF)",
    description: "The International Startup Foundation (ISF) is a not-for-profit organization dedicated to fostering innovation and entrepreneurship across key sectors such as Capital Investments, Health, GCC, AI, Fintech, Agriculture, Rural Development, Women, and Youth. Aligned with the Bharat 2047 vision, ISF works to build impactful ecosystems that drive economic growth and sustainable development.",
    link: "https://www.isfnetwork.org",
    image: "https://www.isfjunicorns.com/_next/static/media/exp-1.6d565426.svg",
    buttonText: "Learn More"
  },
  {
    title: "ISF Junicorn100K Initiative",
    description: "ISF Junicorn100K is a flagship initiative dedicated to empowering 100,000 rural youth (ages 8-25) to become innovators who tackle critical rural challenges and contribute to national priority sectors. By igniting a spirit of innovation, this initiative will cultivate a dynamic ecosystem where groundbreaking ideas transform into impactful & workable prototypes, shaping a future where rural talent drives global progress.",
    link: "https://www.isfjunicorns.com",
    image: "https://www.isfjunicorns.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frural.6c6a733c.webp&w=3840&q=75",
    buttonText: "Learn More"
  }
];

export function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id || "about"} className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 leading-tight"
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-border"
            >
              <div className="relative aspect-video">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {card.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {card.description}
                </p>
                
                <Button
                  variant="default"
                  className="group"
                  onClick={() => window.open(card.link, "_blank")}
                >
                  {card.buttonText}
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}