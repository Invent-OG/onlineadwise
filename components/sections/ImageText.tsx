"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageText() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current.querySelectorAll(".animate-text");

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // when section comes into view
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1373748/pexels-photo-1373748.jpeg?auto=compress&cs=tinysrgb&w=1400')", // Spa / Nail background
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div
        ref={textRef}
        className="relative max-w-3xl text-center md:text-left px-6"
      >
        <p className="animate-text text-sm tracking-widest text-yellow-500 font-semibold mb-2">
          RELAX & SHINE
        </p>
        <h2 className="animate-text text-3xl md:text-4xl font-extrabold text-white mb-6">
          Luxury Nails vs Spa Treatments
        </h2>
        <p className="animate-text text-lg md:text-xl text-white/90 leading-relaxed">
          Discover the perfect balance of{" "}
          <span className="font-bold relative inline-block">
            elegance
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-yellow-500"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q25 5, 50 15 T100 15"
                stroke="currentColor"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
          </span>{" "}
          and{" "}
          <span className="font-bold relative inline-block">
            relaxation
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-yellow-500"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q25 5, 50 15 T100 15"
                stroke="currentColor"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
          </span>
          . Whether you choose a premium nail design or a soothing spa
          treatment, you&apos;re always making the right choice when you trust
          our salon experts.
        </p>
      </div>
    </section>
  );
}
