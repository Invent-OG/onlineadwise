"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PainPoints() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text fade-in on scroll (always)
      gsap.fromTo(
        ".pain-points-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Image zoom only on desktop (md and up)
      if (window.innerWidth >= 768) {
        gsap.fromTo(
          imageRef.current,
          { scale: 0.7, borderRadius: "1rem" },
          {
            scale: 3,
            borderRadius: "0rem",
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 3,
              pin: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#171817]"
    >
      {/* Overlay only for desktop (with bg image) */}
      <div className="hidden md:block absolute inset-0 bg-black/80 pointer-events-none" />

      {/* Desktop Layout */}
      <div className="hidden md:block w-full h-screen relative">
        {/* Right Image Section */}
        <div
          ref={imageRef}
          className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center shadow-lg"
          style={{
            backgroundImage:
              "url('https://antdisplay.com/pub/media/magefan_blog/hair_styling_shop_2_.jpg')",
          }}
        ></div>

        {/* Text Content Left */}
        <div className="relative z-10 h-full flex items-center px-10 lg:px-20">
          <div className="pain-points-text max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-snug">
              We Know What You&rsquo;re{" "}
              <span className="text-yellow-400">Going Through</span>
            </h2>
            <p className="text-lg font-semibold text-white mb-6">
              These are the exact frustrations that salon owners share with us
              every day. Scroll down to watch how your challenges transform into
              opportunities.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
            >
              Let&rsquo;s Fix These Problems Together
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout (centered, no extra space) */}
      <div className="md:hidden flex flex-col justify-evenly items-center gap-16 w-full min-h-screen px-6 relative z-10 bg-[#171817]">
        {/* Text First */}
        <div className="pain-points-text text-start">
          <h2 className="text-3xl font-bold text-white mb-8 leading-snug">
            We Know What You&rsquo;re{" "}
            <span className="text-yellow-400">Going Through</span>
          </h2>
          <p className="text-lg text-gray-300 py-2 mb-8">
            These are the exact frustrations that salon owners share with us
            every day. Scroll down to watch how your challenges transform into
            opportunities.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-6 py-3 rounded-xl text-base hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
          >
            Let&rsquo;s Fix These Problems Together
          </button>
        </div>

        {/* Image Below */}
        <div
          className="w-full max-w-md h-64 bg-cover bg-center  shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
          }}
        ></div>
      </div>
    </section>
  );
}
