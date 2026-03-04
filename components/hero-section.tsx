import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Welcome to AITEC
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-balance max-w-3xl mx-auto leading-relaxed">
              Advanced Institute of Technology and Engineering - Shaping innovators and leaders for tomorrow's world
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/enrollment" className="flex items-center gap-2">
                Start Your Journey <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-primary-foreground/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold">2500+</div>
              <p className="text-primary-foreground/80">Active Students</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">25</div>
              <p className="text-primary-foreground/80">Programs Offered</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">95%</div>
              <p className="text-primary-foreground/80">Job Placement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
