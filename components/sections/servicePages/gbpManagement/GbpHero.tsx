"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function HeroFullBG() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Animate headline
    gsap.fromTo(
      ".headline span",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
    );

    // Subtitle fade in
    gsap.fromTo(
      ".sub-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" }
    );

    // Buttons pop in
    gsap.fromTo(
      ".cta-btn",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        delay: 1.2,
        ease: "back.out(1.5)",
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-6 md:px-12">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80"
          alt="Background"
          fill
          className="object-cover object-center"
        />
        {/* Left-side black gradient shadow */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-3xl text-center space-y-8">
        {/* Headline */}
        <h1 className="headline text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="block text-yellow-500">GBP Management</span>
        </h1>

        {/* Subtitle */}
        <p className="sub-text text-gray-300 text-lg md:text-xl tracking-wide">
          Your practice area and geographic location are unique. While digital
          advertising does have some “absolutes” in terms of best practices, we
          also recognize that every client needs a customized strategy to fit
          their business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          {/* Let’s Talk Button */}
          <button className="cta-btn flex items-center justify-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 8l10 6 10-6-10-6-10 6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 16l10 6 10-6"
              />
            </svg>
            LET&apos;S TALK
          </button>

          {/* Play Video Button */}
          <button
            onClick={() => setShowVideo(true)}
            className="cta-btn flex items-center justify-center gap-2 border border-yellow-500 text-yellow-500 px-6 py-3 rounded-md font-semibold text-lg shadow hover:shadow-lg transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 3v18l15-9L5 3z" />
            </svg>
            PLAY VIDEO
          </button>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative w-full max-w-3xl p-4">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-white text-2xl font-bold"
              >
                &times;
              </button>
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
