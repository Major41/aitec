"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative overflow-hidden rounded-lg cursor-pointer bg-muted aspect-square"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-6">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            <div className="relative aspect-video">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            <div className="mt-6 text-white">
              <h2 className="text-3xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-gray-300 text-lg">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
