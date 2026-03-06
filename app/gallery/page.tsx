"use client";

import Image from "next/image";
import { useState } from "react";
import { AITEC_DATA } from "@/lib/constants";
import { GalleryGrid } from "@/components/gallery-grid";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages =
    selectedCategory === "all"
      ? AITEC_DATA.galleryImages
      : AITEC_DATA.galleryImages.filter(
          (img) => img.category === selectedCategory,
        );

  return (
    <div className="w-full">
      {/* Page Header with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/kmtc.jpg"
            alt="Gallery background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Campus Gallery
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Experience the vibrant life at AITEC through our photo gallery
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-8">Photo Gallery</h2>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {AITEC_DATA.galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <GalleryGrid items={filteredImages} />

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No images found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-lg text-accent-foreground/90">
                Campus Locations
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <p className="text-lg text-accent-foreground/90">
                Gallery Images
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2500+</div>
              <p className="text-lg text-accent-foreground/90">
                Happy Students
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
