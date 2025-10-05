// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { gsap } from "gsap";
// import { usePathname } from "next/navigation";

// export default function NavBar() {
//   const [open, setOpen] = useState(false);
//   const [servicesHover, setServicesHover] = useState(false); // desktop hover
//   const [servicesMobile, setServicesMobile] = useState(false); // mobile click
//   const pathName = usePathname();
//   const servicesRef = useRef<HTMLDivElement>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Animate desktop dropdown
//   useEffect(() => {
//     if (dropdownRef.current) {
//       if (servicesHover) {
//         gsap.fromTo(
//           dropdownRef.current,
//           { x: -20, opacity: 0 },
//           { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
//         );
//       }
//     }
//   }, [servicesHover]);

//   if (pathName?.includes("/admin")) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/50 transition-all duration-300 z-40 ${
//           open ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setOpen(false)}
//       />

//       {/* Side Menu */}
//       <nav
//         className={`fixed top-0 left-0 h-full w-[70%] bg-[#171817] flex flex-col items-center justify-center transform transition-transform duration-300 z-50 shadow-2xl
//         ${open ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <Link
//           href="/"
//           onClick={() => setOpen(false)}
//           className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition"
//         >
//           Home
//         </Link>

//         {/* Services */}
//         <div className="w-full text-center relative">
//           {/* Desktop hover dropdown */}
//           <div
//             className="hidden md:block w-full relative"
//             onMouseEnter={() => setServicesHover(true)}
//             onMouseLeave={() => setServicesHover(false)}
//             ref={servicesRef}
//           >
//             <button className="w-full py-4 text-white uppercase hover:bg-white/10 transition">
//               Services
//             </button>

//             {servicesHover && (
//               <div
//                 ref={dropdownRef}
//                 className="absolute -top-40 left-full w-64 bg-[#171817] rounded-none shadow-lg flex flex-col z-50"
//               >
//                 <Link
//                   href="/services/gbp-management"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   GBP Management
//                 </Link>
//                 <Link
//                   href="/services/website-landing"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Website & Landing
//                 </Link>
//                 <Link
//                   href="/services/paid-ads"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Paid Ads
//                 </Link>
//                 <Link
//                   href="/services/social-media"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Social Media
//                 </Link>
//                 <Link
//                   href="/services/crm-automation"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   CRM & Automation
//                 </Link>
//                 <Link
//                   href="/services/reputation-mgmt"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Reputation Mgmt
//                 </Link>
//                 <Link
//                   href="/services/email-sms"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Email & SMS
//                 </Link>
//                 <Link
//                   href="/services/local-seo"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Local SEO
//                 </Link>
//                 <Link
//                   href="/services/analytics"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Analytics
//                 </Link>
//                 <Link
//                   href="/services/branding-support"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Branding Support
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile click dropdown with "+" */}
//           <div className="md:hidden w-full">
//             <button
//               className="w-full py-4 text-white uppercase hover:bg-white/10 transition flex justify-center items-center space-x-2"
//               onClick={() => setServicesMobile(!servicesMobile)}
//             >
//               <span>Services</span>
//               <span className="text-xl font-bold">
//                 {servicesMobile ? "-" : "+"}
//               </span>
//             </button>
//             {servicesMobile && (
//               <div className="flex flex-col w-full bg-[#1f1f1f] rounded-md mt-2">
//                 <Link
//                   href="/services/gbp-management"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   GBP Management
//                 </Link>
//                 <Link
//                   href="/services/website-landing"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Website & Landing
//                 </Link>
//                 <Link
//                   href="/services/paid-ads"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Paid Ads
//                 </Link>
//                 <Link
//                   href="/services/social-media"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Social Media
//                 </Link>
//                 <Link
//                   href="/services/crm-automation"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   CRM & Automation
//                 </Link>
//                 <Link
//                   href="/services/reputation-mgmt"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Reputation Mgmt
//                 </Link>
//                 <Link
//                   href="/services/email-sms"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Email & SMS
//                 </Link>
//                 <Link
//                   href="/services/local-seo"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Local SEO
//                 </Link>
//                 <Link
//                   href="/services/analytics"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Analytics
//                 </Link>
//                 <Link
//                   href="/services/branding-support"
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-3 text-white hover:bg-yellow-500 hover:text-black transition text-center"
//                 >
//                   Branding Support
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         <Link
//           href="/blogs"
//           onClick={() => setOpen(false)}
//           className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition"
//         >
//           Blogs
//         </Link>
//         <Link
//           href="/about"
//           onClick={() => setOpen(false)}
//           className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition"
//         >
//           About
//         </Link>
//         <Link
//           href="/portfolio"
//           onClick={() => setOpen(false)}
//           className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition"
//         >
//           Portfolio
//         </Link>
//         <Link
//           href="/contacts"
//           onClick={() => setOpen(false)}
//           className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition"
//         >
//           Contact
//         </Link>
//       </nav>

