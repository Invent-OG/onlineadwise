"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = [
  "https://html.themexriver.com/victoria-spa/images/home-1/services/facial/massage.jpg",
  "https://html.themexriver.com/victoria-spa/images/home-1/services/body/body-massage.jpg",
  "https://html.themexriver.com/victoria-spa/images/home-1/services/foot/foot.jpg",
  "https://html.themexriver.com/victoria-spa/images/home-1/beautifull-spa.jpg",
];

function PortFolioContent() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-img", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".portfolio-text", {
        opacity: 0,
        x: 50,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".section-title", {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-gray-50"
    >
      {/* Background Texture */}
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://cdn.renderhub.com/rebrandy/white-crumpled-fabric-4-types-wrinkled-cotton-textile-set/white-crumpled-fabric-4-types-wrinkled-cotton-textile-set-01.jpg')] opacity-30 pointer-events-none" />

      {/* Section Title */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-800">
          Victoria{" "}
          <span className="text-yellow-500 font-handwritten text-6xl">&</span>{" "}
          Beauty Spa
        </h2>
        <div className="mt-2 w-20 h-1 bg-yellow-500 mx-auto rounded-full" />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={src}
                alt={`Spa Gallery ${index + 1}`}
                className="portfolio-img w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="portfolio-text">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Discover the{" "}
            <span className="text-yellow-500 font-handwritten text-5xl">
              Art of Wellness
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Step into a sanctuary of serenity where mind, body, and spirit come
            together in harmony. Our spa and wellness experiences are designed
            to help you unwind, rejuvenate, and reconnect with yourself. From
            traditional therapies to modern treatments, every detail is crafted
            to ensure your ultimate relaxation.
          </p>
          <a
            href="https://html.themexriver.com/victoria-spa/?storefront=envato-elements"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg shadow-md hover:bg-yellow-400 transition">
              Explore More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortFolioContent;
