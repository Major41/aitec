import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="md:py-32 py-16 w-full flex items-center justify-center bg-background">
      <div className="max-w-md text-center space-y-8 px-4">
        {/* 404 Text */}
        <div className="space-y-2">
          <div className="text-8xl font-bold text-primary">404</div>
          <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-lg text-muted-foreground">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>

        {/* Illustration */}
        <div className="p2-8">
          <div className="text-6xl opacity-20">🔍</div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button
            asChild
            size="lg"
            className="w-full bg-primary hover:bg-primary/90"
          >
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home className="h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link
              href="/programs"
              className="flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Browse Programs
            </Link>
          </Button>
        </div>

        {/* Additional Links */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Quick Links</p>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/" className="text-sm text-primary hover:underline">
              Home
            </Link>
            <Link
              href="/programs"
              className="text-sm text-primary hover:underline"
            >
              Programs
            </Link>
            <Link href="/about" className="text-sm text-primary hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