//       {/* Top Bar with Hamburger + Company Name */}
//       <div className="fixed top-4 left-4 flex items-center z-50 space-x-4">
//         {/* Hamburger */}
//         <div
//           onClick={() => setOpen(!open)}
//           className="w-12 h-12 rounded-full bg-[#090d12] flex items-center justify-center cursor-pointer relative"
//         >
//           {!open ? (
//             <span className="relative w-1/2 h-[2px] bg-white before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-white before:-top-2 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:top-2"></span>
//           ) : (
//             <span className="relative w-1/2 h-[2px] bg-white rotate-45 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:-rotate-90"></span>
//           )}
//         </div>

//         {/* Company Name */}
//         <Link href="/" onClick={() => setOpen(false)}>
//           <span className="text-white font-bold text-xl select-none cursor-pointer">
//             Online<span className="text-yellow-500">Ad</span>wise
//           </span>
//         </Link>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { gsap } from "gsap";
// import { usePathname } from "next/navigation";

// export default function NavBar() {
//   const [open, setOpen] = useState(false);
//   const [servicesHover, setServicesHover] = useState(false);
//   const [servicesMobile, setServicesMobile] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [visible, setVisible] = useState(true);

//   const pathName = usePathname();
//   const servicesRef = useRef<HTMLDivElement>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const navRef = useRef<HTMLDivElement>(null);

//   // Scroll handler for hide/show navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }

//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Animate desktop dropdown
//   useEffect(() => {
//     if (dropdownRef.current) {
//       if (servicesHover) {
//         gsap.fromTo(
//           dropdownRef.current,
//           { y: -10, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
//         );
//       }
//     }
//   }, [servicesHover]);

//   // Animate navbar entrance
//   useEffect(() => {
//     if (navRef.current) {
//       gsap.fromTo(
//         navRef.current,
//         { y: -100, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
//       );
//     }
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setOpen(false);
//   }, [pathName]);

//   if (pathName?.includes("/admin")) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 z-40 ${
//           open ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setOpen(false)}
//       />

//       {/* Main Navigation Bar */}
//       <div
//         ref={navRef}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           visible ? "translate-y-0" : "-translate-y-full"
//         } ${
//           isScrolled
//             ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16 lg:h-20">
//             {/* Logo */}
//             <Link href="/" className="flex items-center space-x-2 group">
//               <div
//                 className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
//                   isScrolled ? "text-gray-900" : "text-white"
//                 } group-hover:text-yellow-500`}
//               >
//                 Online<span className="text-yellow-500">Ad</span>wise
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-8">
//               <Link
//                 href="/"
//                 className={`font-medium transition-all duration-300 hover:text-yellow-600 ${
//                   isScrolled ? "text-gray-700" : "text-white"
//                 }`}
//               >
//                 Home
//               </Link>

