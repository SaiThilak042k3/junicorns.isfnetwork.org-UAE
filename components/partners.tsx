"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Partnerships data
const partnerships = [
  {
    category: "In Partnership With",
    logos: [
      { src: "/logos/quality.jpg", alt: "Quality Engineering Foundation logo" },
    ],
  },
  {
    category: "Powered By",
    logos: [
      { src: "/logos/Mondee-Logo-1.png", alt: "Mondee logo" },
    ],
  },
  {
    category: "Powered By",
    logos: [
      { src: "/logos/power_mech.png", alt: "Power Mech logo" },
    ],
  },
  {
    category: "Hosting Partner",
    logos: [
      { src: "/logos/McCoy.jpg", alt: "McCoy College of Business, Texas State University logo" },
    ],
  },
  {
    category: "Strategic Partner",
    logos: [
      { src: "/logos/singularity.png", alt: "Singularity University logo" },
    ],
  },
];

// Supporting Organisations data
const supportingOrganisations = [
  { src: "/logos/aarohan.png", alt: "Aarohan logo" },
  { src: "/logos/startup-runway.png", alt: "Startup Runway logo" },
  { src: "/logos/us-india-chamber.jpeg", alt: "US India Chamber of Commerce logo" },
  { src: "/logos/tie-austin.png", alt: "TiE Austin Fostering Entrepreneurship logo" },
];

// Junicorn Project Partners data
const partners = [
  { src: "/logos/identcity.41da4c26.svg", alt: "Identcity Consultants logo" },
  { src: "/logos/thinker.075ba72c.svg", alt: "Young Tinker Foundation logo" },
  { src: "/logos/inunity.94d3272f.svg", alt: "Inunity logo" },
  { src: "/logos/wharf-street.svg", alt: "Wharf Street Studios logo" },
  { src: "/logos/roy.f0d7d720.svg", alt: "Switch + Roy Studio logo" },
  { src: "/logos/signitives.jpg", alt: "Signitives logo" },
  { src: "/logos/vadaanya.png", alt: "Vadaanya logo" },
  { src: "/logos/task.png", alt: "TASK logo" },
];

export function PartnersShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden" id="partners">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Partnerships Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 bg-card rounded-2xl py-8 px-4 shadow-lg border"
        >
          <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 rounded-full mb-4 inline-block text-primary">
            Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Key Partnerships
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Collaborating with leading organizations to drive innovation and impact.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow w-full sm:w-auto flex-1 min-w-[150px] max-w-[200px]"
              >
                <h3 className="text-xs md:text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-center">
                  {partnership.category}
                </h3>
                <div className="flex flex-col items-center justify-center">
                  {partnership.logos.map((logo, logoIndex) => (
                    <div
                      key={logoIndex}
                      className="flex items-center justify-center h-16 w-full"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={60}
                        className="object-contain h-full w-auto max-w-full p-1"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Separator */}
        <hr className="my-12 border-t border-border" />

        {/* Supporting Organisations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 rounded-full mb-4 inline-block text-primary">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Supporting Organizations
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Collaborating with innovative organizations to drive AI and technology forward.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 w-full max-w-4xl">
            {supportingOrganisations.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex justify-center items-center bg-card rounded-lg border border-white/100 hover:shadow-sm aspect-square max-w-[120px] sm:max-w-[140px] mx-auto"
              >
                <Image
                  src={org.src}
                  alt={org.alt}
                  width={120}
                  height={120}
                  className="object-contain w-full h-full rounded-lg"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <hr className="my-12 border-t border-border" />

        {/* Junicorn Project Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Junicorn Project Partners
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Empowering young entrepreneurs to innovate and lead the future technology
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-4 sm:p-6 rounded-lg border flex justify-center items-center hover:shadow-sm h-32 sm:h-36"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={160}
                height={80}
                className="object-contain max-h-full w-auto"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}