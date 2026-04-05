'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

// export const metadata = {
//   title: 'Contact AITEC',
//   description: 'Get in touch with AITEC. We\'re here to answer your questions about programs and admissions.',
// };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Page Header with Background Image */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ceo1.jpg"
            alt="AITEC Campus"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12">
            {/* Logo Image */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="AITEC Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Have questions? We'd love to hear from you. Reach out to our
                team today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're interested in our programs, have questions
                  about admissions, or just want to learn more about AITEC, our
                  team is here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Mogotio Main Campus
                      <br />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">0715244974</p>
                    <p className="text-sm text-muted-foreground">
                      Admissions: 0715244974
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      aitec.mogotio@gmail.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      aitec.mogotio@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-border shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
                  <p className="text-lg font-semibold text-accent">
                    Thank you for your message!
                  </p>
                  <p className="text-muted-foreground mt-2">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+254712345678"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="financial">Financial Aid</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Visit Our Campus</h2>
          <div className="rounded-lg overflow-hidden border border-border h-96 bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin
                size={48}
                className="mx-auto mb-4 text-muted-foreground"
              />
              <p className="text-muted-foreground">
                Interactive map coming soon
                <br />
                123 Tech Avenue, Silicon Valley, CA 94025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
