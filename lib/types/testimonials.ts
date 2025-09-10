import { z } from "zod";

export const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  youtubeUrl: z
    .string()
    .url("Please enter a valid YouTube URL")
    .optional()
    .or(z.literal("")),
  imageUrl: z
    .string()
    .url("Please enter a valid image URL")
    .optional()
    .or(z.literal("")),
});
