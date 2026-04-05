"use client";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-muted rounded-lg p-6 border border-muted-foreground/20">
          <div className="text-muted-foreground text-sm font-medium">
            Total Programs
          </div>
          <div className="text-3xl font-bold mt-2">77</div>
        </div>
        <div className="bg-muted rounded-lg p-6 border border-muted-foreground/20">
          <div className="text-muted-foreground text-sm font-medium">
            Pending Applications
          </div>
          <div className="text-3xl font-bold mt-2">12</div>
        </div>
        <div className="bg-muted rounded-lg p-6 border border-muted-foreground/20">
          <div className="text-muted-foreground text-sm font-medium">
            Gallery Images
          </div>
          <div className="text-3xl font-bold mt-2">24</div>
        </div>
        <div className="bg-muted rounded-lg p-6 border border-muted-foreground/20">
          <div className="text-muted-foreground text-sm font-medium">
            Published Blogs
          </div>
          <div className="text-3xl font-bold mt-2">8</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-muted rounded-lg p-6 border border-muted-foreground/20">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <div className="space-y-2">
            <a
              href="/admin-panel/dashboard/programs"
              className="block p-3 bg-background rounded hover:bg-muted-foreground/10 transition-colors"
            >
              Manage Programs
            </a>
            <a
              href="/admin-panel/dashboard/applications"
              className="block p-3 bg-background rounded hover:bg-muted-foreground/10 transition-colors"
            >
              Review Applications
            </a>
            <a
              href="/admin-panel/dashboard/gallery"
              className="block p-3 bg-background rounded hover:bg-muted-foreground/10 transition-colors"
            >
              Manage Gallery
            </a>
            <a
              href="/admin-panel/dashboard/blogs"
              className="block p-3 bg-background rounded hover:bg-muted-foreground/10 transition-colors"
            >
              Manage Blogs
            </a>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-6 border border-muted-foreground/20">
          <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>New application received</span>
              <span>2 hours ago</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Gallery image uploaded</span>
              <span>5 hours ago</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Program updated</span>
              <span>1 day ago</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Blog published</span>
              <span>2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
