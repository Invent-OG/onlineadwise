"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  return (
    <footer className="w-full  bg-[#171817] text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-wrap justify-between gap-8">
        {/* Column 1: Company Info */}
        <div className="flex-1 min-w-[150px] max-w-[250px]">
          <h3 className="text-xl font-bold text-white mb-2">
            Online<span className="text-yellow-500">Ad</span>wise
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            Helping Salons & Spas Grow Since 2020
          </p>
          <p className="text-gray-500 text-xs mt-1">
            © 2025 OnlineAdwise. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 text-xl">
            <a
              href="https://www.facebook.com/online.adwise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/online.adwise/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Column 2: Pages */}
        <div className="flex-1 min-w-[120px] max-w-[200px]">
          <h4 className="text-lg font-semibold text-white mb-3">Pages</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-yellow-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-yellow-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="flex-1 min-w-[120px] max-w-[200px]">
          <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/consulting"
                className="hover:text-yellow-400 transition-colors"
              >
                Consulting
              </a>
            </li>
            <li>
              <a
                href="/marketing"
                className="hover:text-yellow-400 transition-colors"
              >
                Marketing
              </a>
            </li>
            <li>
              <a
                href="/seo"
                className="hover:text-yellow-400 transition-colors"
              >
                SEO
              </a>
            </li>
            <li>
              <a
                href="/social-media"
                className="hover:text-yellow-400 transition-colors"
              >
                Social Media
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal & Support */}
        <div className="flex-1 min-w-[120px] max-w-[200px]">
          <h4 className="text-lg font-semibold text-white mb-3">
            Legal & Support
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-yellow-400 transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="hover:text-yellow-400 transition-colors"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="/admin"
                className="hover:text-yellow-400 transition-colors"
              >
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
