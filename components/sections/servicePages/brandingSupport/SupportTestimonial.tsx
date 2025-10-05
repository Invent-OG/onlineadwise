"use client";
import React, { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { gsap } from "gsap";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechSolutions",
    rating: 5,
    comment:
      "Outstanding service! GBP optimization significantly improved our local visibility and brought more clients.",
  },
  {
    name: "Sarah Lee",
    position: "Marketing Head, BrightAds",
    rating: 4,
    comment:
      "Very professional team. Their link-building and SEO strategies helped our rankings climb steadily.",
  },
  {
    name: "Michael Smith",
    position: "Founder, WebCreatives",
    rating: 5,
    comment:
      "Exceptional results and quick turnaround. Our website traffic increased dramatically after recommendations.",
  },
];

const SupportTestimonial = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const width = marquee.scrollWidth / 2;

    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(marquee, { x: 0 }, { x: -width, duration: 25, ease: "linear" });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full  overflow-hidden bg-black py-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16">
        What Our <span className="text-yellow-500">Clients Say</span>
      </h2>

      <div
        ref={marqueeRef}
        className="flex space-x-6 whitespace-nowrap px-6"
        style={{ display: "inline-flex" }}
      >
        {testimonials.concat(testimonials).map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-gray-900/10 p-6 md:p-8 rounded-2xl shadow-xl min-w-[280px] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 border border-gray-800"
          >
            {/* Reviewer Info */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col">
                <h3 className="text-white font-semibold text-base md:text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  {testimonial.position}
                </p>
              </div>
              <div className="flex space-x-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {testimonial.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportTestimonial;
