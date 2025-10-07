"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WeblandingHero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-4 md:px-0">
      {/* 🔹 Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.pexels.com/photos/7202771/pexels-photo-7202771.jpeg"
          alt="Business meeting background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/70 to-black/90" />
      </div>

      {/* 🔹 Yellow side glow (left + right only) */}
      <div className="absolute inset-0 opacity-70 -z-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <linearGradient id="yellowSideGlow" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#FACC14" stopOpacity="0.8" />
              <stop offset="0.25" stopColor="transparent" />
              <stop offset="0.75" stopColor="transparent" />
              <stop offset="1" stopColor="#FACC14" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#yellowSideGlow)" />
        </svg>
      </div>

      {/* 🔹 Glowing WEB DESIGN Text */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewBox="0 0 1200 600"
        className="w-full max-w-full h-auto z-10"
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

        {/* First line: WEB */}
        <text
          x="50%"
          y="40%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="clamp(18rem, 15vw, 14rem)"
          fontWeight="800"
          fill="transparent"
          stroke="#facc14"
          strokeWidth="2"
          filter="url(#glow)"
        >
          EMAIL
        </text>

        {/* Second line: DESIGN */}
        <text
          x="50%"
          y="70%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="clamp(18rem, 15vw, 14rem)"
          fontWeight="800"
          fill="transparent"
          stroke="#facc14"
          strokeWidth="2"
          filter="url(#glow)"
        >
          SMS
        </text>
      </motion.svg>

      {/* 🔹 Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 text-center text-4xl sm:text-4xl md:text-8xl font-extrabold -mt-[6rem] md:-mt-[18rem] tracking-wide text-white"
      >
        FOR BUSINESSES
      </motion.h2>

      {/* 🔹 Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 text-center text-sm font-semibold sm:text-lg md:text-2xl tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 mt-6 sm:mt-6 mb-8 sm:mb-10"
      >
        BOOST YOUR BRAND VISIBILITY WITH AI-POWERED SEO STRATEGIES
      </motion.p>

      {/* 🔹 Buttons */}
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
      </motion.div>
    </section>
  );
}
