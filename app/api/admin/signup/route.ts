import { connectDB } from "@/lib/db";
import { Admin } from "@/lib/models";
import { hashPassword, generateToken, setAuthCookie } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { email, password, fullName } = await request.json();

    // Check if email is already registered
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return NextResponse.json(
        { error: "Admin already exists" },
        { status: 400 },
      );
    }

    // Check if any admin exists (only allow first signup)
    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      return NextResponse.json(
        { error: "Admin registration is closed" },
        { status: 403 },
      );
    }

    // Validate inputs
    if (!email || !password || !fullName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 },
      );
    }

    // Hash password and create admin
    const hashedPassword = await hashPassword(password);
    const admin = await Admin.create({
      email,
      password: hashedPassword,
      fullName,
    });

    // Generate token
    const token = generateToken(admin._id.toString());
    await setAuthCookie(token);

    return NextResponse.json(
      { message: "Admin registered successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Failed to register admin" },
      { status: 500 },
    );
  }
}
