// "use client";
// import React, { useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function GbpContact() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const bgRef = useRef<HTMLDivElement | null>(null);
//   const router = useRouter();

//   // Parallax background animation
//   useEffect(() => {
//     if (bgRef.current) {
//       gsap.to(bgRef.current, {
//         y: -100,
//         ease: "none",
//         scrollTrigger: {
//           trigger: bgRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//     }
//   }, []);

//   // Fade-in animations for content
//   useEffect(() => {
//     if (sectionRef.current) {
//       gsap.fromTo(
//         sectionRef.current.querySelectorAll(".fade-item"),
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden py-20 md:py-28 bg-black "
//     >
//       {/* Parallax Grid Background */}
//       <div
//         ref={bgRef}
//         className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"
//       />

//       {/* Content */}
//       <div className="relative max-w-4xl mx-auto text-center px-6">
//         <h2 className="fade-item text-3xl md:text-5xl font-bold text-white mb-6">
//           Contact <span className="text-yellow-500">Us</span>
//         </h2>
//         <p className="fade-item text-gray-300 text-base md:text-lg leading-relaxed mb-8">
//           Contact us with this form if you have questions about our GBP
//           management service that aren’t covered on the site.{" "}
//           <span className="text-yellow-500 font-handwritten text-lg md:text-2xl">
//             We can also schedule a video call to discuss your business and see
//             if we’re a good fit.
//           </span>{" "}
//           We’ll do our best to get back to you within 24 hours during regular
//           business hours.
//         </p>
//         <button
//           onClick={() => router.push("/contacts")}
//           className="fade-item px-8 py-4 bg-yellow-500 text-black text-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           Go to Contact Page
//         </button>
//       </div>
//     </section>
//   );
// }

// export default GbpContact;
import React from "react";

function GbpContact() {
  return (
    <div className="flex flex-col items-center gap-6 p-10 bg-black  text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">
        🚀 Let&apos;s Kickstart Your Project!
      </h2>
      <p className="text-gray-300 max-w-lg text-lg md:text-xl">
        We&apos;re excited to help you grow your business. Schedule a free
        strategy call and discover how we can achieve your goals together.
      </p>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919629472748" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold px-10 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
      >
        💬 Chat with Us on WhatsApp
      </a>
    </div>
  );
}

export default GbpContact;
