"use client";
import React from "react";

const MarqueeText = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#171817] py-10">
      <div className="flex whitespace-nowrap animate-marquee">
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

export default MarqueeText;
