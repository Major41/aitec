import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="relative w-20 h-20 md:w-20 md:h-20 flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="AITEC Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <p className="text-sm opacity-90">
              African International Technical College, is a premier technical
              educational institution dedicated to providing cutting-edge
              education in health, agriculture, technology and engineering
              fields.
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
                <a href="/resources" className="hover:opacity-80 transition">
                  Resources
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:opacity-80 transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:opacity-80 transition">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/programs" className="hover:opacity-80 transition">
                  Health & Applied Sciences
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:opacity-80 transition">
                  Animal Health & Agriculture
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:opacity-80 transition">
                  Engineering & Building
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:opacity-80 transition">
                  Hospitality & Liberal Studies
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:opacity-80 transition">
                  Business & ICT
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:opacity-80 transition">
                  Signet Institute of Australia
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:opacity-80 transition">
                  Recognition of Prior Learning (RPL)
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
                <p>Mogotio - 38km North of Nakuru City <br/> P.O BOX 12938 Nakuru - 20100 </p>
              </div>
              <div className="flex gap-2">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <p>0715244974 / 0726854256 <br/> 0741121599 / 0706278051 </p>
              </div>
              <div className="flex gap-2">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <p>aitec.mogotio@gmail.com</p>
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
