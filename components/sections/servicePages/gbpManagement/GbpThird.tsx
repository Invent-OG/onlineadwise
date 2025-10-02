"use client";
import React, { useEffect, useRef, useState } from "react";

type TabKey = "lsa" | "visibility" | "reviews" | "calls";

type TabInfo = {
  title: string;
  heading: string;
  content: string;
  button: string;
  bgImage: string;
};

function GbpThird() {
  const [activeTab, setActiveTab] = useState<TabKey>("lsa");
  const sectionRefs = useRef<Record<TabKey, HTMLDivElement | null>>({
    lsa: null,
    visibility: null,
    reviews: null,
    calls: null,
  });

  const tabData: Record<TabKey, TabInfo> = {
    lsa: {
      title: "Traffic Growth",
      heading: "Traffic Growth",
      content: `The main goal of Google Business Profile (GBP) management for law firms is to increase high-quality leads and signed cases from local searches. By optimizing your profile, your firm can appear in the Google Local Pack (map results) and top organic listings, exposing your brand to potential clients in your area.

Key Benefits:
- Appear in top local search results and Google Maps.
- Increase profile views and website clicks.
- Attract potential clients actively searching for legal services.

A strong GBP strategy ensures your law firm captures attention, drives more calls, and generates measurable ROI.`,
      button: "Contact Us",
      bgImage:
        "https://niftymarketing.com/wp-content/uploads/2023/12/organic-growth-cases.webp",
    },
    visibility: {
      title: "Link Building",
      heading: "Link Building",
      content: `Link building is one of the most important factors for local SEO success. Our SEO tools analyze your backlink profile, identify opportunities, and acquire high-quality links from authoritative websites to strengthen your domain authority.

Key Benefits:
- Improve search rankings for competitive keywords.
- Build credibility and trust with search engines.
- Enhance online visibility beyond your local market.

High-quality backlinks differentiate your law firm from competitors and contribute directly to increased leads and visibility.`,
      button: "Get Started",
      bgImage:
        "https://niftymarketing.com/wp-content/uploads/2023/12/bl-cases-bg.webp",
    },
    reviews: {
      title: "Lead Attribution",
      heading: "Lead Attribution & Tracking",
      content: `Data-driven marketing is essential for law firms. We implement call tracking, lead attribution, and analytics so you know exactly which campaigns are generating real results. This allows your firm to focus on marketing strategies that produce measurable outcomes.

Key Benefits:
- Track calls, messages, and website leads effectively.
- Identify which marketing efforts drive signed cases.
- Optimize campaigns based on actionable insights.

Proper lead attribution ensures your marketing budget is spent wisely, improving ROI and growth.`,
      button: "See How",
      bgImage:
        "https://niftymarketing.com/wp-content/uploads/2023/12/leads-cases-bg.webp",
    },
    calls: {
      title: "Calls From Local Searchers",
      heading: "Convert Local Searches into Client Calls",
      content: `Potential clients often rely on Google reviews, photos, and profile details to choose a law firm. A well-optimized GBP profile ensures your firm appears at the top and builds trust before clients even call.

Key Benefits:
- Increase incoming calls from local prospects.
- Strengthen client trust with accurate information and reviews.
- Highlight your services with photos, posts, and updates.

With expert GBP management, your law firm can dominate local search results and consistently convert local searchers into clients.`,
      button: "Talk to Us",
      bgImage:
        "https://niftymarketing.com/wp-content/uploads/2023/12/organic-growth-cases.webp",
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target) {
          const key = (visibleEntry.target as HTMLElement).dataset
            .tab as TabKey;
          setActiveTab(key);
        }
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (key: TabKey) => {
    sectionRefs.current[key]?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(key);
  };

  return (
    <div className="w-full bg-black">
      {/* Main Heading */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          LET&apos;S GET MORE OF THE
          <br />
          CASES YOU WANT
        </h1>
      </div>

      {/* Mobile Tabs */}
      <div className="lg:hidden flex justify-between items-center overflow-x-auto bg-gray-900 py-3 px-2 space-x-2 sticky top-0 z-20 shadow-md">
        {(Object.entries(tabData) as [TabKey, TabInfo][]).map(([key, tab]) => (
          <button
            key={key}
            onClick={() => handleTabClick(key)}
            className={`flex-shrink-0 px-4 py-2 font-semibold rounded-lg transition-all duration-300 whitespace-nowrap ${
              activeTab === key
                ? "bg-yellow-500 text-black scale-105 shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left Content Sections */}
        <div className="flex-1">
          {(Object.entries(tabData) as [TabKey, TabInfo][]).map(
            ([key, tab]) => (
              <div
                key={key}
                ref={(el) => (sectionRefs.current[key] = el)}
                data-tab={key}
                className="relative w-full min-h-[100vh] flex items-center justify-start"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${tab.bgImage})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-yellow-500/40 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/60 to-transparent pointer-events-none"></div>
                <div className="absolute left-0 right-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl text-left text-white px-6 lg:px-16">
                  <h2 className="text-3xl md:text-4xl text-yellow-500 font-bold mb-6">
                    {tab.heading}
                  </h2>
                  <p className="text-lg mb-6 whitespace-pre-line">
                    {tab.content}
                  </p>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg">
                    {tab.button}
                  </button>
                </div>

                {/* SVG Graphics at bottom of each section */}
                <div className="absolute bottom-0 left-0 right-0 z-10 w-full hidden md:block">
                  {key === "lsa" && (
                    <svg
                      width="100%"
                      height="80"
                      viewBox="0 0 1200 100"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <text
                        x="600"
                        y="30"
                        text-anchor="middle"
                        font-family="Arial, sans-serif"
                        font-size="16"
                        font-weight="bold"
                        fill="#fbbf24"
                      >
                        Traffic Growth
                      </text>
                      <path
                        d="M50 70 L200 50 L350 60 L500 30 L650 40 L800 20 L950 35 L1100 25"
                        stroke="#3b82f6"
                        stroke-width="3"
                        fill="none"
                      />
                      <circle cx="200" cy="50" r="4" fill="#3b82f6" />
                      <circle cx="350" cy="60" r="4" fill="#3b82f6" />
                      <circle cx="500" cy="30" r="4" fill="#3b82f6" />
                      <circle cx="650" cy="40" r="4" fill="#3b82f6" />
                      <circle cx="800" cy="20" r="4" fill="#3b82f6" />
                      <circle cx="950" cy="35" r="4" fill="#3b82f6" />
                      <circle cx="1100" cy="25" r="4" fill="#3b82f6" />
                    </svg>
                  )}
                  {key === "visibility" && (
                    <div className="absolute bottom-40 right-20 z-10">
                      <svg
                        width="450"
                        height="350"
                        viewBox="0 0 400 300"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <text
                          x="200"
                          y="20"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="20"
                          font-weight="bold"
                          fill="#fbbf24"
                        >
                          Link Building
                        </text>
                        <circle
                          cx="200"
                          cy="150"
                          r="60"
                          fill="#10b981"
                          opacity="0.3"
                          stroke="#10b981"
                          stroke-width="2"
                        />
                        <circle
                          cx="200"
                          cy="150"
                          r="40"
                          fill="#10b981"
                          opacity="0.5"
                          stroke="#10b981"
                          stroke-width="2"
                        />
                        <circle
                          cx="200"
                          cy="150"
                          r="20"
                          fill="#10b981"
                          opacity="0.7"
                          stroke="#10b981"
                          stroke-width="2"
                        />
                        <line
                          x1="140"
                          y1="150"
                          x2="80"
                          y2="120"
                          stroke="#f59e0b"
                          stroke-width="2"
                        />
                        <line
                          x1="260"
                          y1="150"
                          x2="320"
                          y2="120"
                          stroke="#f59e0b"
                          stroke-width="2"
                        />
                        <line
                          x1="200"
                          y1="90"
                          x2="200"
                          y2="50"
                          stroke="#f59e0b"
                          stroke-width="2"
                        />
                        <line
                          x1="200"
                          y1="210"
                          x2="200"
                          y2="250"
                          stroke="#f59e0b"
                          stroke-width="2"
                        />
                        <circle cx="80" cy="120" r="15" fill="#f59e0b" />
                        <circle cx="320" cy="120" r="15" fill="#f59e0b" />
                        <circle cx="200" cy="50" r="15" fill="#f59e0b" />
                        <circle cx="200" cy="250" r="15" fill="#f59e0b" />
                      </svg>
                    </div>
                  )}
                  {key === "reviews" && (
                    <div className="absolute bottom-0 left-52 right-0 z-10 w-full ">
                      <svg
                        width="100%"
                        height="120"
                        viewBox="0 0 1200 150"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <text
                          x="600"
                          y="10"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="16"
                          font-weight="bold"
                          fill="#fbbf24"
                        >
                          Lead Attribution
                        </text>
                        <rect
                          x="200"
                          y="80"
                          width="80"
                          height="40"
                          fill="#3b82f6"
                        />
                        <rect
                          x="400"
                          y="60"
                          width="80"
                          height="60"
                          fill="#10b981"
                        />
                        <rect
                          x="600"
                          y="40"
                          width="80"
                          height="80"
                          fill="#f59e0b"
                        />
                        <rect
                          x="800"
                          y="50"
                          width="80"
                          height="70"
                          fill="#ef4444"
                        />
                        <text
                          x="240"
                          y="130"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="#d1d5db"
                        >
                          SEO
                        </text>
                        <text
                          x="440"
                          y="130"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="#d1d5db"
                        >
                          PPC
                        </text>
                        <text
                          x="640"
                          y="130"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="#d1d5db"
                        >
                          Social
                        </text>
                        <text
                          x="840"
                          y="130"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="#d1d5db"
                        >
                          Email
                        </text>
                        <text
                          x="240"
                          y="70"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="white"
                        >
                          50
                        </text>
                        <text
                          x="440"
                          y="50"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="white"
                        >
                          80
                        </text>
                        <text
                          x="640"
                          y="30"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="white"
                        >
                          100
                        </text>
                        <text
                          x="840"
                          y="40"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="white"
                        >
                          70
                        </text>
                      </svg>
                    </div>
                  )}
                  {key === "calls" && (
                    <div className="absolute bottom-40 right-20 z-10">
                      <svg
                        width="450"
                        height="350"
                        viewBox="0 0 400 300"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <text
                          x="200"
                          y="40"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="16"
                          font-weight="bold"
                          fill="#fbbf24"
                        >
                          Phone Calls
                        </text>
                        <path
                          d="M120 120 C140 80 260 80 280 120 L280 180 C260 220 140 220 120 180 Z"
                          fill="#3b82f6"
                          opacity="0.3"
                          stroke="#3b82f6"
                          stroke-width="2"
                        />
                        <rect
                          x="170"
                          y="140"
                          width="60"
                          height="80"
                          fill="#10b981"
                          opacity="0.3"
                          stroke="#10b981"
                          stroke-width="2"
                        />
                        <circle
                          cx="200"
                          cy="100"
                          r="30"
                          fill="#f59e0b"
                          opacity="0.3"
                          stroke="#f59e0b"
                          stroke-width="2"
                        />
                        <path
                          d="M180 90 L220 90 M200 70 L200 110"
                          stroke="#f59e0b"
                          stroke-width="3"
                        />
                        <text
                          x="200"
                          y="250"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="#d1d5db"
                        >
                          +45% Calls
                        </text>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>

        {/* Redesigned Desktop Sticky Tabs */}
        {/* Desktop Sticky Tabs - Modern Card Stack Style */}
        <div
          className="hidden lg:flex w-[300px] sticky top-0 h-screen flex-col items-center justify-center relative"
          style={{
            backgroundImage: `url(${tabData[activeTab].bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

          {/* Tab Cards Stack */}
          <div className="relative z-10 flex flex-col space-y-6 px-4 w-full">
            {(Object.entries(tabData) as [TabKey, TabInfo][]).map(
              ([key, tab]) => {
                const isActive = activeTab === key;
                return (
                  <div
                    key={key}
                    onClick={() => handleTabClick(key)}
                    className={`cursor-pointer rounded-xl p-4 text-left transition-all duration-300 transform w-full ${
                      isActive
                        ? "bg-yellow-500/90 text-black shadow-2xl scale-105 border-l-4 border-yellow-400"
                        : "bg-white/10 text-white hover:bg-yellow-500/30 hover:text-black hover:scale-105 shadow-md"
                    }`}
                  >
                    <h3 className="font-bold text-lg">{tab.title}</h3>
                    {isActive && (
                      <p className="mt-1 text-sm opacity-90">{tab.heading}</p>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GbpThird;
