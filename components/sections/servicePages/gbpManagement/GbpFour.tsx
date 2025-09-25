"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GbpFour() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );

      // Text animation
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
          },
        }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        }
      );

      // Floating animation for main image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: "🚀",
      title: "Fast Loading",
      description:
        "Lightning-fast websites that rank higher and convert better",
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description: "Perfect experience on all devices and screen sizes",
    },
    {
      icon: "🔍",
      title: "SEO Optimized",
      description: "Built with search engine optimization from the ground up",
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Enterprise-level security with 99.9% uptime guarantee",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#F9D54A] via-[#FFE580] to-[#F9D54A] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-black rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-black rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-black rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-[#ffffff] px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Premium Web Design
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Stunning Websites That{" "}
            <span className="text-transparent bg-clip-text bg-black">
              Convert Visitors
            </span>
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Transform your online presence with custom-designed websites that
            drive results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Text Content */}
          <div ref={textRef} className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Complete Web Design Solution
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                While your Google Business Profile drives local traffic, a
                powerful website converts those visitors into loyal customers.
                We create stunning, high-performance websites that work
                seamlessly with your GBP strategy.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Our comprehensive package includes{" "}
                <span className="font-bold text-black">5 core pages</span> + up
                to{" "}
                <span className="font-bold text-black">
                  10 location or service pages
                </span>{" "}
                — all for a one-time investment of{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-xl">
                  $1,999
                </span>
                .
              </p>
              <div className="bg-yellow-500 text-white px-6 py-4 rounded-xl font-semibold text-center">
                🎯 Perfect Pair: Combine with our GBP + Website Management for
                hands-free success!
              </div>
            </div>

            {/* Features Grid */}
            <div
              ref={cardsRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card bg-black/90 text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl  transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Mockup Browser Window */}
              <div className="bg-gray-200 rounded-t-lg p-3 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Website Mockup Content */}
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg p-6 text-white">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2">Your Business</div>
                  <div className="text-lg">Professional Web Presence</div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="bg-white/20 rounded p-3 text-center"
                    >
                      <div className="font-bold">Feature {item}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-black/30 rounded p-4 text-center">
                  🚀 Ready to Transform Your Online Presence?
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
              Mobile Ready
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm transform -rotate-12">
              SEO Friendly
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center">
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Dream Website?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a custom-designed website that works 24/7 to grow your
              business. Perfect when paired with our Google Business Profile
              management services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#F9D54A] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                🚀 Get Your Website Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
                📞 Schedule a Call
              </button>
            </div>

            <div className="mt-6 text-yellow-300 font-semibold">
              ⭐ Limited Time: Free SEO Audit with Every Website Purchase!
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Angled Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 120 1200 120z"
            className="fill-white"
            style={{ filter: "drop-shadow(0 -2px 4px rgba(0,0,0,0.1))" }}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default GbpFour;
