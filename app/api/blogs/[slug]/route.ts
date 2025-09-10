import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { blogSchema } from "@/lib/types/blogs";

// ---------------- GET by slug ----------------
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> } // ✅ params are a Promise in Next.js 15
) {
  const { slug } = await context.params; // ✅ must await

  try {
    const blog = await db.select().from(blogs).where(eq(blogs.slug, slug));

    if (!blog || blog.length === 0) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blog: blog[0] });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}

// ---------------- UPDATE by slug ----------------
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> } // ✅ params must be Promise
) {
  const { slug } = await context.params;

  try {
    const body = await request.json();
    const data = blogSchema.parse(body);

    const [existing] = await db
      .select()
      .from(blogs)
      .where(eq(blogs.slug, slug));
    if (!existing) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    const [updatedBlog] = await db
      .update(blogs)
      .set(data)
      .where(eq(blogs.slug, slug))
      .returning();

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ---------------- DELETE by slug ----------------
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> } // ✅ params must be Promise
) {
  const { slug } = await context.params;

  try {
    const [blog] = await db.select().from(blogs).where(eq(blogs.slug, slug));
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    await db.delete(blogs).where(eq(blogs.slug, slug));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
