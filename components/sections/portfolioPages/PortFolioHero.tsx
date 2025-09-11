"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    image:
      "https://html.themexriver.com/victoria-spa/images/home-1/slider/slider-1.jpg",
  },
  {
    image:
      "https://html.themexriver.com/victoria-spa/images/home-1/slider/slider-2.jpg",
  },
];

function PortFolioHero() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideIndex = useRef(0);
  const [currentImage, setCurrentImage] = useState(slides[0].image);

  useEffect(() => {
    const interval = setInterval(() => {
      slideIndex.current = (slideIndex.current + 1) % slides.length;
      setCurrentImage(slides[slideIndex.current].image);

      if (sliderRef.current) {
        gsap.to(sliderRef.current, {
          backgroundImage: `url(${slides[slideIndex.current].image})`,
          duration: 1.5,
          ease: "power3.inOut",
        });
      }
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug">
          Our <span className="text-yellow-500 font-handwritten text-7xl">Portfolios</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Providing brilliant ideas for your business.
        </p>
      </div>
    </div>
  );
}

export default PortFolioHero;
