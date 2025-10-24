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
                      <defs>
                        <linearGradient
                          id="trafficGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stop-color="#3b82f6" />
                          <stop offset="100%" stop-color="#fbbf24" />
                        </linearGradient>
                        <radialGradient
                          id="pointGlow"
                          cx="50%"
                          cy="50%"
                          r="50%"
                        >
                          <stop offset="0%" stop-color="#3b82f6" />
                          <stop
                            offset="100%"
                            stop-color="#3b82f6"
                            stop-opacity="0.3"
                          />
                        </radialGradient>
                      </defs>

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

                      {/* <!-- Animated Growth Line --> */}
                      <path
                        d="M50 70 L200 50 L350 60 L500 30 L650 40 L800 20 L950 35 L1100 25"
                        stroke="url(#trafficGradient)"
                        stroke-width="3"
                        fill="none"
                        stroke-dasharray="1000"
                        stroke-dashoffset="1000"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="1000;0"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </path>

                      {/* <!-- Animated Data Points --> */}
                      <circle cx="200" cy="50" r="4" fill="url(#pointGlow)">
                        <animate
                          attributeName="r"
                          values="4;6;4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          values="1;0.5;1"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle cx="350" cy="60" r="4" fill="url(#pointGlow)">
                        <animate
                          attributeName="r"
                          values="4;6;4"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0.2s"
                        />
                        <animate
                          attributeName="fill-opacity"
                          values="1;0.5;1"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0.2s"
                        />
                      </circle>

                      <circle cx="500" cy="30" r="4" fill="url(#pointGlow)">
                        <animate
                          attributeName="r"
                          values="4;6;4"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0.4s"
                        />
                        <animate
                          attributeName="fill-opacity"
                          values="1;0.5;1"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0.4s"
                        />
                      </circle>

                      <circle cx="650" cy="40" r="4" fill="url(#pointGlow)">
                        <animate
                          attributeName="r"
                          values="4;6;4"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0.6s"
                        />
                        <animate
                          attributeName="fill-opacity"
                          values="1;0.5;1"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0.6s"
                        />
                      </circle>

                      <circle cx="800" cy="20" r="4" fill="url(#pointGlow)">
                        <animate
                          attributeName="r"
                          values="4;6;4"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0.8s"
                        />
                        <animate
                          attributeName="fill-opacity"
                          values="1;0.5;1"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0.8s"
                        />
                      </circle>

                      <circle cx="950" cy="35" r="4" fill="url(#pointGlow)">
                        <animate
                          attributeName="r"
                          values="4;6;4"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="1.0s"
                        />
                        <animate
                          attributeName="fill-opacity"
                          values="1;0.5;1"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="1.0s"
                        />
                      </circle>

                      <circle cx="1100" cy="25" r="4" fill="url(#pointGlow)">
                        <animate
                          attributeName="r"
                          values="4;6;4"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="1.2s"
                        />
                        <animate
                          attributeName="fill-opacity"
                          values="1;0.5;1"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="1.2s"
                        />
                      </circle>

                      {/* <!-- Floating Particles --> */}
                      <circle
                        cx="150"
                        cy="65"
                        r="2"
                        fill="#fbbf24"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="cy"
                          values="65;55;65"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.6;0.2;0.6"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle
                        cx="450"
                        cy="45"
                        r="2"
                        fill="#fbbf24"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="cy"
                          values="45;35;45"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="0.5s"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.6;0.2;0.6"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="0.5s"
                        />
                      </circle>

                      <circle
                        cx="750"
                        cy="25"
                        r="2"
                        fill="#fbbf24"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="cy"
                          values="25;15;25"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="1s"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.6;0.2;0.6"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="1s"
                        />
                      </circle>

                      <circle
                        cx="1050"
                        cy="30"
                        r="2"
                        fill="#fbbf24"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="cy"
                          values="30;20;30"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="1.5s"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.6;0.2;0.6"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="1.5s"
                        />
                      </circle>
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
                        <defs>
                          <linearGradient
                            id="linkGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#fbbf24" />
                            <stop offset="100%" stop-color="#10b981" />
                          </linearGradient>
                          <radialGradient
                            id="nodeGlow"
                            cx="50%"
                            cy="50%"
                            r="50%"
                          >
                            <stop offset="0%" stop-color="#f59e0b" />
                            <stop
                              offset="100%"
                              stop-color="#f59e0b"
                              stop-opacity="0.3"
                            />
                          </radialGradient>
                        </defs>

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

                        {/* <!-- Animated Central Hub --> */}
                        <circle
                          cx="200"
                          cy="150"
                          r="60"
                          fill="#10b981"
                          opacity="0.3"
                          stroke="#10b981"
                          stroke-width="2"
                        >
                          <animate
                            attributeName="r"
                            values="60;65;60"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        <circle
                          cx="200"
                          cy="150"
                          r="40"
                          fill="#10b981"
                          opacity="0.5"
                          stroke="#10b981"
                          stroke-width="2"
                        >
                          <animate
                            attributeName="r"
                            values="40;45;40"
                            dur="2.5s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        <circle
                          cx="200"
                          cy="150"
                          r="20"
                          fill="#10b981"
                          opacity="0.7"
                          stroke="#10b981"
                          stroke-width="2"
                        >
                          <animate
                            attributeName="r"
                            values="20;25;20"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        <line
                          x1="140"
                          y1="150"
                          x2="80"
                          y2="120"
                          stroke="#f59e0b"
                          stroke-width="2"
                          stroke-dasharray="5,5"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="0;10"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </line>

                        <line
                          x1="260"
                          y1="150"
                          x2="320"
                          y2="120"
                          stroke="#f59e0b"
                          stroke-width="2"
                          stroke-dasharray="5,5"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="0;10"
                            dur="1s"
                            repeatCount="indefinite"
                            begin="0.2s"
                          />
                        </line>

                        <line
                          x1="200"
                          y1="90"
                          x2="200"
                          y2="50"
                          stroke="#f59e0b"
                          stroke-width="2"
                          stroke-dasharray="5,5"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="0;10"
                            dur="1s"
                            repeatCount="indefinite"
                            begin="0.4s"
                          />
                        </line>

                        <line
                          x1="200"
                          y1="210"
                          x2="200"
                          y2="250"
                          stroke="#f59e0b"
                          stroke-width="2"
                          stroke-dasharray="5,5"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="0;10"
                            dur="1s"
                            repeatCount="indefinite"
                            begin="0.6s"
                          />
                        </line>

                        <circle cx="80" cy="120" r="15" fill="url(#nodeGlow)">
                          <animate
                            attributeName="r"
                            values="15;18;15"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        <circle cx="320" cy="120" r="15" fill="url(#nodeGlow)">
                          <animate
                            attributeName="r"
                            values="15;18;15"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.3s"
                          />
                        </circle>

                        <circle cx="200" cy="50" r="15" fill="url(#nodeGlow)">
                          <animate
                            attributeName="r"
                            values="15;18;15"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.6s"
                          />
                        </circle>

                        <circle cx="200" cy="250" r="15" fill="url(#nodeGlow)">
                          <animate
                            attributeName="r"
                            values="15;18;15"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.9s"
                          />
                        </circle>
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
                        <defs>
                          <linearGradient
                            id="barGradient1"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#3b82f6" />
                            <stop offset="100%" stop-color="#1d4ed8" />
                          </linearGradient>
                          <linearGradient
                            id="barGradient2"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#10b981" />
                            <stop offset="100%" stop-color="#047857" />
                          </linearGradient>
                          <linearGradient
                            id="barGradient3"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#f59e0b" />
                            <stop offset="100%" stop-color="#d97706" />
                          </linearGradient>
                          <linearGradient
                            id="barGradient4"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#ef4444" />
                            <stop offset="100%" stop-color="#dc2626" />
                          </linearGradient>
                        </defs>

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

                        {/* <!-- Animated Bars --> */}
                        <rect
                          x="200"
                          y="80"
                          width="80"
                          height="40"
                          fill="url(#barGradient1)"
                          opacity="0"
                        >
                          <animate
                            attributeName="height"
                            values="0;40"
                            dur="1s"
                            fill="freeze"
                          />
                          <animate
                            attributeName="y"
                            values="120;80"
                            dur="1s"
                            fill="freeze"
                          />
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="1s"
                            fill="freeze"
                          />
                        </rect>

                        <rect
                          x="400"
                          y="60"
                          width="80"
                          height="60"
                          fill="url(#barGradient2)"
                          opacity="0"
                        >
                          <animate
                            attributeName="height"
                            values="0;60"
                            dur="1s"
                            fill="freeze"
                            begin="0.2s"
                          />
                          <animate
                            attributeName="y"
                            values="120;60"
                            dur="1s"
                            fill="freeze"
                            begin="0.2s"
                          />
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="1s"
                            fill="freeze"
                            begin="0.2s"
                          />
                        </rect>

                        <rect
                          x="600"
                          y="40"
                          width="80"
                          height="80"
                          fill="url(#barGradient3)"
                          opacity="0"
                        >
                          <animate
                            attributeName="height"
                            values="0;80"
                            dur="1s"
                            fill="freeze"
                            begin="0.4s"
                          />
                          <animate
                            attributeName="y"
                            values="120;40"
                            dur="1s"
                            fill="freeze"
                            begin="0.4s"
                          />
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="1s"
                            fill="freeze"
                            begin="0.4s"
                          />
                        </rect>

                        <rect
                          x="800"
                          y="50"
                          width="80"
                          height="70"
                          fill="url(#barGradient4)"
                          opacity="0"
                        >
                          <animate
                            attributeName="height"
                            values="0;70"
                            dur="1s"
                            fill="freeze"
                            begin="0.6s"
                          />
                          <animate
                            attributeName="y"
                            values="120;50"
                            dur="1s"
                            fill="freeze"
                            begin="0.6s"
                          />
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="1s"
                            fill="freeze"
                            begin="0.6s"
                          />
                        </rect>

                        {/* <!-- Labels --> */}
                        <text
                          x="240"
                          y="130"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="#d1d5db"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="0.5s"
                            fill="freeze"
                            begin="1s"
                          />
                          SEO
                        </text>

                        <text
                          x="440"
                          y="130"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="#d1d5db"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="0.5s"
                            fill="freeze"
                            begin="1.2s"
                          />
                          PPC
                        </text>

                        <text
                          x="640"
                          y="130"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="#d1d5db"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="0.5s"
                            fill="freeze"
                            begin="1.4s"
                          />
                          Social
                        </text>

                        <text
                          x="840"
                          y="130"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="#d1d5db"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="0.5s"
                            fill="freeze"
                            begin="1.6s"
                          />
                          Email
                        </text>

                        {/* <!-- Value Labels with Count-up Animation --> */}
                        <text
                          x="240"
                          y="70"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="white"
                          font-weight="bold"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="0.5s"
                            fill="freeze"
                            begin="1s"
                          />
                          50
                        </text>

                        <text
                          x="440"
                          y="50"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="white"
                          font-weight="bold"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="0.5s"
                            fill="freeze"
                            begin="1.2s"
                          />
                          80
                        </text>

                        <text
                          x="640"
                          y="30"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="white"
                          font-weight="bold"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="0.5s"
                            fill="freeze"
                            begin="1.4s"
                          />
                          100
                        </text>

                        <text
                          x="840"
                          y="40"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="white"
                          font-weight="bold"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="0.5s"
                            fill="freeze"
                            begin="1.6s"
                          />
                          70
                        </text>

                        {/* <!-- Pulsing Effects on Bars --> */}
                        <rect
                          x="200"
                          y="80"
                          width="80"
                          height="40"
                          fill="none"
                          stroke="#3b82f6"
                          stroke-width="2"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;0.5;0"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="2s"
                          />
                        </rect>

                        <rect
                          x="400"
                          y="60"
                          width="80"
                          height="60"
                          fill="none"
                          stroke="#10b981"
                          stroke-width="2"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;0.5;0"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="2.2s"
                          />
                        </rect>

                        <rect
                          x="600"
                          y="40"
                          width="80"
                          height="80"
                          fill="none"
                          stroke="#f59e0b"
                          stroke-width="2"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;0.5;0"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="2.4s"
                          />
                        </rect>

                        <rect
                          x="800"
                          y="50"
                          width="80"
                          height="70"
                          fill="none"
                          stroke="#ef4444"
                          stroke-width="2"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;0.5;0"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="2.6s"
                          />
                        </rect>
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
                        <defs>
                          <linearGradient
                            id="phoneGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#3b82f6" />
                            <stop offset="100%" stop-color="#1e40af" />
                          </linearGradient>
                          <linearGradient
                            id="screenGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#10b981" />
                            <stop offset="100%" stop-color="#047857" />
                          </linearGradient>
                          <linearGradient
                            id="buttonGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#f59e0b" />
                            <stop offset="100%" stop-color="#d97706" />
                          </linearGradient>
                          <radialGradient
                            id="callGlow"
                            cx="50%"
                            cy="50%"
                            r="50%"
                          >
                            <stop offset="0%" stop-color="#fbbf24" />
                            <stop
                              offset="100%"
                              stop-color="#fbbf24"
                              stop-opacity="0.3"
                            />
                          </radialGradient>
                        </defs>

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

                        {/* <!-- Animated Phone Body --> */}
                        <path
                          d="M120 120 C140 80 260 80 280 120 L280 180 C260 220 140 220 120 180 Z"
                          fill="url(#phoneGradient)"
                          opacity="0.3"
                          stroke="#3b82f6"
                          stroke-width="2"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.3;0.6;0.3"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </path>

                        {/* <!-- Animated Screen --> */}
                        <rect
                          x="170"
                          y="140"
                          width="60"
                          height="80"
                          fill="url(#screenGradient)"
                          opacity="0.3"
                          stroke="#10b981"
                          stroke-width="2"
                          rx="5"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.3;0.8;0.3"
                            dur="2.5s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="stroke-width"
                            values="2;3;2"
                            dur="2.5s"
                            repeatCount="indefinite"
                          />
                        </rect>

                        {/* <!-- Animated Call Button --> */}
                        <circle
                          cx="200"
                          cy="100"
                          r="30"
                          fill="url(#buttonGradient)"
                          opacity="0.3"
                          stroke="#f59e0b"
                          stroke-width="2"
                        >
                          <animate
                            attributeName="r"
                            values="30;32;30"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.3;0.7;0.3"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* <!-- Animated Phone Icon --> */}
                        <g className="phone-icon">
                          <path
                            d="M180 90 L220 90 M200 70 L200 110"
                            stroke="#f59e0b"
                            stroke-width="3"
                            stroke-linecap="round"
                          >
                            <animate
                              attributeName="stroke-width"
                              values="3;4;3"
                              dur="1.5s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </g>

                        {/* <!-- Pulsing Call Waves --> */}
                        <circle
                          cx="200"
                          cy="100"
                          r="35"
                          fill="none"
                          stroke="#f59e0b"
                          stroke-width="2"
                          opacity="0"
                        >
                          <animate
                            attributeName="r"
                            values="35;60;35"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0;0.5;0"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        <circle
                          cx="200"
                          cy="100"
                          r="45"
                          fill="none"
                          stroke="#f59e0b"
                          stroke-width="1"
                          opacity="0"
                        >
                          <animate
                            attributeName="r"
                            values="45;75;45"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.5s"
                          />
                          <animate
                            attributeName="opacity"
                            values="0;0.3;0"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.5s"
                          />
                        </circle>

                        {/* <!-- Incoming Call Indicator --> */}
                        <circle
                          cx="200"
                          cy="100"
                          r="8"
                          fill="#10b981"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1;0"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="r"
                            values="8;10;8"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* <!-- Signal Bars Animation --> */}
                        <g className="signal-bars">
                          {/* <!-- Bar 1 --> */}
                          <rect
                            x="175"
                            y="150"
                            width="5"
                            height="10"
                            fill="#10b981"
                            opacity="0.8"
                          >
                            <animate
                              attributeName="height"
                              values="10;15;10"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </rect>
                          {/* <!-- Bar 2 --> */}
                          <rect
                            x="183"
                            y="145"
                            width="5"
                            height="15"
                            fill="#10b981"
                            opacity="0.8"
                          >
                            <animate
                              attributeName="height"
                              values="15;20;15"
                              dur="1s"
                              repeatCount="indefinite"
                              begin="0.2s"
                            />
                          </rect>
                          {/* <!-- Bar 3 --> */}
                          <rect
                            x="191"
                            y="140"
                            width="5"
                            height="20"
                            fill="#10b981"
                            opacity="0.8"
                          >
                            <animate
                              attributeName="height"
                              values="20;25;20"
                              dur="1s"
                              repeatCount="indefinite"
                              begin="0.4s"
                            />
                          </rect>
                          {/* <!-- Bar 4 --> */}
                          <rect
                            x="199"
                            y="135"
                            width="5"
                            height="25"
                            fill="#10b981"
                            opacity="0.8"
                          >
                            <animate
                              attributeName="height"
                              values="25;30;25"
                              dur="1s"
                              repeatCount="indefinite"
                              begin="0.6s"
                            />
                          </rect>
                          {/* <!-- Bar 5 --> */}
                          <rect
                            x="207"
                            y="130"
                            width="5"
                            height="30"
                            fill="#10b981"
                            opacity="0.8"
                          >
                            <animate
                              attributeName="height"
                              values="30;35;30"
                              dur="1s"
                              repeatCount="indefinite"
                              begin="0.8s"
                            />
                          </rect>
                        </g>

                        {/* <!-- Floating Call Icons --> */}
                        <g className="floating-calls">
                          <circle
                            cx="150"
                            cy="80"
                            r="4"
                            fill="#fbbf24"
                            opacity="0.6"
                          >
                            <animate
                              attributeName="cy"
                              values="80;60;80"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.6;0.2;0.6"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle
                            cx="250"
                            cy="70"
                            r="4"
                            fill="#fbbf24"
                            opacity="0.6"
                          >
                            <animate
                              attributeName="cy"
                              values="70;50;70"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="1s"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.6;0.2;0.6"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="1s"
                            />
                          </circle>
                          <circle
                            cx="130"
                            cy="200"
                            r="4"
                            fill="#fbbf24"
                            opacity="0.6"
                          >
                            <animate
                              attributeName="cy"
                              values="200;180;200"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="1.5s"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.6;0.2;0.6"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="1.5s"
                            />
                          </circle>
                          <circle
                            cx="270"
                            cy="190"
                            r="4"
                            fill="#fbbf24"
                            opacity="0.6"
                          >
                            <animate
                              attributeName="cy"
                              values="190;170;190"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="2s"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.6;0.2;0.6"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="2s"
                            />
                          </circle>
                        </g>

                        {/* <!-- Animated Growth Text --> */}
                        <text
                          x="200"
                          y="250"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="12"
                          fill="#d1d5db"
                          font-weight="bold"
                        >
                          <animate
                            attributeName="fill"
                            values="#d1d5db;#fbbf24;#d1d5db"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          +45% Calls
                        </text>

                        {/* <!-- Call Duration Line --> */}
                        <line
                          x1="160"
                          y1="230"
                          x2="240"
                          y2="230"
                          stroke="#10b981"
                          stroke-width="3"
                          stroke-dasharray="5,5"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="0;10"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </line>
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
// "use client";
// import React, { useEffect, useRef, useState } from "react";

