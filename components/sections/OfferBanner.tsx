// "use client";

// import { use, useEffect, useState } from "react";
// import { Gift } from "lucide-react"; // icon
// import { usePathname } from "next/navigation";

// const offers = [
//   {
//     title: "50% OFF Today Only!",
//     desc: "Valid for the first 10 salons to sign up.",
//   },
//   {
//     title: "🔥 Free Consultation",
//     desc: "Book now and get a free strategy session.",
//   },
//   {
//     title: "⚡ Limited Time Deal",
//     desc: "Offer ends at midnight tonight!",
//   },
// ];

// export default function OfferBanner() {
//   const [isClosed, setIsClosed] = useState(false);
//   const [currentOffer, setCurrentOffer] = useState(0);
//   const pathName = usePathname();

//   // auto cycle offers every 8s
//   useEffect(() => {
//     if (isClosed) return;

//     const interval = setInterval(() => {
//       setCurrentOffer((prev) => (prev + 1) % offers.length);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, [isClosed]);

//   if (isClosed) return null;

//   if (pathName?.includes("/admin")) return null;

//   return (
//     <div className="fixed top-4 right-4 z-50">
//       <div className="relative flex items-start gap-2 sm:gap-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-xl shadow-lg p-3 sm:p-4 w-72 sm:w-80 animate-slide-in">
//         {/* Icon */}
//         <div className="mt-1 flex-shrink-0">
//           <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//         </div>

//         {/* Content */}
//         <div className="flex-1">
//           <h3 className="font-bold text-sm sm:text-lg">
//             {offers[currentOffer].title}
//           </h3>
//           <p className="text-xs sm:text-sm text-yellow-100">
//             {offers[currentOffer].desc}
//           </p>
//           <button className="mt-2 bg-white text-yellow-800 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-lg shadow hover:bg-yellow-100 transition">
//             Claim Now
//           </button>
//         </div>

//         {/* Close Button */}
//         <button
//           onClick={() => setIsClosed(true)}
//           className="absolute top-2 right-2 text-white text-sm sm:text-lg hover:text-yellow-200"
//         >
//           ✖
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function ProfessionalOfferBanner() {
  const [isClosed, setIsClosed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathName = usePathname();

  // Initialize visibility
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isClosed) return null;
  if (pathName?.includes("/admin")) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <div
        className={`
          relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80
          transform transition-all duration-500 ease-out
          ${isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-20 opacity-0 scale-95"}
          hover:shadow-xl hover:scale-[1.02]
          border-l-4 border-l-yellow-500
          bg-gradient-to-r from-blue-50 to-indigo-50
        `}
      >
        {/* Header with badge and close button */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-100 shadow-md">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Limited Time Offer
              </span>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-6 h-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-100" />
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsClosed(true)}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
          >
            <X className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3 mb-4">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">
            Exclusive Launch Offer
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Get 50% off your first month - Limited to the first 10 partners to
            sign up. Transform your business with our premium services.
          </p>
        </div>

        {/* CTA Button */}
        <button
          className="
          w-full py-3 px-4 rounded-xl font-semibold text-sm
          bg-gradient-to-r from-yellow-500 to-yellow-300 text-white
          hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2
          shadow-md hover:shadow-xl
        "
        >
          Claim Your 50% Discount
        </button>

        {/* Timer badge */}
        <div className="flex justify-center mt-3">
          <div className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            Ends in 24 hours
          </div>
        </div>
      </div>
    </div>
  );
}
