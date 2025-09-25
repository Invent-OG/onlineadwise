"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TabKey = "visibility" | "reviews" | "engagement" | "calls";

const colorClasses = {
  blue: {
    gradient: "from-blue-500 to-cyan-500",
    light: "blue-400",
    dark: "blue-600",
  },
  green: {
    gradient: "from-green-500 to-emerald-500",
    light: "green-400",
    dark: "green-600",
  },
  purple: {
    gradient: "from-purple-500 to-pink-500",
    light: "purple-400",
    dark: "purple-600",
  },
  orange: {
    gradient: "from-orange-500 to-red-500",
    light: "orange-400",
    dark: "orange-600",
  },
};

type TabStats = {
  value: number;
  label: string;
  suffix: string;
};

type TabInfo = {
  title: string;
  content: string[];
  stats: TabStats[];
  color: keyof typeof colorClasses;
};

function GbpThird() {
  const [activeTab, setActiveTab] = useState<TabKey>("visibility");
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const contentContainerRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const tabData: Record<TabKey, TabInfo> = {
    visibility: {
      title: "LOCAL VISIBILITY",
      content: [
        "Optimize your Google Business Profile to ensure your business shows up in local search results and Google Maps.",
        "We focus on proper categorization, accurate contact details, and geo-targeted optimization to maximize visibility for your business.",
      ],
      stats: [
        { value: 87, label: "Increase in map views", suffix: "%" },
        { value: 74, label: "Higher local search ranking", suffix: "%" },
        { value: 52, label: "More profile impressions", suffix: "%" },
      ],
      color: "blue",
    },
    reviews: {
      title: "REVIEW MANAGEMENT",
      content: [
        "Encourage, monitor, and respond to customer reviews to boost your reputation and improve rankings.",
        "Our GBP management service ensures positive reviews are highlighted and negative feedback is handled professionally.",
      ],
      stats: [
        { value: 320, label: "Reviews generated", suffix: "+" },
        { value: 91, label: "Average rating improvement", suffix: "%" },
        { value: 85, label: "Engagement with reviews", suffix: "%" },
      ],
      color: "green",
    },
    engagement: {
      title: "POSTS & UPDATES",
      content: [
        "Regular GBP posts keep your profile active and engaging. Share offers, events, and updates to attract potential customers.",
        "We manage content creation and posting to keep your profile relevant and engaging for users and search engines.",
      ],
      stats: [
        { value: 120, label: "Posts created", suffix: "+" },
        { value: 68, label: "Increased clicks", suffix: "%" },
        { value: 73, label: "User interactions", suffix: "%" },
      ],
      color: "purple",
    },
    calls: {
      title: "PHONE CALLS",
      content: [
        "GBP optimization drives high-intent local customers to call your business directly.",
        "Track and improve call conversions by ensuring your profile information and call-to-actions are optimized.",
      ],
      stats: [
        { value: 210, label: "More calls per month", suffix: "%" },
        { value: 95, label: "Call conversion increase", suffix: "%" },
        { value: 60, label: "Customers contacted", suffix: "%" },
      ],
      color: "orange",
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([headingRef.current, subheadingRef.current], {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      if (!isMobile) {
        gsap.from(tabsContainerRef.current, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tabsContainerRef.current,
            start: "top 80%",
          },
        });
        gsap.from(contentContainerRef.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentContainerRef.current,
            start: "top 80%",
          },
        });
        const tabs = ["visibility", "reviews", "engagement", "calls"];
        tabs.forEach((tab) => {
          ScrollTrigger.create({
            trigger: `.tab-trigger-${tab}`,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveTab(tab as TabKey),
            onEnterBack: () => setActiveTab(tab as TabKey),
          });
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile]);

  const currentData = tabData[activeTab];
  const colors = colorClasses[currentData.color];

  const MobileTabs = () => (
    <div className="lg:hidden mb-8">
      <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          GBP Metrics
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(tabData).map(([tabKey, tab]) => {
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey as TabKey)}
                className={`p-3 rounded-xl text-center transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-500 text-white shadow-lg border-2 border-yellow-400"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent"
                }`}
              >
                <div className="font-semibold text-xs mb-1">
                  {tab.title.split(" ")[0]}
                </div>
                <div className="text-xs opacity-80">
                  {tab.stats[0].value}
                  {tab.stats[0].suffix}
                </div>
              </button>
            );
          })}
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded-xl border border-gray-200 text-center">
          <div className="text-sm font-semibold text-gray-600">Active:</div>
          <div className="text-yellow-600 font-bold">{currentData.title}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={sectionRef} className="min-h-screen bg-white py-20 px-4">
      <div className="bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 text-center w-max mx-auto">
        GBP MANAGEMENT
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            ref={headingRef}
            className="text-4xl md:text-4xl font-bold text-black mb-4"
          >
            Google Business Profile Optimization
          </h1>
          <p
            ref={subheadingRef}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Drive more local customers, improve your online reputation, and
            increase calls with GBP management strategies tailored for your
            business.
          </p>
        </div>

        {/* Mobile Tabs */}
        <MobileTabs />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div ref={contentContainerRef} className="space-y-12">
            {!isMobile &&
              Object.entries(tabData).map(([tabKey, tab]) => (
                <div
                  key={tabKey}
                  className={`tab-trigger-${tabKey} bg-white backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ${
                    activeTab === tabKey
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-30 transform translate-y-4"
                  }`}
                >
                  <h2 className="text-xl font-bold text-black mb-6">
                    {tab.title}
                  </h2>
                  <div className="space-y-4 mb-8">
                    {tab.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-lg text-black leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                    LEARN MORE
                  </button>
                  <div className="grid grid-cols-1 gap-4 mt-8">
                    {tab.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-300/50 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-gray-800">
                          {stat.value}
                          {stat.suffix}
                        </div>
                        <div className="text-gray-800 text-right">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {isMobile && (
              <div className="bg-white backdrop-blur-sm rounded-2xl p-6 transition-all duration-500">
                <h2 className="text-2xl font-bold text-black mb-6">
                  {currentData.title}
                </h2>
                <div className="space-y-4 mb-6">
                  {currentData.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base text-black leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  LEARN MORE
                </button>
                <div className="grid grid-cols-1 gap-3 mt-6">
                  {currentData.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-300/50 rounded-lg"
                    >
                      <div className="text-xl font-bold text-gray-800">
                        {stat.value}
                        {stat.suffix}
                      </div>
                      <div className="text-gray-800 text-right text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div ref={tabsContainerRef} className="hidden lg:block sticky top-8">
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                GBP Metrics
              </h3>
              <div className="space-y-3">
                {Object.entries(tabData).map(([tabKey, tab]) => {
                  const isActive = activeTab === tabKey;
                  return (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey as TabKey)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-102 ${
                        isActive
                          ? "bg-yellow-500 text-white shadow-lg border-2 border-yellow-400"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-semibold text-sm ${isActive ? "text-white" : "text-gray-800"}`}
                        >
                          {tab.title.split(" ")[0]}
                        </span>
                        {isActive && (
                          <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="mt-2 h-1 bg-black/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${isActive ? "w-full bg-white/60" : "w-0"}`}
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-xs">
                        {tab.stats.slice(0, 1).map((stat, index) => (
                          <span
                            key={index}
                            className={
                              isActive ? "text-white/90" : "text-gray-600"
                            }
                          >
                            {stat.value}
                            {stat.suffix} {stat.label.split(" ")[0]}
                          </span>
                        ))}
                        <span
                          className={
                            isActive ? "text-white/70" : "text-gray-500"
                          }
                        >
                          {tab.stats.length} metrics
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2 text-sm">
                  Currently Viewing:
                </h4>
                <div className="text-yellow-600 font-semibold text-lg">
                  {currentData.title}
                </div>
                <p className="text-gray-600 text-xs mt-1">
                  {currentData.content[0].split(".").slice(0, 2).join(".")}...
                </p>
              </div>

              <div className="mt-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 text-sm">
                  Why This Matters:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    Increase local customer acquisition
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    Boost online reputation and reviews
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    Track and measure ROI effectively
                  </li>
                </ul>
              </div>

              <div className="mt-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white">
                <h4 className="font-bold mb-3 text-sm">Performance Summary</h4>
                <div className="grid grid-cols-2 gap-3">
                  {currentData.stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl font-bold">
                        {stat.value}
                        {stat.suffix}
                      </div>
                      <div className="text-xs opacity-90">
                        {stat.label.split(" ")[0]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GbpThird;