// type TabKey = "lsa" | "visibility" | "reviews" | "calls";

// type TabInfo = {
//   title: string;
//   heading: string;
//   content: string;
//   button: string;
//   bgImage: string;
// };

// function GbpThird() {
//   const [activeTab, setActiveTab] = useState<TabKey>("lsa");
//   const sectionRefs = useRef<Record<TabKey, HTMLDivElement | null>>({
//     lsa: null,
//     visibility: null,
//     reviews: null,
//     calls: null,
//   });

//   const tabData: Record<TabKey, TabInfo> = {
//     lsa: {
//       title: "Traffic Growth",
//       heading: "Traffic Growth",
//       content: `The main goal of Google Business Profile (GBP) management for law firms is to increase high-quality leads and signed cases from local searches. By optimizing your profile, your firm can appear in the Google Local Pack (map results) and top organic listings, exposing your brand to potential clients in your area.

// Key Benefits:
// - Appear in top local search results and Google Maps.
// - Increase profile views and website clicks.
// - Attract potential clients actively searching for legal services.

// A strong GBP strategy ensures your law firm captures attention, drives more calls, and generates measurable ROI.`,
//       button: "Contact Us",
//       bgImage:
//         "https://niftymarketing.com/wp-content/uploads/2023/12/organic-growth-cases.webp",
//     },
//     visibility: {
//       title: "Link Building",
//       heading: "Link Building",
//       content: `Link building is one of the most important factors for local SEO success. Our SEO tools analyze your backlink profile, identify opportunities, and acquire high-quality links from authoritative websites to strengthen your domain authority.

