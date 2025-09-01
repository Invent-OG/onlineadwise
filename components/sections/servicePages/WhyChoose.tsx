"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { FaLightbulb, FaUsers, FaClock } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="w-full bg-[#171817] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative flex justify-center why-image">
          <Image
            src="https://upsense.in/wp-content/uploads/2025/05/professional-businessman-3d-character-sitting-couch-3d-character-men-with-laptop_1002350-2118.png"
            alt="Professional Businessman"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm text-yellow-500 mb-2 why-subtitle">
            ★ Why Choose ★
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 why-title">
            Why Should Choose <br /> Up Sense?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl why-subtitle">
            We don’t just offer services, we deliver results. At Up Sense, every
            project is driven by strategy, backed by creativity, and focused on
            your business growth.
          </p>

          {/* Feature List */}
          <div className="space-y-6">
            <div
              className="why-feature flex items-start gap-4 border-l border-gray-700 pl-6 
                  p-4 rounded-lg transition-all duration-300 hover:bg-gray-800 cursor-pointer"
            >
              <FaLightbulb className="text-yellow-500 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Innovative Solutions</h3>
                <p className="text-gray-400 text-sm">
                  We stay ahead of trends to deliver fresh, effective digital
                  strategies tailored to your business needs.
                </p>
              </div>
            </div>

            <div
              className="why-feature flex items-start gap-4 border-l border-gray-700 pl-6 
                  p-4 rounded-lg transition-all duration-300 hover:bg-gray-800 cursor-pointer bg-gray-900/40"
            >
              <FaUsers className="text-yellow-500 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Dedicated Team</h3>
                <p className="text-gray-400 text-sm">
                  Our experienced team treats your brand like their own, working
                  with focus, passion, and purpose.
                </p>
              </div>
            </div>

            <div
              className="why-feature flex items-start gap-4 border-l border-gray-700 pl-6 
                  p-4 rounded-lg transition-all duration-300 hover:bg-gray-800 cursor-pointer"
            >
              <FaClock className="text-yellow-500 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">24/7 Hours Support</h3>
                <p className="text-gray-400 text-sm">
                  Whether it’s a quick fix or a big question, we’re here for you
                  — anytime you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
