"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

function WeblandingHero() {
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

  const handleContactClick = () => {
    router.push("/contact");
  };

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

      const titleChars = titleRef.current?.querySelectorAll(".char");
      if (titleChars && titleChars.length > 0) {
        gsap.fromTo(
          titleChars,
          { y: 100, opacity: 0, rotationX: 90 },
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

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1 }
      );

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
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        {/* Background Image */}
        <div
          ref={imageRef}
          className="absolute  inset-0 bg-[url('https://images.pexels.com/photos/221043/pexels-photo-221043.jpeg')] bg-cover bg-center bg-no-repeat opacity-70 "
        />
        <div className="absolute inset-0">
          <div className="floating-element absolute top-20 left-10 w-24 h-24 bg-black/5 rounded-full blur-xl" />
          <div className="floating-element absolute bottom-32 right-20 w-20 h-20 bg-black/10 rounded-full blur-lg" />
          <div className="floating-element absolute top-1/3 right-1/4 w-16 h-16 bg-black/5 rounded-full blur-lg" />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                <span className="text-yellow-500 font-semibold text-sm">
                  🏆 Award Winning Web Solutions 2024
                </span>
              </div>

              {/* Title */}
              <h1
                ref={titleRef}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
              >
                <span className="text-yellow-500">
                  {renderAnimatedTitle("Modern")}
                </span>
                <br />
                <span className="text-gray-800">
                  {renderAnimatedTitle("Web Design")}
                </span>
              </h1>

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                className="text-xl text-black leading-relaxed"
              >
                Transform your online presence with cutting-edge websites that
                drive results. From stunning designs to powerful functionality,
                we create digital experiences that convert visitors into
                customers.
              </p>

              {/* Features */}
              <div ref={featuresRef} className="space-y-4">
                {[
                  "🚀 Lightning-fast performance",
                  "📱 Mobile-first responsive design",
                  "🔍 SEO-optimized structure",
                  "🎨 Custom design solutions",
                  "🛡️ Secure & scalable hosting",
                  "📊 Analytics integration",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-black"
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
                  className="group relative bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
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
                  className="group bg-white border-2 border-blue-200 hover:border-blue-400 text-yellow-500 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
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
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div
                ref={dashboardRef}
                className="bg-white/90 backdrop-blur-md border border-blue-200 rounded-2xl p-6 shadow-2xl"
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-800 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">W</span>
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold">
                          Website Analytics
                        </h3>
                        <p className="text-yellow-500 text-sm">
                          ● Live Performance
                        </p>
                      </div>
                    </div>
                    <div className="text-yellow-500 text-sm font-medium">
                      Optimized
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-black">99%</div>
                      <div className="text-gray-600 text-sm">Performance</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-black">A+</div>
                      <div className="text-gray-600 text-sm">SEO Score</div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-gray-600 text-sm mb-2">
                        <span>User Engagement</span>
                        <span>92/100</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-600 h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-gray-600 text-sm mb-2">
                        <span>Conversion Rate</span>
                        <span>+38%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "38%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">+3.2s</div>
                  <div className="text-gray-700 text-sm">Avg. Session</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20 pt-12 border-t border-blue-200"
          >
            {[
              {
                number: 500,
                suffix: "+",
                label: "Websites Launched",
                description: "Successful projects delivered",
              },
              {
                number: 98,
                suffix: "%",
                label: "Client Satisfaction",
                description: "5-star reviews and counting",
              },
              {
                number: 24,
                suffix: "/7",
                label: "Support Available",
                description: "Round-the-clock assistance",
              },
              {
                number: 3,
                suffix: "x",
                label: "Faster Load Times",
                description: "Optimized performance",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl lg:text-4xl font-black text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="stat-number" data-target={stat.number}>
                    0
                  </span>
                  {stat.suffix}
                </div>
                <div className="text-gray-900 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {[
              {
                icon: "💻",
                title: "Web Development",
                description:
                  "Custom websites built with latest technologies and frameworks",
                features: [
                  "React/Next.js",
                  "Responsive Design",
                  "E-commerce Solutions",
                ],
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description:
                  "Beautiful interfaces that provide exceptional user experiences",
                features: ["User Research", "Wireframing", "Prototype Testing"],
              },
              {
                icon: "📈",
                title: "Digital Marketing",
                description:
                  "Drive traffic and conversions with strategic marketing",
                features: [
                  "SEO Optimization",
                  "Content Strategy",
                  "Social Media Integration",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-gray-900 font-bold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-900 text-sm"
                    >
                      <div className="w-1 h-1 bg-blue-500 rounded-full" />
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
            <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center mx-auto">
              <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2" />
            </div>
            <p className="text-black text-sm mt-2 text-center">
              Scroll to Discover More
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
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

            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
              >
                <source src="/videos/website-demo.mp4" type="video/mp4" />
                <source src="/videos/website-demo.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-purple-900/60">
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
                  <p className="text-lg font-semibold">Website Platform Demo</p>
                  <p className="text-sm opacity-75 mt-2">Video loading...</p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">
                Modern Web Development Platform
              </h3>
              <p className="text-gray-300 mt-2">
                See how we transform ideas into high-performing websites
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WeblandingHero;
