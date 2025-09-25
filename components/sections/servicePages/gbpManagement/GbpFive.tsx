"use client";
import React, { useEffect, useRef } from "react";

function GbpFive() {
  const bgRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current && gridRef.current) {
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          // Parallax background
          gsap.to(bgRef.current, {
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: bgRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });

          // Grid item animations
          gsap.fromTo(
            gridRef.current!.children,
            {
              y: 60,
              opacity: 0,
              rotationY: 10,
            },
            {
              y: 0,
              opacity: 1,
              rotationY: 0,
              duration: 0.8,
              stagger: {
                amount: 1.5,
                grid: "auto",
                from: "center",
              },
              ease: "power2.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Animated Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-30"
      />

      {/* Floating Ornaments */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-4000"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
            GBP Marketing
          </h2>
          <div className="w-32 h-1.5 bg-black mx-auto rounded-full shadow-lg mt-4"></div>
        </div>

        {/* Magazine Grid Layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Grid Items with different sizes */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                If you&apos;re here we think that you likely understand how
                important proper Google Business Profile management can be for
                your business. In high-paying niches the difference between the
                4th spot in a map pack and the 3rd can potentially result in the
                difference of tens of thousands of dollars each month. We
                understand this and want to offer GBP marketing services that
                move the needle for you and your business.
              </p>
            </div>
          </div>

          <div className="lg:row-span-2">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 h-full shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6"></div>
              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                Unlike many other digital marketing companies out there, we have
                a strict focus on GBP optimization and rankings. We know what it
                takes to rank a Google My Business listing high, and we can do
                it at an affordable price that won&apos;t break the bank for
                your business.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 h-full shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                A highly optimized Google Business Profile is essential for
                local businesses seeking to enhance their online presence and
                connect with potential customers in their area.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"></div>
              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                Moreover, Google Business Profiles provide essential information
                about a business, such as its location, hours of operation,
                contact details, and customer reviews.
              </p>
            </div>
          </div>

          {/* Continue with remaining content in similar grid pattern... */}

          {/* CTA Card */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="bg-yellow-500 rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-1 bg-white/80 rounded-full mb-6"></div>
              <p className="text-white text-lg leading-relaxed font-semibold text-center">
                If you&apos;d like to know more about optimizing your profile,
                or if you&apos;d like to try out GBP management services please
                feel free to contact us or place an order today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GbpFive;
