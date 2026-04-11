import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import { Facility } from "@/lib/models";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await connectDB();
    const body = await request.json();
    const facility = await Facility.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    if (!facility)
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(facility);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await connectDB();
    await Facility.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
