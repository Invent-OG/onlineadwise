"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, DollarSign, Clock, Star, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".benefit-card");

      // Animate cards
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
            x: i % 2 === 0 ? -100 : 100,
            rotate: i % 2 === 0 ? -5 : 5,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Theme change (black → white)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(sectionRef.current, {
            backgroundColor: "#ffffff",
            color: "#000000",
            duration: 0.6,
          });
        },
        onLeaveBack: () => {
          gsap.to(sectionRef.current, {
            backgroundColor: "#000000",
            color: "#ffffff",
            duration: 0.6,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "More Bookings, Less Stress",
      description: "Predictable appointments every week",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Higher Profit Margins",
      description: "Target high-value clients, not just discount seekers",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save Time",
      description: "Automation does the follow-up for you",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Stand Out in Your City",
      description: "Dominate local Google & Meta ads",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Repeat Clients Who Love You",
      description: "Build loyalty, not just one-time sales",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 transition-colors duration-500 bg-[#171817] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-yellow-500">Choose Us?</span>
          </h2>
          <p className="text-lg text-gray-400">
            Benefits that make your salon grow faster and stress-free
          </p>
        </div>

        {/* Cards Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card flex flex-col items-center text-center p-8 rounded-xl border border-gray-300"
            >
              <div className="mb-6 text-yellow-500">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Outro Message */}
        <div className="mt-24 text-center">
          <p className="text-xl">
            Because your salon deserves to be the{" "}
            <span className="text-yellow-500 font-semibold">
              #1 choice in your city
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
