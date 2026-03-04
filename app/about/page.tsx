import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CampusGallery } from '@/components/campus-gallery';

export const metadata = {
  title: 'About AITEC',
  description: 'Learn about AITEC\'s history, mission, and commitment to excellence in engineering and technology education.',
};

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About AITEC</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Pioneering excellence in engineering and technology education since 1995
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower students with cutting-edge knowledge, practical skills, and ethical values that enable them to become innovative leaders and shape the future of technology and engineering. We are committed to providing world-class education that bridges the gap between academia and industry.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a globally recognized institution of excellence in engineering and technology education, fostering innovation, sustainability, and social responsibility. We envision AITEC as a catalyst for positive change in society through the talented individuals we nurture and the groundbreaking research we support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <CampusGallery />

      {/* History Timeline */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>

          <div className="space-y-8">
            {[
              {
                year: '1995',
                title: 'Foundation',
                description: 'AITEC was established with a vision to provide world-class engineering education.',
              },
              {
                year: '2000',
                title: 'First Campus Expansion',
                description: 'Opened our second campus with advanced laboratories and research facilities.',
              },
              {
                year: '2010',
                title: 'International Recognition',
                description: 'Achieved accreditation from international engineering education bodies.',
              },
              {
                year: '2015',
                title: 'Industry Partnerships',
                description: 'Established partnerships with leading global tech companies for internships and research.',
              },
              {
                year: '2020',
                title: 'Digital Transformation',
                description: 'Launched innovative online and hybrid learning programs to reach students worldwide.',
              },
              {
                year: '2024',
                title: 'Future Vision',
                description: 'Expanding to include AI and emerging technologies in all programs.',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  {index !== 5 && (
                    <div className="w-1 h-20 bg-primary/30 mt-4"></div>
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'Pursuing the highest standards in education and research.',
              },
              {
                title: 'Innovation',
                description: 'Fostering creativity and forward-thinking solutions.',
              },
              {
                title: 'Integrity',
                description: 'Operating with honesty, transparency, and ethical principles.',
              },
              {
                title: 'Inclusivity',
                description: 'Creating opportunities for students from diverse backgrounds.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-6 border border-border text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2500+</div>
              <p className="text-primary-foreground/80">Current Students</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15000+</div>
              <p className="text-primary-foreground/80">Alumni Worldwide</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-primary-foreground/80">Job Placement</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <p className="text-primary-foreground/80">Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Join Our Community</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of a thriving community of innovators, researchers, and future leaders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/enrollment">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
