import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { School, Course } from "@/lib/models";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ schoolSlug: string }> },
) {
  try {
    await connectDB();
    const { schoolSlug } = await params; // Unwrap the Promise

    const school = await School.findOne({ slug: schoolSlug });

    if (!school) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    const courses = await Course.find({ schoolId: school._id }).sort({
      createdAt: -1,
    });

    return NextResponse.json({ school, courses });
  } catch (error) {
    console.error(error); // Add logging for debugging
    return NextResponse.json(
      { error: "Failed to fetch school courses" },
      { status: 500 },
    );
  }
}
