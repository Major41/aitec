"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Edit2, Plus } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface Facility {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export default function FacilitiesAdminPage() {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Academic",
    image: "",
  });

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const response = await fetch("/api/admin/facilities");
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
    if (!formData.name || !formData.description || !formData.image) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId
        ? `/api/admin/facilities/${editingId}`
        : "/api/admin/facilities";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(editingId ? "Facility updated" : "Facility created");
        setFormData({
          name: "",
          description: "",
          category: "Academic",
          image: "",
        });
        setImageUrl("");
        setEditingId(null);
        setOpen(false);
        fetchFacilities();
      }
    } catch (error) {
      console.error("Error saving facility:", error);
      toast.error("Failed to save facility");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;

    try {
      const response = await fetch(`/api/admin/facilities/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setFacilities(facilities.filter((f) => f._id !== id));
        toast.success("Facility deleted");
      }
    } catch (error) {
      console.error("Error deleting facility:", error);
      toast.error("Failed to delete facility");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Facilities</h2>
        <Button
          onClick={() => {
            setOpen(true);
            setEditingId(null);
            setFormData({
              name: "",
              description: "",
              category: "Academic",
              image: "",
            });
            setImageUrl("");
          }}
          className="gap-2 bg-primary hover:bg-primary/90"
        >
          <Plus size={20} />
          Add Facility
        </Button>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility) => (
          <div
            key={facility._id}
            className="bg-background rounded-lg border border-border overflow-hidden flex flex-col"
          >
            {facility.image && (
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-lg mb-1">{facility.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">
                {facility.category}
              </p>
              <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                {facility.description}
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setFormData({
                      name: facility.name,
                      description: facility.description,
                      category: facility.category,
                      image: facility.image,
                    });
                    setImageUrl(facility.image);
                    setEditingId(facility._id);
                    setOpen(true);
                  }}
                  className="gap-2"
                >
                  <Edit2 size={16} />
                  Edit
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleDelete(facility._id)}
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
                {editingId ? "Edit Facility" : "Add Facility"}
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Facility name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Detailed description"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  rows={4}
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
                  <option>Academic</option>
                  <option>Sports</option>
                  <option>Residential</option>
                  <option>Medical</option>
                  <option>General</option>
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
