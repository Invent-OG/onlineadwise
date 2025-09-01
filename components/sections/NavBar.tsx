"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const initialPoint = useRef<{ x: number; y: number } | null>(null);

  // Handle touch events for swipe
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      initialPoint.current = { x: touch.pageX, y: touch.pageY };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!initialPoint.current) return;
      const final = e.changedTouches[0];
      const xAbs = Math.abs(initialPoint.current.x - final.pageX);
      const yAbs = Math.abs(initialPoint.current.y - final.pageY);

      if (xAbs > 120 || yAbs > 120) {
        if (xAbs > yAbs) {
          if (final.pageX < initialPoint.current.x) {
            // swipe left
            setOpen(false);
          } else {
            // swipe right
            setOpen(true);
          }
        }
      }
      initialPoint.current = null;
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Smooth scroll for in-page navigation
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-[70%] bg-[#090d12] flex flex-col items-center justify-center transform transition-transform duration-300 z-50 shadow-2xl
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo */}
        <div className="fixed top-0 left-0 p-4 text-2xl font-bold text-yellow-500 z-50">
          OnlineAdwise
        </div>

        {/* Nav Links */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 hover:border-l-4 hover:border-r-4 border-yellow-500 transition"
        >
          Home
        </Link>
        <Link
          href="/services" // ✅ real Next.js route
          onClick={() => setOpen(false)}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 hover:border-l-4 hover:border-r-4 border-yellow-500 transition"
        >
          Service
        </Link>
        <Link
          href="#about"
          onClick={handleLinkClick}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 hover:border-l-4 hover:border-r-4 border-yellow-500 transition"
        >
          About
        </Link>
        <Link
          href="#contact"
          onClick={handleLinkClick}
          className="w-full text-center py-4 text-white uppercase hover:bg-white/10 hover:border-l-4 hover:border-r-4 border-yellow-500 transition"
        >
          Contact
        </Link>

        {/* Trigger (hamburger / close button) */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute top-8 -right-20 w-12 h-12 rounded-full bg-[#090d12] flex items-center justify-center cursor-pointer z-[60]"
        >
          {!open ? (
            // Hamburger
            <span className="relative w-1/2 h-[2px] bg-white before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-white before:-top-2 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:top-2"></span>
          ) : (
            // Close (X)
            <span className="relative w-1/2 h-[2px] bg-white rotate-45 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-white after:-rotate-90"></span>
          )}
        </div>
      </nav>
    </>
  );
}
