"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/resources", label: "Facilities" },
    { href: "/sports", label: "Sports" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blogs", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with full name */}
            <Link href="/" className="relative group flex items-center gap-3">
              {/* Logo Image */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/logo.jpeg" // Replace with your actual logo path
                  alt="AITEC Logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* School Name */}
              <div className="flex flex-col">
                <span className="font-bold text-lg text-red-600 leading-tight">
                  African International
                </span>
                <span className="font-bold text-lg text-red-600 leading-tight">
                  Technical College
                </span>
                <span className="text-sm text-red-500 font-semibold">
                  (AITEC)
                </span>
              </div>

              {/* Underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Desktop Navigation with hover effects */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 transition-all duration-300 font-medium group ${
                    scrolled ? "text-gray-700" : "text-gray-700"
                  } hover:text-red-600`}
                >
                  {item.label}
                  <span className="absolute inset-x-4 bottom-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </nav>

            {/* Enrollment Button with modern design */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                asChild
                className="relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 text-white border-0 hover:shadow-xl hover:shadow-red-600/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="/enrollment" className="flex items-center gap-2">
                  <span>Enroll Now</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button with animation */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-red-600/10 hover:bg-red-600/20 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-red-600" />
              ) : (
                <Menu className="w-5 h-5 text-red-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-200">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.jpeg" // Replace with your actual logo path
                    alt="AITEC Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-bold text-sm text-red-600 block">
                    African International
                  </span>
                  <span className="font-bold text-sm text-red-600 block">
                    Technical College
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-6">
              <div className="space-y-1 px-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isOpen
                        ? "fadeIn 0.3s ease-out forwards"
                        : "none",
                      opacity: 0,
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Sidebar Footer with CTA */}
            <div className="p-6 border-t border-gray-200">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-12 text-base"
              >
                <Link href="/enrollment" onClick={() => setIsOpen(false)}>
                  Enroll Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
