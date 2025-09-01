import { blogs } from "@/lib/data/blogs";
import BlogSlug from "@/components/sections/blogsPages/BlogSlug";

type PageProps = {
  params: {
    slug: string;
  };
};

// ✅ Tell Next.js which slugs to pre-render
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function Page({ params }: PageProps) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <BlogSlug blog={blog} />;
}
