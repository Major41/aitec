import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-xl mb-4">AITEC</h3>
            <p className="text-sm opacity-90">
              Advanced Institute of Technology and Engineering - Shaping the future through innovative education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs" className="hover:opacity-80 transition">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Master's Degrees
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition">
                  Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <p>123 Tech Avenue, Silicon Valley, CA 94025</p>
              </div>
              <div className="flex gap-2">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex gap-2">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <p>admissions@aitec.edu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-sm opacity-80">
              &copy; {currentYear} AITEC. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
