"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock } from "lucide-react";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

export function BlogCard({
  id,
  title,
  excerpt,
  author,
  date,
  readingTime,
  category,
  image,
  featured,
}: BlogCardProps) {
  return (
    <article
      className={`group rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 bg-background ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-muted ${featured ? "h-80 md:h-96" : "h-48"}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full capitalize">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/blogs/${id}`} className="block mb-3">
          <h3
            className={`font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {title}
          </h3>
        </Link>

        <p
          className={`text-muted-foreground mb-4 ${featured ? "line-clamp-3" : "line-clamp-2"}`}
        >
          {excerpt}
        </p>

        {/* Metadata */}
        <div
          className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${
            featured ? "flex-col space-y-3" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{readingTime}</span>
          </div>
        </div>

        {/* Read More */}
        <Link
          href={`/blogs/${id}`}
          className="inline-block mt-6 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
