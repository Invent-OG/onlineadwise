"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const PaidMarquee = () => {
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
    <div className="relative w-full overflow-hidden bg-[#000000] py-10">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        style={{ display: "inline-flex" }}
      >
        {/* First copy */}
        <div className="flex items-center">
          <span className="mx-6 text-lg font-extrabold text-white">
            ▪{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              SEARCH ENGINE OPTIMIZATION
            </span>
          </span>
          <span className="mx-6 text-lg font-extrabold text-white">
            ▪{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              WEBSITE & LANDING
            </span>
          </span>
          <span className="mx-6 text-lg font-extrabold text-white">
            ▪{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              PAID ADS
            </span>
          </span>
          <span className="mx-6 text-lg font-extrabold text-white">
            ▪{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              CRM & AUTOMATION
            </span>
          </span>
          <span className="mx-6 text-lg font-extrabold text-white">
            ▪{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              LOCAL SEO
            </span>
          </span>
        </div>

        {/* Duplicate copy for seamless loop */}
        <div className="flex items-center">
          <span className="mx-6 text-lg font-extrabold text-white">
            ▪{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              SEARCH ENGINE OPTIMIZATION
            </span>
          </span>
          <span className="mx-6 text-lg font-extrabold text-white">
            ▪{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              WEBSITE & LANDING
            </span>
          </span>
          <span className="mx-6 text-lg font-extrabold text-white">
            ▪{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              PAID ADS
            </span>
          </span>
          <span className="mx-6 text-lg font-extrabold text-white">
            ▪{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              CRM & AUTOMATION
            </span>
          </span>
          <span className="mx-6 text-lg font-extrabold text-white">
            ▪{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              LOCAL SEO
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaidMarquee;
