"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data/servicesdata";

gsap.registerPlugin(ScrollTrigger);

export default function SalonMarketing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !wrapper) return;

    if (window.innerWidth < 768) return; // disable GSAP horizontal scroll on mobile

    // Equal height for all cards
    const cards = Array.from(container.children) as HTMLElement[];
    let maxHeight = 0;
    cards.forEach((card) => {
      if (card.offsetHeight > maxHeight) maxHeight = card.offsetHeight;
    });
    cards.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
    wrapper.style.height = `${maxHeight + 40}px`;

    // Extra space so last card comes to center before scroll ends
    const extraSpace = window.innerWidth / 2; // adjust if you want fixed px (e.g. 150)
    const totalScrollWidth =
      container.scrollWidth - wrapper.clientWidth + extraSpace;

    // Horizontal scroll effect
    gsap.to(container, {
      x: -totalScrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="bg-[#171817] text-white py-20 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Explore Our Salon & Spa Services
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Scroll down to explore our premium services with style.
        </p>
      </div>

      {/* Mobile Accordion Layout */}
      <div className="space-y-4 md:hidden">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#222] to-[#111] rounded-xl shadow-md"
          >
            {/* Accordion Header */}
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-lg font-semibold">{service.title}</span>
              <span className="text-yellow-500 text-xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            {/* Accordion Body */}
            {openIndex === i && (
              <div className="px-4 pb-4 text-gray-300 space-y-3">
                <p>{service.desc}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {service.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
                <p className="text-yellow-500 font-semibold">
                  ✨ {service.result}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Horizontal Scroll Layout */}
      <div
        ref={wrapperRef}
        className="relative w-full hidden md:flex items-center overflow-hidden"
      >
        <div ref={containerRef} className="flex gap-8">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-[#222] to-[#111] rounded-2xl p-8 w-[300px] lg:w-[350px] shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 flex-shrink-0 flex flex-col"
              >
                {/* Title */}
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>

                {/* Description with Read More */}
                <p
                  className={`text-gray-300 mb-4 ${
                    !isExpanded ? "line-clamp-3" : ""
                  }`}
                >
                  {service.desc}
                </p>

                {/* Points */}
                <ul className="text-gray-400 list-disc list-inside space-y-1 mb-3 flex-1">
                  {service.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>

                {/* Result */}
                <p className="text-yellow-500 font-semibold">
                  ✨ {service.result}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
