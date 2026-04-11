"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Facility {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export default function FacilitiesPage() {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const response = await fetch("/api/public/facilities");
      if (response.ok) {
        const data = await response.json();
        setFacilities(data);
      }
    } catch (error) {
      console.error("Error fetching facilities:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["All", ...new Set(facilities.map((f) => f.category))];

  const filteredFacilities = facilities.filter((facility) => {
    return selectedCategory === "all" || facility.category === selectedCategory;
  });

  if (loading) {
    return <div className="py-20 text-center">Loading facilities...</div>;
  }

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-5.jpg"
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
            State-of-the-art facilities designed for academic excellence and
            student growth
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category === "All" ? "all" : category)
                }
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  (category === "All" && selectedCategory === "all") ||
                  (category !== "All" && selectedCategory === category)
                    ? "bg-primary text-white"
                    : "bg-background border border-border text-foreground hover:bg-background"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFacilities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No facilities found.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFacilities.map((facility) => (
                <div
                  key={facility._id}
                  className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 bg-card flex flex-col h-full"
                >
                  {facility.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full w-fit mb-3">
                      {facility.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {facility.name}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1 line-clamp-4">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
