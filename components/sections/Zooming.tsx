"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const heroRef = useRef(null);

  const [bgPosition, setBgPosition] = useState("center center");

  // Update background position on resize
  useEffect(() => {
    const updateBgPosition = () => {
      if (window.innerWidth < 640) {
        setBgPosition("10% left"); // shift left on mobile
      } else if (window.innerWidth < 1024) {
        setBgPosition("center center"); // medium screens
      } else {
        setBgPosition("center center"); // desktop
      }
    };

    updateBgPosition();
    window.addEventListener("resize", updateBgPosition);
    return () => window.removeEventListener("resize", updateBgPosition);
  }, []);

  // GSAP Scroll Zoom
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
          markers: true, // remove in production
        },
      });

      // Image zoom
      timeline.to(imageRef.current, {
        scale: window.innerWidth < 640 ? 3.5 : 5.5, // smaller zoom on mobile
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      });

      // Hero background zoom
      timeline.to(
        heroRef.current,
        {
          scale: window.innerWidth < 640 ? 1.05 : 1.1, // smaller zoom on mobile
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full z-10">
      {/* Hero Background Section */}
      <div className="relative w-full z-10 overflow-x-hidden">
        <section
          ref={heroRef}
          className="w-full h-screen bg-cover"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7755659/pexels-photo-7755659.jpeg?_gl=1*6k5i25*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTU5NTE2MDkkbzEzJGcxJHQxNzU1OTUzNTE1JGo2MCRsMCRoMA..')",
            backgroundPosition: bgPosition,
          }}
        ></section>
      </div>

      {/* Overlay Image */}
      <div className="absolute top-0 left-0 w-full h-screen z-20 overflow-hidden perspective-[500px]">
        <img
          ref={imageRef}
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
