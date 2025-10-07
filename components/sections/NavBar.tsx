"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [servicesMobile, setServicesMobile] = useState(false);
  const pathName = usePathname();

  const servicesRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null); // ✅ NEW
  const topLineRef = useRef<HTMLSpanElement>(null);
  const middleLineRef = useRef<HTMLSpanElement>(null);
  const bottomLineRef = useRef<HTMLSpanElement>(null);

  const services = [
    { href: "/services/gbp-management", label: "GBP Management" },
    { href: "/services/website-landing", label: "Website & Landing" },
    { href: "/services/paid-ads", label: "Paid Ads" },
    { href: "/services/social-media", label: "Social Media" },
    { href: "/services/crm-automation", label: "CRM & Automation" },
    { href: "/services/reputation-mgmt", label: "Reputation Mgmt" },
    { href: "/services/email-sms", label: "Email & SMS" },
    { href: "/services/local-seo", label: "Local SEO" },
    { href: "/services/analytics", label: "Analytics" },
    { href: "/services/branding-support", label: "Branding Support" },
  ];

  // Desktop dropdown animation
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

  // Hamburger animation
  useEffect(() => {
    if (topLineRef.current && middleLineRef.current && bottomLineRef.current) {
      if (open) {
        gsap.to(topLineRef.current, {
          rotation: 45,
          y: 6,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(middleLineRef.current, { opacity: 0, duration: 0.2 });
        gsap.to(bottomLineRef.current, {
          rotation: -45,
          y: -6,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(topLineRef.current, {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(middleLineRef.current, {
          opacity: 1,
          duration: 0.2,
          delay: 0.1,
        });
        gsap.to(bottomLineRef.current, {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  }, [open]);

  // Auto close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close when clicking outside (ignore burger button)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        burgerRef.current &&
        !burgerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (pathName?.includes("/admin")) return null;

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
        ref={menuRef}
        className={`fixed top-0 left-0 h-full bg-[#171817] flex flex-col items-center justify-center transform transition-transform duration-300 z-50 shadow-2xl
        w-[280px] sm:w-[320px] md:w-[70%] max-w-sm ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition text-sm sm:text-base"
        >
          Home
        </Link>

        {/* SERVICES */}
        <div className="w-full text-center relative">
          {/* Desktop Hover Dropdown */}
          <div
            className="hidden md:block w-full relative"
            onMouseEnter={() => setServicesHover(true)}
            onMouseLeave={() => setServicesHover(false)}
            ref={servicesRef}
          >
            <button className="w-full py-4 text-white uppercase hover:bg-white/10 transition text-sm sm:text-base flex items-center justify-center space-x-2">
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  servicesHover ? "rotate-180" : "rotate-0"
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
                className="absolute -top-40 left-full w-64 bg-[#171817] rounded-none shadow-lg flex flex-col z-50 border border-gray-700"
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center text-sm flex items-center justify-between group"
                  >
                    <span>{service.label}</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Click Dropdown */}
          <div className="md:hidden w-full">
            <button
              type="button"
              className="w-full py-4 text-white uppercase hover:bg-white/10 transition flex justify-center items-center space-x-2 text-sm sm:text-base group"
              onClick={(e) => {
                e.stopPropagation();
                setServicesMobile(!servicesMobile);
              }}
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  servicesMobile ? "rotate-180" : "rotate-0"
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

            {servicesMobile && (
              <div className="flex flex-col w-full bg-[#1f1f1f] rounded-md mt-2 border border-gray-700">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => {
                      setOpen(false);
                      setServicesMobile(false);
                    }}
                    className="px-4 py-3 text-white border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition text-center text-sm flex items-center justify-between group"
                  >
                    <span>{service.label}</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Other Links */}
        <Link
          href="/blogs"
          onClick={() => setOpen(false)}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition text-sm sm:text-base"
        >
          Blogs
        </Link>
        <Link
          href="/about"
          onClick={() => setOpen(false)}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition text-sm sm:text-base"
        >
          About
        </Link>
        <Link
          href="/portfolio"
          onClick={() => setOpen(false)}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition text-sm sm:text-base"
        >
          Portfolio
        </Link>
        <Link
          href="/contacts"
          onClick={() => setOpen(false)}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 transition text-sm sm:text-base"
        >
          Contact
        </Link>
      </nav>

      {/* Top Bar */}
      <div className="fixed top-4 left-4 flex items-center z-50 space-x-3 sm:space-x-4">
        <div
          ref={burgerRef} // ✅ added ref
          onClick={() => setOpen(!open)}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#090d12] flex items-center justify-center cursor-pointer relative group hover:bg-[#1a1d21] transition-colors duration-300"
        >
          <div className="w-6 h-5 relative">
            <span
              ref={topLineRef}
              className="absolute top-0 left-0 w-full h-0.5 bg-white transform origin-center"
            ></span>
            <span
              ref={middleLineRef}
              className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2"
            ></span>
            <span
              ref={bottomLineRef}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-center"
            ></span>
          </div>
        </div>

        <Link href="/" onClick={() => setOpen(false)}>
          <span className="text-white font-bold text-lg sm:text-xl select-none cursor-pointer hover:text-yellow-500 transition-colors duration-300">
            Online<span className="text-yellow-500">Ad</span>wise
          </span>
        </Link>
      </div>
    </>
  );
}
