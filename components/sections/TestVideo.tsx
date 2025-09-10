// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// export default function HeroMakeSection() {
//   useEffect(() => {
//     // Split Text
//     const heroChars = new SplitText("[split-chars]", {
//       type: "lines chars",
//       linesClass: "split-line",
//       charsClass: "split-char",
//     });

//     const makeLines = new SplitText(".make-text", {
//       type: "lines",
//       linesClass: "split-line",
//     });

//     // Page load animation
//     gsap
//       .timeline()
//       .to(".hero", { opacity: 1, duration: 0 })
//       .fromTo(
//         ".hero-title .split-char",
//         { scaleY: 0, opacity: 0 },
//         {
//           scaleY: 1,
//           opacity: 1,
//           transformOrigin: "top",
//           stagger: 0.03,
//           duration: 1,
//         }
//       )
//       .fromTo(
//         ".hero-img img",
//         { opacity: 0 },
//         { opacity: 1, duration: 0.8 },
//         "<0.3"
//       )
//       .fromTo(
//         ".hero-date",
//         { opacity: 0 },
//         { opacity: 1, duration: 0.4 },
//         "<0.3"
//       )
//       .to(".make", { opacity: 1, duration: 0 }, "<");

//     // Hero scroll animation
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".hero",
//           start: "top top",
//           end: "bottom top+=10%",
//           pin: true,
//           scrub: 1,
//         },
//       })
//       .to(".hero-img", { height: 0, duration: 0.8 })
//       .to(".hero-img img", { y: "-40%", duration: 0.8 }, "<")
//       .to(".hero-title", { y: "-10%", duration: 0.8 }, "<")
//       .fromTo(
//         ".hero-title .split-char",
//         { scaleY: 1, opacity: 1 },
//         { scaleY: 0, opacity: 0, stagger: 0.03, duration: 0.5 },
//         "<"
//       )
//       .to(".hero-title-rect", { height: 0, duration: 0.8 }, "<")
//       .to(".hero-date", { opacity: 0, duration: 0.4 }, "<0.4")
//       .to(
//         ".hero-title-rect .radius-top",
//         { scaleY: 0, duration: 0.095 },
//         "<0.25"
//       )
//       .to(".hero-title-rect", { borderRadius: 0, duration: 0.15 }, "<");

//     // Make section scroll animation
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".make",
//           start: "top 5%",
//           end: "+=100%",
//           pin: true,
//           scrub: 4,
//         },
//       })
//       .fromTo(
//         ".make-subtitle, .make-text .split-line",
//         { scaleY: 1, opacity: 1 },
//         { scaleY: 2, opacity: 0, stagger: 0.05, duration: 0.5 }
//       )
//       .fromTo(".gallery-main", { width: 0 }, { width: "100%", duration: 0.5 })
//       .fromTo(
//         ".gallery-main .radius",
//         { width: 0, height: 0 },
//         { width: "10px", height: "10px", duration: 0.05 }
//       );
//   }, []);

//   return (
//     <div className="relative overflow-hidden bg-[#171817]">
//       <main className="smooth-wrapper">
//         <div id="smooth-content">
//           {/* Hero Section */}
//           <section className="hero relative opacity-0 h-screen flex items-center justify-center">
//             <div className="hero-translate relative w-full h-full flex flex-col justify-center items-center">
//               <div className="hero-title-wrapp relative z-10 text-center">
//                 <div className="hero-title-rect absolute inset-0 bg-[#171817] rounded-bl-md"></div>
//                 <h1
//                   className="hero-title text-6xl md:text-9xl font-extrabold text-white up-text relative"
//                   split-chars
//                 >
//                   Online<span className="text-yellow-500">Ad</span>wise
//                 </h1>
//               </div>

//               <div className="hero-img relative w-full max-w-5xl h-[60vh] md:h-[80vh] mt-8 overflow-hidden rounded-md">
//                 <img
//                   src="https://zajno-storage0.s3.us-west-1.amazonaws.com/dev/codepen/vsimdim/hero/hero.jpg"
//                   alt="Vsimdim"
//                   className="w-full h-full object-cover object-center"
//                 />
//                 <div className="hero-date absolute bottom-2 right-2 font-semibold text-lg">
//                   2022
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Make Section */}
//           <section className="make relative flex flex-col justify-center items-center h-screen opacity-0 text-white">
//             <div className="make-subtitle text-yellow-500 font-medium uppercase mb-6">
//               we make
//             </div>

//             <div className="make-main text-center md:text-start grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
//               <div
//                 className="make-text text-4xl md:text-7xl font-bold up-text"
//                 split-lines
//               >
//                 <span className="text-yellow-500">Relaxation</span> <br /> and
//                 pampering
//               </div>
//               <div
//                 className="make-text text-4xl md:text-8xl font-bold up-text"
//                 split-lines
//               >
//                 for your mind <br />{" "}
//                 <span className="text-yellow-500">body</span> &{" "}
//                 <span className="text-yellow-500">nails</span>
//               </div>
//             </div>

