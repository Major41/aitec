// In your features-section.tsx (Client Component)
"use client";

import { AITEC_DATA } from "@/lib/constants";
import {
  GraduationCap,
  Building2,
  Handshake,
  FlaskConical,
  Globe2,
  Briefcase,
} from "lucide-react";

const iconMap = {
  GraduationCap,
  Building2,
  Handshake,
  FlaskConical,
  Globe2,
  Briefcase,
};

export function FeaturesSection() {
  const features = AITEC_DATA.features;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose AITEC?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes our institution the ideal choice for your
            technical education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
