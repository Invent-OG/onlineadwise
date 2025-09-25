"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GbpSecond() {
  const componentRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge
      gsap.from(badgeRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Title
      const titleWords = titleRef.current?.querySelectorAll("span") ?? [];
      gsap.from(titleWords, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      // Text
      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      // Stats
      gsap.from(statsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current[0],
          start: "top 85%",
        },
      });

      // CTA card
      gsap.from(ctaRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
      });

      // Floating animation
      gsap.to(ctaRef.current, {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const addToStatsRef = (el: any) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <div
      ref={componentRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            ref={badgeRef}
            className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-6"
          >
            GBP Management
          </div>

          <h1
            ref={titleRef}
            className="text-4xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight"
          >
            {`Boost Local Visibility and Drive Customers with GBP Management`
              .split(" ")
              .map((word, index) => (
                <span key={index} className="inline-block mr-2">
                  {word}
                </span>
              ))}
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-10">
            <p ref={textRef} className="text-lg text-slate-700 leading-relaxed">
              Our GBP management services help local businesses appear at the
              top of search results, attract more customers, and manage reviews
              effectively. From profile optimization to post management, we
              handle everything to grow your online presence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                ref={addToStatsRef}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  500+
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase">
                  Profiles Optimized
                </div>
              </div>

              <div
                ref={addToStatsRef}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  1M+
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase">
                  Views Generated
                </div>
              </div>

              <div
                ref={addToStatsRef}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  95%
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="lg:sticky lg:top-8">
            <div
              ref={ctaRef}
              className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200"
            >
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Free GBP Audit
                </h3>
                <p className="text-slate-600 text-sm">
                  Discover how your business can dominate local search results
                </p>
              </div>

              <button className="w-full bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-md uppercase text-sm">
                Schedule Your Free Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GbpSecond;
