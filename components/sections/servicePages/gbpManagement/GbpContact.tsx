"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GbpContact() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (bgRef.current) {
      // Parallax scroll effect
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);
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
        });
      });
    }
  }, []);
  // GSAP entrance animation
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".fade-item"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Parallax Grid Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="fade-item text-3xl md:text-5xl font-bold text-black mb-6">
          Contact <span className="text-yellow-500">Us</span>
        </h2>
        <p className="fade-item text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Contact us with this form if you have questions about our GBP
          management service that aren’t covered on the site.{" "}
          <span className=" text-yellow-500 text-3xl font-handwritten">
            We can also schedule a video call if you’d like to discuss your
            business to see if you’d be a fit to work with us.
          </span>{" "}
          We’ll do our best to get back to you within 24 hours during regular
          business hours.
        </p>
        <button
          onClick={() => router.push("/contacts")}
          className="fade-item px-8 py-4 bg-yellow-500 text-black text-lg rounded-sm shadow-lg hover:scale-105 transition-transform"
        >
          Go to Contact Page
        </button>
      </div>
    </section>
  );
}

export default GbpContact;
