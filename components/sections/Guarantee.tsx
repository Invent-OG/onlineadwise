"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Trophy, Zap, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Guarantee() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".guarantee-element",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 10%",
          },
        }
      );

      gsap.to(".icon-bounce", {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <div className="guarantee-element mb-16">
            <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-yellow-300/20 to-yellow-400/20 rounded-full px-6 py-2 mb-6">
              <Star className="h-6 w-6 text-yellow-500 icon-bounce" />
              <span className="text-yellow-500 font-semibold">
                100% Risk-Free
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Our Iron-Clad{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Guarantee
              </span>
            </h2>
          </div>

          {/* Main Guarantee Card */}
          <div className="guarantee-element bg-gray-50 rounded-3xl p-12 md:p-20 border border-yellow-300/30 shadow-lg mb-16 relative overflow-hidden">
            {/* Animated Gold Spark */}
            <div className="absolute -top-10 left-10 w-24 h-24 bg-yellow-300/20 rounded-full filter blur-2xl animate-pulse-slow"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-200/10 rounded-full filter blur-3xl animate-pulse-slow"></div>

            <div className="mb-8">
              <Trophy className="h-28 w-28 text-yellow-500 mx-auto icon-bounce" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              &ldquo;If we don’t deliver at least 20 new bookings in your first
              month, we’ll work for free until we do.&rdquo;
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-10">
              We’re so confident in our system that we’re willing to put our
              money where our mouth is.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-10 mb-10">
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-2xl border border-yellow-300/20 hover:scale-105 transition-transform shadow-sm">
                <Zap className="h-10 w-10 text-yellow-500" />
                <p className="text-gray-700 font-medium">
                  No long-term contracts
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-2xl border border-yellow-300/20 hover:scale-105 transition-transform shadow-sm">
                <Heart className="h-10 w-10 text-yellow-500" />
                <p className="text-gray-700 font-medium">Cancel anytime</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-2xl border border-yellow-300/20 hover:scale-105 transition-transform shadow-sm">
                <Star className="h-10 w-10 text-yellow-500" />
                <p className="text-gray-700 font-medium">
                  Full refund available
                </p>
              </div>
            </div>

            <div className="bg-yellow-100/30 rounded-xl p-6 border border-yellow-300/30">
              <p className="text-lg text-gray-900">
                <strong>Here’s what this means:</strong> You have absolutely
                nothing to lose and everything to gain. Either your salon gets
                booked solid, or we keep working until it does – for FREE.
              </p>
            </div>
          </div>

          {/* Why We Can Offer This */}
          <div className="guarantee-element bg-gray-100/80 rounded-3xl p-12 md:p-16 border border-gray-300/40 mb-16">
            <h4 className="text-2xl font-bold text-yellow-500 mb-8">
              Why We Can Offer This Guarantee
            </h4>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                "We’ve done this for 100+ salons successfully",
                "Our average client gets 200% more bookings",
                "95% of our clients renew after the first month",
                "We only work with salons we know we can help",
              ].map((text, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="guarantee-element mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              The only question left is: Are you ready to finally have a fully
              booked salon?
            </p>

            {/* CTA Button with gold glow and hover animation */}
            <div className="relative inline-block group">
              {/* Glowing gradient border */}
              <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 blur opacity-50 group-hover:opacity-100 transition duration-700"></div>

              <button className="relative flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-white border border-yellow-500/40 text-gray-900 font-semibold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:border-yellow-500 shadow-md">
                Get Started Risk-Free Today
                {/* Inline SVG arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-500 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
