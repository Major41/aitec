'use client';

import { useState, useEffect } from 'react';
import { AITEC_DATA } from '@/lib/constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % AITEC_DATA.testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoplay]);

  const testimonial = AITEC_DATA.testimonials[current];

  return (
    <section className="w-full py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates about their transformative experiences at AITEC.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-xl border border-border p-8 md:p-12 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Quote Icon */}
              <Quote size={40} className="text-accent" />

              {/* Testimonial Quote */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center gap-4 pt-4 border-t border-border w-full">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-accent font-semibold">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setCurrent((prev) => (prev - 1 + AITEC_DATA.testimonials.length) % AITEC_DATA.testimonials.length);
                setIsAutoplay(false);
              }}
              className="border-border hover:bg-muted"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {AITEC_DATA.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setIsAutoplay(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? 'bg-primary w-6'
                      : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setCurrent((prev) => (prev + 1) % AITEC_DATA.testimonials.length);
                setIsAutoplay(false);
              }}
              className="border-border hover:bg-muted"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Autoplay Toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              {isAutoplay ? '⏸ Pause' : '▶ Play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
