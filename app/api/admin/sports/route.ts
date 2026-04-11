import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import { Sport } from "@/lib/models";

export async function GET() {
  try {
    await connectDB();
    const sports = await Sport.find().sort({ date: -1 });
    return NextResponse.json(sports);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch sports" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const sport = await Sport.create(body);
    return NextResponse.json(sport, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
