"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function GbpHero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating animation for the image (all devices)
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background texture grid with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            GBP <span className="text-yellow-500">Management</span> &{" "}
            <br className="hidden sm:block" /> GBP{" "}
            <span className="text-yellow-500">Marketing</span> Services
          </h1>
          <p className="text-gray-600 mt-6 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Geeks that get your business found by local customers!
          </p>
          <button className="mt-8 bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-sm shadow-lg hover:bg-yellow-500 transition">
            See Our GBP Plans
          </button>
        </div>

        {/* Right Image with floating effect */}
        <div ref={imgRef} className="z-10 flex justify-center md:justify-end">
          <Image
            src="https://gbpgeeks.com/wp-content/uploads/2025/07/GBP-Marketing-Services.png"
            alt="GBP Marketing Services"
            width={500}
            height={500}
            className="w-[320px] sm:w-[360px] md:w-[450px] lg:w-[500px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
