"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const shapesRef = useRef<HTMLDivElement[]>([]);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
  ];

  useEffect(() => {
    if (
      heroRef.current &&
      headlineRef.current &&
      subheadlineRef.current &&
      ctaRef.current
    ) {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });

      // Animate headline and subheadline
      tl.from(headlineRef.current, { y: 50, opacity: 0 })
        .from(subheadlineRef.current, { y: 30, opacity: 0 }, "-=0.5")
        .from(ctaRef.current, { scale: 0.9, opacity: 0 }, "-=0.3");

      // Floating shapes animation
      shapesRef.current.forEach((shape, i) => {
        gsap.to(shape, {
          y: i % 2 === 0 ? 20 : -20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 2 + i,
          delay: i * 0.3,
        });
      });
    }

    // Auto-slide images every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden text-center"
    >
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1
          ref={headlineRef}
          className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
        >
          Creative Solutions, Real Impact
        </h1>
        <p
          ref={subheadlineRef}
          className="text-white text-md md:text-lg mb-6 leading-relaxed"
        >
          Building innovative products that make a difference.
        </p>
        <a
          ref={ctaRef}
          href="#about"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          Learn More
        </a>
      </div>

      {/* Floating Decorative Shapes */}
      <div
        ref={(el) => el && shapesRef.current.push(el)}
        className="absolute w-28 h-28 bg-yellow-400 rounded-full opacity-20 -top-10 -left-10 mix-blend-multiply"
      ></div>
      <div
        ref={(el) => el && shapesRef.current.push(el)}
        className="absolute w-24 h-24 bg-yellow-400 rounded-full opacity-25 bottom-20 -right-12 mix-blend-multiply"
      ></div>
      <div
        ref={(el) => el && shapesRef.current.push(el)}
        className="absolute w-20 h-20 bg-yellow-400 rounded-full opacity-20 top-1/2 -right-10 mix-blend-multiply"
      ></div>
      <div
        ref={(el) => el && shapesRef.current.push(el)}
        className="absolute w-28 h-28 bg-yellow-400 rounded-full opacity-20 bottom-10 -left-16 mix-blend-multiply"
      ></div>
    </section>
  );
}

export default AboutHero;