// Key Benefits:
// - Improve search rankings for competitive keywords.
// - Build credibility and trust with search engines.
// - Enhance online visibility beyond your local market.

// High-quality backlinks differentiate your law firm from competitors and contribute directly to increased leads and visibility.`,
//       button: "Get Started",
//       bgImage:
//         "https://niftymarketing.com/wp-content/uploads/2023/12/bl-cases-bg.webp",
//     },
//     reviews: {
//       title: "Lead Attribution",
//       heading: "Lead Attribution & Tracking",
//       content: `Data-driven marketing is essential for law firms. We implement call tracking, lead attribution, and analytics so you know exactly which campaigns are generating real results. This allows your firm to focus on marketing strategies that produce measurable outcomes.

// Key Benefits:
// - Track calls, messages, and website leads effectively.
// - Identify which marketing efforts drive signed cases.
// - Optimize campaigns based on actionable insights.

// Proper lead attribution ensures your marketing budget is spent wisely, improving ROI and growth.`,
//       button: "See How",
//       bgImage:
//         "https://niftymarketing.com/wp-content/uploads/2023/12/leads-cases-bg.webp",
//     },
//     calls: {
//       title: "Calls From Local Searchers",
//       heading: "Convert Local Searches into Client Calls",
//       content: `Potential clients often rely on Google reviews, photos, and profile details to choose a law firm. A well-optimized GBP profile ensures your firm appears at the top and builds trust before clients even call.

