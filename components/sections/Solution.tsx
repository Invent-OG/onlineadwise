"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Globe, Zap, Star, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".solution-step");
      const bgs = gsap.utils.toArray<HTMLElement>(".solution-bg-img");

      steps.forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: i % 2 === 0 ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              end: "bottom center",
              toggleActions: "play reverse play reverse",
              onEnter: () => {
                gsap.to(bgs[i], {
                  opacity: 1,
                  duration: 1,
                  ease: "power2.out",
                });
              },
              onLeaveBack: () => {
                gsap.to(bgs[i], {
                  opacity: 0,
                  // duration: 1,
                  ease: "power2.inOut",
                });
              },
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Target className="h-8 w-8 text-yellow-400" />,
      title: "Laser-Focused Ads (Google & Meta)",
      description:
        "Attract people actively searching for nail salons, spa treatments, facials, massages.",
      bg: "https://antdisplay.com/pub/media/magefan_blog/hair_styling_shop_2_.jpg",
    },
    {
      icon: <Globe className="h-8 w-8 text-yellow-400" />,
      title: "Conversion-Optimized Landing Pages",
      description:
        "Showcase services, offers, reviews, and make booking effortless.",
      bg: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Smart Automation (GoHighLevel)",
      description:
        "Instantly nurture leads with SMS, WhatsApp, and email reminders so you never lose a client again.",
      bg: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      title: "Reputation & Review Boosting",
      description: "Collect and showcase 5-star reviews on Google & Facebook.",
      bg: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    },
    {
      icon: <Heart className="h-8 w-8 text-yellow-400" />,
      title: "Retention Engine",
      description:
        "Loyalty campaigns, birthday specials, and referral offers that keep clients coming back.",
      bg: "https://images.pexels.com/photos/3765110/pexels-photo-3765110.jpeg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Background images */}
      <div className="absolute inset-0">
        {features.map((f, i) => (
          <div
            key={i}
            className="solution-bg-img absolute inset-0 opacity-0"
            style={{
              backgroundImage: `url(${f.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 1s ease",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Nail Salon &amp; Spa{" "}
          <span className="text-yellow-500">Growth System</span>
        </h2>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`solution-step flex flex-col md:flex-row items-center justify-between gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Icon & text */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg max-w-md">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-white/20 rounded-xl">{feature.icon}</div>
                <h4 className="text-2xl font-semibold">{feature.title}</h4>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>

            {/* Image preview */}
            <div className="hidden md:block w-[400px] h-[200px] rounded-xl overflow-hidden shadow-xl">
              <img
                src={feature.bg}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
