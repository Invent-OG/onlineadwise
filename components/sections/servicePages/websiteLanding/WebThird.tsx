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

function WebThird() {
  const [activeTab, setActiveTab] = useState<TabKey>("lsa");
  const sectionRefs = useRef<Record<TabKey, HTMLDivElement | null>>({
    lsa: null,
    visibility: null,
    reviews: null,
    calls: null,
  });

  const tabData: Record<TabKey, TabInfo> = {
    lsa: {
      title: "WEBSITES",
      heading: "INCREDIBLY BEAUTIFUL WEBSITES",
      content: `Stand out against your competition by having one of our sleek, well-designed websites. Over the years, we’ve made hundreds of websites for everything from huge full-service law firms to small single practitioner websites. We can do it all because we’ve already done it all. OnlineAdwise isn’t just a company that can make a website for lawyers. We are THE company that makes websites for lawyers.

Key Benefits:
- Appear in top local search results and Google Maps.
- Increase profile views and website clicks.
- Attract potential clients actively searching for legal services.`,
      button: "Contact Us Today",
      bgImage:
        "https://images.pexels.com/photos/1906440/pexels-photo-1906440.jpeg",
    },
    visibility: {
      title: "CONVERSION",
      heading: "MADE TO CONVERT",
      content: `We specialize in creating high-performing law firm websites backed by data-driven research. Our landing pages are strategically designed to increase client inquiries—whether through phone calls, contact forms, or live chat. Every element of our design is focused on guiding visitors to take the next step with ease, helping your firm attract and convert more clients with confidence.

Key Benefits:
- Seamlessly guide visitors toward taking action.  
- Turn website traffic into qualified client inquiries.  
- Maximize return on every marketing dollar.  

High-quality backlinks differentiate your law firm from competitors and contribute directly to increased leads and visibility.`,
      button: "Start Converting",
      bgImage:
        "https://images.pexels.com/photos/8250929/pexels-photo-8250929.jpeg",
    },
    reviews: {
      title: "SPEED",
      heading: "BUILT FOR SPEED",
      content: `Waiting eternities for a website to load is a terrible experience. OnlineAdwise creates websites with as much form and function as you could possibly want without compromising load time. There will always be a little trade-off for next-level web experiences, but OnlineAdwise has found a great balance and makes incredibly fast websites.

Key Benefits:
- Deliver instant page loads for a smoother experience.  
- Keep visitors engaged instead of bouncing away.  
- Gain a competitive edge with superior performance.  

Proper lead attribution ensures your marketing budget is spent wisely, improving ROI and growth.`,
      button: "Experience the Speed",
      bgImage:
        "https://images.pexels.com/photos/127077/pexels-photo-127077.png",
    },
    calls: {
      title: "OPTIMIZATION",
      heading: "OPTIMIZED FOR SEARCH",
      content: `OnlineAdwise isn’t a web design company that happens to dabble in SEO. We’ve been killing it at local search marketing for other small and large law firms for nearly a decade. When we create a website for your law firm, you can rest assured we follow best practices in coding and development so that your website can perform optimally in Google and other search engines.

Key Benefits:
- Get discovered by more local clients searching online.  
- Build lasting visibility with proven SEO practices.  
- Secure more consultations directly from search traffic.  

With expert GBP management, your law firm can dominate local search results and consistently convert local searchers into clients.`,
      button: "Optimize Now",
      bgImage:
        "https://images.pexels.com/photos/7119258/pexels-photo-7119258.jpeg",
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
                          id="yellowGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stop-color="#eab308" />
                          <stop offset="100%" stop-color="#f59e0b" />
                        </linearGradient>
                      </defs>

                      <circle
                        cx="100"
                        cy="50"
                        r="25"
                        fill="url(#yellowGradient)"
                        opacity="0.8"
                      />
                      <rect
                        x="180"
                        y="30"
                        width="40"
                        height="40"
                        rx="5"
                        fill="url(#yellowGradient)"
                        opacity="0.9"
                        transform="rotate(15 200 50)"
                      />
                      <polygon
                        points="280,25 320,45 280,75 240,45"
                        fill="url(#yellowGradient)"
                        opacity="0.7"
                      />

                      <rect
                        x="400"
                        y="60"
                        width="15"
                        height="20"
                        fill="url(#yellowGradient)"
                      />
                      <rect
                        x="430"
                        y="50"
                        width="15"
                        height="30"
                        fill="url(#yellowGradient)"
                      />
                      <rect
                        x="460"
                        y="40"
                        width="15"
                        height="40"
                        fill="url(#yellowGradient)"
                      />
                      <rect
                        x="490"
                        y="30"
                        width="15"
                        height="50"
                        fill="url(#yellowGradient)"
                      />
                      <rect
                        x="520"
                        y="20"
                        width="15"
                        height="60"
                        fill="url(#yellowGradient)"
                      />

                      <path
                        d="M600 50 C650 30, 700 70, 750 50 C800 30, 850 70, 900 50 C950 30, 1000 70, 1050 50"
                        stroke="url(#yellowGradient)"
                        stroke-width="4"
                        fill="none"
                        stroke-linecap="round"
                      />

                      <circle
                        cx="650"
                        cy="35"
                        r="4"
                        fill="url(#yellowGradient)"
                      />
                      <circle
                        cx="750"
                        cy="65"
                        r="4"
                        fill="url(#yellowGradient)"
                      />
                      <circle
                        cx="850"
                        cy="35"
                        r="4"
                        fill="url(#yellowGradient)"
                      />
                      <circle
                        cx="950"
                        cy="65"
                        r="4"
                        fill="url(#yellowGradient)"
                      />
                      <circle
                        cx="1050"
                        cy="35"
                        r="4"
                        fill="url(#yellowGradient)"
                      />
                    </svg>
                  )}
                  {key === "reviews" && (
                    <div className="absolute bottom-0 left-52 right-0 z-10 w-full ">
                      <svg
                        width="100%"
                        height="80"
                        viewBox="0 0 1200 100"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="speedGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stop-color="#f59e0b" />
                            <stop offset="100%" stop-color="#ef4444" />
                          </linearGradient>
                        </defs>

                        <path
                          d="M50 50 L150 30 L250 70 L350 40 L450 60"
                          stroke="url(#speedGradient)"
                          stroke-width="3"
                          fill="none"
                        />
                        <path
                          d="M50 50 L200 20 L350 80 L500 30 L650 50"
                          stroke="url(#speedGradient)"
                          stroke-width="3"
                          fill="none"
                        />
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

export default WebThird;