// Key Benefits:
// - Increase incoming calls from local prospects.
// - Strengthen client trust with accurate information and reviews.
// - Highlight your services with photos, posts, and updates.

// With expert GBP management, your law firm can dominate local search results and consistently convert local searchers into clients.`,
//       button: "Talk to Us",
//       bgImage:
//         "https://niftymarketing.com/wp-content/uploads/2023/12/organic-growth-cases.webp",
//     },
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleEntry = entries.find((entry) => entry.isIntersecting);
//         if (visibleEntry?.target) {
//           const key = (visibleEntry.target as HTMLElement).dataset
//             .tab as TabKey;
//           setActiveTab(key);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     Object.values(sectionRefs.current).forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const handleTabClick = (key: TabKey) => {
//     sectionRefs.current[key]?.scrollIntoView({ behavior: "smooth" });
//     setActiveTab(key);
//   };

//   return (
//     <div className="w-full bg-black">
//       {/* Modern Hero Section */}
//       <div className="relative text-center py-20 px-4 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-black pointer-events-none"></div>
//         <div className="relative z-10">
//           <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
//             LET&apos;S GET MORE OF THE
//             <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
//               CASES YOU WANT
//             </span>
//           </h1>
//           <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Transform your digital presence with cutting-edge SEO strategies
//           </p>
//         </div>
//       </div>

