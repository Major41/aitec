"use client";

import Image from "next/image";
import { useState } from "react";
import { AITEC_DATA } from "@/lib/constants";
import { FeeTable } from "@/components/fee-table";
import { DocumentCard } from "@/components/document-card";
import {
  FileText,
  GraduationCap,
  BookOpen,
  Award,
  Scale,
  Hotel,
  Briefcase,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";

// Icon mapping for documents
const iconMap = {
  "📄": FileText,
  "💰": GraduationCap,
  "📋": BookOpen,
  "🎖️": Award,
  "⚖️": Scale,
  "🏨": Hotel,
  "💼": Briefcase,
};

export default function Resources() {
  const [selectedDocCategory, setSelectedDocCategory] = useState("all");

  const filteredDocuments =
    selectedDocCategory === "all"
      ? AITEC_DATA.documents
      : AITEC_DATA.documents.filter(
          (doc) => doc.category === selectedDocCategory,
        );

  return (
    <div className="w-full">
      {/* Page Header with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/ceo.jpg"
            alt="Resources background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Access fee structures, important documents, and resources for
            students and parents
          </p>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Fee Structure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Transparent and comprehensive fee information for all programs.
              Scholarships and financial aid options are available.
            </p>
          </div>

          <FeeTable data={AITEC_DATA.feeStructure} />

          <div className="mt-12 bg-accent/10 border border-accent rounded-lg p-8">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Financial Aid & Scholarships
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Merit-based scholarships covering up to 50% of tuition fees
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Need-based financial assistance for eligible students
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Educational loans from partner financial institutions
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Installment payment options available for annual fees
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Download Documents</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Important resources for students and parents. Download our
              comprehensive guides, handbooks, and information materials.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {AITEC_DATA.documentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedDocCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedDocCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDocuments.map((doc) => {
              const IconComponent =
                iconMap[doc.icon as keyof typeof iconMap] || FileText;

              return (
                <DocumentCard
                  key={doc.id}
                  title={doc.title}
                  description={doc.description}
                  fileSize={doc.fileSize}
                  fileType={doc.fileType}
                  downloadUrl={doc.downloadUrl}
                  icon={<IconComponent className="w-6 h-6 text-primary" />}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What are the payment options available?",
                answer:
                  "We offer multiple payment options including full annual payment, semester-wise payments, and monthly installments. Students can also avail of educational loans from our partner institutions.",
              },
              {
                question: "Are scholarships available?",
                answer:
                  "Yes, we offer merit-based scholarships for exceptional students and need-based financial assistance for eligible candidates. Details are available in our Scholarship Information document.",
              },
              {
                question: "What is included in the hostel fee?",
                answer:
                  "The hostel fee includes accommodation, meals (breakfast and dinner), utilities, WiFi, and access to common facilities like gym, library, and recreational areas.",
              },
              {
                question: "Can I get a fee refund if I withdraw?",
                answer:
                  "Refund policies depend on the time of withdrawal. Please refer to our Student Handbook for detailed withdrawal and refund policies.",
              },
              {
                question: "Are there any hidden charges?",
                answer:
                  "No, all charges are transparent and included in the fee structure. The only additional charges may be for optional activities or special programs.",
              },
              {
                question: "How can I apply for financial aid?",
                answer:
                  "You can apply for financial aid during the admission process or contact our Financial Aid Office directly. Complete details and application forms are available in the Financial Aid Guide.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="group border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary/50"
              >
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold">Need More Information?</h2>
          <p className="text-lg text-primary-foreground/90">
            Contact our admissions office for personalized guidance on fees,
            scholarships, and other resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254715244974"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all"
            >
              <Phone className="w-5 h-5" />
              Call: +254715244974
            </a>
            <a
              href="mailto:admissions@aitec.edu"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-gray-100 text-primary rounded-lg font-semibold transition-all"
            >
              <Mail className="w-5 h-5" />
              Email: admissions@aitec.edu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
