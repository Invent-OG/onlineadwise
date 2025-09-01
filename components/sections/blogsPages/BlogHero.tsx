"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/data/blogs";

const categories = [
  "All",
  "Nutrition",
  "Wellness",
  "Fitness",
  "Lifestyle",
  "Sleep",
];

export default function BlogHero() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) =>
          b.content.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Explore Our Blogs
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tips, guides, and expert insights to live healthier, happier, and
          smarter.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-3 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.slug}
            className="group bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Thumbnail */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 rounded-full shadow">
                {blog.day} {blog.month}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-yellow-500 transition">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={blog.authorImg}
                  alt={blog.author}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <span className="text-sm text-gray-700">{blog.author}</span>
              </div>

              <Link
                href={`/blogs/${blog.slug}`}
                className="mt-auto w-max px-6 py-2 text-sm font-medium bg-yellow-500 text-white rounded-full shadow hover:bg-yellow-600 transition"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
