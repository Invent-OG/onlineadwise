"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

function HomeMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const images = [
    "/assets/partnerNames/avvo-award.webp",
    "/assets/partnerNames/bing-partner.webp",
    "/assets/partnerNames/download-removebg-preview.webp",
    "/assets/partnerNames/forbes-logo.webp",
    "/assets/partnerNames/moz-partner-logo.webp",
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2; // duplicated images
    const duration = totalWidth / 50; // adjust speed (px/sec)

    // Animate from -totalWidth to 0 for left-to-right scroll
    gsap.fromTo(
      marquee,
      { x: -totalWidth },
      {
        x: 0,
        duration: duration,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-[#171817] overflow-hidden py-8">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {[...images, ...images].map((src, i) => (
          <div key={i} className="flex-shrink-0 mx-6">
            <Image
              src={src}
              alt={`partner-${i}`}
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeMarquee;
