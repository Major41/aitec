"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AITEC_DATA } from "@/lib/constants";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  TrendingUp,
  Calendar,
  ExternalLink,
} from "lucide-react";

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = 6000;
  const progressInterval = useRef<NodeJS.Timeout>();
  const slides = AITEC_DATA.heroSlides;
  const newsItems = AITEC_DATA.latestNews;

  // Create an extended array for infinite loop effect
  const extendedSlides = [...slides, slides[0]];

  // Auto-advance with progress bar
  useEffect(() => {
    if (!isPlaying || isTransitioning) return;

    const startTime = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / slideInterval) * 100;

      if (newProgress >= 100) {
        setIsTransitioning(true);
        setProgress(0);

        // Move to next slide
        if (currentSlide === slides.length - 1) {
          // Last slide - after transition, reset to first without animation
          setTimeout(() => {
            setCurrentSlide(0);
            setIsTransitioning(false);
          }, 700);
        } else {
          setCurrentSlide((prev) => prev + 1);
          setTimeout(() => setIsTransitioning(false), 700);
        }
      } else {
        setProgress(newProgress);
      }
    };

    progressInterval.current = setInterval(updateProgress, 50);
    return () => clearInterval(progressInterval.current);
  }, [currentSlide, isPlaying, isTransitioning, slides.length]);

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setIsPlaying(false);
    setProgress(0);

    if (currentSlide === slides.length - 1) {
      setTimeout(() => {
        setCurrentSlide(0);
        setIsTransitioning(false);
        setTimeout(() => setIsPlaying(true), 100);
      }, 700);
    } else {
      setCurrentSlide((prev) => prev + 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setTimeout(() => setIsPlaying(true), 100);
      }, 700);
    }
  };

  const handlePrev = () => {
    // Disable going backwards for continuous forward flow
    return;
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setIsPlaying(false);
    setProgress(0);

    // Only allow moving forward
    if (index > currentSlide) {
      setCurrentSlide(index);
    } else if (index < currentSlide) {
      // If trying to go to an earlier slide, go forward through the end
      setCurrentSlide(index + slides.length);
    }

    setTimeout(() => {
      if (index <= currentSlide) {
        setCurrentSlide(index);
      }
      setIsTransitioning(false);
      setTimeout(() => setIsPlaying(true), 100);
    }, 700);
  };

  // For display, we need to map the current slide index to the actual slide
  const displaySlide = slides[currentSlide % slides.length];

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {/* Sliding Track */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${extendedSlides.length * 100}%`,
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className="relative h-full"
              style={{ width: `${100 / extendedSlides.length}%` }}
            >
              {/* Background Image */}
              <div className="relative w-full h-full">
                <div className="relative w-full h-full scale-105 animate-ken-burns">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>

                {/* Multi-layered overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              </div>

              {/* Content for this slide - Only show when active */}
              {index === currentSlide && (
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Left Content */}
                      <div className="lg:col-span-7 animate-fade-up">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-px w-12 bg-primary"></div>
                          <span className="text-primary font-medium tracking-wider text-sm uppercase">
                            {slide.preHeadline || "AITEC • 2024"}
                          </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                          {slide.title}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                          {slide.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                          <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group"
                          >
                            {slide.cta}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
                          >
                            Virtual Tour
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-8">
                          <div className="flex items-center gap-3">
                            <Award className="h-5 w-5 text-primary" />
                            <span className="text-sm text-gray-300">
                              Top 10 Innovation Hub
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-primary" />
                            <span className="text-sm text-gray-300">
                              5000+ Students
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <span className="text-sm text-gray-300">
                              95% Placement
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Content - News Panel */}
                      <div
                        className="lg:col-span-5 hidden lg:block animate-fade-up"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 max-w-md ml-auto">
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-white font-semibold flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-primary" />
                              Latest News & Updates
                            </h3>
                            <span className="text-xs text-white/40">2024</span>
                          </div>

                          <div className="space-y-4">
                            {newsItems.map((news, index) => (
                              <div
                                key={index}
                                className="group relative rounded-xl overflow-hidden cursor-pointer"
                              >
                                <div className="relative h-32 w-full">
                                  <Image
                                    src={news.image}
                                    alt={news.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                                  <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <span className="text-xs text-primary font-medium mb-1 block">
                                          {news.category}
                                        </span>
                                        <h4 className="text-white text-sm font-medium leading-tight mb-1">
                                          {news.title}
                                        </h4>
                                        <span className="text-xs text-white/60">
                                          {news.date}
                                        </span>
                                      </div>
                                      <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-primary transition-colors" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <button className="w-full mt-6 text-sm text-white/60 hover:text-white flex items-center justify-center gap-2 transition-colors">
                            View All Updates
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls - Only Next button */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Progress Bar & Slide Counter */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between gap-6 py-4">
            <div className="flex-1 h-[2px] bg-white/20">
              <div
                className="h-full bg-primary transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center gap-3 text-white/80 text-sm font-mono">
              <span className="text-white font-bold">
                0{(currentSlide % slides.length) + 1}
              </span>
              <span className="text-white/40">/</span>
              <span className="text-white/60">0{slides.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className="group relative disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide % slides.length
                  ? "w-12 bg-primary"
                  : "w-6 bg-white/40 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
