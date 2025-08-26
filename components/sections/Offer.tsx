"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Gift, Shield, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Offer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [bgTheme, setBgTheme] = useState("dark");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".offer-wrapper",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      gsap.fromTo(
        ".feature-box",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          setBgTheme(self.progress > 0.5 ? "light" : "dark");
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Gift className="h-8 w-8" />,
      title: "No Risk",
      description: "Cancel anytime",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Just Results",
      description: "See real bookings",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Limited Spots",
      description: "Only 10 per month",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative py-24 transition-colors duration-700 ${
        bgTheme === "dark" ? "bg-[#171817] text-white" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Wrapper */}
        <div className="offer-wrapper grid md:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-900 shadow-2xl rounded-3xl overflow-hidden">
          {/* Left Image */}
          <div
            className="h-80 md:h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg')",
            }}
          ></div>

          {/* Right Content */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                <span className="text-black">Limited-</span>Time Offer
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Only for the next 10 salon/spa owners!
            </p>

            {/* Card Inner */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
              Free 7-Day Trial of Our Booking Automation System
            </h3>
            <p className="text-yellow-600 dark:text-yellow-400 mb-8 font-medium">
              + Free Audit of Your Ads & Website
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="feature-box flex flex-col items-center text-center p-5 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-yellow-500 mb-2">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center md:text-left">
              <button className="bg-yellow-500 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:scale-105">
                Claim Your Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-sm mt-3 text-gray-500 dark:text-gray-400">
                No credit card required • Setup begins immediately
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
