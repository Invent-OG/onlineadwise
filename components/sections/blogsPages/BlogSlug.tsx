"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Blog } from "@/lib/types/blogs";
import parse from "html-react-parser"; // npm install html-react-parser

gsap.registerPlugin(ScrollTrigger);

type BlogSlugProps = {
  blog: Blog;
};

export default function BlogSlug({ blog }: BlogSlugProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const badgesRef = useRef<HTMLDivElement | null>(null);
  const paragraphsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (badgesRef.current) {
      gsap.from(badgesRef.current.children, {
        opacity: 0,
        y: -20,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out",
      });
    }

    if (paragraphsRef.current) {
      gsap.utils.toArray(paragraphsRef.current.children).forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
        });
      });
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Back Button */}
      <Link
        href="/blogs"
        className="fixed top-6 left-6 bg-yellow-500 text-white px-4 py-2 rounded-full shadow hover:bg-yellow-600 transition z-50"
      >
        ← Back
      </Link>

      {/* Hero Section */}
      {blog.blogimage && (
        <div
          ref={heroRef}
          className="relative h-96 md:h-[500px] w-full overflow-hidden rounded-b-3xl"
        >
          <Image
            src={blog.blogimage}
            alt={blog.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg break-words">
              {blog.title}
            </h1>
          </div>
        </div>
      )}

      {/* Content Card */}
      <div
        ref={contentRef}
        className={`max-w-5xl mx-auto bg-white rounded-3xl shadow-xl ${
          blog.blogimage ? "-mt-24 md:-mt-32" : "mt-12"
        } p-8 md:p-12 flex flex-col gap-6`}
      >
        {/* Author */}
        <div className="flex items-center gap-3 mb-4">
          {blog.authorImg && (
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image
                src={blog.authorImg}
                alt={blog.author}
                fill
                className="object-cover"
              />
            </div>
          )}
          <span className="text-gray-700 font-medium">{blog.author}</span>
        </div>

        {/* Badges */}
        <div ref={badgesRef} className="flex flex-wrap gap-3 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Category
          </span>
        </div>

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-gray-600 text-lg italic border-l-4 border-yellow-500 pl-4 break-words">
            {blog.excerpt}
          </p>
        )}

        {/* Main Content */}
        <div
          ref={paragraphsRef}
          className="text-gray-800 leading-relaxed space-y-6 break-words"
        >
          {/* Use html-react-parser to safely render HTML */}
          {parse(blog.content)}
        </div>
      </div>
    </div>
  );
}
