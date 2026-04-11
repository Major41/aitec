'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AITEC_DATA } from '@/lib/constants';
import { BlogCard } from '@/components/blog-card';
import { Search } from 'lucide-react';

export default function Sports() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock sports data - replace with actual data from API
  const sportsUpdates = [
    {
      id: 1,
      title: 'Football Team Wins Championship',
      excerpt: 'Our football team clinched the regional championship with an outstanding performance.',
      content: 'Our football team clinched the regional championship with an outstanding performance against top competitors.',
      category: 'Football',
      date: '2024-04-10',
      image: '/images/sports-1.jpg',
      featured: true,
      author: 'Sports Team',
    },
    {
      id: 2,
      title: 'Basketball Tournament Success',
      excerpt: 'AITEC basketball team advances to the finals with impressive victories.',
      content: 'AITEC basketball team advances to the finals with impressive victories in the preliminary rounds.',
      category: 'Basketball',
      date: '2024-04-08',
      image: '/images/sports-2.jpg',
      featured: true,
      author: 'Sports Team',
    },
    {
      id: 3,
      title: 'Cricket Inter-College Series',
      excerpt: 'Students participate in the annual inter-college cricket series.',
      content: 'Our students participate in the annual inter-college cricket series, showcasing their skills and team spirit.',
      category: 'Cricket',
      date: '2024-04-05',
      image: '/images/sports-3.jpg',
      featured: false,
      author: 'Sports Team',
    },
    {
      id: 4,
      title: 'Volleyball Team Dominates League',
      excerpt: 'Women\'s volleyball team maintains unbeaten streak this season.',
      content: 'Women\'s volleyball team maintains unbeaten streak this season with consistent performances.',
      category: 'Volleyball',
      date: '2024-04-03',
      image: '/images/sports-4.jpg',
      featured: false,
      author: 'Sports Team',
    },
  ];

  const categories = ['all', 'Football', 'Basketball', 'Cricket', 'Volleyball'];

  let filteredUpdates = sportsUpdates;

  // Filter by category
  if (selectedCategory !== 'all') {
    filteredUpdates = filteredUpdates.filter((update) => update.category === selectedCategory);
  }

  // Filter by search query
  if (searchQuery.trim()) {
    filteredUpdates = filteredUpdates.filter(
      (update) =>
        update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const featuredUpdates = filteredUpdates.filter((update) => update.featured);
  const otherUpdates = filteredUpdates.filter((update) => !update.featured);

  return (
    <div className="w-full">
      {/* Page Header with Background Image */}
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

      {/* Search and Filter Section */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search sports updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-background border border-border text-foreground hover:bg-background'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sports Updates */}
      {featuredUpdates.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredUpdates.map((update) => (
                <div
                  key={update.id}
                  className="group rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-primary">{update.category}</span>
                      <span className="text-sm text-muted-foreground">{update.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{update.title}</h3>
                    <p className="text-muted-foreground mb-4">{update.excerpt}</p>
                    <a href="#" className="text-primary font-medium hover:underline">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Sports Updates */}
      {otherUpdates.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">More Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherUpdates.map((update) => (
                <div
                  key={update.id}
                  className="group rounded-lg overflow-hidden border border-border bg-background hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-primary">{update.category}</span>
                      <span className="text-xs text-muted-foreground">{update.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{update.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{update.excerpt}</p>
                    <a href="#" className="text-primary text-sm font-medium hover:underline">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredUpdates.length === 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground">No sports updates found. Try adjusting your filters.</p>
          </div>
        </section>
      )}
    </div>
  );
}
