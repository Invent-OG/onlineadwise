// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// const slides = [
//   {
//     id: 1,
//     title: "Laser-Focused Ads (Google & Meta)",
//     desc: "Attract people actively searching for nail salons, spa treatments, facials, massages.",
//     dark: "#171817",
//     image:
//       "https://antdisplay.com/pub/media/magefan_blog/hair_styling_shop_2_.jpg",
//   },
//   {
//     id: 2,
//     title: "Conversion-Optimized Landing Pages",
//     desc: "Showcase services, offers, reviews, and make booking effortless.",
//     dark: "#171817",
//     image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
//   },
//   {
//     id: 3,
//     title: "Smart Automation (GoHighLevel)",
//     desc: "Instantly nurture leads with SMS, WhatsApp, and email reminders so you never lose a client again.",
//     dark: "#171817",
//     image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
//   },
//   {
//     id: 4,
//     title: "Reputation & Review Boosting",
//     desc: "Collect and showcase 5-star reviews on Google & Facebook.",
//     dark: "#171817",
//     image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
//   },
//   {
//     id: 5,
//     title: "Retention Engine",
//     desc: "Loyalty campaigns, birthday specials, and referral offers that keep clients coming back.",
//     dark: "#171817",
//     image: "https://images.pexels.com/photos/3765110/pexels-photo-3765110.jpeg",
//   },
// ];

// export default function Slider() {
//   const [index, setIndex] = useState(0);
//   const sliderRef = useRef<HTMLDivElement>(null);

//   // Animate current slide when index changes
//   useEffect(() => {
//     const slidesEl = sliderRef.current?.querySelectorAll(".slide");
//     const currentSlide = slidesEl?.[index] as HTMLElement | undefined;

//     if (currentSlide) {
//       gsap.fromTo(
//         currentSlide,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
//       );
//     }
//   }, [index]);

//   // Navigation
//   const nextSlide = () => {
//     setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <div
//       ref={sliderRef}
//       className="relative min-h-screen   w-full overflow-hidden bg-black"
//     >
//       {/* Slides */}
//       {slides.map((s, i) => (
//         <div
//           key={s.id}
//           className={`slide absolute top-0 left-0 w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center transition-opacity duration-500 ${
//             i === index ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//           style={{ backgroundColor: s.dark }}
//         >
//           {/* Background Skew (desktop only) */}
//           <div className="absolute left-0 h-full w-1/2 md:w-[55%] bg-black/20 skew-x-6 hidden md:block"></div>

//           {/* Content */}
//           <div className="content-box z-10 p-6 sm:p-10 md:pl-24 text-white text-center md:text-left">
//             <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold mb-3">
//               {s.title}
//             </h1>
//             <p className="text-gray-300 mb-6 max-w-md mx-auto md:mx-0 text-lg sm:text-base">
//               {s.desc}
//             </p>
//           </div>

//           {/* Image */}
//           <div className="flex justify-center items-center z-10 h-full p-4">
//             <Image
//               src={s.image}
//               alt={s.title}
//               width={800} // set an approximate width
//               height={600} // set an approximate height
//               className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] object-contain drop-shadow-2xl"
//             />
//           </div>
//         </div>
//       ))}

//       {/* Prev Button */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full opacity-70 hover:opacity-100 transition z-20"
//       >
//         ◀
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full opacity-70 hover:opacity-100 transition z-20"
//       >
//         ▶
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-4 z-20">
//         {slides.map((s, i) => (
//           <button
//             key={s.id}
//             onClick={() => setIndex(i)}
//             className={`h-2 sm:h-3 w-2 md:mb-0 mb-20 sm:w-3 rounded-full transition ${
//               index === i ? "bg-white scale-110" : "bg-gray-500"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Targeted Spa Ads",
    desc: "Reach clients actively searching for massages, facials, nail treatments, and spa experiences with precision-targeted Google & Meta ads.",
    dark: "#171817",
    image: "https://images.pexels.com/photos/3993215/pexels-photo-3993215.jpeg",
  },
  {
    id: 2,
    title: "Luxury Landing Pages",
    desc: "Showcase your spa services, special offers, and glowing client reviews with beautifully designed pages that make booking effortless.",
    dark: "#171817",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
  },
  {
    id: 3,
    title: "Smart Automation & Reminders",
    desc: "Never miss a client again with automated SMS, WhatsApp, and email reminders for appointments, promotions, and seasonal offers.",
    dark: "#171817",
    image: "https://images.pexels.com/photos/4050297/pexels-photo-4050297.jpeg",
  },
  {
    id: 4,
    title: "Boost Your Reputation",
    desc: "Collect, manage, and showcase 5-star reviews on Google, Facebook, and Yelp to build trust and attract loyal clients.",
    dark: "#171817",
    image: "https://images.pexels.com/photos/3822665/pexels-photo-3822665.jpeg",
  },
  {
    id: 5,
    title: "Client Retention Engine",
    desc: "Keep clients coming back with loyalty programs, birthday specials, and referral incentives designed to enhance relaxation and pampering.",
    dark: "#171817",
    image: "https://images.pexels.com/photos/4050293/pexels-photo-4050293.jpeg",
  },
];


export default function Slider() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Animate current slide when index changes
  useEffect(() => {
    const slidesEl = sliderRef.current?.querySelectorAll(".slide");
    const currentSlide = slidesEl?.[index] as HTMLElement | undefined;

    if (currentSlide) {
      gsap.fromTo(
        currentSlide,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [index]);

  // Navigation
  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div
      ref={sliderRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Page Heading */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Our Growth Engine
        </h1>
      </div>

      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`slide absolute top-0 left-0 w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center transition-opacity duration-500 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundColor: s.dark }}
        >
          {/* Background Skew (desktop only) */}
          <div className="absolute left-0 h-full w-1/2 md:w-[55%] bg-black/20 skew-x-6 hidden md:block"></div>

          {/* Content */}
          <div className="content-box z-10 p-6 sm:p-10 md:pl-24 text-white text-center md:text-left">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold mb-3">
              {s.title}
            </h2>
            <p className="text-gray-300 mb-6 max-w-md mx-auto md:mx-0 text-lg sm:text-base">
              {s.desc}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center z-10 h-full p-4">
            <Image
              src={s.image}
              alt={s.title}
              width={800}
              height={600}
              className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full opacity-70 hover:opacity-100 transition z-20"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full opacity-70 hover:opacity-100 transition z-20"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-4 z-20">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={`h-2 sm:h-3 w-2 md:mb-0 mb-20 sm:w-3 rounded-full transition ${
              index === i ? "bg-white scale-110" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
