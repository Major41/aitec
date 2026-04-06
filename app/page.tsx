import { EnhancedHero } from "@/components/enhanced-hero";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { SchoolCard } from "@/components/school-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CoursesSection from "@/components/coursesSections";

interface School {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

async function getSchools(): Promise<School[]> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (typeof window !== "undefined" ? "" : "http://localhost:3000");

    const response = await fetch(`${baseUrl}/api/public/schools`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Error fetching schools:", error);
    return [];
  }
}

export default async function Home() {
  const schools = await getSchools();
  const featuredSchools = schools.slice(0, 3);

  return (
    <>
      <EnhancedHero />

      {/* Featured Programs Section */}
      <section className="w-full py-10 md:py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Schools of Study
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our specialized academic schools offering world-class
              programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredSchools.length > 0 ? (
              featuredSchools.map((school) => (
                <SchoolCard
                  key={school._id}
                  name={school.name}
                  slug={school.slug}
                  description={school.description}
                  image={school.image}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No schools available at this time.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <CoursesSection />

      <section className="py-8 md:py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              {/* Logo */}
              <img
                src="/logo.jpeg"
                alt="AITEC Logo"
                className="w-20 h-20 object-contain"
              />

              {/* School Name */}
              <h2 className="text-4xl font-bold">
                African International Technical College (AITEC)
              </h2>

              {/* CTA Button */}
              <a
                href="/programs"
                className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Main Courses
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                African International Technical College (AITEC) is a premier
                educational institution dedicated to providing cutting-edge
                education in technology and engineering fields. With a
                commitment to excellence, AITEC aims to nurture a new generation
                of professionals equipped with the skills and knowledge
                necessary to thrive in today's rapidly evolving technological
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="w-full py-24 md:py-32 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Transform Your Future?
            </h2>
            <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
              Join thousands of successful graduates who started their journey
              at AITEC. Apply now and take the first step toward your dream
              career.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/enrollment">Start Your Application Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
