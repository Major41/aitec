import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Course {
  _id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
  categories?: string[];
}

interface School {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

async function getSchoolAndCourses(schoolSlug: string) {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const [schoolRes, coursesRes] = await Promise.all([
      fetch(`${baseUrl}/api/public/schools/${schoolSlug}`),

      fetch(`${baseUrl}/api/public/schools/${schoolSlug}/courses`),
    ]);

    const schoolData = schoolRes.ok ? await schoolRes.json() : null;
    const coursesData = coursesRes.ok
      ? await coursesRes.json()
      : { courses: [] };

    return {
      school: schoolData,
      courses: coursesData.courses || [],
    };
  } catch (error) {
    console.error("Error fetching school data:", error);
    return { school: null, courses: [] };
  }
}

export default async function SchoolCoursesPage({
  params,
}: {
  params: Promise<{ schoolSlug: string }>;
}) {
  const { schoolSlug } = await params;
  const { school, courses } = await getSchoolAndCourses(schoolSlug);

  if (!school) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">School not found</h1>
          <Button asChild>
            <Link href="/programs">Back to Programs</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/programs" className="hover:text-foreground transition">
              Programs
            </Link>
            <span>/</span>
            <span>{school.name}</span>
          </div>
        </div>
      </div>

      {/* School Header */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* School Image */}
            {school.image && (
              <div className="relative h-72 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={school.image}
                  alt={school.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* School Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {school.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {school.description}
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <a href="#courses">Explore Courses</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 md:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Courses Offered
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore all the programs available in {school.name}
              </p>
            </div>

            {/* Courses Grid */}
            {courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Link
                    key={course._id}
                    href={`/programs/${schoolSlug}/${course.slug}`}
                    className="group"
                  >
                    <div className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col bg-card">
                      {/* Course Categories */}
                      {course.categories && course.categories.length > 0 && (
                        <div className="px-6 pt-4 flex flex-wrap gap-2">
                          {course.categories.map((category) => (
                            <span
                              key={category}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Course Image */}
                      {course.images && course.images.length > 0 && (
                        <div className="relative h-48 w-full overflow-hidden bg-muted mt-3">
                          <Image
                            src={course.images[0]}
                            alt={course.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {/* Course Info */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                          {course.description}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          View Course
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">
                  No courses available for this school yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Enroll?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your application today and take the first step toward your
              future.
            </p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/enrollment">Begin Your Application</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
