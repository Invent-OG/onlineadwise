"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

function GbpFour() {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="relative bg-[#F9D54A] overflow-hidden">
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Web Design Services
          </h2>
          <p className="text-base md:text-lg text-black leading-relaxed mb-6">
            Does your business need a modern website to go along with your
            Google Business Profile? We can help! As a separate service to the
            ones listed above, we also offer affordable web design services as
            well. Typically our plans include 5 core pages + up to 10 location
            or service pages all for a one time cost of{" "}
            <span className="font-bold">$1,999 per website</span>. After
            purchasing a website it’s a natural fit to take advantage of our GBP
            + Website management package if you’d like a fully hands off
            experience. If you have questions feel free to contact us below!
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-sm font-semibold hover:bg-gray-900 transition">
            Contact Us
          </button>
        </div>

        {/* Right Side - Floating Image */}
        <div ref={imgRef} className="flex justify-center">
          <Image
            src="https://gbpgeeks.com/wp-content/uploads/2025/07/Web-Design-Services.png"
            alt="Web Design Services"
            width={500}
            height={500}
            className="w-full max-w-md object-contain"
          />
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
          <path d="M1200 0L0 120 1200 120z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}

export default GbpFour;
