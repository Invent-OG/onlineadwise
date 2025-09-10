"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateBlog, useUpdateBlog } from "@/lib/queries/blogs";
import { toast } from "sonner";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RichTextEditor from "./RichTextEditor";
import BlogPreview from "./BlogPreview";
import ImageUpload from "./ImageUpload";
import { Blog } from "@/lib/types/blogs";

// ------------------ Schema ------------------
const blogSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  blogimage: z.string().min(1, "Featured image is required"), // ✅ changed to blogimage
  author: z.string().min(2, "Author name must be at least 2 characters"),
  authorImg: z.string().min(1, "Author image is required"),
});

type BlogFormData = z.infer<typeof blogSchema>;

interface BlogFormProps {
  onClose: () => void;
  initialData?: BlogFormData & { id: string };
}

// ------------------ Component ------------------
export default function BlogForm({ onClose, initialData }: BlogFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("edit");

  const createBlogMutation = useCreateBlog();
  const updateBlogMutation = useUpdateBlog();

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: initialData || {
      title: "",
      excerpt: "",
      content: "",
      blogimage: "", // ✅ changed
      author: "",
      authorImg: "",
    },
  });

  const onSubmit = async (data: BlogFormData) => {
    setIsSubmitting(true);
    try {
      const payload: Omit<Blog, "id" | "createdAt"> = {
        slug: data.title.toLowerCase().replace(/\s+/g, "-"),
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        blogimage: data.blogimage, // ✅ matches DB + API
        author: data.author,
        authorImg: data.authorImg,
      };

      if (initialData?.id) {
        await updateBlogMutation.mutateAsync({
          id: initialData.id,
          data: payload,
        });
        toast.success("Blog updated successfully");
      } else {
        await createBlogMutation.mutateAsync(payload);
        toast.success("Blog created successfully");
      }

      onClose();
    } catch (error) {
      toast.error(
        initialData ? "Failed to update blog" : "Failed to create blog"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {initialData ? "Edit Blog Post" : "Create New Blog Post"}
        </h2>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        {/* ------------ Edit Form ------------ */}
        <TabsContent value="edit">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter blog title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Excerpt */}
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Excerpt</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter blog excerpt" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Content */}
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <RichTextEditor
                        content={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Blog Image */}
              <FormField
                control={form.control}
                name="blogimage" // ✅ changed
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured Image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value}
                        onChange={field.onChange}
                        bucket="blogs"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Author */}
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter author name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Author Image */}
              <FormField
                control={form.control}
                name="authorImg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author Image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value}
                        onChange={field.onChange}
                        bucket="blogs"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <div className="flex justify-end gap-4">
                <Button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    createBlogMutation.isPending ||
                    updateBlogMutation.isPending
                  }
                >
                  {isSubmitting
                    ? "Saving..."
                    : initialData
                      ? "Update Blog"
                      : "Create Blog"}
                </Button>
              </div>
            </form>
          </Form>
        </TabsContent>

        {/* ------------ Preview ------------ */}
        <TabsContent value="preview">
          <BlogPreview
            title={form.watch("title")}
            content={form.watch("content")}
            imageUrl={form.watch("blogimage")} // ✅ use blogimage
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
