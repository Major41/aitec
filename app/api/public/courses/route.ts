import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Course } from "@/lib/models";

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const schoolId = request.nextUrl.searchParams.get("schoolId");

    if (!schoolId) {
      return NextResponse.json([], { status: 400 });
    }

    const courses = await Course.find({ schoolId }).lean().exec();
    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json([], { status: 500 });
  }
}
