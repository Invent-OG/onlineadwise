"use client";
import React, { useEffect, useRef } from "react";

export default function GbpThird() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      // Parallax scroll effect
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);
          gsap.to(bgRef.current, {
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: bgRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
    }
  }, []);

  return (
    <section className="relative bg-white overflow-hidden py-20 px-6 md:px-12">
      {/* Background texture grid with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          GBP Management Plans
        </h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 justify-center">
          {/* Card 1 */}
          <div className="bg-black text-white rounded-3xl shadow-lg p-8 md:p-10 text-left">
            <span className="inline-block bg-white text-black font-semibold px-4 py-1 rounded text-sm mb-4">
              6 Month Contract - GBP Management
            </span>
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-white text-black px-3 py-1 rounded">
                $599/month
              </span>
            </h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li>Full GBP Audit</li>
              <li>GBP Keyword Research</li>
              <li>Competitor Analysis</li>
              <li>Google Business Profile Checklist</li>
              <li>Google Map Optimization</li>
              <li>Manually Built Local Citations</li>
              <li>Optimize Photos & Videos</li>
              <li>GBP Review Management</li>
              <li>3 Scheduled GBP Posts</li>
              <li>Local Link Building</li>
              <li>Local Analytics Reports</li>
              <li>
                <span className="italic">*City Exclusivity*</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-yellow-500 text-black font-semibold py-3 rounded-sm hover:bg-yellow-400 transition">
              Schedule A Call With Us
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-black text-white rounded-2xl shadow-lg p-8 md:p-10 text-left">
            <span className="inline-block bg-white text-black font-semibold px-4 py-1 rounded text-sm mb-4">
              6 Month Contract - GBP + Website Management
            </span>
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-white text-black px-3 py-1 rounded">
                $1,199/month
              </span>
            </h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li>Everything in the GBP Plan +</li>
              <li>Full Website Audit</li>
              <li>Local Website Keyword Research</li>
              <li>Local Focused On-Site Optimization</li>
              <li>High Authority Link Building</li>
              <li>1 Optimized Blog Post</li>
              <li>Premium Web Hosting</li>
              <li>Website WordPress Plugin Updates</li>
              <li>Website WordPress Theme Updates</li>
              <li>GBP Linked To Your Website (For Tracking)</li>
              <li>Website Analytics Reports</li>
              <li>
                <span className="italic">*City Exclusivity*</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-yellow-500 text-black font-semibold py-3 rounded-sm hover:bg-yellow-400 transition">
              Schedule A Call With Us
            </button>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-black font-semibold mt-12 text-sm md:text-base">
          *Each Additional GBP Location Is $499/month*
        </p>
      </div>
    </section>
  );
}
