import {
  GraduationCap,
  Building2,
  Handshake,
  FlaskConical,
  Globe2,
  Briefcase,
  Users,
  Microscope,
  Trophy,
  Zap,
  Target,
  Award,
} from "lucide-react";

export const AITEC_DATA = {
  heroSlides: [
    {
      id: 1,
      image: "/coastal.jpg",
      title: "Welcome to AITEC",
      subtitle: "Shaping the Future of Arts & Music",
      cta: "Explore Programs",
    },
    {
      id: 2,
      image: "hair1-2.jpg",
      title: "Hair Dressing & Beauty Therapy",
      subtitle:
        "Professional training in hair dressing and beauty therapy services.",
      cta: "Learn More",
    },
    {
      id: 3,
      image: "kmtc students.jpg",
      title: "Kenya Medical Training College",
      subtitle: "Specialized training in healthcare and medical sciences.",
      cta: "Join Us",
    },
    {
      id: 4,
      image: "electric2.jpg",
      title: "Electrical Engineering",
      subtitle:
        "Advanced training in electrical systems and power engineering.",
      cta: "See Outcomes",
    },
  ],

  features: [
    {
      title: "World-Class Faculty",
      description:
        "Learn from experienced educators and industry professionals with decades of combined expertise.",
      icon: "GraduationCap",
    },
    {
      title: "Modern Facilities",
      description:
        "Access cutting-edge laboratories, computer centers, and research facilities on campus.",
      icon: "Building2",
    },
    {
      title: "Industry Partnerships",
      description:
        "Collaborate with leading tech companies for internships, projects, and career opportunities.",
      icon: "Handshake",
    },
    {
      title: "Research & Innovation",
      description:
        "Engage in groundbreaking research projects that contribute to technological advancement.",
      icon: "FlaskConical",
    },
    {
      title: "Global Recognition",
      description:
        "Our degrees are recognized and respected by employers and universities worldwide.",
      icon: "Globe2",
    },
    {
      title: "Career Support",
      description:
        "Comprehensive career services including mentoring, placement assistance, and professional development.",
      icon: "Briefcase",
    },
  ],

  partners: [
    {
      id: 1,
      name: "TVETCDACC",
      image: "/patner1.jpg",
      link: "#",
    },
    {
      id: 2,
      name: "TVETA KENYA",
      image: "/patner2.png",
      link: "#",
    },
    {
      id: 3,
      name: "NITA",
      image: "/patner3.png",
      link: "#",
    },
    {
      id: 4,
      name: "Health Logi",
      image: "/patner4.jpg",
      link: "#",
    },
    {
      id: 5,
      name: "KNDI",
      image: "/patner5.png",
      link: "#",
    },
    {
      id: 6,
      name: "KVB",
      image: "/patner6.png",
      link: "#",
    },
    {
      id: 7,
      name: "KNEC",
      image: "/patner7.jpg",
      link: "#",
    },
    {
      id: 8,
      name: "Eldoret National Polytechnic",
      image: "/patner8.png",
      link: "#",
    },
    {
      id: 9,
      name: "Signet Institute Australia",
      image: "/patner9.jpg",
      link: "#",
    },
    {
      id: 10,
      name: "Kenya Health Professons",
      image: "/patner10.png",
      link: "#",
    },
  ],

  galleryImages: [
    {
      id: 1,
      image: "kmtc students.jpg",
      title: "Kenya Medical Training College Students",
      description:
        "Enroll today for your path to a rewarding healthcare career",
      category: "facilities",
    },
    {
      id: 2,
      image: "/hair1.jpg",
      title: "Hair Dressing",
      description:
        "Professional training in hair dressing and beauty therapy services",
      category: "facilities",
    },
    {
      id: 3,
      image: "/luo.jpg",
      title: "Campus Life",
      description: "Vibrant student community",
      category: "student-life",
    },
    {
      id: 4,
      image: "kmtc1.jpg",
      title: "Quality Studies",
      description: "Hands-on learning experience",
      category: "campus",
    },
    {
      id: 5,
      image: "/electric.jpg",
      title: "Electrical Engineering",
      description:
        "Advanced training in electrical systems and power engineering.",
      category: "facilities",
    },
    {
      id: 6,
      image: "/ceo.jpg",
      title: "Proven Results",
      description: "Successful alumni in top companies worldwide",
      category: "student-life",
    },
  ],

  documents: [
    {
      id: 1,
      title: "AITEC Brochure",
      description:
        "Comprehensive guide about AITEC College, our programs, campus facilities, and admission process.",
      fileSize: "2.5 MB",
      fileType: "PDF",
      downloadUrl: "/aitec brochure.pdf", // Make sure this matches your filename exactly
      icon: "📄",
      category: "brochure",
    },
    {
      id: 2,
      title: "Signet Courses",
      description:
        "Detailed information about Signet professional courses, curriculum, and certification pathways.",
      fileSize: "1.8 MB",
      fileType: "PDF",
      downloadUrl: "/signet courses.pdf", // Make sure this matches your filename exactly
      icon: "📚",
      category: "courses",
    },
  ],

  blogPosts: [
    {
      id: 1,
      title: "Fisrt Year Orientation at AITEC",
      excerpt:
        "Welcome to AITEC! Our first-year orientation program is designed to help new students transition smoothly into college life. From campus tours to workshops on study skills, we ensure our students are well-prepared for their academic journey.",
      author: "AITEC",
      date: "January 25th, 2026",
      readingTime: "8 min read",
      category: "research",
      image: "/orientation.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Student Success Story from AITEC",
      excerpt:
        "Hear from our successful alumni about their journey from AITEC to their dream careers.",
      author: "Alumni Relations Team",
      date: "February 28, 2025",
      readingTime: "6 min read",
      category: "student-life",
      image: "/kmtc1.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Campus Life at AITEC: More Than Just Academics",
      excerpt:
        "Discover the vibrant campus culture, student organizations, sports, and extracurricular activities that make AITEC a home away from home.",
      author: "Student Affairs",
      date: "February 24, 2025",
      readingTime: "5 min read",
      category: "student-life",
      image: "/coastal.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Dairy farm Expansion for students in Animal Health",
      excerpt:
        "AITEC's School of Animal Health and Agriculture is expanding its dairy farm facilities to provide students with hands-on experience in modern livestock management and animal health practices.",
      author: "Placement Cell",
      date: "February 20, 2025",
      readingTime: "7 min read",
      category: "careers",
      image: "/dairy.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Why you should choose AITEC for your engineering studies",
      excerpt:
        "AITEC offers a world-class engineering education with state-of-the-art facilities, experienced faculty, and strong industry partnerships. Our engineering programs are designed to equip students with the skills and knowledge needed to excel in the rapidly evolving tech landscape.",
      author: "AITEC",
      date: "February 15, 2025",
      readingTime: "6 min read",
      category: "news",
      image: "/electric.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "March Intake Scholarship Opportunities at AITEC",
      excerpt:
        "25% scholarship for all new students enrolling in the March intake. Don't miss this opportunity to join AITEC and receive a world-class education at a reduced cost.",
      author: "Financial Aid Office",
      date: "February 10, 2025",
      readingTime: "9 min read",
      category: "admissions",
      image: "/kmtc2.jpg",
      featured: false,
    },
  ],

  programs: [
    // Signet Institute Australia
    {
      id: 1,
      title:
        "Certificate III in Individual Support (Ageing and Disability Support Caregiving)",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 2,
      title: "Certificate IV in Ageing Support Caregiving",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 3,
      title: "Certificate III in Phlebotomy Collection",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 4,
      title: "Diploma in Community Services",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 5,
      title: "Diploma in Mental Health",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 6,
      title: "Certificate III in Wall and Floor Tiling",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 7,
      title: "Certificate III in Blocks/Brick Laying",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 8,
      title: "Certificate III in Engineering - Fabrication Trade",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 9,
      title: "Diploma in Building and Construction",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 10,
      title: "Advanced Diploma in Building Construction Design",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 11,
      title: "Diploma of Leadership and Management",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 12,
      title: "Advanced Diploma of Leadership and Management",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    {
      id: 13,
      title: "Graduate Diploma of Leadership and Management (Learning)",
      school: "Signet Institute Australia",
      category: "signet",
      description:
        "Study in Kenya, Work in Australia. Approved by Ministry of Education through TVETA.",
      image: "/signet.png",
    },
    // School of Animal Health and Agriculture
    {
      id: 14,
      title: "Animal Health Production",
      school: "School of Animal Health and Agriculture",
      category: "agriculture",
      description:
        "Specialized training in animal health and livestock management.",
      image: "/animal-health.jpg",
    },
    {
      id: 15,
      title: "General Agriculture Artisan",
      school: "School of Animal Health and Agriculture",
      category: "agriculture",
      description: "Practical agricultural skills and techniques.",
      image: "/animal-health.jpg",
    },
    {
      id: 16,
      title: "General Agriculture Certificate",
      school: "School of Animal Health and Agriculture",
      category: "agriculture",
      description: "Certified training in general agriculture practices.",
      image: "/animal-health.jpg",
    },
    {
      id: 17,
      title: "General Agriculture Diploma",
      school: "School of Animal Health and Agriculture",
      category: "agriculture",
      description: "Advanced diploma in agricultural sciences and practices.",
      image: "/animal-health.jpg",
    },
    {
      id: 18,
      title: "Diploma in Agriculture Extension",
      school: "School of Animal Health and Agriculture",
      category: "agriculture",
      description: "Training in agricultural extension and advisory services.",
      image: "/animal-health.jpg",
    },
    {
      id: 19,
      title: "Certificate in Agriculture Extension",
      school: "School of Animal Health and Agriculture",
      category: "agriculture",
      description:
        "Certificate in agricultural extension and community outreach.",
      image: "/animal-health.jpg",
    },
    // School of Hospitality and Liberal Studies
    {
      id: 20,
      title: "Diploma in Fashion and Design",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description:
        "Professional training in fashion design and garment production.",
      image: "/hospitality.jpg",
    },
    {
      id: 21,
      title: "Certificate in Fashion and Design",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description: "Certificate in fashion design and creation.",
      image: "/hospitality.jpg",
    },
    {
      id: 22,
      title: "Artisan in Garment Making",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description: "Practical training in garment making and tailoring.",
      image: "/hospitality.jpg",
    },
    {
      id: 23,
      title: "Diploma in Hair Dressing and Beauty Therapy",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description:
        "Professional training in hair dressing and beauty therapy services.",
      image: "/hospitality.jpg",
    },
    {
      id: 24,
      title: "Certificate in Hair Dressing and Beauty Therapy",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description: "Certificate in hair dressing and beauty therapy.",
      image: "/hospitality.jpg",
    },
    {
      id: 25,
      title: "Artisan in Hair Dressing and Beauty Therapy",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description: "Practical training in hair dressing and beauty services.",
      image: "/hospitality.jpg",
    },
    {
      id: 26,
      title: "Diploma in Early Childhood Development Education (ECDE)",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description:
        "Professional training in early childhood education and development.",
      image: "/hospitality.jpg",
    },
    {
      id: 27,
      title: "Diploma in Social Work and Community Development",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description:
        "Training in social work and community development strategies.",
      image: "/hospitality.jpg",
    },
    {
      id: 28,
      title: "Certificate in Social Work",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description: "Certificate in social work practices and ethics.",
      image: "/hospitality.jpg",
    },
    {
      id: 29,
      title: "Certificate in Community Development",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description: "Certificate in community development and organization.",
      image: "/hospitality.jpg",
    },
    {
      id: 30,
      title: "Diploma in Counseling and Psychology",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description:
        "Professional training in counseling and psychological practice.",
      image: "/hospitality.jpg",
    },
    {
      id: 31,
      title: "Diploma in Information Science",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description: "Training in information science and management.",
      image: "/hospitality.jpg",
    },
    {
      id: 32,
      title: "Certificate in Library Science and Record Management",
      school: "School of Hospitality and Liberal Studies",
      category: "hospitality",
      description: "Certificate in library science and records management.",
      image: "/hospitality.jpg",
    },
    // School of Engineering and Building
    {
      id: 33,
      title: "Diploma in Electrical Engineering",
      school: "School of Engineering and Building",
      category: "engineering",
      description:
        "Advanced training in electrical systems and power engineering.",
      image: "/engeneering.jpg",
    },
    {
      id: 34,
      title: "Certificate in Electrical Engineering",
      school: "School of Engineering and Building",
      category: "engineering",
      description:
        "Certificate in electrical engineering fundamentals and practices.",
      image: "/engeneering.jpg",
    },
    {
      id: 35,
      title: "Artisan in Electrical Engineering",
      school: "School of Engineering and Building",
      category: "engineering",
      description:
        "Practical training in electrical installation and maintenance.",
      image: "/engeneering.jpg",
    },
    {
      id: 36,
      title: "Diploma in Civil Engineering",
      school: "School of Engineering and Building",
      category: "engineering",
      description:
        "Professional training in civil engineering design and construction.",
      image: "/engeneering.jpg",
    },
    {
      id: 37,
      title: "Diploma in Building Technology",
      school: "School of Engineering and Building",
      category: "engineering",
      description: "Training in building technology and construction methods.",
      image: "/engeneering.jpg",
    },
    {
      id: 38,
      title: "Certificate in Building Technology",
      school: "School of Engineering and Building",
      category: "engineering",
      description: "Certificate in building technology and design.",
      image: "/engeneering.jpg",
    },
    {
      id: 39,
      title: "Diploma in Quantity Survey",
      school: "School of Engineering and Building",
      category: "engineering",
      description: "Training in quantity surveying and cost estimation.",
      image: "/engeneering.jpg",
    },
    {
      id: 40,
      title: "Artisan in Masonry",
      school: "School of Engineering and Building",
      category: "engineering",
      description: "Practical training in masonry and bricklaying.",
      image: "/engeneering.jpg",
    },
    {
      id: 41,
      title: "Diploma in Water Technology",
      school: "School of Engineering and Building",
      category: "engineering",
      description: "Training in water engineering and management systems.",
      image: "/engeneering.jpg",
    },
    {
      id: 42,
      title: "Certificate in Plumbing",
      school: "School of Engineering and Building",
      category: "engineering",
      description: "Certificate in plumbing systems and installation.",
      image: "/engeneering.jpg",
    },
    {
      id: 43,
      title: "Artisan in Plumbing",
      school: "School of Engineering and Building",
      category: "engineering",
      description:
        "Practical training in plumbing installation and maintenance.",
      image: "/engeneering.jpg",
    },
    {
      id: 44,
      title: "Diploma in Welding and Fabrication",
      school: "School of Engineering and Building",
      category: "engineering",
      description: "Professional training in welding and metal fabrication.",
      image: "/engeneering.jpg",
    },
    {
      id: 45,
      title: "Diploma in Information Communication Technology (ICT)",
      school: "School of Engineering and Building",
      category: "engineering",
      description: "Advanced training in ICT systems and networks.",
      image: "/engeneering.jpg",
    },
    {
      id: 46,
      title: "Artisan in Welding and Fabrication",
      school: "School of Engineering and Building",
      category: "engineering",
      description: "Practical training in welding techniques and fabrication.",
      image: "/engeneering.jpg",
    },
    {
      id: 47,
      title: "Certificate in Information Communication Technology (ICT)",
      school: "School of Engineering and Building",
      category: "engineering",
      description: "Certificate in ICT fundamentals and computer systems.",
      image: "/engeneering.jpg",
    },
    // School of Health and Applied Sciences
    {
      id: 48,
      title: "Healthcare Assistant (Certified Nursing Assistant)",
      school: "School of Health and Applied Sciences",
      category: "health",
      description: "Training in healthcare assistance and nursing support.",
      image: "/healthcare.jpg",
    },
    {
      id: 49,
      title: "Perioperative Theatre Technology Diploma",
      school: "School of Health and Applied Sciences",
      category: "health",
      description: "Professional training in operating theatre technology.",
      image: "/healthcare.jpg",
    },
    {
      id: 50,
      title: "Perioperative Theatre Technology Certificate",
      school: "School of Health and Applied Sciences",
      category: "health",
      description: "Certificate in theatre technology and operations.",
      image: "/healthcare.jpg",
    },
    {
      id: 51,
      title: "Health Services Support Artisan",
      school: "School of Health and Applied Sciences",
      category: "health",
      description: "Practical training in health services support.",
      image: "/healthcare.jpg",
    },
    {
      id: 52,
      title: "Health Services Support Certificate (Level 5)",
      school: "School of Health and Applied Sciences",
      category: "health",
      description: "Certificate in health services support at Level 5.",
      image: "/healthcare.jpg",
    },
    {
      id: 53,
      title: "Community Health Certificate (Level 5)",
      school: "School of Health and Applied Sciences",
      category: "health",
      description: "Certificate in community health practices at Level 5.",
      image: "/healthcare.jpg",
    },
    {
      id: 54,
      title: "Community Health Diploma (Level 6)",
      school: "School of Health and Applied Sciences",
      category: "health",
      description: "Diploma in community health at Level 6.",
      image: "/healthcare.jpg",
    },
    {
      id: 55,
      title: "Homecare Management Certificate (Level 5)",
      school: "School of Health and Applied Sciences",
      category: "health",
      description: "Certificate in homecare management at Level 5.",
      image: "/healthcare.jpg",
    },
    {
      id: 56,
      title: "Homecare Management Diploma (Level 6)",
      school: "School of Health and Applied Sciences",
      category: "health",
      description: "Diploma in homecare management at Level 6.",
      image: "/healthcare.jpg",
    },
    {
      id: 57,
      title: "Nutrition and Dietetics Management Certificate (Level 5)",
      school: "School of Health and Applied Sciences",
      category: "health",
      description:
        "Certificate in nutrition and dietetics management at Level 5.",
      image: "/healthcare.jpg",
    },
    {
      id: 58,
      title: "Applied Biology Diploma",
      school: "School of Health and Applied Sciences",
      category: "health",
      description: "Diploma in applied biology and laboratory sciences.",
      image: "/healthcare.jpg",
    },
    // School of Business and ICT
    {
      id: 59,
      title: "Diploma in Tours and Travel Management",
      school: "School of Business and ICT",
      category: "business",
      description: "Professional training in tourism and travel management.",
      image: "/business.jpg",
    },
    {
      id: 60,
      title: "Certificate in Tours and Travel Management",
      school: "School of Business and ICT",
      category: "business",
      description: "Certificate in tourism and travel services.",
      image: "/business.jpg",
    },
    {
      id: 61,
      title: "Diploma in Catering and Accommodation Management",
      school: "School of Business and ICT",
      category: "business",
      description:
        "Professional training in catering and hospitality management.",
      image: "/business.jpg",
    },
    {
      id: 62,
      title: "Certificate in Catering and Accommodation Manager",
      school: "School of Business and ICT",
      category: "business",
      description: "Certificate in catering and accommodation services.",
      image: "/business.jpg",
    },
    {
      id: 63,
      title: "Diploma in Food and Beverage Production",
      school: "School of Business and ICT",
      category: "business",
      description: "Training in food and beverage production management.",
      image: "/business.jpg",
    },
    {
      id: 64,
      title: "Certificate in Food and Beverage Production",
      school: "School of Business and ICT",
      category: "business",
      description: "Certificate in food and beverage production.",
      image: "/business.jpg",
    },
    {
      id: 65,
      title: "Artisan in Food and Beverage Production",
      school: "School of Business and ICT",
      category: "business",
      description: "Practical training in food and beverage production.",
      image: "/business.jpg",
    },
    {
      id: 66,
      title: "Certificate in Pastry",
      school: "School of Business and ICT",
      category: "business",
      description: "Certificate in pastry making and baking.",
      image: "/business.jpg",
    },
    {
      id: 67,
      title: "Diploma in Business Management",
      school: "School of Business and ICT",
      category: "business",
      description:
        "Professional training in business management and operations.",
      image: "/business.jpg",
    },
    {
      id: 68,
      title: "Certificate in Business Management",
      school: "School of Business and ICT",
      category: "business",
      description: "Certificate in business management principles.",
      image: "/business.jpg",
    },
    {
      id: 69,
      title: "Diploma in Co-operative Management",
      school: "School of Business and ICT",
      category: "business",
      description: "Training in cooperative organization and management.",
      image: "/business.jpg",
    },
    {
      id: 70,
      title: "Certificate in Cooperative Management",
      school: "School of Business and ICT",
      category: "business",
      description: "Certificate in cooperative management.",
      image: "/business.jpg",
    },
    {
      id: 71,
      title: "Diploma in Secretarial Studies",
      school: "School of Business and ICT",
      category: "business",
      description:
        "Professional training in secretarial and office management.",
      image: "/business.jpg",
    },
    {
      id: 72,
      title: "Certificate in Secretarial Studies",
      school: "School of Business and ICT",
      category: "business",
      description: "Certificate in secretarial skills and administration.",
      image: "/business.jpg",
    },
    {
      id: 73,
      title: "Diploma in Human Resource Management",
      school: "School of Business and ICT",
      category: "business",
      description: "Training in human resource management and development.",
      image: "/business.jpg",
    },
    {
      id: 74,
      title: "Certificate in Human Resource Management",
      school: "School of Business and ICT",
      category: "business",
      description: "Certificate in human resource management.",
      image: "/business.jpg",
    },
    {
      id: 75,
      title: "Diploma in Purchasing and Supply Chain Management",
      school: "School of Business and ICT",
      category: "business",
      description: "Training in purchasing and supply chain operations.",
      image: "/business.jpg",
    },
    {
      id: 76,
      title: "Certificate in Purchasing and Supply Chain Management",
      school: "School of Business and ICT",
      category: "business",
      description: "Certificate in purchasing and supply chain management.",
      image: "/business.jpg",
    },
    {
      id: 77,
      title: "Diploma in Accountancy",
      school: "School of Business and ICT",
      category: "business",
      description:
        "Professional training in accounting and financial management.",
      image: "/business.jpg",
    },
  ],

  testimonials: [
    {
      name: "Brian Kiprotich",
      role: "Student",
      program: "Animal Health",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      quote:
        "Studying Animal Health at AITEC has been a great experience. The practical training and supportive lecturers have helped me gain real confidence in my skills.",
    },
    {
      name: "Mercy Wanjiku",
      role: "Student",
      program: "Information Technology",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      quote:
        "AITEC provides a friendly learning environment and modern computer labs. I have learned practical IT skills that are preparing me for the job market.",
    },
    {
      name: "Peter Otieno",
      role: "Lecturer",
      program: "Electrical Engineering",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      quote:
        "Teaching at AITEC allows us to focus on practical skills and mentorship. Our goal is to equip students with knowledge that can be applied directly in industry.",
    },
    {
      name: "Grace Chebet",
      role: "Administrative Staff",
      program: "Student Affairs",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      quote:
        "At AITEC we strive to support students throughout their academic journey. Seeing our students succeed after graduation is the most rewarding part of our work.",
    },
  ],

  categories: [
    { id: "all", label: "All Programs" },
    { id: "signet", label: "Signet Institute Australia" },
    { id: "agriculture", label: "Animal Health & Agriculture" },
    { id: "hospitality", label: "Hospitality & Liberal Studies" },
    { id: "engineering", label: "Engineering & Building" },
    { id: "health", label: "Health & Applied Sciences" },
    { id: "business", label: "Business & ICT" },
  ],

  galleryCategories: [
    { id: "all", label: "All" },
    { id: "campus", label: "Campus" },
    { id: "facilities", label: "Facilities" },
    { id: "student-life", label: "Student Life" },
    { id: "events", label: "Events" },
  ],

  documentCategories: [
    { id: "all", label: "All Documents" },
    { id: "brochure", label: "Brochures" },
    { id: "courses", label: "Course Guides" },
  ],

  blogCategories: [
    { id: "all", label: "All Posts" },
    { id: "research", label: "Research" },
    { id: "student-life", label: "Student Life" },
    { id: "careers", label: "Careers" },
    { id: "news", label: "News" },
    { id: "admissions", label: "Admissions" },
  ],

  events: [
    {
      id: 3,
      title: "May 2026 Intake In Progress",
      date: "March 25-26, 2025",
      time: "All Day",
      location: "Innovation Lab",
      type: "students",
      description:
        "Join us for our May intake enrollment, where prospective students can meet faculty, tour the campus, and learn about our programs and scholarships.",
      image: "/kmtc2.jpg",
      status: "upcoming",
    },
  ],
};
