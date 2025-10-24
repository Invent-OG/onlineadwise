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
      title: "WEBSITE DESIGN",
      heading: "MODERN, CREATIVE & CONVERTING WEBSITES",
      content: `Your website is more than just an online presence — it's your brand’s first impression. 
At OnlineAdwise, we design sleek, responsive, and high-performing websites that perfectly blend creativity and functionality. 
From corporate sites to eCommerce platforms, our team ensures your website looks amazing and performs even better.

Key Benefits:
- Visually stunning, mobile-friendly designs.  
- Customized layouts tailored to your business goals.  
- Built to engage visitors and boost conversions.`,
      button: "Design My Website",
      bgImage:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    },

    visibility: {
      title: "LANDING PAGES",
      heading: "DESIGNED TO DRIVE RESULTS",
      content: `Convert visitors into loyal customers with high-impact landing pages built for performance. 
We focus on conversion-driven design, persuasive copy, and data-backed structure to help your campaigns perform their best. 
Whether you’re running ads or launching a product, we make your page stand out.

Key Benefits:
- Boost conversions with strategic CTA placement.  
- Optimized for Google Ads and social media campaigns.  
- Proven designs that turn clicks into customers.`,
      button: "Get My Landing Page",
      bgImage:
        "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg",
    },

    reviews: {
      title: "SPEED & PERFORMANCE",
      heading: "BUILT FOR SPEED AND STABILITY",
      content: `No one likes waiting for a website to load. 
We build lightning-fast, optimized websites that deliver a seamless browsing experience. 
By combining clean code and modern frameworks, we make sure your site performs flawlessly on every device.

Key Benefits:
- Blazing-fast page load times.  
- Optimized code for peak performance.  
- Smooth user experience that keeps visitors engaged.`,
      button: "Test My Site Speed",
      bgImage: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    },

    calls: {
      title: "SEO OPTIMIZATION",
      heading: "OPTIMIZED TO RANK HIGHER",
      content: `A beautiful website means nothing if no one sees it. 
At OnlineAdwise, we integrate powerful SEO practices right into your website’s foundation. 
From metadata and structure to keyword strategy, we ensure your website is ready to dominate search results.

Key Benefits:
- Higher Google rankings with smart SEO setup.  
- Increased visibility and targeted traffic.  
- Long-term growth through organic reach.`,
      button: "Optimize My Website",
      bgImage:
        "https://images.pexels.com/photos/4458423/pexels-photo-4458423.jpeg",
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
                    <div className="absolute bottom-0 left-1/2 right-0 z-10 w-full ">
                      <svg
                        width="450"
                        height="350"
                        viewBox="0 0 400 300"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="roiGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#10b981" />
                            <stop offset="100%" stop-color="#047857" />
                          </linearGradient>
                          <linearGradient
                            id="chartGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stop-color="#f59e0b" />
                            <stop offset="100%" stop-color="#d97706" />
                          </linearGradient>
                          <linearGradient
                            id="dataFlow"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stop-color="#3b82f6" />
                            <stop offset="100%" stop-color="#1e40af" />
                          </linearGradient>
                          <radialGradient
                            id="nodeGlow"
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
                          y="30"
                          text-anchor="middle"
                          font-family="Arial, sans-serif"
                          font-size="18"
                          font-weight="bold"
                          fill="#fbbf24"
                        >
                          OPTIMIZED FOR ROI
                        </text>

                        <path
                          d="M120 180 L160 120 L200 140 L240 100 L280 160"
                          stroke="url(#roiGradient)"
                          stroke-width="3"
                          fill="none"
                          stroke-linecap="round"
                        >
                          <animate
                            attributeName="stroke-dasharray"
                            values="0 500; 500 0"
                            dur="3s"
                            fill="freeze"
                          />
                          <animate
                            attributeName="stroke-dashoffset"
                            values="500; 0"
                            dur="3s"
                            fill="freeze"
                          />
                        </path>

                        <circle cx="120" cy="180" r="4" fill="#10b981">
                          <animate
                            attributeName="r"
                            values="4;6;4"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <circle cx="160" cy="120" r="4" fill="#10b981">
                          <animate
                            attributeName="r"
                            values="4;6;4"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.3s"
                          />
                        </circle>
                        <circle cx="200" cy="140" r="4" fill="#10b981">
                          <animate
                            attributeName="r"
                            values="4;6;4"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.6s"
                          />
                        </circle>
                        <circle cx="240" cy="100" r="4" fill="#10b981">
                          <animate
                            attributeName="r"
                            values="4;6;4"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.9s"
                          />
                        </circle>
                        <circle cx="280" cy="160" r="4" fill="#10b981">
                          <animate
                            attributeName="r"
                            values="4;6;4"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="1.2s"
                          />
                        </circle>

                        <rect
                          x="130"
                          y="160"
                          width="40"
                          height="20"
                          fill="url(#chartGradient)"
                          opacity="0"
                        >
                          <animate
                            attributeName="height"
                            values="0;20"
                            dur="1s"
                            fill="freeze"
                            begin="0.5s"
                          />
                          <animate
                            attributeName="y"
                            values="180;160"
                            dur="1s"
                            fill="freeze"
                            begin="0.5s"
                          />
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="1s"
                            fill="freeze"
                            begin="0.5s"
                          />
                        </rect>

                        <rect
                          x="190"
                          y="140"
                          width="40"
                          height="40"
                          fill="url(#chartGradient)"
                          opacity="0"
                        >
                          <animate
                            attributeName="height"
                            values="0;40"
                            dur="1s"
                            fill="freeze"
                            begin="1s"
                          />
                          <animate
                            attributeName="y"
                            values="180;140"
                            dur="1s"
                            fill="freeze"
                            begin="1s"
                          />
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="1s"
                            fill="freeze"
                            begin="1s"
                          />
                        </rect>

                        <rect
                          x="250"
                          y="120"
                          width="40"
                          height="60"
                          fill="url(#chartGradient)"
                          opacity="0"
                        >
                          <animate
                            attributeName="height"
                            values="0;60"
                            dur="1s"
                            fill="freeze"
                            begin="1.5s"
                          />
                          <animate
                            attributeName="y"
                            values="180;120"
                            dur="1s"
                            fill="freeze"
                            begin="1.5s"
                          />
                          <animate
                            attributeName="opacity"
                            values="0;1"
                            dur="1s"
                            fill="freeze"
                            begin="1.5s"
                          />
                        </rect>

                        <circle cx="150" cy="80" r="15" fill="url(#nodeGlow)">
                          <animate
                            attributeName="r"
                            values="15;18;15"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        <circle cx="250" cy="80" r="15" fill="url(#nodeGlow)">
                          <animate
                            attributeName="r"
                            values="15;18;15"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.5s"
                          />
                        </circle>

                        <path
                          d="M150 80 L250 80"
                          stroke="url(#dataFlow)"
                          stroke-width="2"
                          stroke-dasharray="5,5"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="0;10"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </path>

                        <circle
                          cx="200"
                          cy="200"
                          r="8"
                          fill="#10b981"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1;0"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="r"
                            values="8;10;8"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        <circle
                          cx="180"
                          cy="200"
                          r="8"
                          fill="#3b82f6"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1;0"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.3s"
                          />
                          <animate
                            attributeName="r"
                            values="8;10;8"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.3s"
                          />
                        </circle>

                        <circle
                          cx="220"
                          cy="200"
                          r="8"
                          fill="#f59e0b"
                          opacity="0"
                        >
                          <animate
                            attributeName="opacity"
                            values="0;1;0"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.6s"
                          />
                          <animate
                            attributeName="r"
                            values="8;10;8"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.6s"
                          />
                        </circle>

                        <text
                          x="200"
                          y="240"
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
                          +65% ROI
                        </text>

                        <circle
                          cx="120"
                          cy="100"
                          r="3"
                          fill="#fbbf24"
                          opacity="0.6"
                        >
                          <animate
                            attributeName="cy"
                            values="100;90;100"
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
                          cx="280"
                          cy="110"
                          r="3"
                          fill="#fbbf24"
                          opacity="0.6"
                        >
                          <animate
                            attributeName="cy"
                            values="110;100;110"
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
                          cx="140"
                          cy="130"
                          r="3"
                          fill="#fbbf24"
                          opacity="0.6"
                        >
                          <animate
                            attributeName="cy"
                            values="130;120;130"
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
                          cx="260"
                          cy="140"
                          r="3"
                          fill="#fbbf24"
                          opacity="0.6"
                        >
                          <animate
                            attributeName="cy"
                            values="140;130;140"
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
