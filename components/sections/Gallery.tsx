"use client";
import React from "react";
import Image from "next/image";

const spaImages = [
  {
    src: "https://iconluxuryspa.in/wp-content/uploads/2024/12/Turkish-Arabian-Hammam-100-300x300.jpg",
    title: "Turkish Arabian Hammam",
    desc: "Immerse yourself in a traditional Hammam experience for total relaxation.",
  },
  {
    src: "https://iconluxuryspa.in/wp-content/uploads/2024/12/Aroma-Massage-100-300x300.jpg",
    title: "Aroma Massage",
    desc: "Soothe your senses with our luxurious aromatic massage treatments.",
  },
  {
    src: "https://iconluxuryspa.in/wp-content/uploads/2024/12/thai-yoga-massage-100.jpg",
    title: "Thai Yoga Massage",
    desc: "Stretch, relax, and rejuvenate with our expert Thai yoga techniques.",
  },
  {
    src: "https://iconluxuryspa.in/wp-content/uploads/2024/12/Turkish-Arabian-Hammam-100.jpg",
    title: "Hammam Ritual",
    desc: "Experience deep cleansing and relaxation with our signature Hammam ritual.",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Indulge in Luxury & Relaxation
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our exclusive spa treatments designed to relax, rejuvenate,
          and restore your body and mind. Our luxurious therapies combine
          traditional techniques with modern wellness practices.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {spaImages.map((item, idx) => (
          <div
            key={idx}
            className="relative group rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={400}
              height={400}
              className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-white text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
