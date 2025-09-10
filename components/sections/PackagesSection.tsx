"use client";

import React, { useEffect, useRef } from "react";
import { packages } from "@/lib/data/servicespackages";
import { ShieldCheck, Rocket, Crown, Check } from "lucide-react";
import gsap from "gsap";

export default function PackagesSection() {
  const icons = [ShieldCheck, Rocket, Crown];
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    iconRefs.current.forEach((icon, index) => {
      if (!icon) return;
      const card = icon.closest(".package-card");
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.3,
            y: -10,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(card, {
            backgroundColor: "#1f1f1f",
            y: -5,
            boxShadow: "0 10px 25px rgba(255,215,0,0.2)",
            duration: 0.4,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          });
          gsap.to(card, {
            backgroundColor: "#111111",
            y: 0,
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            duration: 0.4,
            ease: "power3.out",
          });
        });
      }
    });
  }, []);

  return (
    <section className="w-full bg-[#171817] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Your Growth Journey
        </h2>
        <p className="text-gray-400 text-lg mb-20">
          Start small and scale big — upgrade your package as your business
          grows.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {packages.map((pkg, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="package-card flex-1 flex flex-col items-center bg-[#111111] border border-gray-800 rounded-sm shadow-lg p-8 w-[320px] h-[480px] text-left transition-all duration-300"
              >
                {/* Circle Icon */}
                <div
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-black shadow-lg mb-6"
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Card Content */}
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  {pkg.title}
                </h3>
                <ul className="space-y-3">
                  {pkg.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <Check className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
