import z from "zod";

export const Lead = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
  interest: z.string().trim().min(2, "Interest must be provided"),
  business: z.string().trim().min(2, "Business is required"),
  location: z.string().trim().min(2, "Location is required"),
  booking: z.string().optional().default(""), // match DB column
});

export type LeadType = z.infer<typeof Lead>;

