import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { School } from "@/lib/models";

export async function GET() {
  try {
    await connectDB();
    const schools = await School.find().sort({ createdAt: -1 });
    return NextResponse.json(schools);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch schools" },
      { status: 500 },
    );
  }
}
