"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import { Trash2, Edit, Plus } from "lucide-react";
import { CloudinaryUpload } from "@/components/cloudinary-upload";
import { RichTextEditor } from "@/components/rich-text-editor";

interface School {
  _id: string;
  name: string;
  slug: string;
}

interface Course {
  _id: string;
  title: string;
  slug: string;
  schoolId: { _id: string; name: string };
  description: string;
  fullDescription: string;
  images: string[];
  categories?: string[];
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    schoolId: "",
    description: "",
    fullDescription: "",
    images: [] as string[],
    categories: [] as string[],
    duration: "",
    level: "",
  });

  useEffect(() => {
    fetchSchools();
    fetchCourses();
  }, []);

  const fetchSchools = async () => {
    try {
      const res = await fetch("/api/admin/schools");
      if (res.ok) {
        const data = await res.json();
        setSchools(data);
      }
    } catch (error) {
      toast.error("Failed to fetch schools");
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await fetch("/api/admin/courses");
      if (res.ok) {
        const data = await res.json();
        setCourses(data);
      }
    } catch (error) {
      toast.error("Failed to fetch courses");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = editingId
        ? `/api/admin/courses/${editingId}`
        : "/api/admin/courses";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(editingId ? "Course updated" : "Course created");
        setFormData({
          title: "",
          schoolId: "",
          description: "",
          fullDescription: "",
          images: [],
          categories: [],
          duration: "",
          level: "",
        });
        setEditingId(null);
        setOpen(false);
        fetchCourses();
      } else {
        toast.error("Failed to save course");
      }
    } catch (error) {
      toast.error("Error saving course");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (course: Course) => {
    setFormData({
      title: course.title,
      schoolId: course.schoolId._id,
      description: course.description,
      fullDescription: course.fullDescription,
      images: course.images,
      categories: course.categories || [],
      duration: "",
      level: "",
    });
    setEditingId(course._id);
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this course?")) {
      try {
        const res = await fetch(`/api/admin/courses/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          toast.success("Course deleted");
          fetchCourses();
        } else {
          toast.error("Failed to delete course");
        }
      } catch (error) {
        toast.error("Error deleting course");
      }
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setFormData({
        title: "",
        schoolId: "",
        description: "",
        fullDescription: "",
        images: [],
        categories: [],
        duration: "",
        level: "",
      });
      setEditingId(null);
    }
    setOpen(newOpen);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Courses</h1>
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Course" : "Add New Course"}
              </DialogTitle>
              <DialogDescription>
                {editingId ? "Update course details" : "Create a new course"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="school">School</Label>
                <Select
                  value={formData.schoolId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, schoolId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a school" />
                  </SelectTrigger>
                  <SelectContent>
                    {schools.map((school) => (
                      <SelectItem key={school._id} value={school._id}>
                        {school.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="title">Course Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  placeholder="e.g., Bachelor of Animal Health"
                />
              </div>
              <div>
                <Label htmlFor="description">Short Description</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  placeholder="Brief course description"
                />
              </div>
              <div>
                <Label>Categories</Label>
                <div className="space-y-2 mt-2">
                  {["Diploma", "Certificate", "Artisan"].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={category}
                        checked={formData.categories.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              categories: [...formData.categories, category],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              categories: formData.categories.filter(
                                (c) => c !== category,
                              ),
                            });
                          }
                        }}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <Label
                        htmlFor={category}
                        className="font-normal cursor-pointer"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <RichTextEditor
                  label="Full Description"
                  value={formData.fullDescription}
                  onChange={(value) =>
                    setFormData({ ...formData, fullDescription: value })
                  }
                />
              </div>
              <div>
                <CloudinaryUpload
                  label="Course Images (Upload multiple)"
                  isMultiple={true}
                  onMultipleUpload={(urls) =>
                    setFormData({
                      ...formData,
                      images: [...formData.images, ...urls],
                    })
                  }
                />
                {formData.images.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Uploaded Images:</p>
                    <div className="space-y-2">
                      {formData.images.map((url, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between bg-muted p-2 rounded"
                        >
                          <span className="text-sm truncate">{url}</span>
                          <button
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                images: formData.images.filter(
                                  (_, i) => i !== idx,
                                ),
                              })
                            }
                            className="text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Saving..." : "Save Course"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-lg border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>School</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course._id}>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>{course.schoolId?.name || "N/A"}</TableCell>
                <TableCell>{course.slug}</TableCell>
                <TableCell className="max-w-md truncate">
                  {course.description}
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(course)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(course._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
