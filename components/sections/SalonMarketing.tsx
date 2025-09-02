// "use client";

// import { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   Search,
//   Layout,
//   Video,
//   FileText,
//   Megaphone,
//   Share2,
//   MapPin,
//   Star,
//   Mail,
//   Brush,
//   ArrowLeft,
// } from "lucide-react"; // icons

// import { services } from "@/lib/data/servicesdata";

// gsap.registerPlugin(ScrollTrigger);

// export default function SalonMarketing() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const wrapper = wrapperRef.current;

//     if (!container || !wrapper) return;
//     if (window.innerWidth < 768) return; // disable GSAP on mobile

//     // Equal height for desktop cards
//     const cards = Array.from(container.children) as HTMLElement[];
//     let maxHeight = 0;
//     cards.forEach((card) => {
//       if (card.offsetHeight > maxHeight) maxHeight = card.offsetHeight;
//     });
//     cards.forEach((card) => {
//       card.style.height = `${maxHeight}px`;
//     });
//     wrapper.style.height = `${maxHeight + 40}px`;

//     const extraSpace = window.innerWidth / 2;
//     const totalScrollWidth =
//       container.scrollWidth - wrapper.clientWidth + extraSpace;

//     gsap.to(container, {
//       x: -totalScrollWidth,
//       ease: "none",
//       scrollTrigger: {
//         trigger: wrapper,
//         start: "top 4%",
//         end: () => `+=${totalScrollWidth}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   // ✅ Match icons to services
//   const icons = [
//     <Search size={28} key="s" />,
//     <Layout size={28} key="l" />,
//     <Megaphone size={28} key="m" />,
//     <Share2 size={28} key="sh" />,
//     <Mail size={28} key="ml" />,
//     <Star size={28} key="st" />,
//     <FileText size={28} key="ft" />,
//     <MapPin size={28} key="mp" />,
//     <Video size={28} key="v" />,
//     <Brush size={28} key="b" />,
//   ];

//   return (
//     <section className="bg-[#171817] text-white py-20 px-6 md:px-16 lg:px-24">
//       {/* Header */}
//       <div className="text-center mb-12 max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//           Explore Our Salon & Spa Services
//         </h1>
//         <p className="text-gray-400 text-lg md:text-xl">
//           Scroll down to explore our premium services with style.
//         </p>
//       </div>

//       {/* ✅ Mobile Grid Layout */}
//       {expandedIndex === null && (
//         <div className="grid grid-cols-2 gap-4 md:hidden">
//           {services.map((service, i) => (
//             <div
//               key={i}
//               onClick={() => setExpandedIndex(i)}
//               className="bg-gradient-to-br from-[#1f1f1f] to-[#111] rounded-lg shadow-md flex flex-col items-center justify-center text-center p-6 cursor-pointer border border-gray-700 hover:border-yellow-500 transition"
//             >
//               {/* Icon */}
//               <div className="mb-3 text-yellow-500">{icons[i]}</div>
//               {/* Title */}
//               <h3 className="text-xs font-semibold uppercase tracking-wide">
//                 {service.title.replace(/^✅\s*\d+\.\s*/, "")}
//               </h3>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ✅ Expanded Full Panel for Mobile */}
//       {expandedIndex !== null && (
//         <div className="md:hidden mt-6 bg-gradient-to-br from-[#222] to-[#111] rounded-xl p-6 shadow-lg border border-yellow-500 relative">
//           {/* Back button */}
//           <button
//             onClick={() => setExpandedIndex(null)}
//             className="flex items-center text-yellow-500 mb-4"
//           >
//             <ArrowLeft size={20} className="mr-2" /> Back
//           </button>

//           <h2 className="text-lg font-bold text-yellow-500 mb-3">
//             {services[expandedIndex].title.replace(/^✅\s*\d+\.\s*/, "")}
//           </h2>
//           <p className="mb-2 text-gray-300">{services[expandedIndex].desc}</p>
//           <ul className="list-disc list-inside space-y-1 text-gray-400">
//             {services[expandedIndex].points.map((point, j) => (
//               <li key={j}>{point}</li>
//             ))}
//           </ul>
//           <p className="mt-3 text-yellow-500 font-semibold">
//             ✨ {services[expandedIndex].result}
//           </p>
//         </div>
//       )}

//       {/* ✅ Bottom Buttons for Mobile */}
//       <div className="fixed bottom-0 left-0 right-0 md:hidden flex z-50">
//         <button className="w-1/2 bg-[#111] text-yellow-500 py-4 font-semibold border-r border-gray-700">
//           LIVE CHAT
//         </button>
//         <button className="w-1/2 bg-[#111] text-yellow-500 py-4 font-semibold">
//           TEXT US
//         </button>
//       </div>

