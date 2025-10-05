"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Settings, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate steps on scroll
      gsap.fromTo(
        ".process-step",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
          },
        }
      );

      // Animate vertical line with scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            markers: false,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />,
      title: "Book a Free Growth Call",
      description:
        "We learn about your salon/spa & your goals in a 15-minute consultation.",
    },
    {
      icon: <Settings className="h-6 w-6 sm:h-7 sm:w-7 text-white" />,
      title: "We Build Your Client Growth System",
      description:
        "Ads, booking pages, automations, reviews – everything custom-built for your business.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />,
      title: "You Get More Bookings on Auto-Pilot",
      description:
        "Sit back while clients roll in. Focus on what you do best – making clients beautiful.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-[#171817] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
        {/* LEFT SIDE - Sticky Content */}
        <div className="lg:h-screen">
          <div className="lg:sticky lg:top-20 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              How It Works –{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                3 Easy Steps
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-md">
              A simple, proven process to grow your salon or spa with
              confidence.
            </p>

            <div className="p-4 sm:p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
              <p className="text-sm sm:text-base text-yellow-400 font-semibold">
                Ready to get started? The next step is just one click away.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Scrollable Steps with Line */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical Line Container */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700 overflow-hidden">
            <div
              ref={lineRef}
              className="absolute left-0 top-0 w-px bg-gradient-to-b from-yellow-400 to-yellow-600 origin-top"
              style={{ height: "100%" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-10 sm:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="process-step relative pl-4 sm:pl-6 flex flex-col gap-3 sm:gap-4"
              >
                <div
                  className="
                    relative overflow-hidden border border-white/20 shadow-lg
                    bg-gradient-to-br from-neutral-900/60 to-neutral-800/40
                    rounded-2xl backdrop-blur-md
                    hover:scale-[1.02] transition-transform duration-300
                  "
                >
                  {/* Card Content */}
                  <div className="relative z-10 p-4 sm:p-8">
                    <div className="border-l-4 border-yellow-500 pl-4 sm:pl-6">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center border border-yellow-500/30">
                          {step.icon}
                        </div>
                        <h3 className="text-lg sm:text-2xl font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed sm:leading-relaxed pl-12 sm:pl-16">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
