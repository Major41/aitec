"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AITEC_DATA } from "@/lib/constants";
import { motion } from "framer-motion";

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
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="relative w-full h-full overflow-hidden group"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {/* Background Image */}
        {currentEvent?.image && (
          <Image
            src={currentEvent.image}
            alt={currentEvent.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        )}

        {/* Overlay gradient - softer for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-20 px-4 z-10">
          <div className="max-w-5xl w-full mx-auto">
            {/* School Name Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold tracking-wide border border-white/20">
                African International Technical College (AITEC)
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 text-balance"
            >
              May 2026 <br/> Intake In Progress
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 text-balance max-w-3xl mx-auto"
            >
              {currentEvent.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/aitec brochure.pdf";
                  link.download = "aitec brochure.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Brochure
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent backdrop-blur-sm hover:bg-white/10 text-white border-white/40 hover:border-white/60 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/1fsxXD7QWgGgVgLlCdZ0HWpfL5mPj0zmwv_31bzjFLXA/edit?usp=mail_response_notification",
                    "_blank",
                  );
                }}
              >
                Enroll Now
              </Button>
            </motion.div>

            {/* Special Scholarship Offer - Comfy Inn Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center mb-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                <Button
                  size="lg"
                  className="text-base px-8 py-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold shadow-xl border-0 relative overflow-hidden group rounded-full cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 animate-pulse" />
                    <span>
                      25% Scholarship for All May Intake Students!
                    </span>
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {events.length > 1 && (
          <>
            <button
              onClick={() => {
                setCurrentSlide(
                  (prev) => (prev - 1 + events.length) % events.length,
                );
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                setCurrentSlide((prev) => (prev + 1) % events.length);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {events.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 5000);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "bg-accent w-8 h-2"
                    : "bg-white/40 hover:bg-white/60 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
