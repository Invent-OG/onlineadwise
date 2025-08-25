"use client";

import React from "react";
import { packages } from "@/lib/data/servicespackages";
import { CheckCircle, Sparkles, Star, Crown } from "lucide-react"; // using lucide icons

export default function PackagesSection() {
  // icon set (cycling through for variety)
  const icons = [CheckCircle, Sparkles, Star, Crown];

  return (
    <section className="w-full bg-[#171817] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16">
          Our Marketing Packages
        </h2>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {packages.map((pkg, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="relative bg-[#1f1f1f] rounded-2xl shadow-[0_0_10px_rgba(255,215,0,0.4)] border border-yellow-600/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] transition-all duration-300 p-8 flex flex-col"
              >
                {/* Title */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Icon className="text-yellow-400 w-6 h-6" />
                  <h3 className="text-2xl font-semibold text-yellow-300">
                    {pkg.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="flex-1 space-y-4 text-left">
                  {pkg.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 text-base"
                    >
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="mt-8 flex justify-center">
                  <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                    Choose Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
