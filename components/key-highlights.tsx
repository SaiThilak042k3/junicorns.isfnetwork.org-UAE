"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Users,
  MessageCircle,
  Brain,
  BriefcaseBusiness,
  Trophy,
  Rocket,
  Sparkles,
  Award,
  School,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Highlight {
  icon: JSX.Element;
  title: string;
  description: string;
}

// --- Junicorn Summit Highlights ---
const junicornHighlights: Highlight[] = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "40+ Top Junicorns Pitching",
    description: "Breakthrough innovations from India & USA on a global stage.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Inspiring Keynotes & Talks",
    description: "Next-gen tech, AI, and disruptive innovation insights.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Hands-On Orientation Sessions",
    description: "Dive deep into the startup ecosystem with practical guidance.",
  },
  {
    icon: <School className="w-6 h-6" />,
    title: "Student Innovation Showcase",
    description: "Spotlighting tomorrow’s changemakers and their ideas.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Best Startup Pitch Awards",
    description: "Celebrating game-changing ideas and visionary startups.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Exclusive Visits",
    description: "Explore NASA, local museums, and more pre/post-summit.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "High-Impact Networking",
    description: "Connect with global mentors, investors, and leaders.",
  },
];

// --- AI Summit Highlights ---
const aiHighlights: Highlight[] = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Industry Roundtables with AI Trailblazers",
    description:
      "Engage in dynamic discussions with AI pioneers shaping the industry's future.",
  },
  // {
  //   icon: <Brain className="w-6 h-6" />,
  //   title: "Virtual Exhibition",
  //   description: "Explore cutting-edge AI innovations through interactive showcases.",
  // },
  {
    icon: <Users className="w-6 h-6" />,
    title: "High-Impact Networking",
    description: "Connect with innovators, leaders, and visionaries in AI.",
  },
  {
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    title: "Exclusive Investor Connect Sessions",
    description: "Pitch to and network with top-tier investors in AI.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Inspiring Keynotes",
    description: "Hear from industry leaders driving the AI revolution.",
  },
];

// --- Summit Highlights (Combined) ---
export function SummitHighlights() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-background" id="summit-highlights">
      <div className="container px-4 mx-auto">
        {/* Junicorn Summit Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Junicorn Summit Highlights
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Get ready for an electrifying experience that brings together the brightest minds and boldest ideas!
          </p>
        </motion.div>

        {isMobile ? (
          <MobileHighlights highlights={junicornHighlights} />
        ) : (
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-8">
              {junicornHighlights.map((highlight, index) => (
                <div key={`junicorn-${index}`} className="w-64">
                  <HighlightCard highlight={highlight} index={index} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Summit Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            AI Summit Highlights
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Where Ideas Spark. Connections Happen. Futures Are Built.
          </p>
        </motion.div>

        {isMobile ? (
          <MobileHighlights highlights={aiHighlights} />
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {aiHighlights.map((highlight, index) => (
              <div key={`ai-${index}`} className="w-64">
                <HighlightCard highlight={highlight} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// --- Key Highlights (Restored for compatibility) ---
export function KeyHighlights() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-background" id="highlights">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            AI Summit Highlights
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Where Ideas Spark. Connections Happen. Futures Are Built.
          </p>
        </motion.div>

        {isMobile ? (
          <MobileHighlights highlights={aiHighlights} />
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {aiHighlights.map((highlight, index) => (
              <div key={`ai-${index}`} className="w-64">
                <HighlightCard highlight={highlight} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// --- Mobile Highlights ---
function MobileHighlights({ highlights }: { highlights: Highlight[] }) {
  return (
    <div className="space-y-6 mb-12">
      {highlights.map((highlight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card p-6 rounded-2xl bg-card shadow-md hover:shadow-lg transition-shadow duration-300 max-w-md mx-auto"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl text-primary shrink-0">
              {highlight.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-foreground mb-1">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground leading-snug">{highlight.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// --- Highlight Card for Desktop ---
function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 rounded-2xl bg-card shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center h-full"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl text-primary mb-4">
        {highlight.icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
    </motion.div>
  );
}