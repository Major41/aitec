"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CoursesSections() {
  return (
    <div className="w-full">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 min-h-[400px]">
        {/* Image */}
        <div className="relative h-[300px] md:h-full">
          <Image src="/aus.jpg" alt="Australia" fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="flex items-center bg-blue-200 px-6 md:px-16 py-12">
          <div className="max-w-lg space-y-5">
            <h2 className="text-2xl md:text-4xl font-bold">
              Study In Kenya, Work In Australia
            </h2>

            <p className="text-red-600 font-semibold">Comfort & Opportunity</p>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Access high-quality, industry-relevant education right here in
              Kenya. Build practical skills and earn certifications that prepare
              you for both local and global careers.
            </p>

            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white"
              asChild
            >
              <Link href="/programs">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 min-h-[400px]">
        {/* Content */}
        <div className="flex items-center bg-blue-200 px-6 md:px-16 py-12 order-2 md:order-1">
          <div className="max-w-lg space-y-5">
            <h2 className="text-2xl md:text-4xl font-bold">Build Your Future in Kenya</h2>

            <p className="text-red-600 font-semibold">Local Excellence</p>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Access high-quality, industry-relevant education right here in
              Kenya. Build practical skills and earn certifications that prepare
              you for both local and global careers.
            </p>

            <Button
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/programs">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[300px] md:h-full order-1 md:order-2">
          <Image src="/dairy.jpg" alt="Kenya" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
