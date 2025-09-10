// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { Blog } from "@/lib/types/blogs";
// import BlogSlug from "@/components/sections/blogsPages/BlogSlug";

// async function fetchBlog(slug: string): Promise<Blog | null> {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/blogs/${slug}`,
//     {
//       cache: "no-store", // or next: { revalidate: 60 } if you want ISR
//     }
//   );
//   if (!res.ok) return null;
//   const data = await res.json();
//   return data.blog;
// }

// // Generate dynamic metadata
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const blog = await fetchBlog(params.slug);
//   if (!blog) {
//     return { title: "Blog Not Found", description: "This blog does not exist" };
//   }

//   return {
//     title: blog.title,
//     description: blog.excerpt,
//     openGraph: {
//       title: blog.title,
//       description: blog.excerpt,
//       images: [blog.blogimage],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: blog.title,
//       description: blog.excerpt,
//       images: [blog.blogimage],
//     },
//   };
// }

// // Server Component
// export default async function BlogPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const blog = await fetchBlog(params.slug);

//   if (!blog) notFound();

//   return (
   
//     <BlogSlug blog={blog} />
//   );
// }
import Image from "next/image";
import { notFound } from "next/navigation";
import { Blog } from "@/lib/types/blogs";
import BlogSlug from "@/components/sections/blogsPages/BlogSlug";

async function fetchBlog(slug: string): Promise<Blog | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/blogs/${slug}`,
    { cache: "no-store" } // or revalidate
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.blog;
}

// ---------------- Generate Metadata ----------------
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> } // ✅ params is now Promise
) {
  const { slug } = await props.params; // ✅ must await
  const blog = await fetchBlog(slug);

  if (!blog) {
    return { title: "Blog Not Found", description: "This blog does not exist" };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.blogimage],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.blogimage],
    },
  };
}

// ---------------- Blog Page Component ----------------
export default async function BlogPage(
  props: { params: Promise<{ slug: string }> } // ✅ params is Promise
) {
  const { slug } = await props.params; // ✅ await params
  const blog = await fetchBlog(slug);

  if (!blog) notFound();

  return <BlogSlug blog={blog} />;
}