//               {/* Services Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setServicesHover(true)}
//                 onMouseLeave={() => setServicesHover(false)}
//               >
//                 <button
//                   className={`font-medium transition-all duration-300 hover:text-yellow-600 flex items-center space-x-1 ${
//                     isScrolled ? "text-gray-700" : "text-white"
//                   }`}
//                 >
//                   <span>Services</span>
//                   <svg
//                     className={`w-4 h-4 transition-transform duration-300 ${
//                       servicesHover ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 {servicesHover && (
//                   <div
//                     ref={dropdownRef}
//                     className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-2 z-50"
//                   >
//                     {[
//                       "GBP Management",
//                       "Website & Landing",
//                       "Paid Ads",
//                       "Social Media",
//                       "CRM & Automation",
//                       "Reputation Mgmt",
//                       "Email & SMS",
//                       "Local SEO",
//                       "Analytics",
//                       "Branding Support",
//                     ].map((service, index) => (
//                       <Link
//                         key={service}
//                         href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
//                         className="block px-4 py-3 text-gray-700 hover:bg-yellow-500 hover:text-white transition-all duration-200 border-b border-gray-100 last:border-b-0"
//                       >
//                         {service}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {["Blogs", "About", "Portfolio", "Contact"].map((item) => (
//                 <Link
//                   key={item}
//                   href={`/${item.toLowerCase()}`}
//                   className={`font-medium transition-all duration-300 hover:text-yellow-600 ${
//                     isScrolled ? "text-gray-700" : "text-white"
//                   }`}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setOpen(!open)}
//                 className={`p-2 rounded-lg transition-all duration-300 ${
//                   isScrolled
//                     ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
//                     : "bg-white/10 hover:bg-white/20 text-white"
//                 } backdrop-blur-sm`}
//               >
//                 <div className="w-6 h-6 relative">
//                   {!open ? (
//                     <>
//                       <span
//                         className={`absolute top-1 left-0 w-6 h-0.5 transition-all duration-300 ${
//                           isScrolled ? "bg-gray-700" : "bg-white"
//                         }`}
//                       ></span>
//                       <span
//                         className={`absolute top-3 left-0 w-6 h-0.5 transition-all duration-300 ${
//                           isScrolled ? "bg-gray-700" : "bg-white"
//                         }`}
//                       ></span>
//                       <span
//                         className={`absolute top-5 left-0 w-6 h-0.5 transition-all duration-300 ${
//                           isScrolled ? "bg-gray-700" : "bg-white"
//                         }`}
//                       ></span>
//                     </>
//                   ) : (
//                     <>
//                       <span
//                         className={`absolute top-3 left-0 w-6 h-0.5 rotate-45 transition-all duration-300 ${
//                           isScrolled ? "bg-gray-700" : "bg-white"
//                         }`}
//                       ></span>
//                       <span
//                         className={`absolute top-3 left-0 w-6 h-0.5 -rotate-45 transition-all duration-300 ${
//                           isScrolled ? "bg-gray-700" : "bg-white"
//                         }`}
//                       ></span>
//                     </>
//                   )}
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Side Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl border-l border-gray-200 transform transition-transform duration-500 z-50 lg:hidden ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col h-full pt-20 pb-8 px-6">
//           {/* Close Button */}
//           <button
//             onClick={() => setOpen(false)}
//             className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>

//           {/* Navigation Links */}
//           <div className="flex-1 space-y-2">
//             <Link
//               href="/"
//               onClick={() => setOpen(false)}
//               className="block py-3 px-4 text-gray-700 hover:bg-yellow-500 hover:text-white rounded-xl transition-all duration-200 font-medium"
//             >
//               Home
//             </Link>

