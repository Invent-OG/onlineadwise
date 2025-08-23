"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Gift, Shield, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Offer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [bgTheme, setBgTheme] = useState("bg-black");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for background scrolling
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate offer card
      gsap.fromTo(
        ".offer-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      // Animate feature boxes
      gsap.fromTo(
        ".feature-box",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
          },
        }
      );

      // Theme change on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          setBgTheme(self.progress > 0.5 ? "bg-white" : "bg-black");
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
      className={`relative transition-colors duration-1000 ${bgTheme} py-24`}
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?_gl=1*whf0ll*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTU4NjAyODckbzkkZzEkdDE3NTU4NjIwNzckajYwJGwwJGgw')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        boxShadow:
          bgTheme === "bg-black"
            ? "inset 0 0 0 1000px rgba(0, 0, 0, 0.7)"
            : "inset 0 0 0 1000px rgba(255, 255, 255, 0.8)",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              bgTheme === "bg-black" ? "text-white" : "text-black"
            }`}
          >
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Limited-Time Offer
            </span>
          </h2>
          <p
            className={`text-lg ${
              bgTheme === "bg-black" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Only for the next 10 salon/spa owners!
          </p>
        </div>

        {/* Offer Card */}
        <div className="offer-card max-w-4xl mx-auto bg-white rounded-2xl dark:bg-gray-900  p-10 md:p-16 shadow-2xl transition-colors duration-1000">
          <h3
            className={`text-3xl md:text-4xl font-bold mb-4 text-center ${
              bgTheme === "bg-black" ? "text-gray-900" : "text-gray-900"
            }`}
          >
            Free 7-Day Trial of Our Booking Automation System
          </h3>
          <p className="text-lg text-yellow-500 dark:text-yellow-400 mb-8 text-center">
            + Free Audit of Your Ads & Website
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="feature-box flex flex-col items-center p-6 rounded-2xl border border-gray-300/20 shadow-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-yellow-500 mb-2">{feature.icon}</div>
                <h4
                  className={`font-semibold mb-1 ${
                    bgTheme === "bg-black" ? "text-gray-900" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h4>
                <p
                  className={`text-sm text-center ${
                    bgTheme === "bg-black" ? "text-gray-500" : "text-black"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center gap-2">
              Claim Your Free Trial
              <ArrowRight className="h-5 w-5" />
            </button>
            <p
              className={`text-sm mt-2 ${
                bgTheme === "bg-black" ? "text-gray-500" : "text-gray-600"
              }`}
            >
              No credit card required • Setup begins immediately
            </p>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-red-500 animate-pulse">
            ⚠️ Hurry! This offer expires when we reach 10 salons or at midnight
            tonight
          </p>
        </div>
      </div>
    </section>
  );
}
