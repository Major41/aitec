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

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const schoolId = searchParams.get("schoolId");

    const query = schoolId ? { schoolId } : {};
    const courses = await Course.find(query)
      .populate("schoolId")
      .sort({ createdAt: -1 });
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  const auth = await verifyAuth(request);
  if (!auth)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const body = await request.json();

    const slug = body.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const course = await Course.create({
      title: body.title,
      slug,
      schoolId: body.schoolId,
      description: body.description,
      fullDescription: body.fullDescription,
      images: body.images || [],
      categories: body.categories || [],
      duration: body.duration,
      level: body.level,
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
