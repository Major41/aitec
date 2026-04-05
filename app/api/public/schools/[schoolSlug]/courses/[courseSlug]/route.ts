import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { School, Course } from "@/lib/models";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ schoolSlug: string; courseSlug: string }> },
) {
  try {
    await connectDB();

    const { schoolSlug, courseSlug } = await params;

    const school = await School.findOne({ slug: schoolSlug });

    if (!school) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    const course = await Course.findOne({
      schoolId: school._id,
      slug: courseSlug,
    }).populate("schoolId");

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch course" },
      { status: 500 },
    );
  }
}
