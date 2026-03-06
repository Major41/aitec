"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/resources", label: "Resources" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with gradient effect */}
          <Link href="/" className="relative group">
            <span className="font-bold text-2xl bg-accent bg-clip-text text-transparent">
              AITEC
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation with hover effects */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-white hover:text-primary transition-all duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Enrollment Button with modern design */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              variant="ghost"
              className="relative overflow-hidden group bg-gradient-to-r from-primary to-accent text-white border-0 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/enrollment" className="flex items-center gap-2">
                <span>Enroll Now</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute block w-5 h-0.5 bg-primary transform transition-all duration-300 ${
                  isOpen ? "rotate-45 top-2.5" : "rotate-0 top-1"
                }`}
              />
              <span
                className={`absolute block w-5 h-0.5 bg-primary transform transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100 top-2.5"
                }`}
              />
              <span
                className={`absolute block w-5 h-0.5 bg-primary transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-2.5" : "rotate-0 top-4"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation with glass morphism */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-background/95 backdrop-blur-xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col h-full p-6">
              <div className="flex-1 space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-6 py-4 text-lg font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 transform hover:translate-x-2"
                    onClick={() => setIsOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: "slideIn 0.3s ease-out forwards",
                      opacity: 0,
                      transform: "translateX(-10px)",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pb-8">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-accent text-white border-0 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] h-14 text-lg"
                >
                  <Link href="/enrollment" onClick={() => setIsOpen(false)}>
                    Enroll Now
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
