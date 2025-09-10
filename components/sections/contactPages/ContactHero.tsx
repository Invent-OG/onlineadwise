"use client";

import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    location: "",
    booking: "",
    interest: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(
          "Failed to submit form. Please check your inputs or try again later."
        );
        console.error("Error response:", data);
        setLoading(false);
        return;
      }

      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        location: "",
        booking: "",
        interest: "",
      });
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-12 bg-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3815753/pexels-photo-3815753.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto px-6">
        <div className="flex flex-wrap -mx-6 relative z-10">
          {/* Contact Info */}
          <div className="w-full md:w-5/12 px-6 mb-12 py-16 md:mb-0 text-gray-100">
            <div className="mb-8">
              <div className="text-start mb-16 text-gray-100 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Contact <span className="text-yellow-500">Us</span>
                </h2>
                <p className="mt-4 text-gray-200 text-base md:text-lg leading-relaxed">
                  Bringing beauty, wellness, and style worldwide. Get in touch
                  with our salon, spa, and nail experts today.
                </p>
              </div>
              <h3 className="text-xl text-yellow-500 font-semibold mb-2">
                Contact detail
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                We’re here to help you book your next salon, spa, or nail care
                session—reach out anytime.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <i className="fas fa-mobile-alt text-2xl text-yellow-500 mr-4 mt-1"></i>
                <div>
                  <h4 className="text-sm text-yellow-500 font-medium">
                    PHONE:
                  </h4>
                  <span className="text-gray-200 text-sm">+91 8826728055</span>
                </div>
              </div>

              <div className="flex items-start">
                <i className="far fa-envelope text-2xl text-yellow-500 mr-4 mt-1"></i>
                <div>
                  <h4 className="text-sm text-yellow-500 font-medium">
                    EMAIL:
                  </h4>
                  <span className="text-gray-200 text-sm">
                    info.onlineadwise@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-2xl text-yellow-500 mr-4 mt-1"></i>
                <div>
                  <h4 className="text-sm text-yellow-500 font-medium">
                    ADDRESS:
                  </h4>
                  <span className="text-gray-200 text-sm">
                    Serving Salons Nationwide
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4 px-2 text-xl">
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
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-7/12 px-6">
            <form
              className="md:bg-black/20 bg-transparent backdrop-blur-md rounded-xl p-8 shadow-lg space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="w-full p-4 text-sm text-white rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full p-4 text-sm text-white rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                required
                className="w-full p-4 text-sm text-white rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleInputChange}
                placeholder="Business"
                required
                className="w-full p-4 text-sm text-white rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                required
                className="w-full p-4 text-sm text-white rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              {/* Booking Dropdown */}
              <div className="relative w-full">
                <select
                  name="booking"
                  value={formData.booking}
                  onChange={handleInputChange}
                  className="w-full appearance-none p-4 text-sm text-gray-200 rounded-lg bg-[#171817] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
                >
                  <option value="">Select range</option>
                  <option value="0-20">0-20 bookings</option>
                  <option value="21-50">21-50 bookings</option>
                  <option value="51-100">51-100 bookings</option>
                  <option value="100+">100+ bookings</option>
                </select>

                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <textarea
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                placeholder="Tell us about your biggest challenge"
                rows={5}
                required
                className="w-full p-4 text-sm text-white rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-yellow-500 text-white rounded-lg text-sm font-medium hover:bg-transparent hover:border hover:border-white transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Now!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
