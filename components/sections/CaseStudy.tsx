"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, TrendingUp, Star, Calendar, DollarSign } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in stagger animation
      gsap.fromTo(
        ".case-study-element",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
          },
        }
      );

      // Number counter animation
      gsap.to(".counter", {
        textContent: (index: number, target: Element) => {
          const value = (target as HTMLElement).getAttribute("data-target");
          return value ?? "0";
        },
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
        },
      });

      // Theme inversion (dark → light)
      // Theme inversion (light → dark or just stay black)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(sectionRef.current, {
            backgroundColor: "#171817", // 👈 black
            color: "#ffffff", // 👈 white text
            duration: 0.6,
          });
          gsap.to(".card", {
            backgroundColor: "#1f2937", // gray-800
            borderColor: "#374151", // gray-700
            duration: 0.6,
          });
          gsap.to(".stat-card", {
            backgroundColor: "#111827", // gray-900
            borderColor: "#374151",
            duration: 0.6,
          });
        },
        onLeaveBack: () => {
          gsap.to(sectionRef.current, {
            backgroundColor: "#ffffff", // 👈 white when scrolled back
            color: "#000000", // 👈 black text
            duration: 0.6,
          });
          gsap.to(".card", {
            backgroundColor: "#f9fafb", // light gray
            borderColor: "#e5e7eb",
            duration: 0.6,
          });
          gsap.to(".stat-card", {
            backgroundColor: "#f3f4f6", // lighter gray
            borderColor: "#d1d5db",
            duration: 0.6,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white text-white relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="case-study-element text-4xl md:text-5xl font-extrabold mb-6">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Real Salons
            </span>
          </h2>
          <p className="case-study-element text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how one salon transformed from struggling to fully booked
            with our system.
          </p>
        </div>

        {/* Case Study Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="case-study-element space-y-8">
            <h3 className="text-3xl font-bold text-white">
              From 20 → 90 Bookings / Month
            </h3>

            <ul className="space-y-5">
              {[
                "Invested $25/day on Meta Ads",
                "Automated follow-up to no-shows",
                "Collected 47 new 5-star reviews",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </li>
              ))}
            </ul>

            <blockquote className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border-l-4 border-yellow-500 shadow-lg">
              <p className="italic text-gray-200">
                Now we&#39;re booked solid 3 weeks out. This system changed
                everything!
              </p>
              <cite className="text-yellow-400 font-semibold block mt-3">
                — Sarah M., Salon Owner
              </cite>
            </blockquote>
          </div>

          {/* Right Side Image / Highlight */}
          <div className="case-study-element relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f"
              alt="Salon success"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-8">
              <h4 className="text-3xl font-bold text-white mb-3">
                Booked Out Weeks Ahead
              </h4>
              <p className="text-gray-300 max-w-sm">
                With the right system, growth is not just possible — it&#39;s
                predictable.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 case-study-element">
          {[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              value: "350",
              label: "Growth %",
            },
            {
              icon: <Calendar className="h-8 w-8" />,
              value: "60",
              label: "Days",
            },
            {
              icon: <Star className="h-8 w-8" />,
              value: "47",
              label: "Reviews",
            },
            {
              icon: <DollarSign className="h-8 w-8 " />,
              value: "$25",
              label: "Ad Spend",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-card bg-white/10 backdrop-blur-md p-6 rounded-full shadow-lg text-center border border-white/20 flex flex-col items-center justify-center"
            >
              <div className="text-yellow-400 mb-2">{stat.icon}</div>
              <div
                className="counter text-2xl font-bold text-white"
                data-target={stat.value}
              >
                {stat.value}
              </div>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
