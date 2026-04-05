'use client';

import { Button } from '@/components/ui/button';
import { Plus, Trash2, Download } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: 'Student Handbook',
      category: 'academic',
      fileSize: '2.4 MB',
    },
    {
      id: 2,
      title: 'Financial Aid Guide',
      category: 'financial',
      fileSize: '1.8 MB',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Manage Resources</h2>
        <Button className="gap-2">
          <Plus size={20} />
          Upload Resource
        </Button>
      </div>

      <div className="bg-background rounded-lg border border-muted-foreground/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted border-b border-muted-foreground/20">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Title</th>
                <th className="px-6 py-3 text-left font-medium">Category</th>
                <th className="px-6 py-3 text-left font-medium">File Size</th>
                <th className="px-6 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource) => (
                <tr
                  key={resource.id}
                  className="border-b border-muted-foreground/10 hover:bg-muted/50 transition-colors"
                >
                  <td className="px-6 py-4">{resource.title}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {resource.category}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {resource.fileSize}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-muted rounded transition-colors">
                        <Download size={16} />
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
