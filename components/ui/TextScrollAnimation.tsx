"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextScrollAnimationProps = {
  text: string;
  className?: string;
};

export default function TextScrollAnimation({
  text,
  className = "",
}: TextScrollAnimationProps) {
  useEffect(() => {
    const words = gsap.utils.toArray<HTMLSpanElement>(".animated-word");

    words.forEach((word, i) => {
      gsap.fromTo(
        word,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: word,
            start: "top 90%", // when word enters viewport
            toggleActions: "play none none reverse",
          },
          delay: i * 0.05,
        }
      );
    });
  }, []);

  return (
    <div className={`overflow-hidden ${className}`}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="animated-word inline-block mr-2 text-4xl font-bold"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
