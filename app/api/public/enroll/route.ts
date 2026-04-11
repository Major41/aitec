import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Application } from "@/lib/models";

export async function POST(request: Request) {
  try {
    await connectDB();

    const data = await request.json();

    const application = new Application({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      school: data.school,
      program: data.course,
      message: `Education: ${data.highestEducation}, Previous University: ${data.university || "N/A"}`,
      status: "pending",
    });

    await application.save();

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        applicationId: application._id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
