import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { School, Course } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();

    // Fetch all schools
    const schools = await School.find().sort({ createdAt: -1 }).lean().exec();

    // Fetch all courses with their school IDs
    const allCourses = await Course.find().lean().exec();

    // Map courses to schools efficiently
    const schoolsWithCourses = schools.map((school: any) => ({
      ...school,
      courses: allCourses.filter((course: any) => course.schoolId.toString() === school._id.toString()),
    }));

    return NextResponse.json(schoolsWithCourses, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching schools with courses:', error);
    return NextResponse.json({ error: 'Failed to fetch schools' }, { status: 500 });
  }
}
