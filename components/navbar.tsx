"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
  setIsOpen: (isOpen: boolean) => void;
}

export function Navbar({ className, setIsOpen }: NavbarProps) {
  const [isOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scrolling to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 bg-[#000312] border-b border-gray-800 shadow-md ${className || ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/isf-logo.webp"
                alt="ISF Global Logo"
                className="h-12 w-auto md:h-16 object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]"
                width={213}
                height={64}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("key-topics")}
                className="text-gray-300 hover:text-white"
              >
                Key Topics
              </button>
              <button
                onClick={() => scrollToSection("junicorns")}
                className="text-gray-300 hover:text-white"
              >
                Junicorns
              </button>
              <button
                onClick={() => scrollToSection("speakers")}
                className="text-gray-300 hover:text-white"
              >
                Speakers
              </button>
              <button
                onClick={() => scrollToSection("schedule")}
                className="text-gray-300 hover:text-white"
              >
                Schedule
              </button>
              <button
                onClick={() => scrollToSection("venue")}
                className="text-gray-300 hover:text-white"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className="text-gray-300 hover:text-white"
              >
                Partners
              </button>
              <button
                onClick={() => scrollToSection("angels")}
                className="text-gray-300 hover:text-white"
              >
                Idea Angels
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white"
              >
                About Junicorn100k
              </button>
              {/* <Button variant="default" size="sm" onClick={() => setIsOpen(true)}>
                Register Now
              </Button> */}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isOpen)}
              className="text-gray-300 p-2 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#000312] border-t border-gray-700 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("key-topics")}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
            >
              Key Topics
            </button>
            <button
              onClick={() => scrollToSection("junicorns")}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
            >
              Junicorns
            </button>
            <button
              onClick={() => scrollToSection("speakers")}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
            >
              Speakers
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
            >
              Schedule
            </button>
            <button
              onClick={() => scrollToSection("venue")}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection("angels")}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
            >
              Idea Angels
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
            >
              About Junicorn100k
            </button>
            <div className="px-3 py-2">
              <Button
                className="w-full"
                variant="default"
                size="sm"
                onClick={() => {
                  setIsOpen(true);
                  setMenuOpen(false);
                }}
              >
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}