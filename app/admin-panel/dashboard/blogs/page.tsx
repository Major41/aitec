"use client";

import { Button } from "@/components/ui/button";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "The Future of Technical Education",
      category: "news",
      status: "published",
    },
    {
      id: 2,
      title: "Student Success Stories",
      category: "student-life",
      status: "draft",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Manage Blogs</h2>
        <Button className="gap-2">
          <Plus size={20} />
          New Blog
        </Button>
      </div>

      <div className="bg-background rounded-lg border border-muted-foreground/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted border-b border-muted-foreground/20">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Title</th>
                <th className="px-6 py-3 text-left font-medium">Category</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b border-muted-foreground/10 hover:bg-muted/50 transition-colors"
                >
                  <td className="px-6 py-4">{blog.title}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {blog.category}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        blog.status === "published"
                          ? "bg-green-500/20 text-green-700"
                          : "bg-gray-500/20 text-gray-700"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-muted rounded transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-destructive/10 text-destructive rounded transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
