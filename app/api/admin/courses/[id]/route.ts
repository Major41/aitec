import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Course } from "@/lib/models";
import { verify } from "jsonwebtoken";

async function verifyAuth(request: NextRequest) {
  const token = request.cookies.get("adminToken")?.value;
  if (!token) return null;

  try {
    return verify(token, process.env.JWT_SECRET || "");
  } catch {
    return null;
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }, // ← Mark as Promise
) {
  const auth = await verifyAuth(request);
  if (!auth)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const body = await request.json();
    const { id } = await params; // ← Await params first

    const slug = body.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const course = await Course.findByIdAndUpdate(
      id, // ← Use the unwrapped id
      {
        title: body.title,
        slug,
        schoolId: body.schoolId,
        description: body.description,
        fullDescription: body.fullDescription,
        images: body.images,
        categories: body.categories || [],
        duration: body.duration,
        level: body.level,
      },
      { new: true, returnDocument: "after" }, // ← Fix deprecation warning
    );

    if (!course)
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    return NextResponse.json(course);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }, // ← Mark as Promise
) {
  const auth = await verifyAuth(request);
  if (!auth)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const { id } = await params; // ← Await params first
    const course = await Course.findByIdAndDelete(id); // ← Use unwrapped id

    if (!course)
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    return NextResponse.json({ message: "Course deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
