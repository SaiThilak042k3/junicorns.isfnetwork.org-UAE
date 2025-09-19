"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Close() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Registrations Have Closed
        </h1>
        <p className="text-sm md:text-base text-white/90 mb-8 max-w-2xl mx-auto">
          The ISF Global Junicorn & AI Summit 2025 has concluded. Thank you for your interest.
        </p>
        <Button
          variant="ghost"
          className="w-full sm:w-64 h-10 text-blue-400 hover:bg-blue-900/30"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Main Site
        </Button>
      </motion.div>
    </div>
  );
}