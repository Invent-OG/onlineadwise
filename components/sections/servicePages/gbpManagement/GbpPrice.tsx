"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-black to-yellow-400 text-white relative overflow-hidden">
      {/* Subtle radial yellow glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            GBP (Google Business Profile) Management
          </h2>
          <p className="text-gray-300 mt-2">Boost Local Visibility & Trust.</p>
        </div>

        {/* Pricing Card */}
        <div className="relative max-w-3xl mx-auto flex flex-col md:flex-row bg-gradient-to-br from-gray-900 via-black to-gray-950 rounded-3xl border border-yellow-500/30 shadow-[0_0_25px_rgba(255,215,0,0.1)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,215,0,0.25)] hover:border-yellow-400/50">
          {/* Left Yellow Gradient Stripe */}
          <div className="w-full md:w-2/12 bg-gradient-to-b from-yellow-400 to-yellow-600 flex justify-center items-center p-6 md:p-0">
            <div className="rotate-0 md:-rotate-90">
              <p className="text-black font-semibold text-lg tracking-wide">
                Local SEO Boost
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-10/12 p-8 md:p-10 text-left">
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              Your GBP is the foundation of local credibility. I optimize every
              element — photos, keywords, reviews, and service categories — to
              improve map rankings, call inquiries, and walk-ins.
            </p>

            <ul className="text-gray-300 text-sm md:text-base space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-400 mt-1" />
                Full audit & keyword-optimized business info
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-400 mt-1" />
                Service and category optimization
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-400 mt-1" />
                Weekly post updates & offers
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-400 mt-1" />
                Review response strategy and automation
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-400 mt-1" />
                Insights & performance reporting
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-4xl font-bold text-yellow-400">$199</p>
                <p className="text-sm text-gray-400">per month</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">
                  Add-on:{" "}
                  <span className="font-semibold text-yellow-400">
                    Review Automation Setup
                  </span>{" "}
                  ($99 one-time)
                </p>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <Link href="#">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
