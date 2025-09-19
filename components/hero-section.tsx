"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <img
            src="/isf-global.jpg"
            alt="Abstract 3D rendered background with blue luxury wall waves"
            title="ISF Global AI Summit 2025 Background"
            className="w-full h-full object-cover object-right md:object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020817] to-transparent" />
        </div>
      </motion.div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left w-full md:w-1/2 pl-4 md:pl-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="px-3 py-1 text-xs md:text-sm font-semibold bg-black/20 backdrop-blur-md rounded-full inline-block mb-3 text-white">
              <Sparkles className="inline-block w-4 h-4 mr-1" />
              May 29-30, 2025 • Texas, USA
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight"
          >
            ISF Global Junicorn <br /> & AI Summit 2025
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base text-white/90 mb-6 md:mb-8 max-w-2xl"
          >
            Join us for two power-packed days of action, insight, and inspiration with the world's top minds in AI, innovation, and entrepreneurship.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-row gap-2 sm:gap-4"
          >
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
              asChild
            >
              <a
                href="/program_schedule_.pdf"
                download
                aria-label="Download the Global Junicorn Program Schedule"
              >
                <Download className="mr-2 h-5 w-5" />
                Schedule
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}