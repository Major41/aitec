"use client";

import Image from "next/image";
import { useState } from "react";

interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export default function FacilitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const facilities: Facility[] = [
    {
      id: "1",
      name: "Modern Library",
      description:
        "Extensive collection of books, digital resources, and quiet study areas",
      image: "/images/hero-1.jpg",
      category: "academic",
    },
    {
      id: "2",
      name: "Science Laboratories",
      description:
        "State-of-the-art labs equipped with modern instruments for practical learning",
      image: "/images/hero-1.jpg",
      category: "academic",
    },
    {
      id: "3",
      name: "Computer Lab",
      description:
        "Well-equipped computer lab with high-speed internet and latest software",
      image: "/images/hero-1.jpg",
      category: "academic",
    },
    {
      id: "4",
      name: "Sports Complex",
      description:
        "Indoor and outdoor sports facilities including courts and tracks",
      image: "/images/hero-1.jpg",
      category: "sports",
    },
    {
      id: "5",
      name: "Gymnasium",
      description: "Modern gym with fitness equipment and trained instructors",
      image: "/images/hero-1.jpg",
      category: "sports",
    },
    {
      id: "6",
      name: "Hostel Accommodation",
      description: "Comfortable and secure residential facilities for students",
      image: "/images/hero-1.jpg",
      category: "residential",
    },
    {
      id: "7",
      name: "Dining Hall",
      description:
        "Large dining facility serving nutritious meals throughout the day",
      image: "/images/hero-1.jpg",
      category: "residential",
    },
    {
      id: "8",
      name: "Auditorium",
      description:
        "Large capacity hall for seminars, events, and cultural programs",
      image: "/images/hero-1.jpg",
      category: "general",
    },
    {
      id: "9",
      name: "Medical Center",
      description: "On-campus health center with qualified medical staff",
      image: "/images/hero-1.jpg",
      category: "general",
    },
  ];

  const categories = [
    { id: "all", label: "All Facilities" },
    { id: "academic", label: "Academic" },
    { id: "sports", label: "Sports" },
    { id: "residential", label: "Residential" },
    { id: "general", label: "General" },
  ];

  const filteredFacilities =
    selectedCategory === "all"
      ? facilities
      : facilities.filter((f) => f.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-1.jpg"
            alt="Facilities background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our Facilities
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Explore our world-class infrastructure designed to support student
            success and well-being
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility) => (
              <div
                key={facility.id}
                className="group bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Want to Experience Our Facilities?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Schedule a campus tour to see our amazing facilities in person
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all"
          >
            Schedule a Tour
          </a>
        </div>
      </section>
    </div>
  );
}
