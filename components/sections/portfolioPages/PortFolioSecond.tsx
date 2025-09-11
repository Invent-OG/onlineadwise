"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const demos = [
  {
    id: "01",
    label: "Nail Art",
    image:
      "https://pro-theme.com/html/viasun/assets/preview/01_home-cosmetic.jpg",
    link: "https://example.com/nail-art",
  },
  {
    id: "02",
    label: "Facial Therapy",
    image: "https://pro-theme.com/html/viasun/assets/preview/02_shop.jpg",
    link: "https://example.com/facial-therapy",
  },
  {
    id: "03",
    label: "Massage",
    image: "https://pro-theme.com/html/viasun/assets/preview/03_product.jpg",
    link: "https://example.com/massage",
  },
  {
    id: "04",
    label: "Hair Spa",
    image: "https://pro-theme.com/html/viasun/assets/preview/02_shop.jpg",
    link: "https://example.com/hair-spa",
  },
  {
    id: "05",
    label: "Body Scrub",
    image:
      "https://pro-theme.com/html/viasun/assets/preview/01_home-cosmetic.jpg",
    link: "https://example.com/body-scrub",
  },
  {
    id: "06",
    label: "Pedicure & Manicure",
    image: "https://pro-theme.com/html/viasun/assets/preview/06_contact.jpg",
    link: "https://example.com/pedicure-manicure",
  },
];

const works = [
  "Web Development",
  "Hosting & Maintenance",
  "Content Marketing",
  "Online Marketplace",
];

function PortFolioSecond() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".monitor", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Smooth hover animation with GSAP
      document.querySelectorAll(".screen-img").forEach((img) => {
        const el = img as HTMLElement;

        el.addEventListener("mouseenter", () => {
          gsap.to(el, {
            y: "-35%", // move down
            duration: 3,
            ease: "power2.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            y: "0%", // back to top
            duration: 3,
            ease: "power2.inOut",
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://cdn.renderhub.com/rebrandy/white-crumpled-fabric-4-types-wrinkled-cotton-textile-set/white-crumpled-fabric-4-types-wrinkled-cotton-textile-set-01.jpg')",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-yellow-500 font-handwritten text-6xl">
              Our Works
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of digital solutions with live previews of
            stunning designs and projects. Hover over each screen to preview and
            click the button to visit the site.
          </p>
        </div>

        {/* Monitors Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {demos.map((demo) => (
            <div key={demo.id} className="text-center monitor group">
              <div className="relative w-80 mx-auto">
                {/* Monitor Frame */}
                <img
                  src="https://pro-theme.com/html/viasun/assets/img/mac.png"
                  alt="Monitor Frame"
                  className="relative z-10 w-full pointer-events-none"
                />

                {/* Screen Content */}
                <div
                  className="
                    absolute 
                    top-[7%] 
                    left-[12%] 
                    w-[76%] 
                    h-[65%] 
                    overflow-hidden 
                    rounded-md 
                    shadow-lg 
                    z-20
                  "
                >
                  <img
                    src={demo.image}
                    alt={demo.label}
                    className="screen-img w-full min-h-full object-cover"
                    style={{ transform: "translateY(0%)" }}
                  />
                </div>
              </div>

              {/* Label */}
              <p className="mt-6 text-gray-700 font-bold text-3xl font-handwritten">
                {demo.label}
              </p>

              {/* Four Works Below Label */}
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {works.map((work, index) => (
                  <span
                    key={index}
                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm hover:bg-yellow-200 transition"
                  >
                    {work}
                  </span>
                ))}
              </div>

              {/* Visit Site Button */}
              <a
                href={demo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolioSecond;
