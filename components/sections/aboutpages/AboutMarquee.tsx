"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AboutMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.scrollWidth / 2; // half because content is duplicated

    // GSAP animation: move to right infinitely
    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(
      marquee,
      { x: -marqueeWidth },
      { x: 0, duration: 20, ease: "linear" }
    );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white py-6">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        style={{ display: "inline-flex" }}
      >
        {/* First copy */}
        <div className="flex items-center">
          <span className="mx-6 text-lg font-extrabold text-black">
            ▪ SEARCH ENGINE OPTIMIZATION
          </span>
          <span className="mx-6 text-lg font-extrabold text-black">
            ▪ WEBSITE & LANDING
          </span>
          <span className="mx-6 text-lg font-extrabold text-black">
            ▪ PAID ADS
          </span>
          <span className="mx-6 text-lg font-extrabold text-black">
            ▪ CRM & AUTOMATION
          </span>
          <span className="mx-6 text-lg font-extrabold text-black">
            ▪ LOCAL SEO
          </span>
        </div>

        {/* Duplicate copy for seamless loop */}
        <div className="flex items-center">
          <span className="mx-6 text-lg font-extrabold text-black">
            ▪ SEARCH ENGINE OPTIMIZATION
          </span>
          <span className="mx-6 text-lg font-extrabold text-black">
            ▪ WEBSITE & LANDING
          </span>
          <span className="mx-6 text-lg font-extrabold text-black">
            ▪ PAID ADS
          </span>
          <span className="mx-6 text-lg font-extrabold text-black">
            ▪ CRM & AUTOMATION
          </span>
          <span className="mx-6 text-lg font-extrabold text-black">
            ▪ LOCAL SEO
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMarquee;