//             {/* Services Mobile Dropdown */}
//             <div className="space-y-2">
//               <button
//                 onClick={() => setServicesMobile(!servicesMobile)}
//                 className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-yellow-500 hover:text-white rounded-xl transition-all duration-200 font-medium"
//               >
//                 <span>Services</span>
//                 <svg
//                   className={`w-4 h-4 transition-transform duration-200 ${
//                     servicesMobile ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {servicesMobile && (
//                 <div className="ml-4 space-y-1 bg-gray-50/50 rounded-lg p-2">
//                   {[
//                     "GBP Management",
//                     "Website & Landing",
//                     "Paid Ads",
//                     "Social Media",
//                     "CRM & Automation",
//                     "Reputation Mgmt",
//                     "Email & SMS",
//                     "Local SEO",
//                     "Analytics",
//                     "Branding Support",
//                   ].map((service) => (
//                     <Link
//                       key={service}
//                       href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
//                       onClick={() => setOpen(false)}
//                       className="block py-2 px-4 text-gray-600 hover:bg-yellow-500 hover:text-white rounded-lg transition-all duration-200 text-sm"
//                     >
//                       {service}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {["Blogs", "About", "Portfolio", "Contact"].map((item) => (
//               <Link
//                 key={item}
//                 href={`/${item.toLowerCase()}`}
//                 onClick={() => setOpen(false)}
//                 className="block py-3 px-4 text-gray-700 hover:bg-yellow-500 hover:text-white rounded-xl transition-all duration-200 font-medium"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>

