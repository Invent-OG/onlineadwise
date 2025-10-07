// "use client";

// import { useState, useRef, useEffect } from "react";
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
//   Phone,
//   MessageCircle,
// } from "lucide-react"; // icons
// import gsap from "gsap";
// import Link from "next/link";

// export default function SalonMarketing() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const exploreRefs = useRef<Array<HTMLButtonElement | null>>([]);

//   // Animate Explore button on hover
//   useEffect(() => {
//     exploreRefs.current.forEach((btn, i) => {
//       if (!btn) return;
//       if (hoveredIndex === i) {
//         gsap.fromTo(
//           btn,
//           { opacity: 0, y: 10 },
//           { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
//         );
//       } else {
//         gsap.to(btn, { opacity: 0, y: 10, duration: 0.2, ease: "power2.out" });
//       }
//     });
//   }, [hoveredIndex]);

//   // Local services data
//   const services = [
//     {
//       title: "SEO Optimization",
//       link: "/services/seo",
//       icon: <Search size={28} />,
//     },
//     {
//       title: "Website Design",
//       link: "/services/web-design",
//       icon: <Layout size={28} />,
//     },
//     {
//       title: "Social Media Marketing",
//       link: "/services/social-media",
//       icon: <Megaphone size={28} />,
//     },
//     {
//       title: "Brand Promotion",
//       link: "/services/branding",
//       icon: <Share2 size={28} />,
//     },
//     {
//       title: "Email Campaigns",
//       link: "/services/email",
//       icon: <Mail size={28} />,
//     },
//     {
//       title: "Reputation Management",
//       link: "/services/reputation",
//       icon: <Star size={28} />,
//     },
//     {
//       title: "Content Creation",
//       link: "/services/content",
//       icon: <FileText size={28} />,
//     },
//     {
//       title: "Local SEO",
//       link: "/services/local-seo",
//       icon: <MapPin size={28} />,
//     },
//     {
//       title: "Video Marketing",
//       link: "/services/video",
//       icon: <Video size={28} />,
//     },
//     {
//       title: "Graphic Design",
//       link: "/services/graphic-design",
//       icon: <Brush size={28} />,
//     },
//   ];

//   return (
//     <section className="bg-[#171817] text-white py-20 px-6 md:px-16 lg:px-24">
//       {/* Header */}
//       <div className="text-center mb-12 max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//           Explore <span className="text-yellow-500">Our Salon</span> &{" "}
//           <span className="text-yellow-500">Spa Services</span>
//         </h1>
//         <p className="text-gray-400 text-lg md:text-xl">
//           Discover our expert services crafted to elevate your brand.
//         </p>
//       </div>

//       {/* Desktop Grid */}
//       <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {services.map((service, i) => (
//           <div
//             key={i}
//             onMouseEnter={() => setHoveredIndex(i)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className="relative bg-gradient-to-br from-[#1f1f1f] to-[#111] rounded-lg shadow-md flex flex-col items-center justify-center text-center p-6 cursor-pointer border border-gray-700 hover:border-yellow-500 transition"
//           >
//             <div className="mb-3 text-yellow-500">{service.icon}</div>
//             <h3 className="text-lg font-semibold uppercase tracking-wide">
//               {service.title}
//             </h3>

//             {/* Explore Button */}
//             <Link href={service.link} className="absolute -bottom-4">
//               <button
//                 ref={(el) => (exploreRefs.current[i] = el)}
//                 className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold opacity-0 pointer-events-auto transition"
//               >
//                 Explore
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Grid */}
//       <div className="grid grid-cols-2 gap-4 md:hidden mt-6">
//         {services.map((service, i) => (
//           <Link key={i} href={service.link}>
//             <div className="bg-gradient-to-br from-[#1f1f1f] to-[#111] rounded-lg shadow-md flex flex-col items-center justify-center text-center p-6 cursor-pointer border border-gray-700 hover:border-yellow-500 transition">
//               <div className="mb-3 text-yellow-500">{service.icon}</div>
//               <h3 className="text-xs font-semibold uppercase tracking-wide">
//                 {service.title}
//               </h3>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Bottom Buttons for Mobile */}
//       <div className="fixed bottom-0 left-0 right-0 md:hidden flex z-50">
//         {/* WhatsApp */}
//         <a
//           href="https://wa.me/919629472748"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-1/2 bg-green-600 text-white py-4 font-semibold flex items-center justify-center gap-2 border-r border-gray-700"
//         >
//           <MessageCircle size={18} /> WhatsApp
//         </a>

//         {/* Contact */}
//         <Link
//           href="/contacts"
//           className="w-1/2 bg-yellow-500 text-black py-4 font-semibold flex items-center justify-center gap-2"
//         >
//           <Phone size={18} /> Contact Us
//         </Link>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

export default function SalonMarketing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const exploreRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Animate Explore button
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

  // Services with image backgrounds
  const services = [
    {
      title: "SEO Optimization",
      link: "/services/local-seo",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
    },
    {
      title: "Website Design",
      link: "/services/website-landing",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    },
    {
      title: "Social Media Marketing",
      link: "/services/social-media",
      image:
        "https://images.pexels.com/photos/6956226/pexels-photo-6956226.jpeg",
    },
    {
      title: "Brand Promotion",
      link: "/services/branding-support",
      image:
        "https://images.pexels.com/photos/7661139/pexels-photo-7661139.jpeg",
    },
    {
      title: "Email Campaigns",
      link: "/services/email-sms",
      image:
        "https://images.pexels.com/photos/19387231/pexels-photo-19387231.jpeg",
    },
    {
      title: "Reputation Management",
      link: "/services/reputation-mgmt",
      image:
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
    },
    {
      title: "CRM Automation",
      link: "/services/crm-automation",
      image:
        "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg",
    },
    {
      title: "Analytics & Reporting",
      link: "/services/analytics",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
    },
    {
      title: "GBP Management",
      link: "/services/gbp-management",
      image: "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg",
    },
    {
      title: "Paid Advertising",
      link: "/services/paid-ads",
      image: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg",
    },
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
          Discover our expert services crafted to elevate your brand.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative rounded-xl shadow-lg flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-300 min-h-[200px]"
          >
            {/* Background Image with Animated Zoom */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition duration-300"></div>

            {/* Content */}
            <div className="relative z-10 p-6">
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                {service.title}
              </h3>
            </div>

            {/* Explore Button */}
            <Link href={service.link} className="absolute bottom-0 z-20">
              <button
                ref={(el) => (exploreRefs.current[i] = el)}
                className="bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold opacity-0 pointer-events-auto transition"
              >
                Explore
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Grid */}
      <div className="grid grid-cols-2 gap-4 md:hidden mt-6">
        {services.map((service, i) => (
          <Link key={i} href={service.link}>
            <div className="group relative rounded-xl shadow-md overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-300 min-h-[160px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300"></div>
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 h-full">
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Buttons for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919629472748"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 bg-green-600 text-white py-4 font-semibold flex items-center justify-center gap-2 border-r border-gray-700"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>

        {/* Contact */}
        <Link
          href="/contacts"
          className="w-1/2 bg-yellow-500 text-black py-4 font-semibold flex items-center justify-center gap-2"
        >
          <Phone size={18} /> Contact Us
        </Link>
      </div>
    </section>
  );
}
