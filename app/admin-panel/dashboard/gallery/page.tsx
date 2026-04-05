"use client";

import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

export default function GalleryPage() {
  const images = [
    { id: 1, title: "Campus View", category: "campus" },
    { id: 2, title: "Classroom", category: "facilities" },
    { id: 3, title: "Student Event", category: "events" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gallery Management</h2>
        <Button className="gap-2">
          <Plus size={20} />
          Upload Image
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-background rounded-lg border border-muted-foreground/20 overflow-hidden"
          >
            <div className="w-full h-40 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Image Placeholder</span>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold">{image.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {image.category}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-destructive hover:bg-destructive/10"
              >
                <Trash2 size={16} />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
