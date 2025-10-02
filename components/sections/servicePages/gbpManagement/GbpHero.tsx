"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

function GbpHero() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }
    );

    gsap.fromTo(
      ".hero-btn",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
    );
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden text-center px-6">
      {/* Neon Heading (stroke + fill + glow) */}
      <h1 className="hero-text relative text-5xl md:text-7xl font-extrabold text-transparent">
        <span className="absolute inset-0 text-yellow-400 ">
          GOOGLE BUSINESS PROFILE
        </span>
        <span className="relative text-transparent stroke-yellow-400 [paint-order:stroke_fill] [--tw-stroke:2px]">
          GOOGLE BUSINESS PROFILE
        </span>
      </h1>

      {/* Subtitle */}
      <p className="hero-text mt-6 text-lg md:text-xl text-gray-200 tracking-widest">
        GETTING YOU BETTER RANKINGS AND MORE CUSTOMERS
      </p>

      {/* Buttons */}
      <div className="hero-btn mt-10 flex gap-6 justify-center">
        <button className="px-8 py-3 rounded-md bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold  transition">
          LET&apos;S TALK
        </button>
        <button className="px-8 py-3 rounded-md bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold  transition">
          PLAY VIDEO
        </button>
      </div>
    </section>
  );
}

export default GbpHero;
