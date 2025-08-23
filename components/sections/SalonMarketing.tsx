"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SalonMarketing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-up").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-[#171817] text-gray-100 px-6 md:px-16 lg:px-24 py-16 space-y-24"
    >
      {/* Intro */}
      <div className="text-center space-y-6 fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Digital Marketing for Salons, Spas & Wellness Centers
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          As a dedicated digital marketing agency, we help salons, spas, and
          wellness centers attract more clients, increase bookings, and build
          long-term loyalty. Our approach combines visibility, advertising,
          automation, and retention strategies designed specifically for local
          businesses in the beauty and wellness industry.
        </p>
      </div>

      {/* Services Accordion */}
      <div className="space-y-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="fade-up cursor-pointer relative bg-white/5 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-700 transition-transform duration-300 hover:-translate-y-1"
            onClick={() => toggleAccordion(i)}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                {/* Icon placeholder */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/30">
                  <span className="text-white font-bold text-lg">💎</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {service.title}
                </h2>
              </div>
              <div className="text-white text-2xl">
                {activeIndex === i ? "−" : "+"}
              </div>
            </div>

            {/* Content */}
            {activeIndex === i && (
              <div className="px-6 pb-6 space-y-4">
                <p className="text-gray-300">{service.desc}</p>
                <ul className="space-y-2">
                  {service.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-green-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-green-400 font-semibold border-t border-gray-700 pt-3">
                  👉 Result: {service.result}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Packages */}
      <div className="fade-up">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          🎯 Service Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-[#1f1f1f] rounded-2xl p-8 border border-gray-800 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {pkg.title}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {pkg.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="fade-up text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">🚀 Why Choose Us?</h2>
        <p className="text-gray-300 max-w-4xl mx-auto">
          Unlike traditional agencies that only run ads, we create a complete
          growth system for salons, spas, and wellness centers. From local
          visibility to bookings, from automation to client retention — we cover
          the full journey.
        </p>
      </div>
    </div>
  );
}

const services = [
  {
    title: "✅ 1. Google Business Profile (GBP) Management",
    desc: "Your Google Business Profile is often the first impression new clients see when searching 'Salon near me' or 'Spa in [City]'. We help you stand out and drive calls, bookings, and foot traffic.",
    points: [
      "Claim and optimize your profile for maximum visibility.",
      "Update business hours, services, photos, and offers.",
      "Create weekly posts to highlight promotions or new services.",
      "Manage and respond to client reviews professionally.",
      "Track insights (calls, directions, bookings) directly from Google.",
    ],
    result: "More local visibility and consistent new bookings.",
  },
  {
    title: "✅ 2. Website & Landing Page Optimization",
    desc: "Your website is your online storefront. We ensure it’s built to convert visitors into paying clients.",
    points: [
      "Create or optimize a mobile-friendly, fast-loading website.",
      "Build service-specific landing pages (facials, massages, haircuts).",
      "Integrate online booking systems for easy client scheduling.",
      "Add conversion-focused design elements (testimonials, CTAs, reviews).",
      "Install tracking codes (Google Analytics, GTM, Facebook Pixel).",
    ],
    result: "Higher conversions and more confirmed appointments.",
  },
  {
    title: "✅ 3. Paid Advertising (Google Ads & Meta Ads)",
    desc: "Get found by new clients and fill your appointment calendar with targeted ads.",
    points: [
      "Google Local Search Ads, Display Ads, YouTube ads.",
      "Meta Ads (Facebook & Instagram) with awareness, retargeting, and seasonal campaigns.",
      "“First-time offer” ads to attract new customers.",
    ],
    result:
      "Steady stream of new clients who are actively searching or engaging with your services.",
  },
  {
    title: "✅ 4. Social Media Management",
    desc: "Your salon or spa needs a strong online presence where clients spend their time: Facebook & Instagram.",
    points: [
      "Monthly content calendar with branded posts and reels.",
      "Run engagement campaigns (polls, giveaways, stories).",
      "Respond to messages, comments, and FAQs.",
      "Local influencer collaborations.",
    ],
    result:
      "Stronger brand presence, higher engagement, and trust building with your local audience.",
  },
  {
    title: "✅ 5. GoHighLevel CRM & Automation Setup",
    desc: "We implement client management and automation systems so you never lose a lead and maximize repeat visits.",
    points: [
      "Landing pages & funnels for lead capture.",
      "Automated booking confirmations (SMS, email, WhatsApp).",
      "Follow-up campaigns (welcome, reminders, review requests).",
      "Loyalty programs & client segmentation.",
    ],
    result:
      "More bookings, higher retention, and stronger lifetime client value.",
  },
  {
    title: "✅ 6. Reputation & Review Management",
    desc: "Positive reviews are your most powerful marketing tool.",
    points: [
      "Automate review requests after each appointment.",
      "Highlight 5-star reviews on social media & ads.",
      "Respond to negative reviews professionally.",
      "Showcase testimonials across platforms.",
    ],
    result:
      "A trusted brand with consistent 5-star ratings that attract new clients.",
  },
  {
    title: "✅ 7. Email & SMS Marketing Campaigns",
    desc: "Stay connected with your clients even after they leave your salon or spa.",
    points: [
      "Monthly newsletters with offers & tips.",
      "Birthday & anniversary discounts.",
      "Limited-time deals to fill empty slots.",
      "VIP client loyalty programs.",
    ],
    result: "Repeat bookings, client loyalty, and full appointment calendars.",
  },
  {
    title: "✅ 8. Local SEO & Content Marketing",
    desc: "We help your salon or spa dominate local search results.",
    points: [
      "Optimize your website for local keywords.",
      "Publish blogs with targeted content.",
      "Ensure NAP consistency across directories.",
      "Build backlinks from trusted local sources.",
    ],
    result:
      "Increased organic traffic and new clients discovering your business.",
  },
  {
    title: "✅ 9. Analytics & Reporting",
    desc: "We believe in full transparency and measurable results.",
    points: [
      "Monthly performance reports for ads & SEO.",
      "Track client acquisition sources.",
      "Show ROI: ad spend vs new clients.",
      "Ongoing optimization recommendations.",
    ],
    result: "Clear insights into what works, what doesn’t, and how to scale.",
  },
  {
    title: "✅ 10. Creative & Branding Support",
    desc: "Professional visuals make your brand unforgettable.",
    points: [
      "Design creatives, flyers, and graphics.",
      "Promo videos & reels.",
      "Professional brand style guide.",
      "Seasonal & festive campaign designs.",
    ],
    result: "Strong, consistent branding that sets you apart from competitors.",
  },
];

const packages = [
  {
    title: "🔹 Starter Package",
    items: [
      "Google Business Profile Setup & Management",
      "Social Media Posting (8–12 posts/month)",
      "Review Automation (via GoHighLevel)",
    ],
  },
  {
    title: "🔹 Growth Package",
    items: [
      "Google Ads & Meta Ads Management",
      "Landing Page & Funnel Setup (GoHighLevel)",
      "Automated SMS/Email Reminders",
      "Social Media + Ads Creative Support",
    ],
  },
  {
    title: "🔹 Premium Package",
    items: [
      "Full Funnel Marketing (Google + Meta + YouTube Ads)",
      "Advanced CRM Automation (loyalty, reactivation, VIP offers)",
      "Reputation Management + Monthly Analytics Reports",
      "Seasonal Creative Campaigns (videos, influencer collabs)",
    ],
  },
];
