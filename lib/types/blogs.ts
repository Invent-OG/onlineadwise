import { z } from "zod";

export const blogSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  blogimage: z.string().url(), // ✅ matches DB
  author: z.string().min(1),
  authorImg: z.string().url(),
  createdAt: z.date(),
});

export const blogsSchema = z.array(blogSchema);

export type Blog = z.infer<typeof blogSchema>;
export type Blogs = z.infer<typeof blogsSchema>;
