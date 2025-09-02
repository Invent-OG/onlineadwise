"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false); // desktop hover
  const [servicesMobile, setServicesMobile] = useState(false); // mobile click
  const servicesRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Animate desktop dropdown
  useEffect(() => {
    if (dropdownRef.current) {
      if (servicesHover) {
        gsap.fromTo(
          dropdownRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      }
    }
  }, [servicesHover]);

  const services = [
    "GBP Management",
    "Website & Landing",
    "Paid Ads",
    "Social Media",
    "CRM & Automation",
    "Reputation Mgmt",
    "Email & SMS",
    "Local SEO",
    "Analytics",
    "Branding Support",
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-all duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Side Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-[70%] bg-[#171817] flex flex-col items-center justify-center transform transition-transform duration-300 z-50 shadow-2xl
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition"
        >
          Home
        </Link>

        {/* Services */}
        <div className="w-full text-center relative">
          {/* Desktop hover dropdown */}
          <div
            className="hidden md:block w-full relative"
            onMouseEnter={() => setServicesHover(true)}
            onMouseLeave={() => setServicesHover(false)}
            ref={servicesRef}
          >
            <button className="w-full py-4 text-white uppercase hover:bg-white/10 transition">
              Services
            </button>

            {servicesHover && (
              <div
                ref={dropdownRef}
                className="absolute -top-40 left-full w-64 bg-[#171817] rounded-none shadow-lg flex flex-col z-50"
              >
                {services.map((service, index) => (
                  <Link
                    key={service}
                    href={`/services#${service
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center ${
                      index === services.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile click dropdown with "+" */}
          <div className="md:hidden w-full">
            <button
              className="w-full py-4 text-white uppercase hover:bg-white/10 transition flex justify-center items-center space-x-2"
              onClick={() => setServicesMobile(!servicesMobile)}
            >
              <span>Services</span>
              <span className="text-xl font-bold">
                {servicesMobile ? "-" : "+"}
              </span>
            </button>
            {servicesMobile && (
              <div className="flex flex-col w-full bg-[#1f1f1f] rounded-md mt-2">
                {services.map((service, index) => (
                  <Link
                    key={service}
                    href={`/services#${service
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center ${
                      index === services.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <Link
          href="/blogs"
          onClick={() => setOpen(false)}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition"
        >
          Blogs
        </Link>
        <Link
          href="#about"
          onClick={() => setOpen(false)}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition"
        >
          About
        </Link>
        <Link
          href="/contacts"
          onClick={() => setOpen(false)}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition"
        >
          Contact
        </Link>
      </nav>

      {/* Top Bar with Hamburger + Company Name */}
      <div className="fixed top-4 left-4 flex items-center z-50 space-x-4">
        {/* Hamburger */}
        <div
          onClick={() => setOpen(!open)}
          className="w-12 h-12 rounded-full bg-[#090d12] flex items-center justify-center cursor-pointer relative"
        >
          {!open ? (
            <span className="relative w-1/2 h-[2px] bg-white before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-white before:-top-2 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:top-2"></span>
          ) : (
            <span className="relative w-1/2 h-[2px] bg-white rotate-45 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:-rotate-90"></span>
          )}
        </div>

        {/* Company Name */}
        <span className="text-white font-bold text-xl select-none">
          Online<span className="text-yellow-500">Ad</span>wise
        </span>
      </div>
    </>
  );
}
