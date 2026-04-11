"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";
import {
  Menu,
  X,
  LogOut,
  Home,
  LayoutDashboard,
  BookOpen,
  FileText,
  Image,
  PenTool,
  School,
  Building,
  Trophy,
  File as FileIcon,
} from "lucide-react";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Verify admin is logged in
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // This would verify the token from cookies
      setIsLoading(false);
    } catch (error) {
      router.push("/admin-panel");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      toast.success("Logged out successfully");
      router.push("/admin-panel");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  const navItems = [
    {
      label: "Dashboard",
      href: "/admin-panel/dashboard",
      icon: LayoutDashboard,
    },
    { label: "Schools", href: "/admin-panel/dashboard/schools", icon: School },
    { label: "Courses", href: "/admin-panel/dashboard/courses", icon: BookOpen },
    {
      label: "Applications",
      href: "/admin-panel/dashboard/applications",
      icon: FileText,
    },
    { label: 'Sports', href: '/admin-panel/dashboard/sports', icon: Trophy },
    { label: 'Facilities', href: '/admin-panel/dashboard/facilities', icon: Building },
    { label: "Gallery", href: "/admin-panel/dashboard/gallery", icon: Image },
    { label: "Blogs", href: "/admin-panel/dashboard/blogs", icon: PenTool },
    // {
    //   label: "Resources",
    //   href: "/admin-panel/dashboard/resources",
    //   icon: FileIcon,
    // },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative w-64 h-full bg-muted border-r border-muted-foreground/20 transition-transform duration-300 z-40`}
      >
        <div className="p-6 border-b border-muted-foreground/20">
          <Link href="/admin-panel/dashboard" className="font-bold text-lg">
            AITEC Admin
          </Link>
        </div>

        <nav className="p-6 space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:bg-background hover:text-foreground transition-colors"
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 space-y-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Home size={16} />
            Back to Website
          </Link>
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="w-full justify-start gap-2"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background border-b border-muted-foreground/20 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="w-6"></div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
