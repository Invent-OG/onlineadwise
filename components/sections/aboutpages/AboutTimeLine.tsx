"use client";
import React, { useEffect, useRef } from "react";
import { Flag } from "lucide-react";
import gsap from "gsap";

function AboutTimeLine() {
  const milestones = [
    {
      title: "First Product Launch",
      description:
        "Launched our first product that quickly gained customer trust.",
    },
    {
      title: "International Expansion",
      description: "Expanded our services to multiple countries worldwide.",
    },
    {
      title: "Award Recognition",
      description:
        "Received industry recognition for our innovation and growth.",
    },
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const items = marquee.querySelectorAll(".marquee-item");

      const totalWidth = Array.from(items).reduce(
        (acc, item) => acc + (item as HTMLElement).offsetWidth + 32,
        0
      );

      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "linear" },
      });

      tl.to(marquee, {
        x: -totalWidth / 2,
        duration: 25,
      });

      // Pause on hover
      marquee.addEventListener("mouseenter", () => tl.pause());
      marquee.addEventListener("mouseleave", () => tl.play());

      return () => {
        tl.kill();
      };
    }
  }, []);

  const marqueeItems = [...milestones, ...milestones];

  return (
    <div className="bg-white pt-16 md:pt-24 pb-16 md:pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 md:mb-2 text-gray-900">
          Our Milestones
        </h2>
        <p className="text-gray-600 text-center mb-8 font-handwritten text-2xl font-bold ">
          Our clients and their customers always come first.
        </p>

        {/* GSAP Marquee for all screen sizes */}
        <div className="relative overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex space-x-6 md:space-x-8 will-change-transform cursor-pointer"
          >
            {marqueeItems.map((milestone, index) => (
              <div
                key={index}
                className="marquee-item relative flex-shrink-0 bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-64 sm:w-72 md:w-80 border border-gray-100"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 mt-4 md:mt-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                    <Flag className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 text-center text-sm md:text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTimeLine;
