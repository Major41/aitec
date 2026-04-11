"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

interface Course {
  _id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  images: string[];
  categories?: string[];
  duration?: string;
  level?: string;
  schoolId: {
    _id: string;
    name: string;
    slug: string;
  };
}

export default function CourseDetailPage() {
  const params = useParams() as { schoolSlug: string; courseSlug: string };
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { schoolSlug, courseSlug } = params;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(
          `/api/public/schools/${schoolSlug}/courses/${courseSlug}`,
        );
        if (res.ok) {
          const data = await res.json();
          setCourse(data);
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    if (schoolSlug && courseSlug) {
      fetchCourse();
    }
  }, [schoolSlug, courseSlug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Course not found</h1>
          <Button asChild>
            <Link href="/programs">Back to Programs</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentImage =
    course.images && course.images.length > 0
      ? course.images[currentImageIndex]
      : null;

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/programs"
              className="hover:text-foreground transition-colors"
            >
              Programs
            </Link>
            <span>/</span>
            <Link
              href={`/programs/${course.schoolId.slug}`}
              className="hover:text-foreground transition-colors"
            >
              {course.schoolId.name}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{course.title}</span>
          </div>
        </div>
      </div>

      {/* Course Header */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                {course.title}
              </h1>

              {/* Categories */}
              {course.categories && course.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {course.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/20 text-primary"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {course.level && (
                  <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">
                      Level: {course.level}
                    </span>
                  </div>
                )}
                {course.duration && (
                  <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">
                      Duration: {course.duration}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Images and Description */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              {course.images && course.images.length > 0 && (
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={currentImage!}
                      alt={course.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Thumbnail Gallery */}
                  {course.images.length > 1 && (
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                      {course.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? "border-primary"
                              : "border-border hover:border-muted-foreground"
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${course.title} ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Full Description */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    About This Course
                  </h2>
                  <div className="prose prose-sm max-w-none text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3 [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:list-inside [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:list-inside [&_li]:my-1 [&_strong]:font-bold [&_em]:italic [&_code]:bg-muted [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_pre]:bg-muted [&_pre]:p-3 [&_pre]:rounded-lg [&_pre]:overflow-x-auto">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: course.fullDescription,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="font-bold text-sm text-muted-foreground mb-2">
                    School
                  </h3>
                  <p className="text-lg font-semibold">
                    {course.schoolId.name}
                  </p>
                </div>

                {course.level && (
                  <div>
                    <h3 className="font-bold text-sm text-muted-foreground mb-2">
                      Level
                    </h3>
                    <p className="text-lg font-semibold">{course.level}</p>
                  </div>
                )}

                {course.duration && (
                  <div>
                    <h3 className="font-bold text-sm text-muted-foreground mb-2">
                      Duration
                    </h3>
                    <p className="text-lg font-semibold">{course.duration}</p>
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-sm text-muted-foreground mb-2">
                    Quick Summary
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-base py-6">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>

              {/* Related Courses Card */}
              <div className="bg-muted/50 border border-border rounded-lg p-6">
                <h3 className="font-bold mb-3">Explore More</h3>
                <Button asChild variant="outline" className="w-full" size="sm">
                  <Link href="/programs">View All Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
