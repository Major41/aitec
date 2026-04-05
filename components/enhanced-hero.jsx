"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AITEC_DATA } from "@/lib/constants";

export function EnhancedHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const events = AITEC_DATA.events.filter((e) => e.status === "upcoming");

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, events.length]);

  const currentEvent = events[currentSlide];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="relative w-full h-[600px] md:h-[650px] overflow-hidden group"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {/* Image Container */}
        <Image
          src={currentEvent.image}
          alt={currentEvent.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

        {/* Content - Positioned absolutely inside hero */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16 z-10">
          <div className="max-w-4xl space-y-4">
            {/* News Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {currentEvent.title}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl">
              {currentEvent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cursor-pointer"
                onClick={() => {
                  // Create a link element
                  const link = document.createElement("a");
                  link.href = "/aitec brochure.pdf"; // Path to file in public folder
                  link.download = "aitec brochure.pdf"; // Download attribute forces download
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Brochure
              </Button>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold cursor-pointer"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="hidden absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 md:flex gap-2 z-20">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 10000);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-accent w-8 h-2"
                  : "bg-white/40 hover:bg-white/60 w-2 h-2"
              }`}
              aria-label={`Go to news ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
