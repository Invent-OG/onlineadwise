"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HeroMakeSection() {
  useEffect(() => {
    // Split Text for Hero
    const heroChars = new SplitText("[split-chars]", {
      type: "lines chars",
      linesClass: "split-line",
      charsClass: "split-char",
    });

    // Split Text for Make Section (single block)
    const makeSplit = new SplitText(".make-text", {
      type: "lines",
      linesClass: "split-line",
    });

    // === Hero Animation ===
    gsap
      .timeline()
      .to(".hero", { opacity: 1, duration: 0 })
      .fromTo(
        ".hero-title .split-char",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 1,
          ease: "power3.out",
        }
      )
      .fromTo(
        ".hero-img img",
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        "<0.3"
      )
      .fromTo(
        ".hero-date",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 },
        "<0.3"
      )
      .to(".make", { opacity: 1, duration: 0 }, "<");

    // === Hero Scroll Pin ===
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top+=10%",
          pin: true,
          scrub: 1,
        },
      })
      .to(".hero-img", { height: 0, duration: 0.8 })
      .to(".hero-img img", { y: "-30%", duration: 0.8 }, "<")
      .to(".hero-title", { y: "-15%", duration: 0.8 }, "<")
      .fromTo(
        ".hero-title .split-char",
        { opacity: 1 },
        { opacity: 0, stagger: 0.02, duration: 0.5 },
        "<"
      )
      .to(".hero-date", { opacity: 0, duration: 0.4 }, "<0.2");

    // === Make Section Text Animation (scale + bounce) ===
    gsap.from(".make-text .split-line", {
      scrollTrigger: {
        trigger: ".make",
        start: "top 80%",
        end: "bottom 30%",
        scrub: 1,
      },
      opacity: 0,
      scale: 0.8,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    // === Make Section Image Animation (slide in left & right) ===
    gsap.from(".gallery-left img", {
      scrollTrigger: {
        trigger: ".make-gallery",
        start: "top 85%",
        end: "bottom 40%",
        scrub: 1,
      },
      x: -150,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".gallery-right img", {
      scrollTrigger: {
        trigger: ".make-gallery",
        start: "top 85%",
        end: "bottom 40%",
        scrub: 1,
      },
      x: 150,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#171817]">
      <main className="smooth-wrapper">
        <div id="smooth-content">
          {/* Hero Section */}
          <section className="hero relative opacity-0 h-screen flex items-center justify-center">
            <div className="hero-translate relative w-full h-full flex flex-col justify-center items-center">
              <div className="hero-title-wrapp relative z-10 text-center">
                <h1
                  className="hero-title text-6xl md:text-9xl font-extrabold text-white up-text relative"
                  split-chars
                >
                  Online<span className="text-yellow-500">Ad</span>wise
                </h1>
              </div>

              <div className="hero-img relative w-full max-w-5xl h-[60vh] md:h-[80vh] mt-8 overflow-hidden rounded-md">
                <img
                  src="https://images.pexels.com/photos/14256897/pexels-photo-14256897.jpeg"
                  alt="Vsimdim"
                  className="w-full h-full object-cover object-center"
                />
                <div className="hero-date absolute bottom-2 right-2 font-semibold text-lg">
                  2022
                </div>
              </div>
            </div>
          </section>

          {/* Make Section */}
          <section className="make relative flex flex-col justify-center items-center h-screen opacity-0 text-white">
            <div className="make-subtitle text-yellow-500 font-medium uppercase mb-6">
              we make
            </div>

            {/* Single Content Block */}
            <div className="make-main text-center w-full max-w-4xl">
              <div
                className="make-text text-2xl md:text-6xl font-extrabold leading-tight up-text"
                split-lines
              >
                <span className="text-yellow-500">Relaxation</span> and
                pampering for your mind{" "}
                <span className="text-yellow-500">body</span> &{" "}
                <span className="text-yellow-500">nails</span>
              </div>
            </div>

            {/* Gallery */}
            <div className="make-gallery relative flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-12 gap-6 h-auto md:h-[70vh]">
              <div className="gallery-wrapp gallery-left relative w-full md:flex-1 h-64 md:h-full rounded-md overflow-hidden">
                <div className="gallery-main w-full h-full">
                  <div className="gallery-item relative w-full h-full overflow-hidden rounded-md">
                    <img
                      src="https://images.pexels.com/photos/6663367/pexels-photo-6663367.jpeg"
                      alt="Gallery image 1"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="gallery-wrapp gallery-right relative w-full md:flex-1 h-64 md:h-full rounded-md overflow-hidden">
                <div className="gallery-main w-full h-full">
                  <div className="gallery-item relative w-full h-full overflow-hidden rounded-md">
                    <img
                      src="https://images.pexels.com/photos/6663563/pexels-photo-6663563.jpeg"
                      alt="Gallery image 2"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
