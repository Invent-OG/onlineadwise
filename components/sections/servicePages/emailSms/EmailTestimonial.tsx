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
  {
    name: "Emily Johnson",
    position: "COO, MarketGenius",
    rating: 5,
    comment:
      "Their SEO expertise is top-notch! We saw a huge boost in leads and conversions.",
  },
  {
    name: "David Brown",
    position: "Founder, DesignHive",
    rating: 4,
    comment:
      "Great communication and consistent results. Highly recommend their services.",
  },
];

const EmailTestimonial = () => {
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
    <section className="relative w-full overflow-hidden bg-[#000000] py-20 px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
        What Our Clients Say
      </h2>

      {/* Marquee Container */}
      <div
        ref={marqueeRef}
        className="flex space-x-8"
        style={{ display: "inline-flex" }}
      >
        {/* Duplicate testimonials for smooth marquee */}
        {testimonials.concat(testimonials).map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-[#1f1f1f] p-6 md:p-8 rounded-2xl shadow-lg min-w-[300px] max-w-[350px] flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 border border-gray-700"
          >
            {/* Reviewer Info */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col">
                <h3 className="text-white font-semibold text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </div>
              <div className="flex space-x-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" />
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

export default EmailTestimonial;
