"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const services = [
  {
    title: "Luxury Spa Therapy",
    desc: "Rejuvenate your body and mind with our signature spa treatments designed to melt away stress and restore balance.",
    img: "https://images.pexels.com/photos/7755653/pexels-photo-7755653.jpeg?auto=compress&cs=tinysrgb&w=720&h=720&dpr=1",
  },
  {
    title: "Manicure & Nail Art",
    desc: "From classic manicures to intricate nail art, give your hands the elegance and shine they deserve.",
    img: "https://images.pexels.com/photos/7683058/pexels-photo-7683058.jpeg?auto=compress&cs=tinysrgb&w=720&h=720&dpr=1",
  },
  {
    title: "Pedicure Bliss",
    desc: "Refresh and pamper your feet with our soothing pedicure treatments, leaving them soft, smooth, and polished.",
    img: "https://images.pexels.com/photos/6429663/pexels-photo-6429663.jpeg?auto=compress&cs=tinysrgb&w=720&h=720&dpr=1",
  },
  {
    title: "Facials & Glow",
    desc: "Experience radiant skin with our deep-cleansing and hydrating facials tailored to your unique needs.",
    img: "https://images.pexels.com/photos/6724402/pexels-photo-6724402.jpeg?auto=compress&cs=tinysrgb&w=720&h=720&dpr=1",
  },
  {
    title: "Massage Therapy",
    desc: "Unwind with therapeutic massages that ease muscle tension, improve circulation, and bring deep relaxation.",
    img: "https://images.pexels.com/photos/6724306/pexels-photo-6724306.jpeg?auto=compress&cs=tinysrgb&w=720&h=720&dpr=1",
  },
  {
    title: "Hair Styling & Care",
    desc: "From elegant cuts to nourishing treatments, let our experts bring out the best in your hair.",
    img: "https://images.pexels.com/photos/10608372/pexels-photo-10608372.jpeg?auto=compress&cs=tinysrgb&w=720&h=720&dpr=1",
  },
  {
    title: "Bridal & Party Glam",
    desc: "Look flawless for your big day with our specialized bridal and event-ready hair, makeup, and nail packages.",
    img: "https://images.pexels.com/photos/10607971/pexels-photo-10607971.jpeg?auto=compress&cs=tinysrgb&w=720&h=720&dpr=1",
  },
];

function ServiceCard() {
  const listRef = useRef<HTMLUListElement | null>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const descRefs = useRef<HTMLParagraphElement[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!listRef.current) return;

    // update grid layout
    const cols = services
      .map((_, i) => (i === activeIndex ? "10fr" : "1fr"))
      .join(" ");
    gsap.to(listRef.current, {
      gridTemplateColumns: cols,
      duration: 0.6,
      ease: "power3.inOut",
    });

    // animate each card
    services.forEach((_, i) => {
      const isActive = i === activeIndex;

      gsap.to(imgRefs.current[i], {
        scale: isActive ? 1 : 1.1,
        filter: isActive
          ? "grayscale(0) brightness(1)"
          : "grayscale(1) brightness(1.5)",
        duration: 0.6,
        ease: "power3.inOut",
      });

      // Title (vertical when inactive, horizontal when active)
      gsap.to(titleRefs.current[i], {
        rotate: isActive ? 0 : -90,
        x: isActive ? 0 : -40,
        y: isActive ? 0 : 0,
        opacity: isActive ? 1 : 0.8,
        duration: 0.6,
        ease: "power3.inOut",
      });

      // Description (only visible when active)
      gsap.to(descRefs.current[i], {
        opacity: isActive ? 0.85 : 0,
        y: isActive ? 0 : 20,
        duration: 0.6,
        ease: "power3.inOut",
      });
    });
  }, [activeIndex]);

  return (
    <section className="flex flex-col bg-[#171817] items-center justify-center py-24 ">
      <h1 className="text-4xl text-white font-bold mb-6 lg:text-center text-start">
        <span className="text-yellow-500">Spa</span> &{" "}
        <span className="text-yellow-500">Salon</span> Services
      </h1>
      <p className="max-w-3xl lg:text-center text-start text-gray-500 mb-12 px-8">
        Indulge in luxurious treatments designed to rejuvenate your body,
        enhance your beauty, and refresh your soul. Discover the perfect balance
        of wellness and elegance with our curated spa and salon services.
      </p>

      {/* Grid Container */}
      <ul
        ref={listRef}
        className="grid w-full max-w-6xl gap-2 h-[450px]"
        style={{
          gridTemplateColumns: services
            .map((_, i) => (i === 0 ? "10fr" : "1fr"))
            .join(" "),
        }}
      >
        {services.map((service, i) => (
          <li
            key={i}
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
            className="relative overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 cursor-pointer"
            onMouseEnter={() => setActiveIndex(i)}
            onClick={() => setActiveIndex(i)}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                ref={(el) => {
                  if (el) imgRefs.current[i] = el;
                }}
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_60%,rgba(0,0,0,0.6)_100%)]"></div>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white">
              <h3
                ref={(el) => {
                  if (el) titleRefs.current[i] = el;
                }}
                className="text-lg font-bold uppercase tracking-wide origin-left whitespace-nowrap"
                style={{ transform: "rotate(-90deg)" }} // default vertical
              >
                {service.title}
              </h3>
              <p
                ref={(el) => {
                  if (el) descRefs.current[i] = el;
                }}
                className="mt-2 text-sm opacity-0"
              >
                {service.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ServiceCard;
