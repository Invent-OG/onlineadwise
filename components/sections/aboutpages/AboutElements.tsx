"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

function AboutElements() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
        }
      );
    });
  }, []);

  const interactiveCards = [
    {
      title: "Real-Time Analytics",
      description:
        "Monitor your performance in real-time and make data-driven decisions instantly.",
      img: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
    },
    {
      title: "User Engagement Tools",
      description:
        "Engage your audience with interactive features and personalized experiences.",
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
    {
      title: "Automation & AI",
      description:
        "Leverage automation and AI-driven solutions to streamline processes efficiently.",
      img: "https://images.pexels.com/photos/3184461/pexels-photo-3184461.jpeg",
    },
    {
      title: "Secure & Reliable",
      description:
        "We prioritize security and reliability in all our solutions, giving you peace of mind.",
      img: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
    },
  ];

  return (
    <section className="bg-white py-20 px-5 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">
          Interactive Elements
        </h2>
        <p className="text-gray-700 font-handwritten text-2xl max-w-2xl mx-auto">
          Explore the tools and features we offer to make your experience
          dynamic, engaging, and impactful.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {interactiveCards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el!)}
            className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="w-24 h-24 mb-4 relative">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutElements;
