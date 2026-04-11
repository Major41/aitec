import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import { Facility } from "@/lib/models";

export async function GET() {
  try {
    await connectDB();
    const facilities = await Facility.find().sort({ createdAt: -1 });
    return NextResponse.json(facilities);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch facilities" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const facility = await Facility.create(body);
    return NextResponse.json(facility, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
