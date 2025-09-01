"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Digital Marketing Website Design.",
    client: "Car Parts Universe",
    year: "2024",
    category: "Branding",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Website Development With SEO & Marketing.",
    client: "90days Property",
    year: "2024",
    category: "Web Development",
    img: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?_gl=1*1xa8jhv*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTY3MDg1MTIkbzE5JGcxJHQxNzU2NzA4NTMwJGo0MiRsMCRoMA..",
  },
  {
    title: "Creative Branding & Strategy Solutions.",
    client: "Design Studio",
    year: "2025",
    category: "Branding",
    img: "https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?_gl=1*1iuwawk*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTY3MDg1MTIkbzE5JGcxJHQxNzU2NzA4NTk5JGo0NiRsMCRoMA..",
  },
];

export default function ScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".project-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#171817] text-white min-h-screen py-16 px-6"
    >
      <h1 className="text-4xl  font-bold text-center mb-16">
        Our <span className="text-yellow-500">Projects</span>
      </h1>

      <div className="max-w-6xl mx-auto space-y-32">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`project-card flex flex-col md:flex-row items-center md:items-start gap-8 bg-[#1f1f20] rounded-3xl overflow-hidden shadow-xl ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/2 w-full h-72 md:h-96 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 w-full bg-black/90 p-10 rounded-xl text-left relative">
              <h2 className="text-3xl text-yellow-500 md:text-4xl font-bold mb-6">
                {project.title}
              </h2>
              <div className="space-y-3 text-gray-300">
                <p className="flex justify-between border-b border-gray-600 pb-2">
                  <span>Client:</span>
                  <span>{project.client}</span>
                </p>
                <p className="flex justify-between border-b border-gray-600 pb-2">
                  <span>Year:</span>
                  <span>{project.year}</span>
                </p>
                <p className="flex justify-between border-b border-gray-600 pb-2">
                  <span>Category:</span>
                  <span>{project.category}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
