import { connectDB } from '@/lib/db';
import { Admin } from '@/lib/models';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Check if any admin exists
    const adminExists = await Admin.findOne();

    return NextResponse.json(
      { adminExists: !!adminExists },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error checking admin:', error);
    return NextResponse.json(
      { error: 'Failed to check admin status' },
      { status: 500 }
    );
  }
}