//           {/* Footer */}
//           <div className="border-t border-gray-200 pt-6">
//             <div className="text-center text-gray-500 text-sm">
//               © 2024 OnlineAdwise. All rights reserved.
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [servicesMobile, setServicesMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate desktop dropdown
  useEffect(() => {
    if (dropdownRef.current) {
      if (servicesHover) {
        gsap.fromTo(
          dropdownRef.current,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      }
    }
  }, [servicesHover]);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  if (pathName?.includes("/admin")) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 transition-all duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Main Navigation Bar */}
      <div
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#171817] shadow-2xl py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-white font-bold text-2xl lg:text-3xl select-none cursor-pointer hover:text-yellow-500 transition-colors duration-300">
                Online<span className="text-yellow-500">Ad</span>wise
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white uppercase hover:text-yellow-500 transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesHover(true)}
                onMouseLeave={() => setServicesHover(false)}
                ref={servicesRef}
              >
                <button className="text-white uppercase hover:text-yellow-500 transition-colors duration-200 font-medium text-sm tracking-wide flex items-center space-x-1">
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesHover ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {servicesHover && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-[#171817] border border-gray-800 shadow-2xl rounded-lg py-2 z-50"
                  >
                    <Link
                      href="/services/gbp-management"
                      className="block px-6 py-3 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                    >
                      GBP Management
                    </Link>
                    <Link
                      href="/services/website-landing"
                      className="block px-6 py-3 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                    >
                      Website & Landing
                    </Link>
                    <Link
                      href="/services/paid-ads"
                      className="block px-6 py-3 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                    >
                      Paid Ads
                    </Link>
                    <Link
                      href="/services/social-media"
                      className="block px-6 py-3 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                    >
                      Social Media
                    </Link>
                    <Link
                      href="/services/crm-automation"
                      className="block px-6 py-3 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                    >
                      CRM & Automation
                    </Link>
                    <Link
                      href="/services/reputation-mgmt"
                      className="block px-6 py-3 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                    >
                      Reputation Mgmt
                    </Link>
                    <Link
                      href="/services/email-sms"
                      className="block px-6 py-3 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                    >
                      Email & SMS
                    </Link>
                    <Link
                      href="/services/local-seo"
                      className="block px-6 py-3 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                    >
                      Local SEO
                    </Link>
                    <Link
                      href="/services/analytics"
                      className="block px-6 py-3 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                    >
                      Analytics
                    </Link>
                    <Link
                      href="/services/branding-support"
                      className="block px-6 py-3 text-white hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                    >
                      Branding Support
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blogs"
                className="text-white uppercase hover:text-yellow-500 transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                Blogs
              </Link>
              <Link
                href="/about"
                className="text-white uppercase hover:text-yellow-500 transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-white uppercase hover:text-yellow-500 transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                Portfolio
              </Link>
              <Link
                href="/contacts"
                className="text-white uppercase hover:text-yellow-500 transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="w-12 h-12 rounded-full bg-[#090d12] flex items-center justify-center cursor-pointer relative shadow-lg border border-gray-800"
              >
                {!open ? (
                  <span className="relative w-1/2 h-[2px] bg-white before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-white before:-top-2 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:top-2 transition-all duration-300"></span>
                ) : (
                  <span className="relative w-1/2 h-[2px] bg-white rotate-45 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:-rotate-90 transition-all duration-300"></span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#171817] flex flex-col transform transition-transform duration-500 z-50 shadow-2xl border-r border-gray-800 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <Link href="/" onClick={() => setOpen(false)}>
            <span className="text-white font-bold text-2xl select-none cursor-pointer">
              Online<span className="text-yellow-500">Ad</span>wise
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6">
          <div className="space-y-1 px-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block py-4 px-4 text-white uppercase hover:bg-yellow-500 hover:text-black transition-all duration-200 rounded-lg font-medium text-sm tracking-wide"
            >
              Home
            </Link>

            {/* Services Mobile Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => setServicesMobile(!servicesMobile)}
                className="w-full flex items-center justify-between py-4 px-4 text-white uppercase hover:bg-yellow-500 hover:text-black transition-all duration-200 rounded-lg font-medium text-sm tracking-wide"
              >
                <span>Services</span>
                <span className="text-lg font-bold transition-transform duration-200">
                  {servicesMobile ? "-" : "+"}
                </span>
              </button>

              {servicesMobile && (
                <div className="ml-4 space-y-1 bg-[#1f1f1f] rounded-lg p-2 border border-gray-800">
                  <Link
                    href="/services/gbp-management"
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                  >
                    GBP Management
                  </Link>
                  <Link
                    href="/services/website-landing"
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                  >
                    Website & Landing
                  </Link>
                  <Link
                    href="/services/paid-ads"
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                  >
                    Paid Ads
                  </Link>
                  <Link
                    href="/services/social-media"
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                  >
                    Social Media
                  </Link>
                  <Link
                    href="/services/crm-automation"
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                  >
                    CRM & Automation
                  </Link>
                  <Link
                    href="/services/reputation-mgmt"
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                  >
                    Reputation Mgmt
                  </Link>
                  <Link
                    href="/services/email-sms"
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                  >
                    Email & SMS
                  </Link>
                  <Link
                    href="/services/local-seo"
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                  >
                    Local SEO
                  </Link>
                  <Link
                    href="/services/analytics"
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white border-b border-gray-800 hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                  >
                    Analytics
                  </Link>
                  <Link
                    href="/services/branding-support"
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white hover:bg-yellow-500 hover:text-black transition-all duration-200 text-center text-sm"
                  >
                    Branding Support
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blogs"
              onClick={() => setOpen(false)}
              className="block py-4 px-4 text-white uppercase hover:bg-yellow-500 hover:text-black transition-all duration-200 rounded-lg font-medium text-sm tracking-wide"
            >
              Blogs
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block py-4 px-4 text-white uppercase hover:bg-yellow-500 hover:text-black transition-all duration-200 rounded-lg font-medium text-sm tracking-wide"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setOpen(false)}
              className="block py-4 px-4 text-white uppercase hover:bg-yellow-500 hover:text-black transition-all duration-200 rounded-lg font-medium text-sm tracking-wide"
            >
              Portfolio
            </Link>
            <Link
              href="/contacts"
              onClick={() => setOpen(false)}
              className="block py-4 px-4 text-white uppercase hover:bg-yellow-500 hover:text-black transition-all duration-200 rounded-lg font-medium text-sm tracking-wide"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            © 2024 OnlineAdwise
          </div>
        </div>
      </div>
    </>
  );
}
