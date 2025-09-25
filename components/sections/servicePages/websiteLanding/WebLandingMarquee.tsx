"use client";
import React from "react";
import Image from "next/image";

function WebLandingMarquee() {
  // Replace these paths with your actual asset image names
  const images = [
    "/assets/partnerNames/avvo-award.webp",
    "/assets/partnerNames/bing-partner.webp",
    "/assets/partnerNames/download-removebg-preview.webp",
    "/assets/partnerNames/forbes-logo.webp",
    "/assets/partnerNames/moz-partner-logo.webp",
  ];

  return (
    <div className="w-full bg-black overflow-hidden py-8">
      <div className="flex animate-marquee space-x-12">
        {[...images, ...images].map((src, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              src={src}
              alt={`service-${i}`}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebLandingMarquee;
