"use client";

import Image from "next/image";
import { useState } from "react";
import { AITEC_DATA } from "@/lib/constants";
import { BlogCard } from "@/components/blog-card";
import { Search } from "lucide-react";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  let filteredPosts = AITEC_DATA.blogPosts;

  // Filter by category
  if (selectedCategory !== "all") {
    filteredPosts = filteredPosts.filter(
      (post) => post.category === selectedCategory,
    );
  }

  // Filter by search query
  if (searchQuery.trim()) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const otherPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="w-full">
      {/* Page Header with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/beautiful.jpg"
            alt="Blogs background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">AITEC Blog</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Latest news, insights, and stories from AITEC
          </p>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <Search
                className="absolute left-4 top-3.5 text-muted-foreground"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-3">
            {AITEC_DATA.blogCategories.map((category) => (
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

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
              <div className="flex flex-col md:flex-row gap-6 mb-16">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} {...post} featured />
                ))}
              </div>
            </div>
          )}

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No articles found. Try a different search or category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 md:py-32 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Get the latest updates, news, and insights from AITEC delivered to
            your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
