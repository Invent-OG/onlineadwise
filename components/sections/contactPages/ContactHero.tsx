"use client";
import React from "react";

export default function ContactHero() {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      {/* Left Panel */}
      <div className="relative w-3/5 -skew-x-12 overflow-hidden">
        <div
          className="absolute inset-0 -skew-x-12 bg-center bg-no-repeat bg-contain opacity-95"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/221164/pexels-photo-221164.jpeg?_gl=1*llf0nj*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTY3MjM5NTEkbzIwJGcxJHQxNzU2NzI0MTg0JGo2MCRsMCRoMA..')",
          }}
        ></div>
      </div>

      {/* Right Panel */}
      <div className="relative md:w-3/5 w-1/2 -skew-x-12 ml-auto bg-[#1B1B1B]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 skew-x-12 w-72">
          {/* Form container with mobile blur */}
          <div className="md:bg-transparent bg-black/40 md:backdrop-blur-0 backdrop-blur-sm p-6 rounded-md">
            <h1 className="text-white text-3xl font-light mb-8">
              Leave a comment
            </h1>
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  required
                  className="peer w-full border-b border-gray-400 bg-transparent py-2 text-white focus:outline-none focus:border-gray-200"
                />
                <label className="absolute left-0 top-2 text-white text-sm transition-all peer-focus:-top-3 peer-focus:text-lg peer-focus:text-gray-200 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-gray-200">
                  Your name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  required
                  className="peer w-full border-b border-gray-400 bg-transparent py-2 text-white focus:outline-none focus:border-gray-200"
                />
                <label className="absolute left-0 top-2 text-white text-sm transition-all peer-focus:-top-3 peer-focus:text-lg peer-focus:text-gray-200 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-gray-200">
                  Your email
                </label>
              </div>
              <button
                type="submit"
                className="w-full text-center text-white bg-gray-700 hover:bg-gray-600 py-2 rounded-md transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