//       {/* ✅ Desktop Horizontal Scroll Layout */}
//       <div
//         ref={wrapperRef}
//         className="relative w-full hidden md:flex items-center overflow-hidden"
//       >
//         <div ref={containerRef} className="flex gap-8">
//           {services.map((service, i) => {
//             return (
//               <div
//                 key={i}
//                 className="bg-gradient-to-br from-[#222] to-[#111] rounded-2xl p-8 w-[300px] lg:w-[350px] shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 flex-shrink-0 flex flex-col"
//               >
//                 <h2 className="text-2xl font-bold mb-3">
//                   {service.title.replace(/^✅\s*\d+\.\s*/, "")}
//                 </h2>
//                 <p className="text-gray-300 mb-4 line-clamp-3">
//                   {service.desc}
//                 </p>
//                 <ul className="text-gray-400 list-disc list-inside space-y-1 mb-3 flex-1">
//                   {service.points.map((point, j) => (
//                     <li key={j}>{point}</li>
//                   ))}
//                 </ul>
//                 <p className="text-yellow-500 font-semibold">
//                   ✨ {service.result}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  Layout,
  Video,
  FileText,
  Megaphone,
  Share2,
  MapPin,
  Star,
  Mail,
  Brush,
  ArrowLeft,
} from "lucide-react"; // icons
import gsap from "gsap";

import { services } from "@/lib/data/servicesdata";

export default function SalonMarketing() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Refs for Explore buttons
  const exploreRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    exploreRefs.current.forEach((btn, i) => {
      if (!btn) return;
      if (hoveredIndex === i) {
        gsap.fromTo(
          btn,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(btn, { opacity: 0, y: 10, duration: 0.2, ease: "power2.out" });
      }
    });
  }, [hoveredIndex]);

  // Icons mapping
  const icons = [
    <Search size={28} key="s" />,
    <Layout size={28} key="l" />,
    <Megaphone size={28} key="m" />,
    <Share2 size={28} key="sh" />,
    <Mail size={28} key="ml" />,
    <Star size={28} key="st" />,
    <FileText size={28} key="ft" />,
    <MapPin size={28} key="mp" />,
    <Video size={28} key="v" />,
    <Brush size={28} key="b" />,
  ];

  return (
    <section className="bg-[#171817] text-white py-20 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Explore <span className="text-yellow-500">Our Salon</span> &{" "}
          <span className="text-yellow-500">Spa Services</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Explore our premium services with style.
        </p>
      </div>

      {/* Desktop Grid Layout */}
      {expandedIndex === null ? (
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={() => setExpandedIndex(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-gradient-to-br from-[#1f1f1f] to-[#111] rounded-lg shadow-md flex flex-col items-center justify-center text-center p-6 cursor-pointer border border-gray-700 hover:border-yellow-500 transition"
            >
              <div className="mb-3 text-yellow-500">{icons[i]}</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                {service.title.replace(/^✅\s*\d+\.\s*/, "")}
              </h3>

              {/* Explore button with GSAP animation */}
              <button
                ref={(el) => (exploreRefs.current[i] = el)}
                className="absolute bottom-4 bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold opacity-0 pointer-events-none"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      ) : (
        // Expanded card
        <div className="hidden md:flex mt-6 bg-gradient-to-br from-[#222] to-[#111] rounded-xl p-6 shadow-lg border border-yellow-500 relative flex-col items-center text-center">
          {/* Back button */}
          <button
            onClick={() => setExpandedIndex(null)}
            className="flex items-center text-yellow-500 mb-4 self-start"
          >
            <ArrowLeft size={20} className="mr-2" /> Back
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-yellow-500">{icons[expandedIndex]}</div>
            <h2 className="text-2xl font-bold text-yellow-500 mb-3">
              {services[expandedIndex].title.replace(/^✅\s*\d+\.\s*/, "")}
            </h2>
            <p className="mb-3 text-gray-300">{services[expandedIndex].desc}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-3">
              {services[expandedIndex].points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
            <p className="text-yellow-500 font-semibold">
              ✨ {services[expandedIndex].result}
            </p>
          </div>
        </div>
      )}

      {/* Mobile View */}
      {expandedIndex === null && (
        <div className="grid grid-cols-2 gap-4 md:hidden mt-6">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={() => setExpandedIndex(i)}
              className="bg-gradient-to-br from-[#1f1f1f] to-[#111] rounded-lg shadow-md flex flex-col items-center justify-center text-center p-6 cursor-pointer border border-gray-700 hover:border-yellow-500 transition"
            >
              <div className="mb-3 text-yellow-500">{icons[i]}</div>
              <h3 className="text-xs font-semibold uppercase tracking-wide">
                {service.title.replace(/^✅\s*\d+\.\s*/, "")}
              </h3>
            </div>
          ))}
        </div>
      )}

      {/* Expanded Full Panel for Mobile */}
      {expandedIndex !== null && (
        <div className="md:hidden mt-6 bg-gradient-to-br from-[#222] to-[#111] rounded-xl p-6 shadow-lg border border-yellow-500 relative">
          <button
            onClick={() => setExpandedIndex(null)}
            className="flex items-center text-yellow-500 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" /> Back
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-yellow-500">{icons[expandedIndex]}</div>
            <h2 className="text-lg font-bold text-yellow-500 mb-3">
              {services[expandedIndex].title.replace(/^✅\s*\d+\.\s*/, "")}
            </h2>
            <p className="mb-2 text-gray-300">{services[expandedIndex].desc}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              {services[expandedIndex].points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
            <p className="mt-3 text-yellow-500 font-semibold">
              ✨ {services[expandedIndex].result}
            </p>
          </div>
        </div>
      )}

      {/* Bottom Buttons for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex z-50">
        <button className="w-1/2 bg-[#111] text-yellow-500 py-4 font-semibold border-r border-gray-700">
          LIVE CHAT
        </button>
        <button className="w-1/2 bg-[#111] text-yellow-500 py-4 font-semibold">
          TEXT US
        </button>
      </div>
    </section>
  );
}
