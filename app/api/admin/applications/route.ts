import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Application, School, Course } from "@/lib/models";

export async function GET() {
  try {
    await connectDB();
    const applications = await Application.find().sort({ createdAt: -1 });

    // Populate school and course names
    const populatedApplications = await Promise.all(
      applications.map(async (app: any) => {
        const appObj = app.toObject();

        // Fetch school name
        if (appObj.school) {
          const school = await School.findById(appObj.school);
          appObj.schoolName = school?.name || appObj.school;
        }

        // Fetch course name
        if (appObj.program) {
          const course = await Course.findById(appObj.program);
          appObj.programName = course?.title || appObj.program;
        }

        return appObj;
      }),
    );

    return NextResponse.json(populatedApplications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 },
    );
  }
}
