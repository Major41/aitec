"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Edit2, Plus } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface Sport {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

export default function SportsPage() {
  const [sports, setSports] = useState<Sport[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "Football",
    image: "",
  });

  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    try {
      const response = await fetch("/api/admin/sports");
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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);
    formDataUpload.append("upload_preset", "aitec_uploads");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dzv1lqhse/image/upload",
        {
          method: "POST",
          body: formDataUpload,
        },
      );

      if (response.ok) {
        const data = await response.json();
        setImageUrl(data.secure_url);
        setFormData((prev) => ({ ...prev, image: data.secure_url }));
        toast.success("Image uploaded successfully");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.excerpt || !formData.image) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId
        ? `/api/admin/sports/${editingId}`
        : "/api/admin/sports";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(editingId ? "Sport updated" : "Sport created");
        setFormData({
          title: "",
          excerpt: "",
          category: "Football",
          image: "",
        });
        setImageUrl("");
        setEditingId(null);
        setOpen(false);
        fetchSports();
      }
    } catch (error) {
      console.error("Error saving sport:", error);
      toast.error("Failed to save sport");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;

    try {
      const response = await fetch(`/api/admin/sports/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setSports(sports.filter((s) => s._id !== id));
        toast.success("Sport deleted");
      }
    } catch (error) {
      console.error("Error deleting sport:", error);
      toast.error("Failed to delete sport");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sports Updates</h2>
        <Button
          onClick={() => {
            setOpen(true);
            setEditingId(null);
            setFormData({
              title: "",
              excerpt: "",
              category: "Football",
              image: "",
            });
            setImageUrl("");
          }}
          className="gap-2 bg-primary hover:bg-primary/90"
        >
          <Plus size={20} />
          Add Sport Update
        </Button>
      </div>

      <div className="grid gap-6">
        {sports.map((sport) => (
          <div
            key={sport._id}
            className="bg-background rounded-lg border border-border p-4 flex gap-4 items-start"
          >
            {sport.image && (
              <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={sport.image}
                  alt={sport.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg">{sport.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {sport.category}
              </p>
              <p className="text-sm mb-4 line-clamp-2">{sport.excerpt}</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setFormData({
                      title: sport.title,
                      excerpt: sport.excerpt,
                      category: sport.category,
                      image: sport.image,
                    });
                    setImageUrl(sport.image);
                    setEditingId(sport._id);
                    setOpen(true);
                  }}
                  className="gap-2"
                >
                  <Edit2 size={16} />
                  Edit
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleDelete(sport._id)}
                  variant="outline"
                  className="text-destructive hover:bg-destructive/10 gap-2"
                >
                  <Trash2 size={16} />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full">
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-bold">
                {editingId ? "Edit Sport Update" : "Add Sport Update"}
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Sport update title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  placeholder="Brief description"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  rows={3}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option>Football</option>
                  <option>Basketball</option>
                  <option>Cricket</option>
                  <option>Volleyball</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Image</label>
                {imageUrl && (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={imageUrl}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="block w-full"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                >
                  {editingId ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
