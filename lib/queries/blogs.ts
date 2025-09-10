import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Blog } from "@/lib/types/blogs"; // ✅ using your Blog type

// ---------------- API FUNCTIONS ----------------

// Fetch all blogs
// ✅ return Blog[] instead of { blogs: Blog[] }
const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await fetch("/api/blogs");
  if (!response.ok) throw new Error("Failed to fetch blogs");

  const data = await response.json();
  return data.blogs; // ✅ extract the array
};

// Fetch single blog by slug
const fetchBlogBySlug = async (slug: string): Promise<Blog> => {
  const response = await fetch(`/api/blogs/${slug}`);
  if (!response.ok) throw new Error("Failed to fetch blog");

  const data = await response.json();
  return data.blog; // ✅ extract the blog object
};

// Create a new blog
const createBlog = async (
  data: Omit<Blog, "id" | "createdAt">
): Promise<Blog> => {
  const response = await fetch("/api/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create blog");

  const created: Blog = await response.json();
  return created;
};

// Update a blog
const updateBlog = async ({
  id,
  data,
}: {
  id: string;
  data: Omit<Blog, "id" | "createdAt">;
}): Promise<Blog> => {
  const response = await fetch(`/api/blogs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update blog");

  const updated: Blog = await response.json();
  return updated;
};

// Delete a blog
const deleteBlog = async (id: string): Promise<void> => {
  const response = await fetch(`/api/blogs/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete blog");
};

// ---------------- REACT QUERY HOOKS ----------------

// Get all blogs
export function useBlogs() {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
}

// Get single blog
export function useBlog(slug: string) {
  return useQuery<Blog>({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlogBySlug(slug),
    enabled: !!slug,
  });
}

// Create
export function useCreateBlog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
}

// Update
export function useUpdateBlog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
}

// Delete
export function useDeleteBlog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
}
