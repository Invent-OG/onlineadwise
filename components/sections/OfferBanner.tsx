"use client";

import { useEffect, useState } from "react";
import { Gift } from "lucide-react"; // icon

const offers = [
  {
    title: "50% OFF Today Only!",
    desc: "Valid for the first 10 salons to sign up.",
  },
  {
    title: "🔥 Free Consultation",
    desc: "Book now and get a free strategy session.",
  },
  {
    title: "⚡ Limited Time Deal",
    desc: "Offer ends at midnight tonight!",
  },
];

export default function OfferBanner() {
  const [isClosed, setIsClosed] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);

  // auto cycle offers every 8s
  useEffect(() => {
    if (isClosed) return;

    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isClosed]);

  if (isClosed) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative flex items-start gap-2 sm:gap-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-xl shadow-lg p-3 sm:p-4 w-72 sm:w-80 animate-slide-in">
        {/* Icon */}
        <div className="mt-1 flex-shrink-0">
          <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-bold text-sm sm:text-lg">
            {offers[currentOffer].title}
          </h3>
          <p className="text-xs sm:text-sm text-yellow-100">
            {offers[currentOffer].desc}
          </p>
          <button className="mt-2 bg-white text-yellow-800 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-lg shadow hover:bg-yellow-100 transition">
            Claim Now
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsClosed(true)}
          className="absolute top-2 right-2 text-white text-sm sm:text-lg hover:text-yellow-200"
        >
          ✖
        </button>
      </div>
    </div>
  );
}
