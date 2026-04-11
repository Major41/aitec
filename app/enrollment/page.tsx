"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Check } from "lucide-react";

interface School {
  _id: string;
  name: string;
  slug: string;
}

interface Course {
  _id: string;
  title: string;
  slug: string;
}

export default function Enrollment() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [schools, setSchools] = useState<School[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    highestEducation: "",
    university: "",
    school: "",
    course: "",
  });

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await fetch("/api/public/schools");
      if (response.ok) {
        const data = await response.json();
        setSchools(data);
      }
    } catch (error) {
      console.error("Error fetching schools:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCourses = async (schoolId: string) => {
    try {
      if (!schoolId) {
        setCourses([]);
        return;
      }
      const response = await fetch(`/api/public/courses?schoolId=${schoolId}`);
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        setCourses([]);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      setCourses([]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "school") {
      setFormData((prev) => ({ ...prev, course: "" }));
      fetchCourses(value);
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/public/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Enrollment submission failed");
      }
    } catch (error) {
      console.error("Error submitting enrollment:", error);
    }
  };

  const steps = [
    { number: 1, title: "Personal Info", description: "Basic details" },
    { number: 2, title: "Education", description: "Academic background" },
    { number: 3, title: "Program", description: "Choose program" },
  ];

  return (
    <div className="w-full">
      {/* Page Header with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/ceo.jpg"
            alt="Enrollment background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Apply to AITEC
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Start your journey with us. Complete the enrollment form below.
          </p>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <>
              {/* Progress Steps */}
              <div className="mb-12">
                <div className="flex justify-between items-start">
                  {steps.map((s, index) => (
                    <div key={s.number} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <button
                          onClick={() => setStep(s.number)}
                          className={`w-12 h-12 rounded-full font-bold transition-all ${
                            s.number === step
                              ? "bg-primary text-primary-foreground ring-4 ring-primary/30"
                              : s.number < step
                                ? "bg-accent text-accent-foreground"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {s.number < step ? <Check size={24} /> : s.number}
                        </button>
                        <div className="text-center mt-3">
                          <p className="font-bold text-sm">{s.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {s.description}
                          </p>
                        </div>
                      </div>

                      {index < steps.length - 1 && (
                        <div
                          className={`h-1 mx-2 flex-1 mb-6 ${
                            s.number < step ? "bg-accent" : "bg-muted"
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <form
                onSubmit={handleSubmit}
                className="bg-muted/50 rounded-lg border border-border p-8 md:p-12"
              >
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Personal Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium mb-2"
                        >
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="bg-background border-border"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium mb-2"
                        >
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="bg-background border-border"
                        />
                      </div>
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
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="bg-background border-border"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="dateOfBirth"
                          className="block text-sm font-medium mb-2"
                        >
                          Date of Birth
                        </label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Education */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">
                      Educational Background
                    </h2>

                    <div>
                      <label
                        htmlFor="highestEducation"
                        className="block text-sm font-medium mb-2"
                      >
                        Highest Education Level
                      </label>
                      <select
                        id="highestEducation"
                        name="highestEducation"
                        value={formData.highestEducation}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select education level</option>
                        <option value="high-school">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="diploma">Diploma</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="university"
                        className="block text-sm font-medium mb-2"
                      >
                        Previous University/Institution (if applicable)
                      </label>
                      <Input
                        id="university"
                        name="university"
                        type="text"
                        placeholder="University Name"
                        value={formData.university}
                        onChange={handleChange}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Program Selection */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Choose Your Program</h2>

                    <div>
                      <label
                        htmlFor="school"
                        className="block text-sm font-medium mb-2"
                      >
                        Select a School
                      </label>
                      <select
                        id="school"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Choose a school</option>
                        {schools.map((s) => (
                          <option key={s._id} value={s._id}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="course"
                        className="block text-sm font-medium mb-2"
                      >
                        Select a Course
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        disabled={!formData.school || courses.length === 0}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">
                          {formData.school
                            ? "Choose a course"
                            : "Select a school first"}
                        </option>
                        {courses.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-12 justify-between">
                  <Button
                    type="button"
                    onClick={handlePrev}
                    variant="outline"
                    className="border-border"
                    disabled={step === 1}
                  >
                    Previous
                  </Button>

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Next <ChevronRight size={20} />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-accent hover:bg-accent/90"
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </>
          ) : (
            <div className="bg-accent/10 border border-accent rounded-lg p-12 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-accent">
                Application Submitted!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for your application. We've received your information
                and will review it shortly. You'll receive a confirmation email
                at <strong>{formData.email}</strong> with further instructions.
              </p>
              <p className="text-muted-foreground mb-8">
                Our admissions team typically responds within 5-7 business days.
                If you have any questions, feel free to contact us at{" "}
                <strong>admissions@aitec.edu</strong>.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="/">Return to Home</a>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
