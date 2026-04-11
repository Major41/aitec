"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface Sport {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

export default function Sports() {
  const [sports, setSports] = useState<Sport[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    try {
      const response = await fetch("/api/public/sports");
      if (response.ok) {
        const data = await response.json();
        setSports(data);
      }
    } catch (error) {
      console.error("Error fetching sports:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["All", ...new Set(sports.map((s) => s.category))];

  const filteredSports = sports.filter((sport) => {
    const matchCategory =
      selectedCategory === "all" || sport.category === selectedCategory;
    const matchSearch = sport.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (loading) {
    return <div className="py-20 text-center">Loading sports updates...</div>;
  }

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-4.jpg"
            alt="Sports background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">AITEC Sports</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Latest sports updates, achievements, and events from AITEC
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative">
              <Search
                className="absolute left-4 top-3 text-muted-foreground"
                size={20}
              />
              <input
                type="text"
                placeholder="Search sports updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

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

      {/* Sports Updates Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSports.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No sports updates found.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSports.map((sport) => (
                <div
                  key={sport._id}
                  className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 bg-card flex flex-col h-full"
                >
                  {sport.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={sport.image}
                        alt={sport.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {sport.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(sport.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {sport.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1 line-clamp-3">
                      {sport.excerpt}
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
