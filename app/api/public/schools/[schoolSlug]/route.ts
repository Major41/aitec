// api/public/schools/[schoolSlug]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { School } from "@/lib/models";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ schoolSlug: string }> },
) {
  try {
    await connectDB();
    const { schoolSlug } = await params;
    const school = await School.findOne({ slug: schoolSlug });

    if (!school) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    return NextResponse.json(school);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch school" },
      { status: 500 },
    );
  }
}
