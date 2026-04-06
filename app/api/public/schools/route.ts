import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { School } from "@/lib/models";

export async function GET() {
  try {
    await connectDB();
    const schools = await School.find().sort({ createdAt: -1 }).lean().exec();

    return NextResponse.json(schools, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching schools:", error);
    return NextResponse.json(
      { error: "Failed to fetch schools" },
      { status: 500 },
    );
  }
}