//             {/* Gallery - Mobile stacked, Desktop side-by-side */}
//             <div className="make-gallery relative flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-10 gap-4 h-auto md:h-[80vh]">
//               <div className="gallery-wrapp relative w-full md:flex-1 h-80 md:h-full rounded-md overflow-hidden">
//                 <div className="gallery-main w-full h-full">
//                   <div className="gallery-item relative w-full h-full overflow-hidden rounded-md">
//                     <img
//                       src="https://zajno-storage0.s3.us-west-1.amazonaws.com/dev/codepen/vsimdim/gallery/gallery-1-new.jpg"
//                       alt="Gallery image 1"
//                       className="w-full h-full object-cover object-center"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="gallery-wrapp relative w-full md:flex-1 h-80 md:h-full rounded-md overflow-hidden mt-12 md:mt-0">
//                 <div className="gallery-main w-full h-full">
//                   <div className="gallery-item relative w-full h-full overflow-hidden rounded-md">
//                     <img
//                       src="https://zajno-storage0.s3.us-west-1.amazonaws.com/dev/codepen/vsimdim/gallery/gallery-2-new.jpg"
//                       alt="Gallery image 2"
//                       className="w-full h-full object-cover object-center"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }
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

    // Split Text for Make Section
    const makeLines = new SplitText(".make-text", {
      type: "lines",
      linesClass: "split-line",
    });

    // Page load animation
    gsap
      .timeline()
      .to(".hero", { opacity: 1, duration: 0 })
      .fromTo(
        ".hero-title .split-char",
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          transformOrigin: "top",
          stagger: 0.03,
          duration: 1,
        }
      )
      .fromTo(
        ".hero-img img",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "<0.3"
      )
      .fromTo(
        ".hero-date",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "<0.3"
      )
      .to(".make", { opacity: 1, duration: 0 }, "<");

    // Hero scroll animation
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
      .to(".hero-img img", { y: "-40%", duration: 0.8 }, "<")
      .to(".hero-title", { y: "-10%", duration: 0.8 }, "<")
      .fromTo(
        ".hero-title .split-char",
        { scaleY: 1, opacity: 1 },
        { scaleY: 0, opacity: 0, stagger: 0.03, duration: 0.5 },
        "<"
      )
      .to(".hero-title-rect", { height: 0, duration: 0.8 }, "<")
      .to(".hero-date", { opacity: 0, duration: 0.4 }, "<0.4")
      .to(
        ".hero-title-rect .radius-top",
        { scaleY: 0, duration: 0.095 },
        "<0.25"
      )
      .to(".hero-title-rect", { borderRadius: 0, duration: 0.15 }, "<");

    // Make Section scroll animation - Unique flip effect
    gsap.from(".make-subtitle, .make-text .split-line", {
      scrollTrigger: {
        trigger: ".make",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
      opacity: 0,
      scale: 0.8,
      rotationY: 90,
      y: 30,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
    });

    // Gallery animation (unchanged)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".make",
          start: "top 5%",
          end: "+=100%",
          pin: true,
          scrub: 4,
        },
      })
      .fromTo(".gallery-main", { width: 0 }, { width: "100%", duration: 0.5 })
      .fromTo(
        ".gallery-main .radius",
        { width: 0, height: 0 },
        { width: "10px", height: "10px", duration: 0.05 }
      );
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#171817]">
      <main className="smooth-wrapper">
        <div id="smooth-content">
          {/* Hero Section */}
          <section className="hero relative opacity-0 h-screen flex items-center justify-center">
            <div className="hero-translate relative w-full h-full flex flex-col justify-center items-center">
              <div className="hero-title-wrapp relative z-10 text-center">
                <div className="hero-title-rect absolute inset-0 bg-[#171817] rounded-bl-md"></div>
                <h1
                  className="hero-title text-6xl md:text-9xl font-extrabold text-white up-text relative"
                  split-chars
                >
                  Online<span className="text-yellow-500">Ad</span>wise
                </h1>
              </div>

              <div className="hero-img relative w-full max-w-5xl h-[60vh] md:h-[80vh] mt-8 overflow-hidden rounded-md">
                <img
                  src="https://zajno-storage0.s3.us-west-1.amazonaws.com/dev/codepen/vsimdim/hero/hero.jpg"
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

            <div className="make-main text-center md:text-start grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
              <div
                className="make-text text-4xl md:text-7xl font-bold up-text"
                split-lines
              >
                <span className="text-yellow-500">Relaxation</span> <br /> and
                pampering
              </div>
              <div
                className="make-text text-4xl md:text-8xl font-bold up-text"
                split-lines
              >
                for your mind <br />{" "}
                <span className="text-yellow-500">body</span> &{" "}
                <span className="text-yellow-500">nails</span>
              </div>
            </div>

            {/* Gallery - Mobile stacked, Desktop side-by-side */}
            <div className="make-gallery relative flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-10 gap-4 h-auto md:h-[80vh]">
              <div className="gallery-wrapp relative w-full md:flex-1 h-80 md:h-full rounded-md overflow-hidden">
                <div className="gallery-main w-full h-full">
                  <div className="gallery-item relative w-full h-full overflow-hidden rounded-md">
                    <img
                      src="https://zajno-storage0.s3.us-west-1.amazonaws.com/dev/codepen/vsimdim/gallery/gallery-1-new.jpg"
                      alt="Gallery image 1"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="gallery-wrapp relative w-full md:flex-1 h-80 md:h-full rounded-md overflow-hidden mt-12 md:mt-0">
                <div className="gallery-main w-full h-full">
                  <div className="gallery-item relative w-full h-full overflow-hidden rounded-md">
                    <img
                      src="https://zajno-storage0.s3.us-west-1.amazonaws.com/dev/codepen/vsimdim/gallery/gallery-2-new.jpg"
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
