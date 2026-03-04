import { HeroCarousel } from '@/components/hero-carousel';
import { PartnersCarousel } from '@/components/partners-carousel';
import { FeaturesSection } from '@/components/features-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { AITEC_DATA } from '@/lib/constants';
import { ProgramCard } from '@/components/program-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const featuredPrograms = AITEC_DATA.programs.slice(0, 3);

  return (
    <>
      <HeroCarousel />
      <PartnersCarousel />
      <FeaturesSection />

      {/* Featured Programs Section */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular and innovative degree programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="w-full py-24 md:py-32 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Transform Your Future?
            </h2>
            <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
              Join thousands of successful graduates who started their journey at AITEC. Apply now and take the first step toward your dream career.
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
