"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import CaseStudy from "@/components/sections/CaseStudy";
import Process from "@/components/sections/Process";
import Offer from "@/components/sections/Offer";
import Bonuses from "@/components/sections/Bonuses";
import Guarantee from "@/components/sections/Guarantee";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/sections/ContactForm";
import { ScrollProgress } from "@/components/eldoraui/scrollprogress";
import MarqueeText from "@/components/sections/MarqueeText";
import Slider from "@/components/sections/Slider";
import SalonMarketing from "@/components/sections/SalonMarketing";
import Zooming from "@/components/sections/Zooming";
import PackagesSection from "@/components/sections/PackagesSection";
import ImageText from "@/components/sections/ImageText";
import SpaParallax from "@/components/sections/SpaParallax";
import TestVideo from "@/components/sections/TestVideo";
import ImagesAnimation from "@/components/sections/ImagesAnimation";
import BlogCard from "@/components/sections/BlogCard";
import StickyShowcase from "@/components/sections/StickyShowcase";
import StickyShowCaseTwo from "@/components/sections/StickyShowCaseTwo";
import StickyShowCaseThree from "@/components/sections/StickyShowCaseThree";
import TestimonialHome from "@/components/sections/TestimonialHome";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Smooth scrolling
      gsap.to(containerRef.current, {
        duration: 0.1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      <ScrollProgress className="" />

      {/* <Hero /> */}
      <TestVideo />
      <MarqueeText />
      <PainPoints />
      {/* <Solution /> */}
      <SalonMarketing />
      {/* <StickyShowcase />
      <StickyShowCaseTwo />
      <StickyShowCaseThree /> */}
      <Slider />
      <PackagesSection />
      {/* <ImageText /> */}
      {/* <SpaParallax /> */}
      {/* <Zooming /> */}
      <Benefits />
      <ImagesAnimation />
      <CaseStudy />
      <Process />
      <Offer />
      <Bonuses />
      <Guarantee />
      <FAQ />
      <ContactForm />
      <BlogCard />
      <TestimonialHome />
      <CTA />
    </div>
  );
}
