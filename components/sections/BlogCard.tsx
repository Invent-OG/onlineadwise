"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/lib/types/blogs";

export default function BlogCard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        // ✅ Take only first 3 blogs
        setBlogs(data.blogs.slice(0, 3));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Latest Blogs</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover tips, guides, and expert insights to help you live healthier
          and smarter.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading blogs...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="group bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Thumbnail */}
              {/* Thumbnail */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={blog.blogimage}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {blog.createdAt && (
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 rounded-full shadow">
                    {new Date(blog.createdAt).getDate()}{" "}
                    {new Date(blog.createdAt).toLocaleString("default", {
                      month: "short",
                    })}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-yellow-500 transition">
                  {blog.title}
                </h3>
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
      )}
    </section>
  );
}
