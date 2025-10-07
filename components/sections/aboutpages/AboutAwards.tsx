"use client";
import React from "react";
import Image from "next/image";

function AboutAwards() {
  const awards = [
    {
      img: "/assets/aboutimage/brand-9.png",
      title: "Outstanding Website Redesign",
      subtitle: "VIDEOGRAPHY",
    },
    {
      img: "/assets/aboutimage/brand-10.png",
      title: "Site of the Day",
      subtitle: "Cupcakes from New York",
    },
    {
      img: "/assets/aboutimage/brand-11.png",
      title: "Best UI Design, UX Design & Innovation",
      subtitle: "212 Legend",
    },
    {
      img: "/assets/aboutimage/brand-12.png",
      title: "Honorable Mentions",
      subtitle: "212 Legend",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Awards</h2>
        <p className="text-gray-600  font-handwritten text-2xl font-bold mb-10">
          Our clients and their customers always come first.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gray-300 p-6 flex flex-col items-center justify-center hover:bg-gray-400 transition-colors duration-300"
            >
              <div className="mb-4 w-28 h-28 relative">
                <Image
                  src={award.img}
                  alt={award.subtitle}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-center">
                {award.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center">{award.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutAwards;
