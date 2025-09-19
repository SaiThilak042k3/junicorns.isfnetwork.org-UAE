"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Livestream {
  title: string;
  date: string;
  webinarLink: string;
  webinarId: string;
}

interface LivestreamCardProps {
  livestream: Livestream;
}

const LivestreamCard = ({ livestream }: LivestreamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <span className="text-xs font-medium tracking-wider text-white/60 uppercase">
            Livestream Event
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          {livestream.title}
        </h3>

        <p className="text-white/80 leading-relaxed">
          <span className="font-medium">Date:</span> {livestream.date}
        </p>
        <p className="text-white/80 leading-relaxed">
          <span className="font-medium">Webinar ID:</span> {livestream.webinarId}
        </p>

        <Button
          variant="outline"
          size="sm"
          className="group hover:bg-white/10 border-white/20"
          onClick={() => window.open(livestream.webinarLink, "_blank")}
        >
          Join Livestream
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

export function LivestreamDetails() {
  const livestreams: Livestream[] = [
    {
      title: "Junicorn Summit (Day 1)",
      date: "May 29, 2025",
      webinarLink: "https://txstate.zoom.us/s/81145229628",
      webinarId: "811 4522 9628",
    },
    {
      title: "AI Summit (Day 2)",
      date: "May 30, 2025",
      webinarLink: "https://txstate.zoom.us/s/84048199820",
      webinarId: "840 4819 9820",
    },
  ];

  return (
    <section id="livestream" className="relative py-20 bg-[#020817]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Livestream Details
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Join us virtually for the ISF Global Junicorn & AI Summit 2025 via Zoom webinars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {livestreams.map((livestream, index) => (
            <LivestreamCard key={index} livestream={livestream} />
          ))}
        </div>
      </div>
    </section>
  );
}