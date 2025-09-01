// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { blogs } from "@/lib/data/blogs";

// gsap.registerPlugin(ScrollTrigger);

// function BlogCard() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const ctx = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top 0%",
//         end: "bottom bottom",
//         toggleClass: {
//           targets: sectionRef.current,
//           className: "bg-white text-black",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-12 transition-colors duration-500 bg-white text-black"
//     >
//       {/* Section Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold mb-2">Latest Blog Posts</h2>
//         <p className="max-w-2xl mx-auto text-gray-500">
//           Discover tips, guides, and insights to live healthier and happier.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
//         {blogs.slice(0, 3).map((blog) => (
//           <div
//             key={blog.slug}
//             className="group bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition hover:shadow-2xl hover:-translate-y-1 duration-300 text-black"
//           >
//             {/* Thumbnail */}
//             <div className="relative h-52 w-full overflow-hidden">
//               <Image
//                 src={blog.thumbnail}
//                 alt={blog.title}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 text-xs font-semibold text-gray-800 rounded-full">
//                 {blog.day} {blog.month}
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-6 flex flex-col flex-1">
//               <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-500 transition">
//                 {blog.title}
//               </h3>

//               {/* Author */}
//               <div className="flex items-center gap-3 mb-4">
//                 <Image
//                   src={blog.authorImg}
//                   alt={blog.author}
//                   width={36}
//                   height={36}
//                   className="rounded-full"
//                 />
//                 <span className="text-sm text-gray-600">{blog.author}</span>
//               </div>

//               {/* Excerpt */}
//               <p className="text-sm text-gray-600 flex-1 mb-6 line-clamp-3">
//                 {blog.excerpt}
//               </p>

//               {/* Read More */}
//               <Link
//                 href={`/blog/${blog.slug}`}
//                 className="mt-auto w-max px-6 py-2 text-sm font-medium bg-yellow-500 text-white rounded-full shadow hover:bg-yellow-600 transition"
//               >
//                 Read More →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default BlogCard;
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/data/blogs";

export default function BlogCard() {
  // Take only first 3 blogs
  const topBlogs = blogs.slice(0, 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Latest Blogs</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover tips, guides, and expert insights to help you live healthier
          and smarter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {topBlogs.map((blog) => (
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
    </section>
  );
}