//       {/* Enhanced Mobile Tabs - Modern Design */}
//       <div className="lg:hidden flex justify-center items-center overflow-x-auto bg-gray-900/80 backdrop-blur-sm py-4 px-4 space-x-3 sticky top-0 z-50 border-b border-gray-700">
//         {(Object.entries(tabData) as [TabKey, TabInfo][]).map(([key, tab]) => (
//           <button
//             key={key}
//             onClick={() => handleTabClick(key)}
//             className={`flex-shrink-0 px-6 py-3 font-bold rounded-2xl transition-all duration-300 whitespace-nowrap border-2 ${
//               activeTab === key
//                 ? "bg-yellow-500 border-yellow-400 text-black scale-105 shadow-2xl shadow-yellow-500/25"
//                 : "bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-400"
//             }`}
//           >
//             {tab.title}
//           </button>
//         ))}
//       </div>

//       <div className="flex flex-col lg:flex-row">
//         {/* Enhanced Content Sections with Modern Layout */}
//         <div className="flex-1">
//           {(Object.entries(tabData) as [TabKey, TabInfo][]).map(
//             ([key, tab]) => (
//               <div
//                 key={key}
//                 ref={(el) => (sectionRefs.current[key] = el)}
//                 data-tab={key}
//                 className="relative w-full min-h-[100vh] flex items-center justify-start group"
//               >
//                 {/* Enhanced Background with Parallax Effect */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center bg-fixed transform group-hover:scale-105 transition-transform duration-700"
//                   style={{ backgroundImage: `url(${tab.bgImage})` }}
//                 />

