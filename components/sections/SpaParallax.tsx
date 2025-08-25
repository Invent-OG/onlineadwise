"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpaParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll(".animate-text");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // animation starts when section is in viewport
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      {/* Background Image - Spa Relax */}
      <div
        className="h-screen bg-center bg-cover flex items-center justify-center bg-scroll md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/973405/pexels-photo-973405.jpeg?auto=compress&cs=tinysrgb&w=1400')",
        }}
      >
        <div className="bg-black/40 w-full h-full flex items-center justify-center">
          <h1 className="animate-text text-white text-4xl md:text-6xl font-bold text-center px-4">
            Relax. <span className="text-yellow-500">Refresh</span>. Renew.
          </h1>
        </div>
      </div>

      {/* Content Section - Spa Intro */}
      <div className="bg-white py-20 px-6 md:px-20 text-center md:text-left">
        <h2 className="animate-text text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          <span className="text-yellow-500">Discover</span> the Art of{" "}
          <span className="text-yellow-500">True Relaxation</span>
        </h2>
        <p className="animate-text text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Escape into a sanctuary of tranquility where mind, body, and soul find
          perfect harmony. Our spa treatments blend natural elements with modern
          techniques, offering deep relaxation and complete rejuvenation. From
          soothing massages to luxury facials, every moment is designed to
          restore your inner glow.
        </p>
      </div>

      {/* Background Image - Nail Care */}
      <div
        className="h-screen bg-center bg-cover flex items-center justify-center bg-scroll md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=1400')",
        }}
      >
        <div className="bg-black/40 w-full h-full flex items-center justify-center">
          <h1 className="animate-text text-white text-4xl md:text-6xl font-bold text-center px-4">
            <span className="text-yellow-500">Beauty</span> in Every Detail
          </h1>
        </div>
      </div>

      {/* Content Section - Nail Design */}
      <div className="bg-white py-20 px-6 md:px-20 text-center md:text-left">
        <h2 className="animate-text text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          <span className="text-yellow-500">Nails</span> That Define{" "}
          <span className="text-yellow-500">Your Style</span>
        </h2>
        <p className="animate-text text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Pamper your hands and feet with our luxury nail care services. From
          classic manicures to creative nail art, we bring elegance and beauty
          to every detail. Indulge in premium treatments that nourish, protect,
          and enhance—because your nails deserve the same love and care as you
          do.
        </p>
      </div>
    </section>
  );
}
