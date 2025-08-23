"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { StarBorder } from "@/components/ui/star-border";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-element",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      // Floating animation for background elements
      gsap.to(".floating-cta", {
        y: -15,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-cta absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="floating-cta absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="floating-cta absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400/15 to-yellow-600/15 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Final Push Message */}
          <div className="cta-element mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Your Salon Deserves to be{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Fully Booked
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The only thing standing between you and consistent clients is a
              proven system.
            </p>

            <p className="text-lg text-gray-400 mb-12">
              Book your free call now and let us show you how we can make your
              salon the #1 choice in your city.
            </p>
          </div>

          {/* Main CTA Buttons */}
          <div className="cta-element space-y-6 mb-16">
            <StarBorder
              color="hsl(45, 93%, 47%)"
              speed="4s"
              className="w-full sm:w-auto"
            >
              <div className="flex items-center justify-center">
                <Calendar className="mr-3 h-6 w-6" />
                Book Your Free Growth Call Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </div>
            </StarBorder>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Or call us directly:</p>
              <StarBorder
                color="hsl(45, 93%, 47%)"
                speed="5s"
                className="w-full sm:w-auto"
              >
                <div className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  (555) 123-SALON
                </div>
              </StarBorder>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="cta-element grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">45 Min</div>
              <p className="text-gray-400">Free consultation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">No Risk</div>
              <p className="text-gray-400">Cancel anytime</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">Results</div>
              <p className="text-gray-400">Or we work for free</p>
            </div>
          </div>

          {/* Final Urgency */}
          <div className="cta-element bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-xl p-6 border border-red-500/30">
            <p className="text-lg font-semibold text-white mb-2">
              🔥 Last Chance: Only 3 Free Trials Left This Month
            </p>
            <p className="text-sm text-gray-300">
              Don&apos;t let another month go by with empty appointment books.
              Your competitors are already growing – it&apos;s time to catch up.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="mt-20 pt-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                OnlineAdwise
              </h3>
              <p className="text-gray-400 mt-2">
                Helping Salons & Spas Grow Since 2020
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-500">
              <span>© 2025 OnlineAdwise. All rights reserved.</span>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </section>
  );
}
