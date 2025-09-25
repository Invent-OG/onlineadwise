"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

function GbpHero() {
  const router = useRouter();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  // Handle contact navigation
  const handleContactClick = () => {
    router.push("/contact");
  };

  // Handle video modal
  const handlePlayVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Close video on ESC key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseVideo();
      }
    };

    if (isVideoOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background effect
      gsap.to(imageRef.current, {
        y: -80,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Title animation with character stagger
      const titleChars = titleRef.current?.querySelectorAll(".char");
      if (titleChars && titleChars.length > 0) {
        gsap.fromTo(
          titleChars,
          {
            y: 100,
            opacity: 0,
            rotationX: 90,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.03,
            ease: "back.out(1.7)",
            delay: 0.5,
          }
        );
      }

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 1,
        }
      );

      // Features list animation
      const features = featuresRef.current?.children;
      if (features && features.length > 0) {
        gsap.fromTo(
          Array.from(features),
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // CTA buttons animation
      gsap.fromTo(
        ctaRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.8)",
          delay: 1.5,
        }
      );

      // Stats counter animation
      const statNumbers = statsRef.current?.querySelectorAll(".stat-number");
      statNumbers?.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target") || "0");
        gsap.to(stat, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          stagger: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Dashboard card animation
      gsap.fromTo(
        dashboardRef.current,
        { y: 100, opacity: 0, rotationY: 10 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: dashboardRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating elements
      const floatingElements =
        heroRef.current?.querySelectorAll(".floating-element");
      floatingElements?.forEach((element, index) => {
        gsap.to(element, {
          y: index % 2 === 0 ? -20 : 20,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const renderAnimatedTitle = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <>
      <div
        ref={heroRef}
        className="min-h-screen relative overflow-hidden bg-black"
      >
        {/* Background Image */}
        <div
          ref={imageRef}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"
        />

        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="floating-element absolute top-20 left-10 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl" />
          <div className="floating-element absolute bottom-32 right-20 w-20 h-20 bg-yellow-500/15 rounded-full blur-lg" />
          <div className="floating-element absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-500/10 rounded-full blur-lg" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          {/* Layout Variant 1: Split Screen with Dashboard */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                <span className="text-yellow-400 font-semibold text-sm">
                  🏆 #1 GBP Management Platform 2024
                </span>
              </div>

              {/* Main Title */}
              <h1
                ref={titleRef}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
              >
                <span className="text-yellow-500">
                  {renderAnimatedTitle("GBP")}
                </span>
                <br />
                <span className="text-white">
                  {renderAnimatedTitle("Management")}
                </span>
                <span className="text-yellow-500">.</span>
              </h1>

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Dominate local search results with our AI-powered Google
                Business Profile management. Increase visibility, drive
                qualified traffic, and convert more customers with
                enterprise-grade tools.
              </p>

              {/* Key Features */}
              <div ref={featuresRef} className="space-y-4">
                {[
                  "🚀 AI-powered profile optimization",
                  "⭐ Automated review management system",
                  "📊 Real-time performance analytics",
                  "🎯 Local SEO expertise",
                  "💬 24/7 dedicated support",
                  "📱 Mobile-optimized results",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button
                  onClick={handleContactClick}
                  className="group relative bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let&apos;s Talk
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                <button
                  onClick={handlePlayVideo}
                  className="group bg-black/50 backdrop-blur-sm border-2 border-yellow-500/30 hover:border-yellow-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Play Video
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div
                ref={dashboardRef}
                className="bg-gray-900/80 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-6 shadow-2xl"
              >
                <div className="space-y-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                        <span className="text-black font-bold text-lg">G</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold">
                          Business Dashboard
                        </h3>
                        <p className="text-yellow-400 text-sm">
                          ● Live Analytics
                        </p>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm font-medium">
                      Active
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-500">
                        94%
                      </div>
                      <div className="text-gray-400 text-sm">Optimization</div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-500">
                        4.9★
                      </div>
                      <div className="text-gray-400 text-sm">Rating</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-gray-400 text-sm mb-2">
                        <span>Visibility Score</span>
                        <span>87/100</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: "87%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-gray-400 text-sm mb-2">
                        <span>Monthly Growth</span>
                        <span>+45%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">
                    +245%
                  </div>
                  <div className="text-white text-sm">Visibility Boost</div>
                </div>
              </div>
            </div>
          </div>

          {/* Layout Variant 2: Stats Section */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20 pt-12 border-t border-yellow-500/20"
          >
            {[
              {
                number: 98,
                suffix: "%",
                label: "Client Success Rate",
                description: "Average profile optimization score",
              },
              {
                number: 3.5,
                suffix: "x",
                label: "Traffic Growth",
                description: "More clicks and impressions",
              },
              {
                number: 24,
                suffix: "/7",
                label: "Expert Support",
                description: "Round-the-clock monitoring",
              },
              {
                number: 500,
                suffix: "+",
                label: "Businesses",
                description: "Trusted by local companies",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl lg:text-4xl font-black text-yellow-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="stat-number" data-target={stat.number}>
                    0
                  </span>
                  {stat.suffix}
                </div>
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Layout Variant 3: Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {[
              {
                icon: "🎯",
                title: "Local SEO Dominance",
                description:
                  "Rank higher in local searches with optimized content and citations",
                features: [
                  "NAP consistency",
                  "Local citations",
                  "Geo-targeted content",
                ],
              },
              {
                icon: "📈",
                title: "Performance Analytics",
                description:
                  "Track impressions, clicks, calls, and direction requests in real-time",
                features: [
                  "Real-time dashboard",
                  "Competitor analysis",
                  "ROI tracking",
                ],
              },
              {
                icon: "⭐",
                title: "Review Management",
                description:
                  "Automate review responses and maintain 5-star reputation",
                features: [
                  "Review monitoring",
                  "Response templates",
                  "Rating optimization",
                ],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/10 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-yellow-400 text-sm"
                    >
                      <div className="w-1 h-1 bg-yellow-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-yellow-500/30 rounded-full flex justify-center mx-auto">
              <div className="w-1 h-3 bg-yellow-500/70 rounded-full mt-2" />
            </div>
            <p className="text-yellow-400/60 text-sm mt-2 text-center">
              Scroll to Discover More
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close Button */}
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-yellow-500 transition-colors duration-300 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
              >
                <source src="/videos/gbp-demo.mp4" type="video/mp4" />
                <source src="/videos/gbp-demo.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* Fallback if video doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-500/10 to-black/50">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-lg font-semibold">GBP Management Demo</p>
                  <p className="text-sm opacity-75 mt-2">Video loading...</p>
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">
                GBP Management Platform Demo
              </h3>
              <p className="text-gray-300 mt-2">
                See how our platform transforms Google Business Profiles in
                minutes
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GbpHero;
