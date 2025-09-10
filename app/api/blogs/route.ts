// File: app/api/blogs/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { nanoid } from "nanoid";
import { blogSchema } from "@/lib/types/blogs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming blog:", body); // 👀 debug
    const data = blogSchema.parse(body);

    const slug =
      data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + nanoid(6);

    const [blog] = await db
      .insert(blogs)
      .values({
        slug,
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        blogimage: data.blogimage,
        author: data.author,
        authorImg: data.authorImg,
      })
      .returning();

    return NextResponse.json(blog); // ✅ just return the blog
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation failed:", error.errors);
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    console.error("POST /blogs error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allBlogs = await db.select().from(blogs).orderBy(blogs.createdAt);
    return NextResponse.json({ blogs: allBlogs }); // wrap in object
  } catch (error) {
    console.error("GET /blogs error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
