"use client";

import { useEffect, useState } from "react";

export default function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true); // controls visibility
  const [isClosed, setIsClosed] = useState(false); // when user clicks ❌

  // show 10s, hide 10s, repeat
  useEffect(() => {
    if (isClosed) return; // stop everything if closed

    const toggleInterval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 10000); // every 10s toggle

    return () => clearInterval(toggleInterval);
  }, [isClosed]);

  if (isClosed || !isVisible) return null; // don’t render if hidden or closed

  return (
    <div className="w-full fixed bottom-0 left-0 z-50 px-2 sm:px-4">
      <div className="relative text-center py-2 sm:py-3 font-bold text-white bg-red-600 rounded-t-lg shadow-lg">
        <p className="text-xs sm:text-sm md:text-base px-6">
          ⚠️ Hurry! This offer expires when we reach 10 salons or at midnight
          tonight
        </p>

        {/* Close button */}
        <button
          onClick={() => setIsClosed(true)}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-white font-bold text-base sm:text-lg"
        >
          ✖
        </button>
      </div>
    </div>
  );
}
