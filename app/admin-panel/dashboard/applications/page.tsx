'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      program: 'Bachelor of Engineering - Computer Science',
      school: 'Engineering & Building',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      program: 'Diploma in Business Management',
      school: 'Business & ICT',
      status: 'pending',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Applications</h2>
      </div>

      <div className="bg-background rounded-lg border border-muted-foreground/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted border-b border-muted-foreground/20">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Name</th>
                <th className="px-6 py-3 text-left font-medium">Email</th>
                <th className="px-6 py-3 text-left font-medium">Program</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b border-muted-foreground/10 hover:bg-muted/50 transition-colors"
                >
                  <td className="px-6 py-4">{app.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{app.email}</td>
                  <td className="px-6 py-4 text-muted-foreground">{app.program}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-700 rounded-full text-xs font-medium">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        className="gap-2 bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle size={16} />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 text-destructive hover:bg-destructive/10"
                      >
                        <XCircle size={16} />
                        Reject
                      </Button>
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
