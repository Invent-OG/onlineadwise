"use client";
import React from "react";

function RepSecond() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h1 className="text-5xl text-center font-extrabold mb-4">
        Layer Web Design
      </h1>
      <h2 className="text-xl  text-center text-yellow-500 mb-10">
        YOUR WEBSITE IS YOUR DIGITAL HANDSHAKE. LET&apos;S MAKE IT A STRONG ONE.
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-gray-300 leading-relaxed">
            Your online reputation defines how potential clients perceive your
            business long before they ever speak with you. At OnlineAdwise, we
            help you take control of that narrative. From managing reviews and
            improving ratings to building trust through consistent brand
            visibility, our reputation management strategies ensure your
            business stands out for all the right reasons. We don’t just protect
            your reputation — we elevate it, turning positive experiences into
            lasting impressions.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-black border border-gray-700 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-yellow-500 text-center mb-6">
            FREE 1:1 STRATEGY SESSION
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full p-3 border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full p-3 border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <input
                type="tel"
                placeholder="Phone*"
                className="w-full p-3 border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-md 
                         bg-gradient-to-r from-yellow-500 to-yellow-400 
                         hover:opacity-90 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RepSecond;
