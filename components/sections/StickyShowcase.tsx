// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// export default function StickyShowcase() {
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Floating animation for side phones
//       gsap.utils.toArray<HTMLElement>(".phone-anim").forEach((phone, i) => {
//         gsap.to(phone, {
//           y: i === 2 ? -20 : -40, // center phone moves less, sides move more
//           ease: "power1.out",
//           scrollTrigger: {
//             trigger: ".showcase-section",
//             start: "top top",
//             end: "center 30%",
//             scrub: true,
//           },
//         });
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="showcase-section relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//       {/* Top content */}
//       <div className="sticky top-0 z-10 flex flex-col items-center text-center px-4">
//         <h1 className=" text-4xl md:text-5xl font-bold leading-tight">
//           Make a stunning <br /> personal site
//         </h1>
//         <p className=" text-gray-600">
//           Claim, customize, and publish—for free.
//         </p>

//         {/* Input */}
//         <div className=" flex items-center gap-2 flex-wrap justify-center">
//           <input
//             type="text"
//             placeholder="yourname"
//             className="px-4 py-3 rounded-md border border-gray-300 w-60 focus:outline-none"
//           />
//           <button className="px-4 py-3 bg-blue-600 text-white rounded-md font-medium">
//             Claim your .pop.site
//           </button>
//         </div>
//         <p className="mt-2 text-xs text-gray-500">No Credit Card Required</p>
//       </div>

//       {/* Phones Showcase */}
//       <div className="relative py-20">
//         <div className="flex justify-center items-end gap-6 flex-nowrap -mx-[100px]">
//           {/* Phone 1 - lower */}
//           <PhoneMockup
//             screen="https://picsum.photos/400/800?random=1"
//             className="phone-anim translate-y-48 hidden md:block"
//           />
//           {/* Phone 2 - slightly higher */}
//           <PhoneMockup
//             screen="https://picsum.photos/400/800?random=2"
//             className="phone-anim translate-y-36"
//           />
//           {/* Phone 3 - center big */}
//           <PhoneMockup
//             screen="https://picsum.photos/400/800?random=3"
//             className="phone-anim scale-110 z-10"
//           />
//           {/* Phone 4 - slightly higher */}
//           <PhoneMockup
//             screen="https://picsum.photos/400/800?random=4"
//             className="phone-anim translate-y-36"
//           />
//           {/* Phone 5 - lower */}
//           <PhoneMockup
//             screen="https://picsum.photos/400/800?random=5"
//             className="phone-anim translate-y-48 hidden md:block"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -----------------
//    Phone Mockup Component
// ------------------- */
// type PhoneMockupProps = {
//   screen: string;
//   className?: string;
// };

// function PhoneMockup({ screen, className }: PhoneMockupProps) {
//   return (
//     <div
//       className={`relative w-[200px] h-[400px] md:w-[240px] md:h-[480px] lg:w-[260px] lg:h-[520px] xl:w-[280px] xl:h-[560px] ${className || ""}`}
//     >
//       {/* Screen image */}
//       <Image
//         src={screen}
//         alt="screen"
//         fill
//         className="object-cover rounded-[2rem] px-[12px] pt-[10px] pb-[12px]"
//       />
//       {/* iPhone frame */}
//       <Image
//         src="/assets/mobileimages/H2xOBKfRU2M06U4j9LF5WN8z6pA.avif"
//         alt="frame"
//         fill
//         className="pointer-events-none select-none"
//       />
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Icon, ShieldCheck } from "lucide-react";
import { FaIcons } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function StickyShowcase() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for side phones
      gsap.utils.toArray<HTMLElement>(".phone-anim").forEach((phone, i) => {
        gsap.to(phone, {
          y: i === 2 ? -20 : -40, // center phone moves less, sides move more
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".showcase-section",
            start: "top top",
            end: "center 30%",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="showcase-section relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Top content */}
      <div className="sticky top-0 z-10 flex flex-col items-center text-center px-4">
        {/* Icon on top */}
        <div className=" mt-6 ">
          <ShieldCheck className="w-12 h-12  text-blue-600 " />
        </div>

        <h1 className="text-4xl py-4 text-black md:text-7xl font-medium leading-tight">
          Make a stunning <br /> personal site
        </h1>
        <p className="text-gray-600 mt-2">
          Claim, customize, and publish—for free.
        </p>

        {/* Main Button */}
        <button className="mt-6 px-6 py-4 bg-blue-600 text-white rounded-md font-medium text-lg">
          Get Started
        </button>
      </div>

      {/* Phones Showcase */}
      <div className="relative py-20">
        <div className="flex justify-center items-end gap-6 flex-nowrap -mx-[100px]">
          {/* Phone 1 - lower */}
          <PhoneMockup
            screen="https://picsum.photos/400/800?random=1"
            className="phone-anim translate-y-48 hidden md:block"
          />
          {/* Phone 2 - slightly higher */}
          <PhoneMockup
            screen="https://picsum.photos/400/800?random=2"
            className="phone-anim translate-y-36"
          />
          {/* Phone 3 - center big */}
          <PhoneMockup
            screen="https://picsum.photos/400/800?random=3"
            className="phone-anim scale-110 z-10"
          />
          {/* Phone 4 - slightly higher */}
          <PhoneMockup
            screen="https://picsum.photos/400/800?random=4"
            className="phone-anim translate-y-36"
          />
          {/* Phone 5 - lower */}
          <PhoneMockup
            screen="https://picsum.photos/400/800?random=5"
            className="phone-anim translate-y-48 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

/* -----------------
   Phone Mockup Component
------------------- */
type PhoneMockupProps = {
  screen: string;
  className?: string;
};

function PhoneMockup({ screen, className }: PhoneMockupProps) {
  return (
    <div
      className={`relative w-[200px] h-[400px] md:w-[240px] md:h-[480px] lg:w-[260px] lg:h-[520px] xl:w-[280px] xl:h-[560px] ${className || ""}`}
    >
      {/* Screen image */}
      <Image
        src={screen}
        alt="screen"
        fill
        className="object-cover rounded-[2rem] px-[12px] pt-[10px] pb-[12px]"
      />
      {/* iPhone frame */}
      <Image
        src="/assets/mobileimages/H2xOBKfRU2M06U4j9LF5WN8z6pA.avif"
        alt="frame"
        fill
        className="pointer-events-none select-none"
      />
    </div>
  );
}
