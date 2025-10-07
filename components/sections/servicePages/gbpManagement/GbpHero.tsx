"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function GbpHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-4 md:px-0">
      {/* Background SVG */}
      <div className="absolute inset-0 opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <rect fill="#FACC14" width="24" height="24" />
          <defs>
            <linearGradient id="a" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stop-color="#020004" />
              <stop offset="1" stop-color="#FACC14" />
            </linearGradient>
          </defs>
          <pattern id="b" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle fill="#FACC14" cx="11" cy="11" r="11" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#a)" />
          <rect width="100%" height="100%" fill="url(#b)" fill-opacity="0.09" />
        </svg>
      </div>

      {/* Glowing SEO Text */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewBox="0 0 1200 400"
        className="w-full max-w-full h-auto"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#facc14" />
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="10"
              floodColor="#facc14"
            />
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="20"
              floodColor="#facc14"
            />
          </filter>
        </defs>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="clamp(4rem, 18vw, 16rem)" // slightly smaller min for mobile
          fontWeight="800"
          fill="transparent"
          stroke="#facc14"
          strokeWidth="1.5"
          filter="url(#glow)"
        >
          SEO
        </text>
      </motion.svg>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold -mt-[15rem] tracking-wide text-white"
      >
        FOR BUSINESSES
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 text-center text-base sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 mt-4 sm:mt-6 mb-8 sm:mb-10"
      >
        BOOST YOUR BRAND VISIBILITY WITH AI-POWERED SEO STRATEGIES
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#facc14] to-[#facc14] text-black text-lg px-8 sm:px-10 py-4 sm:py-6 rounded-xl shadow-[0_0_20px_#facc14] hover:scale-105 transition"
        >
          LET’S TALK
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="border border-[#facc14] text-white text-lg px-8 sm:px-10 py-4 sm:py-6 rounded-xl hover:bg-[#facc14]/10 hover:scale-105 transition shadow-[0_0_15px_#facc14]"
        >
          PLAY VIDEO
        </Button>
      </motion.div>
    </section>
  );
}