//                 {/* Advanced Gradient Overlays */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
//                 <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent pointer-events-none"></div>

//                 {/* Animated Content Container */}
//                 <div className="relative z-10 max-w-2xl text-left text-white px-6 lg:px-20 transform transition-all duration-500 group-hover:translate-x-4">
//                   {/* Section Badge */}
//                   <div className="inline-flex mt-4 items-center px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-6">
//                     <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
//                     <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wide">
//                       {tab.title}
//                     </span>
//                   </div>

//                   {/* Enhanced Heading */}
//                   <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
//                     <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
//                       {tab.heading.split(" ")[0]}
//                     </span>
//                     <span className="text-white">
//                       {" "}
//                       {tab.heading.split(" ").slice(1).join(" ")}
//                     </span>
//                   </h2>

//                   {/* Enhanced Content */}
//                   <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-8">
//                     <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
//                       {tab.content}
//                     </p>
//                   </div>

//                   {/* Enhanced Button */}
//                   <button className="group mb-4 relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transform hover:scale-105">
//                     <span className="relative z-10">{tab.button}</span>
//                     <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </button>
//                 </div>

//                 {/* Enhanced SVG Graphics */}
//                 <div className="absolute bottom-0 left-0 right-0 z-10 w-full hidden md:block opacity-80">
//                   {key === "lsa" && (
//                     <div className="relative h-32">
//                       <svg
//                         width="100%"
//                         height="100%"
//                         viewBox="0 0 1200 120"
//                         preserveAspectRatio="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <defs>
//                           <linearGradient
//                             id="trafficGradient"
//                             x1="0%"
//                             y1="0%"
//                             x2="100%"
//                             y2="0%"
//                           >
//                             <stop
//                               offset="0%"
//                               stopColor="#fbbf24"
//                               stopOpacity="0.8"
//                             />
//                             <stop
//                               offset="100%"
//                               stopColor="#3b82f6"
//                               stopOpacity="0.8"
//                             />
//                           </linearGradient>
//                         </defs>
//                         <path
//                           d="M50 80 Q200 40, 350 70 Q500 30, 650 60 Q800 25, 950 50 Q1100 35, 1150 60"
//                           stroke="url(#trafficGradient)"
//                           strokeWidth="4"
//                           fill="none"
//                           strokeLinecap="round"
//                         />
//                         {[200, 350, 500, 650, 800, 950, 1100].map((x, i) => (
//                           <circle
//                             key={i}
//                             cx={x}
//                             cy={i % 2 === 0 ? 40 : 60}
//                             r="6"
//                             fill="#fbbf24"
//                             className="animate-pulse"
//                           />
//                         ))}
//                       </svg>
//                     </div>
//                   )}
//                   {key === "visibility" && (
//                     <div className="absolute bottom-10 right-10 z-10 transform rotate-12">
//                       <svg
//                         width="400"
//                         height="300"
//                         viewBox="0 0 400 300"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <defs>
//                           <radialGradient
//                             id="linkGlow"
//                             cx="50%"
//                             cy="50%"
//                             r="50%"
//                           >
//                             <stop
//                               offset="0%"
//                               stopColor="#10b981"
//                               stopOpacity="0.6"
//                             />
//                             <stop
//                               offset="100%"
//                               stopColor="#10b981"
//                               stopOpacity="0.1"
//                             />
//                           </radialGradient>
//                         </defs>
//                         <circle
//                           cx="200"
//                           cy="150"
//                           r="80"
//                           fill="url(#linkGlow)"
//                         />
//                         {[0, 45, 90, 135, 180, 225, 270, 315].map(
//                           (angle, i) => {
//                             const rad = (angle * Math.PI) / 180;
//                             const x1 = 200 + 60 * Math.cos(rad);
//                             const y1 = 150 + 60 * Math.sin(rad);
//                             const x2 = 200 + 120 * Math.cos(rad);
//                             const y2 = 150 + 120 * Math.sin(rad);
//                             return (
//                               <g key={i}>
//                                 <line
//                                   x1={x1}
//                                   y1={y1}
//                                   x2={x2}
//                                   y2={y2}
//                                   stroke="#f59e0b"
//                                   strokeWidth="2"
//                                 />
//                                 <circle
//                                   cx={x2}
//                                   cy={y2}
//                                   r="8"
//                                   fill="#f59e0b"
//                                   className="animate-bounce"
//                                   style={{ animationDelay: `${i * 0.1}s` }}
//                                 />
//                               </g>
//                             );
//                           }
//                         )}
//                       </svg>
//                     </div>
//                   )}
//                   {key === "reviews" && (
//                     <div className="absolute bottom-0 left-0 right-0">
//                       <svg
//                         width="100%"
//                         height="140"
//                         viewBox="0 0 1200 140"
//                         preserveAspectRatio="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <defs>
//                           <linearGradient
//                             id="barGradient1"
//                             x1="0%"
//                             y1="0%"
//                             x2="0%"
//                             y2="100%"
//                           >
//                             <stop offset="0%" stopColor="#3b82f6" />
//                             <stop offset="100%" stopColor="#1d4ed8" />
//                           </linearGradient>
//                           <linearGradient
//                             id="barGradient2"
//                             x1="0%"
//                             y1="0%"
//                             x2="0%"
//                             y2="100%"
//                           >
//                             <stop offset="0%" stopColor="#10b981" />
//                             <stop offset="100%" stopColor="#047857" />
//                           </linearGradient>
//                           <linearGradient
//                             id="barGradient3"
//                             x1="0%"
//                             y1="0%"
//                             x2="0%"
//                             y2="100%"
//                           >
//                             <stop offset="0%" stopColor="#f59e0b" />
//                             <stop offset="100%" stopColor="#d97706" />
//                           </linearGradient>
//                           <linearGradient
//                             id="barGradient4"
//                             x1="0%"
//                             y1="0%"
//                             x2="0%"
//                             y2="100%"
//                           >
//                             <stop offset="0%" stopColor="#ef4444" />
//                             <stop offset="100%" stopColor="#dc2626" />
//                           </linearGradient>
//                         </defs>
//                         {[
//                           {
//                             x: 250,
//                             height: 50,
//                             fill: "url(#barGradient1)",
//                             label: "SEO",
//                             value: "50",
//                           },
//                           {
//                             x: 450,
//                             height: 70,
//                             fill: "url(#barGradient2)",
//                             label: "PPC",
//                             value: "80",
//                           },
//                           {
//                             x: 650,
//                             height: 90,
//                             fill: "url(#barGradient3)",
//                             label: "Social",
//                             value: "100",
//                           },
//                           {
//                             x: 850,
//                             height: 60,
//                             fill: "url(#barGradient4)",
//                             label: "Email",
//                             value: "70",
//                           },
//                         ].map((bar, i) => (
//                           <g key={i}>
//                             <rect
//                               x={bar.x}
//                               y={140 - bar.height}
//                               width="60"
//                               height={bar.height}
//                               fill={bar.fill}
//                               rx="4"
//                               className="transform origin-bottom transition-all duration-500 hover:scale-105"
//                             />
//                             <text
//                               x={bar.x + 30}
//                               y={130 - bar.height}
//                               textAnchor="middle"
//                               fontFamily="Arial"
//                               fontSize="12"
//                               fill="white"
//                               fontWeight="bold"
//                             >
//                               {bar.value}
//                             </text>
//                             <text
//                               x={bar.x + 30}
//                               y={130}
//                               textAnchor="middle"
//                               fontFamily="Arial"
//                               fontSize="12"
//                               fill="#d1d5db"
//                             >
//                               {bar.label}
//                             </text>
//                           </g>
//                         ))}
//                       </svg>
//                     </div>
//                   )}
//                   {key === "calls" && (
//                     <div className="absolute bottom-10 right-10 z-10">
//                       <svg
//                         width="350"
//                         height="250"
//                         viewBox="0 0 350 250"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <defs>
//                           <linearGradient
//                             id="phoneGradient"
//                             x1="0%"
//                             y1="0%"
//                             x2="100%"
//                             y2="100%"
//                           >
//                             <stop offset="0%" stopColor="#3b82f6" />
//                             <stop offset="100%" stopColor="#1e40af" />
//                           </linearGradient>
//                         </defs>
//                         {/* Phone Base */}
//                         <rect
//                           x="140"
//                           y="80"
//                           width="70"
//                           height="120"
//                           rx="12"
//                           fill="url(#phoneGradient)"
//                         />
//                         {/* Phone Screen */}
//                         <rect
//                           x="150"
//                           y="90"
//                           width="50"
//                           height="40"
//                           rx="4"
//                           fill="#1e293b"
//                         />
//                         {/* Phone Button */}
//                         <rect
//                           x="165"
//                           y="140"
//                           width="20"
//                           height="4"
//                           rx="2"
//                           fill="#64748b"
//                         />
//                         {/* Signal Waves */}
//                         {[0, 1, 2].map((i) => (
//                           <circle
//                             key={i}
//                             cx="175"
//                             cy="160"
//                             r={30 + i * 25}
//                             stroke="#10b981"
//                             strokeWidth="2"
//                             fill="none"
//                             opacity={0.3 - i * 0.1}
//                             className="animate-ping"
//                             style={{ animationDelay: `${i * 0.5}s` }}
//                           />
//                         ))}
//                         <text
//                           x="175"
//                           y="220"
//                           textAnchor="middle"
//                           fontFamily="Arial"
//                           fontSize="14"
//                           fill="#10b981"
//                           fontWeight="bold"
//                         >
//                           +45% Calls
//                         </text>
//                       </svg>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )
//           )}
//         </div>

