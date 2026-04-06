import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PartnersCarousel } from '@/components/partners-carousel';

import Link from "next/link";
import { CampusGallery } from "@/components/campus-gallery";
import {
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  Shield,
  Award,
  Calendar,
  MapPin,
  Users2,
  Briefcase,
  Heart,
  Church,
} from "lucide-react";

export const metadata = {
  title: "About AITEC",
  description:
    "Learn about AITEC's history, mission, and commitment to excellence in engineering and technology education.",
};

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header with Background Image */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ceo1.jpg"
            alt="AITEC Campus"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12">
            {/* Logo Image */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="AITEC Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                About AITEC
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Pioneering excellence in engineering and technology education
                since 2023
              </p>
            </div>
          </div>
        </div>
      </section>
            <PartnersCarousel />


      {/* Who We Are Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                African International Technical College (AITEC) is a premier
                educational institution dedicated to providing cutting-edge
                education in technology and engineering fields. With a
                commitment to excellence, AITEC aims to nurture a new generation
                of professionals equipped with the skills and knowledge
                necessary to thrive in today's rapidly evolving technological
                landscape.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">TVETA Accredited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">KNEC Recognized</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">At the Equator</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Est. 2023</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/ceo3.jpg"
                alt="AITEC Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Inception Section */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/about.jpg"
                alt="AITEC Inception"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Our Inception</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                African International Technical College (AITEC) was incepted on
                1st April 2023 as a premier technical college at Mogotio Town at
                the border of Nakuru and Baringo counties. The college is
                situated right at the Equator.{" "}
                <span className="font-semibold text-primary">
                  So the world revolves around here!
                </span>
              </p>
              <div className="bg-background rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-bold">Our Growth Journey</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">May 2023</span>
                    <span className="font-bold">72 Pioneer Students</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "20%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      September 2023
                    </span>
                    <span className="font-bold">+128 Students</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "55%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">January 2024</span>
                    <span className="font-bold">+100 Students</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">May 2024</span>
                    <span className="font-bold">300+ Students</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Despite our short journey, we've made remarkable strides in
            technical education
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Full Registration & Accreditation",
                description:
                  "Fully registered and accredited with TVETA, KNEC and Ministry of Education",
              },
              {
                icon: Users,
                title: "Qualified Faculty",
                description:
                  "Recruitment of over 40 highly qualified members of faculty and essential staff",
              },
              {
                icon: Briefcase,
                title: "State-of-the-Art Labs",
                description:
                  "Equipping of several state of the art technical and science laboratories/workshops",
              },
              {
                icon: MapPin,
                title: "Modern Hostels",
                description:
                  "Establishment of cozy hostels and catering facilities",
              },
              {
                icon: Users2,
                title: "Student Leadership",
                description:
                  "Inauguration of students council to foster democratic leadership",
              },
              {
                icon: Heart,
                title: "Sports & Recreation",
                description:
                  "Support of AITEC FC and other outdoor/indoor sports facilities",
              },
              {
                icon: Church,
                title: "Spiritual Nourishment",
                description:
                  "Support for chaplaincy and Christian union to foster spiritual growth",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-muted/30 rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 p-8 bg-primary/5 rounded-lg">
            <p className="text-2xl font-bold text-primary">
              ...and the journey continues
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-6">What We Do</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At AITEC, students are exposed to a dynamic learning environment
                that fosters innovation, critical thinking, and hands-on
                experience. The college boasts a team of highly qualified
                faculty members who are experts in their respective fields and
                are dedicated to guiding and mentoring students towards academic
                and professional success.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Engineering Programs
                  </div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Technology Courses
                  </div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary">40+</div>
                  <div className="text-sm text-muted-foreground">
                    Expert Faculty
                  </div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Hands-on Training
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/tailor.jpg"
                alt="What We Do at AITEC"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to AITEC</h2>
          <p className="text-2xl font-semibold mb-4">
            WHERE WE NURTURE CREATIVE PROFESSIONALS!
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-semibold text-accent">
                  To provide holistic technical training to the youth of Africa.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-semibold text-accent">
                  To be the leading technical college in Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-muted/50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { title: "Professionalism", icon: Target },
                { title: "Innovation", icon: Lightbulb },
                { title: "Networking", icon: Users },
                { title: "Continuous Improvement", icon: TrendingUp },
                { title: "Integrity", icon: Shield },
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center space-y-3">
                    <div className="flex justify-center">
                      <IconComponent
                        className="w-12 h-12 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-bold text-lg">{value.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <CampusGallery />

      {/* Stats */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">300+</div>
              <p className="text-primary-foreground/80">Current Students</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40+</div>
              <p className="text-primary-foreground/80">Qualified Faculty</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">7+</div>
              <p className="text-primary-foreground/80">State-of-Art Labs</p>
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
              Be part of a thriving community of innovators, researchers, and
              future leaders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
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
