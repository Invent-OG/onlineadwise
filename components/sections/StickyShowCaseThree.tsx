"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CenterSliderShowcase() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  // Start dragging
  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  // Stop dragging
  const stopDrag = () => setDragging(false);

  // Dragging logic
  const onDrag = (e: MouseEvent | TouchEvent) => {
    if (
      !dragging ||
      !sliderRef.current ||
      !leftImageRef.current ||
      !containerRef.current
    )
      return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

    let x = clientX - containerRect.left;
    x = Math.max(0, Math.min(containerRect.width, x));

    // Update left image width and handle position
    leftImageRef.current.style.width = `${x}px`;
    sliderRef.current.style.left = `${x - sliderRef.current.offsetWidth / 2}px`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("touchmove", onDrag);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("touchmove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [dragging]);

  // Initialize handle in center
  useEffect(() => {
    if (containerRef.current && leftImageRef.current && sliderRef.current) {
      const centerX = containerRef.current.offsetWidth / 2;
      leftImageRef.current.style.width = `${centerX}px`;
      sliderRef.current.style.left = `${centerX - sliderRef.current.offsetWidth / 2}px`;
    }
  }, []);

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-gray-50">
      <div
        ref={containerRef}
        className="relative w-[260px] h-[520px] md:w-[300px] md:h-[600px] lg:w-[340px] lg:h-[680px] overflow-hidden rounded-[2rem]"
      >
        {/* Left Image */}
        <div
          ref={leftImageRef}
          className="absolute top-0 left-0 h-full overflow-hidden z-10 rounded-[2rem] flex justify-center items-center"
        >
          <div className="w-[96%] h-[96%] relative">
            <Image
              src="https://picsum.photos/400/800?random=1"
              alt="Left Image"
              fill
              className="object-cover rounded-[2rem]"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden z-0 rounded-[2rem] flex justify-center items-center">
          <div className="w-[96%] h-[96%] relative">
            <Image
              src="https://picsum.photos/400/800?random=2"
              alt="Right Image"
              fill
              className="object-cover rounded-[2rem]"
            />
          </div>
        </div>

        {/* Draggable Handle */}
        <div
          ref={sliderRef}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          className="absolute top-1/2  -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex justify-center items-center cursor-grab z-20"
        >
          <ChevronLeft size={20} className="text-gray-800" />
          <ChevronRight size={20} className="text-gray-800" />
        </div>

        {/* Phone Frame Overlay */}
        <Image
          src="/assets/mobileimages/H2xOBKfRU2M06U4j9LF5WN8z6pA.avif"
          alt="Phone Frame"
          fill
          className="pointer-events-none select-none z-30"
        />
      </div>
    </section>
  );
}