//         {/* Enhanced Desktop Sticky Tabs - Modern Glass Morphism */}
//         <div className="hidden lg:flex w-[350px] sticky top-0 h-screen flex-col items-center justify-center relative overflow-hidden">
//           {/* Dynamic Background */}
//           <div
//             className="absolute inset-0 bg-cover bg-center transition-all duration-500"
//             style={{ backgroundImage: `url(${tabData[activeTab].bgImage})` }}
//           />

//           {/* Enhanced Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 backdrop-blur-sm"></div>

//           {/* Animated Tab Navigation */}
//           <div className="relative z-10 flex flex-col space-y-4 px-6 w-full max-w-sm">
//             <div className="text-center mb-8">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Our Services
//               </h3>
//               <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
//             </div>

//             {(Object.entries(tabData) as [TabKey, TabInfo][]).map(
//               ([key, tab]) => {
//                 const isActive = activeTab === key;
//                 return (
//                   <div
//                     key={key}
//                     onClick={() => handleTabClick(key)}
//                     className={`cursor-pointer rounded-2xl p-6 text-left transition-all duration-500 transform border-2 backdrop-blur-sm ${
//                       isActive
//                         ? "bg-yellow-500/90 border-yellow-400 text-black shadow-2xl scale-105 rotate-1"
//                         : "bg-white/10 border-white/20 text-white hover:bg-yellow-500/30 hover:border-yellow-500/50 hover:text-black hover:scale-102 hover:-rotate-1"
//                     }`}
//                   >
//                     <div className="flex items-center justify-between">
//                       <h3 className="font-bold text-lg">{tab.title}</h3>
//                       {isActive && (
//                         <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse"></div>
//                       )}
//                     </div>
//                     {isActive && (
//                       <p className="mt-2 text-sm opacity-90 leading-relaxed">
//                         {tab.heading}
//                       </p>
//                     )}
//                   </div>
//                 );
//               }
//             )}

//             {/* Progress Indicator */}
//             <div className="mt-8 bg-white/10 rounded-full h-2 backdrop-blur-sm">
//               <div
//                 className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
//                 style={{
//                   width: `${((Object.keys(tabData).indexOf(activeTab) + 1) / Object.keys(tabData).length) * 100}%`,
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GbpThird;
