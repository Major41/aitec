import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Course {
  _id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
}

interface School {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  courses?: Course[];
}

async function getSchoolsWithCourses(): Promise<School[]> {
  try {
    let baseUrl: string;

    if (process.env.NEXT_PUBLIC_BASE_URL) {
      const envUrl = process.env.NEXT_PUBLIC_BASE_URL;
      // Check if protocol already exists
      if (envUrl.startsWith("http://") || envUrl.startsWith("https://")) {
        baseUrl = envUrl;
      } else {
        baseUrl = `https://${envUrl}`;
      }
    } else {
      baseUrl = "http://localhost:3000";
    }

    const response = await fetch(`${baseUrl}/api/public/schools-with-courses`, {
      next: { revalidate: 1800 },
    });
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Error fetching schools:", error);
    return [];
  }
}

export default async function ProgramsPage() {
  const schools = await getSchoolsWithCourses();

  return (
    <div>
      <section className="relative py-24 md:py-32 overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/kmtc.jpg"
                  alt="Gallery background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
      
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Our Programs
                </h1>
                <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                 Explore world-class technical education across our specialized schools
                </p>
              </div>
            </section>

      {/* Schools and Courses */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {schools.map((school, index) => (
              <div key={school._id} className="space-y-12">
                {/* School Header */}
                <div className="space-y-4 border-b border-border pb-8">
                  <h2 className="text-3xl md:text-4xl font-bold">{school.name}</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl">
                    {school.description}
                  </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {school.courses && school.courses.length > 0 ? (
                    school.courses.map((course) => (
                      <Link
                        key={course._id}
                        href={`/programs/${school.slug}/${course.slug}`}
                        className="group"
                      >
                        <div className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col bg-card">
                          {/* Course Image */}
                          {course.images && course.images.length > 0 && (
                            <div className="relative h-48 w-full overflow-hidden bg-muted">
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
                              Read More
                            </Button>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground">No courses available for this school yet.</p>
                    </div>
                  )}
                </div>

                {/* Divider */}
                {index < schools.length - 1 && <hr className="mt-12" />}
              </div>
            ))}
          </div>

          {schools.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No programs available at this time.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Enroll?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your application today and take the first step toward your future.
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
