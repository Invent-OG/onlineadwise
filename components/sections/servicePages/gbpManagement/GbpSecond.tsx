"use client";
import Image from "next/image";
import React from "react";

export default function GbpSecond() {
  return (
    <section className="relative bg-[#F9D54A] overflow-hidden">
      {/* Top Angled Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M0,0 L1200,0 L0,120 Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Bottom Angled Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M0,0 L1200,0 L0,120 Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="https://gbpgeeks.com/wp-content/uploads/2025/07/GBP-Management-Services.png"
            alt="Google Business Profile Management Illustration"
            width={500}
            height={500}
            className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] h-auto"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            Google Business <br className="hidden sm:block" />
            Profile Management
          </h1>

          <p className="text-gray-900 mt-6 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            With our GBP management service, we allow you to focus on running
            your business, while we focus on driving leads to it. See our full
            list of Google Business Profile plan features below!
          </p>

          <button className="mt-8 bg-black text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-sm shadow-md hover:bg-gray-900 transition">
            See Plans
          </button>
        </div>
      </div>
    </section>
  );
}
