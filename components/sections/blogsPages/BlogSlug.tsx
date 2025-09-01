// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// type Blog = {
//   slug: string;
//   title: string;
//   author: string;
//   authorImg: string;
//   thumbnail: string;
//   day: string;
//   month: string;
//   excerpt: string;
//   content: string;
// };

// type BlogSlugProps = {
//   blog: Blog;
// };

// export default function BlogSlug({ blog }: BlogSlugProps) {
//   const cardRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!cardRef.current) return;
//     gsap.fromTo(
//       cardRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-[#353B3F] font-['Roboto'] flex items-center justify-center overflow-hidden ">
//       {/* Background text */}
//       <span className="absolute top-0 left-0 text-[15rem] font-extrabold uppercase text-[#3C4447] select-none">
//         blog
//       </span>
//       <span className="absolute bottom-0 right-0 text-[15rem] font-extrabold uppercase text-[#3C4447] select-none">
//         blog
//       </span>

//       {/* Blog Card */}
//       <div className="bg-white">
//         <div
//           ref={cardRef}
//           className="relative w-full  max-w-[900px]  shadow-2xl mx-auto flex flex-col md:flex-row h-auto md:h-[450px]"
//         >
//           {/* Thumbnail */}
//           <div className="w-full md:w-[530px] h-[250px] md:h-[320px] shadow-xl overflow-hidden md:absolute md:-top-8 md:left-8">
//             <img
//               src={blog.thumbnail}
//               alt={blog.title}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right side / content */}
//           <div className="mt-4 md:mt-0 md:ml-[590px] p-8 pt-4 flex flex-col h-auto md:h-[410px]">
//             <h1 className="text-lg font-semibold text-[#4B4B4B]">
//               {blog.title}
//             </h1>

//             {/* Author */}
//             <div className="flex items-center bg-yellow-500 h-[30px] w-[140px] rounded-full mt-3">
//               <img
//                 src={blog.authorImg}
//                 alt={blog.author}
//                 className="h-5 w-5 rounded-full ml-2"
//               />
//               <h2 className="text-xs text-white font-medium ml-auto mr-2">
//                 {blog.author}
//               </h2>
//             </div>

//             <div className="border-t border-gray-300 my-3"></div>

//             {/* Scrollable Content */}
//             <div className="flex-1 overflow-y-auto pr-2">
//               <p className="text-sm text-[#4B4B4B] leading-relaxed text-justify">
//                 {blog.content}
//               </p>
//             </div>
//           </div>

//           {/* Date */}
//           <h5 className="absolute left-8 bottom-[-120px] text-[6rem] text-gray-400">
//             {blog.day}
//           </h5>
//           <h6 className="absolute left-8 bottom-[-55px] text-2xl text-gray-400">
//             {blog.month}
//           </h6>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

type Blog = {
  slug: string;
  title: string;
  author: string;
  authorImg: string;
  thumbnail: string;
  day: string;
  month: string;
  excerpt: string;
  content: string;
};

type BlogSlugProps = {
  blog: Blog;
};

export default function BlogSlug({ blog }: BlogSlugProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-[#353B3F] font-['Roboto'] flex flex-col items-center justify-center overflow-hidden py-10 px-4 md:px-0">
      {/* Background text */}
      <span className="absolute top-0 left-0 text-[15rem] font-extrabold uppercase text-[#3C4447] select-none z-0 pointer-events-none">
        BLOG
      </span>
      <span className="absolute bottom-0 right-0 text-[15rem] font-extrabold uppercase text-[#3C4447] select-none z-0 pointer-events-none">
        BLOG
      </span>

      {/* Blog Card */}
      <div
        ref={cardRef}
        className="relative z-10 bg-white shadow-2xl w-full max-w-[900px] mx-auto flex flex-col md:flex-row h-auto md:h-[450px]"
      >
        {/* Thumbnail */}
        <div className="w-full md:w-[530px] h-[250px] md:h-[320px] shadow-xl overflow-hidden md:absolute md:-top-8 md:left-8 z-10">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side / content */}
        <div className="mt-4 md:mt-0 md:ml-[590px] p-8 pt-4 flex flex-col h-auto md:h-[410px] z-10">
          <h1 className="text-lg font-semibold text-[#4B4B4B]">{blog.title}</h1>

          {/* Author */}
          <div className="flex items-center bg-yellow-500 h-[30px] w-[140px] rounded-full mt-3">
            <img
              src={blog.authorImg}
              alt={blog.author}
              className="h-5 w-5 rounded-full ml-2"
            />
            <h2 className="text-xs text-white font-medium ml-auto mr-2">
              {blog.author}
            </h2>
          </div>

          <div className="border-t border-gray-300 my-3"></div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pr-2">
            <p className="text-sm text-[#4B4B4B] leading-relaxed text-justify whitespace-pre-line">
              {blog.content}
            </p>
          </div>
        </div>

        {/* Date */}
        <h5 className="absolute left-8 bottom-[-120px] text-[6rem] text-gray-400 z-10">
          {blog.day}
        </h5>
        <h6 className="absolute left-8 bottom-[-55px] text-2xl text-gray-400 z-10">
          {blog.month}
        </h6>
      </div>

      {/* Back to Blogs Button */}
      <div className="mt-8">
        <Link
          href="/blogs"
          className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-full shadow hover:bg-yellow-600 transition"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}
