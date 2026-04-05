"use client";

import Image from "next/image";
import { AITEC_DATA } from "@/lib/constants";

export function PartnersCarousel() {
  const partners = AITEC_DATA.partners;
  // Duplicate partners array multiple times for seamless infinite scroll
  const duplicatedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-muted to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Global Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AITEC collaborates with world-leading institutions to provide
            excellence in education and research opportunities.
          </p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll-infinite">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="relative flex-shrink-0 w-48 md:w-56 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center h-32 group cursor-pointer"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animation for continuous scrolling */}
        <style jsx>{`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(
                calc(-${AITEC_DATA.partners.length} * (12rem + 1.5rem))
              );
            }
          }

          .animate-scroll-infinite {
            animation: scroll-infinite 60s linear infinite;
          }

          .animate-scroll-infinite:hover {
            animation-play-state: paused;
          }

          @media (min-width: 768px) {
            @keyframes scroll-infinite {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(
                  calc(-${AITEC_DATA.partners.length} * (14rem + 1.5rem))
                );
              }
            }
          }
        `}</style>
      </div>
    </section>
  );
}
