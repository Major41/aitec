"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: '/facilities', label: 'Facilities' },
    { href: "/sports", label: "Sports" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  const contactNumbers = ["+254 715 244 974", "+254 726 854 256"];

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      {/* Top Section: School Name and Contact Info */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 gap-4">
            {/* School Name */}
            <h1 className="text-sm sm:text-base font-semibold text-foreground">
              Signet Institute of Australia
            </h1>

            {/* Contact Info - Hidden on Mobile */}
            <div className="hidden md:flex items-center gap-4 text-xs sm:text-sm">
              {contactNumbers.map((number, idx) => (
                <a
                  key={idx}
                  href={`tel:${number.replace(/\D/g, "")}`}
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={14} />
                  <span>{number}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center ml-auto"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Logo, Navigation, and Enroll Button */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Logo and School Acronym */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                <Image
                  src="/logo.jpeg"
                  alt="AITEC Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-lg sm:text-xl text-primary">
                AITEC
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Enrollment Button - Desktop */}
            <Button
              asChild
              className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/enrollment">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Info for Mobile */}
            <div className="flex flex-col gap-2 py-3 border-b border-border">
              {contactNumbers.map((number, idx) => (
                <a
                  key={idx}
                  href={`tel:${number.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  <span>{number}</span>
                </a>
              ))}
            </div>

            {/* Mobile Navigation Items */}
            <nav className="flex flex-col gap-2 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Enroll Button - Mobile */}
            <Button
              asChild
              className="w-full mb-3 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/enrollment">Enroll Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
