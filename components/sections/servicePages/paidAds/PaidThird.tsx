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

function PaidThird() {
  const [activeTab, setActiveTab] = useState<TabKey>("lsa");
  const sectionRefs = useRef<Record<TabKey, HTMLDivElement | null>>({
    lsa: null,
    visibility: null,
    reviews: null,
    calls: null,
  });

  const tabData: Record<TabKey, TabInfo> = {
    lsa: {
      title: "GOOGLE ADS",
      heading: "SMART CAMPAIGNS THAT DRIVE RESULTS",
      content: `Get found by your ideal customers the moment they search. 
At OnlineAdwise Marketing, we create and manage high-performing Google Ads campaigns designed to deliver instant, measurable results. 
From keyword research to ad copywriting and optimization, every campaign is engineered to maximize ROI and bring in high-quality leads.

Key Benefits:
- Appear at the top of Google search results.  
- Target ready-to-convert audiences with precision.  
- Generate consistent, trackable leads for your business.`,
      button: "Launch Google Ads",
      bgImage:
        "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg",
    },

    visibility: {
      title: "META & SOCIAL ADS",
      heading: "ENGAGE. CONNECT. CONVERT.",
      content: `Turn social media into a revenue engine. 
Our Meta (Facebook & Instagram) ad campaigns are crafted to capture attention, tell your brand’s story, and inspire action. 
We use creative visuals, compelling copy, and advanced targeting to convert scrollers into customers.

Key Benefits:
- Reach the right audience on Facebook and Instagram.  
- Boost brand awareness with visually engaging creatives.  
- Drive clicks, leads, and purchases with data-driven ads.`,
      button: "Run Social Ads",
      bgImage:
        "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
    },

    reviews: {
      title: "RETARGETING",
      heading: "RECONNECT WITH LOST VISITORS",
      content: `Not every visitor converts on the first visit — that’s where retargeting comes in. 
We strategically re-engage users who have shown interest in your brand, turning missed opportunities into real customers. 
Stay top-of-mind and bring back high-intent visitors who are ready to buy.

Key Benefits:
- Reconnect with website visitors across the web.  
- Increase conversions through strategic ad reminders.  
- Boost ROI by targeting warm, high-intent audiences.`,
      button: "Start Retargeting",
      bgImage:
        "https://images.pexels.com/photos/7567449/pexels-photo-7567449.jpeg",
    },

    calls: {
      title: "PERFORMANCE TRACKING",
      heading: "OPTIMIZED FOR ROI",
      content: `Data is at the heart of every great campaign. 
We don’t just run ads — we continuously optimize them for better performance. 
With transparent reporting, conversion tracking, and analytics, you’ll always know what’s working and where every dollar goes.

Key Benefits:
- Real-time insights and performance reports.  
- Continuous optimization for maximum ROI.  
- Smarter budgeting based on data, not guesswork.`,
      button: "Track My Performance",
      bgImage:
        "https://images.pexels.com/photos/6476585/pexels-photo-6476585.jpeg",
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
                      xmlns="http://www.w3.org/2000/svg"
                      width="1051"
                      height="246"
                      viewBox="0 0 1067 246"
                    >
                      <path
                        d="M0 210 
           L50 190 L100 185 L150 170 L200 165 
           L250 160 L300 158 L350 155 L400 150 
           L450 152 L500 149 L550 151 L600 148 
           L650 150 L700 148 L750 149 L800 151 
           L850 150 L900 152 L950 150 L1000 152 
           L1050 149 L1067 150 
           L1067 246 L0 246 Z"
                        fill="#F59E0B"
                        opacity="0.85"
                      />

                      <polyline
                        points="0,210 50,190 100,185 150,170 200,165 250,160 300,158 350,155 400,150 450,152 500,149 550,151 600,148 650,150 700,148 750,149 800,151 850,150 900,152 950,150 1000,152 1050,149 1067,150"
                        fill="none"
                        stroke="white"
                        stroke-width="2"
                      />
                      <circle cx="200" cy="165" r="4" fill="white" />
                      <circle cx="400" cy="150" r="4" fill="white" />
                      <circle cx="600" cy="148" r="4" fill="white" />
                      <circle cx="800" cy="151" r="4" fill="white" />
                      <circle cx="1000" cy="152" r="4" fill="white" />

                      <polyline
                        points="0,212 50,192 100,187 150,172 200,167 250,162 300,160 350,157 400,152 450,154 500,151 550,153 600,150 650,152 700,150 750,151 800,153 850,152 900,154 950,152 1000,154 1050,151 1067,152"
                        fill="none"
                        stroke="#555"
                        stroke-width="2"
                      />
                      <circle cx="200" cy="167" r="4" fill="#555" />
                      <circle cx="400" cy="152" r="4" fill="#555" />
                      <circle cx="600" cy="150" r="4" fill="#555" />
                      <circle cx="800" cy="153" r="4" fill="#555" />
                      <circle cx="1000" cy="154" r="4" fill="#555" />

                      <polyline
                        points="0,214 50,194 100,189 150,174 200,169 250,164 300,162 350,159 400,154 450,156 500,153 550,155 600,152 650,154 700,152 750,153 800,155 850,154 900,156 950,154 1000,156 1050,153 1067,154"
                        fill="none"
                        stroke="#bbb"
                        stroke-width="2"
                      />
                      <circle cx="200" cy="169" r="4" fill="#bbb" />
                      <circle cx="400" cy="154" r="4" fill="#bbb" />
                      <circle cx="600" cy="152" r="4" fill="#bbb" />
                      <circle cx="800" cy="155" r="4" fill="#bbb" />
                      <circle cx="1000" cy="156" r="4" fill="#bbb" />

                      <polyline
                        points="0,216 50,196 100,191 150,176 200,171 250,166 300,164 350,161 400,156 450,158 500,155 550,157 600,154 650,156 700,154 750,155 800,157 850,156 900,158 950,156 1000,158 1050,155 1067,156"
                        fill="none"
                        stroke="#888"
                        stroke-width="2"
                      />
                      <circle cx="200" cy="171" r="4" fill="#888" />
                      <circle cx="400" cy="156" r="4" fill="#888" />
                      <circle cx="600" cy="154" r="4" fill="#888" />
                      <circle cx="800" cy="157" r="4" fill="#888" />
                      <circle cx="1000" cy="158" r="4" fill="#888" />

                      <polyline
                        points="0,218 50,198 100,193 150,178 200,173 250,168 300,166 350,163 400,158 450,160 500,157 550,159 600,156 650,158 700,156 750,157 800,159 850,158 900,160 950,158 1000,160 1050,157 1067,158"
                        fill="none"
                        stroke="#ccc"
                        stroke-width="2"
                      />
                      <circle cx="200" cy="173" r="4" fill="#ccc" />
                      <circle cx="400" cy="158" r="4" fill="#ccc" />
                      <circle cx="600" cy="156" r="4" fill="#ccc" />
                      <circle cx="800" cy="159" r="4" fill="#ccc" />
                      <circle cx="1000" cy="160" r="4" fill="#ccc" />
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

export default PaidThird;
