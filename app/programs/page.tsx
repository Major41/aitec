"use client";

import Image from "next/image";
import { useState } from "react";
import { AITEC_DATA } from "@/lib/constants";
import { ProgramCard } from "@/components/program-card";
import { Button } from "@/components/ui/button";

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPrograms =
    selectedCategory === "all"
      ? AITEC_DATA.programs
      : AITEC_DATA.programs.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Page Header with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/dairy.jpg"
            alt="Programs background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
          
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Explore our diverse range of academic and professional programs
            designed to match your career goals.
          </p>
        </div>

      </section>

      {/* Programs Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              {AITEC_DATA.categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  className={
                    selectedCategory === category.id
                      ? "bg-primary hover:bg-primary/90 text-black"
                      : "border-border text-foreground hover:bg-muted"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No programs found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Program Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Faculty",
                description:
                  "Learn from experienced educators and industry professionals with real-world expertise.",
              },
              {
                title: "Flexible Learning",
                description:
                  "Choose from full-time, part-time, and online formats that fit your schedule.",
              },
              {
                title: "Career Support",
                description:
                  "Access career counseling, internship opportunities, and job placement assistance.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-lg border border-border p-8"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Ready to Enroll?</h2>
            <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
              Start your application today and take the first step toward your
              future.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href="/enrollment">Begin Your Application</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
