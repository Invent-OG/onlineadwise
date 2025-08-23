"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, MessageSquare, Star, Gift } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Bonuses() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the background text first
      gsap.fromTo(
        ".bg-text",
        { opacity: 0, scale: 1.2 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );

      // Animate heading and description
      gsap.fromTo(
        ".heading-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8,
          ease: "power3.out",
        }
      );

      // Animate each bonus card
      gsap.fromTo(
        ".bonus-card",
        { opacity: 0, y: 60, rotate: -5 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          delay: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      // Animate total value block
      gsap.fromTo(
        ".total-value",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.4)",
          delay: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const bonuses = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Pre-written "Done-for-You" Ad Copy & Creative Templates',
      value: "$497 Value",
      description:
        "High-converting ad templates specifically designed for nail salons and spas",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Ready-to-use SMS & Email Follow-Up Sequences",
      value: "$297 Value",
      description:
        "Automated nurturing sequences that convert leads into loyal customers",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Google Review Growth Kit",
      value: "$197 Value",
      description:
        "Templates and strategies to collect 5-star reviews automatically",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 overflow-hidden"
    >
      {/* Background Text */}
      <h1 className="bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[11rem] font-extrabold text-neutral-400 select-none pointer-events-none whitespace-nowrap">
        ONLINEADWISE
      </h1>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="heading-content text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-yellow-100/50 rounded-full px-6 py-2 mb-6">
            <Gift className="h-5 w-5 text-yellow-600" />
            <span className="text-yellow-600 font-semibold">
              Exclusive Bonuses
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            But Wait, There&apos;s{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              More!
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Get these valuable bonuses absolutely FREE when you claim your trial
            today
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bonus-card relative bg-gradient-to-br from-yellow-50/80 to-white rounded-3xl p-8 shadow-xl border border-yellow-200/30 transform transition-transform duration-300 hover:-translate-y-6 hover:scale-105 hover:shadow-2xl"
            >
              {/* Bonus Label */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-white font-semibold px-3 py-1 rounded-full text-sm rotate-12 shadow-md border border-yellow-500">
                BONUS #{index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-5 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-white text-2xl shadow-lg border border-yellow-300">
                {bonus.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {bonus.title}
              </h3>

              {/* Value */}
              <p className="text-yellow-600 font-bold text-lg md:text-xl mb-3">
                {bonus.value}
              </p>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        {/* Total Value */}
        <div className="text-center total-value">
          <div className="inline-block bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-12 md:p-16 border border-yellow-300 shadow-2xl transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Total Bonus Value:
              <span className="text-yellow-600 ml-2">$991</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Yours absolutely FREE when you claim your trial
            </p>
            <div className="text-3xl md:text-4xl font-extrabold text-yellow-600 mb-4">
              + Your Free Trial = $1,988 Value
            </div>
            <p className="text-sm md:text-base text-gray-600">
              Limited time offer • Act now to secure these bonuses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
