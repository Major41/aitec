import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { School } from "@/lib/models";
import { verify } from "jsonwebtoken";

async function verifyAuth(request: NextRequest) {
  const token = request.cookies.get("adminToken")?.value;
  if (!token) return null;

  try {
    return verify(token, process.env.JWT_SECRET || "");
  } catch {
    return null;
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const auth = await verifyAuth(request);
  if (!auth)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const body = await request.json();
    const slug = body.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const school = await School.findByIdAndUpdate(
      params.id,
      {
        name: body.name,
        slug,
        description: body.description,
        image: body.image,
      },
      { new: true },
    );

    if (!school)
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    return NextResponse.json(school);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const auth = await verifyAuth(request);
  if (!auth)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const school = await School.findByIdAndDelete(params.id);

    if (!school)
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    return NextResponse.json({ message: "School deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
