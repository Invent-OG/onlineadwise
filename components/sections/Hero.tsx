"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type"; // npm install split-type
import { ArrowRight, ArrowRightIcon, Play } from "lucide-react";
import { StarBorder } from "@/components/ui/star-border";
import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!titleRef.current) return;

      // Split heading text into characters
      const split = new SplitType(titleRef.current, { types: "chars" });

      // Animate heading letters
      gsap.fromTo(
        split.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: 90,
          transformOrigin: "50% 100%",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.05,
        }
      );

      // Animate subtitle & CTA after heading
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.2 }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.5 }
      );

      // Floating background elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      return () => split.revert();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Shader Background */}
      <div className="absolute inset-0 pointer-events-none">
        <ShaderAnimation />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-10 blur-xl"></div>
        <div className="floating-element absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-10 blur-xl"></div>
        <div className="floating-element absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-20 blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center text-white my-5 justify-center px-4 py-1 border border-white/60 bg-white/20 rounded-full transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Welcome to the Future of Nail &amp; Spa Marketing</span>
            <ArrowRightIcon className="ml-1 size-3" />
          </div>

          {/* Animated Heading */}
          <h2
            ref={titleRef}
            className="relative text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight 
             text-white /* fallback text */
             bg-gradient-to-r from-yellow-400 via-white to-yellow-400 
             bg-clip-text text-transparent animate-shimmer"
          >
            From Empty Chairs to a Fully Booked Calendar – We Make It Happen.
          </h2>

          {/* Sub-heading */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We help Nail Salons &amp; Spas attract high-paying repeat clients
            using Meta Ads, Google Ads, and Smart Automation Systems &ndash;
            proven strategies that work in the U.S. beauty &amp; wellness
            industry.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <StarBorder
              color="hsl(45, 93%, 47%)"
              speed="4s"
              className="w-full sm:w-auto"
            >
              <div className="flex items-center justify-center">
                Book Your Free Growth Call Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </StarBorder>
            <StarBorder
              color="hsl(45, 93%, 47%)"
              speed="5s"
              className="w-full sm:w-auto"
            >
              <div className="flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </div>
            </StarBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
