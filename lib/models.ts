import mongoose, { Schema, Document } from "mongoose";

// Admin Schema
export interface IAdmin extends Document {
  email: string;
  password: string;
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
  },
  { timestamps: true },
);

// School Schema
export interface ISchool extends Document {
  name: string;
  slug: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const SchoolSchema = new Schema<ISchool>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true },
);

// Course Schema
export interface ICourse extends Document {
  title: string;
  slug: string;
  schoolId: string;
  description: string;
  fullDescription: string;
  images: string[];
  categories: string[];
  duration?: string;
  level?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, lowercase: true },
    schoolId: { type: Schema.Types.ObjectId, ref: "School", required: true },
    description: { type: String, required: true },
    fullDescription: { type: String, required: true },
    images: [{ type: String }],
    categories: [{ type: String, enum: ["Diploma", "Certificate", "Artisan"] }],
    duration: { type: String },
    level: { type: String },
  },
  { timestamps: true },
);

// Program/Course Schema (keeping for backward compatibility)
export interface IProgram extends Document {
  title: string;
  school: string;
  category: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProgramSchema = new Schema<IProgram>(
  {
    title: { type: String, required: true },
    school: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true },
);

// Application Schema
export interface IApplication extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  school: string;
  message: string;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    program: { type: String, required: true },
    school: { type: String, required: true },
    message: { type: String },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

// Gallery Schema
export interface IGalleryImage extends Document {
  title: string;
  description: string;
  image: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const GallerySchema = new Schema<IGalleryImage>(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true },
);

// Blog Schema
export interface IBlog extends Document {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    published: { type: Boolean, default: false },
  },
  { timestamps: true },
);

// Resource Schema
export interface IResource extends Document {
  title: string;
  description: string;
  fileUrl: string;
  fileType: string;
  fileSize: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema = new Schema<IResource>(
  {
    title: { type: String, required: true },
    description: { type: String },
    fileUrl: { type: String, required: true },
    fileType: { type: String, required: true },
    fileSize: { type: String },
    category: { type: String, required: true },
  },
  { timestamps: true },
);

// Sports Schema
export interface ISport extends Document {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const SportSchema = new Schema<ISport>(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

// Facilities Schema
export interface IFacility extends Document {
  name: string;
  description: string;
  image: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const FacilitySchema = new Schema<IFacility>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true },
);

// Export models (with check to prevent re-compilation)
export const Admin =
  mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);
export const School =
  mongoose.models.School || mongoose.model<ISchool>("School", SchoolSchema);
export const Course =
  mongoose.models.Course || mongoose.model<ICourse>("Course", CourseSchema);
export const Program =
  mongoose.models.Program || mongoose.model<IProgram>("Program", ProgramSchema);
export const Application =
  mongoose.models.Application ||
  mongoose.model<IApplication>("Application", ApplicationSchema);
export const GalleryImage =
  mongoose.models.GalleryImage ||
  mongoose.model<IGalleryImage>("GalleryImage", GallerySchema);
export const Blog =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
export const Resource =
  mongoose.models.Resource ||
  mongoose.model<IResource>("Resource", ResourceSchema);
export const Sport =
  mongoose.models.Sport || mongoose.model<ISport>("Sport", SportSchema);
export const Facility =
  mongoose.models.Facility ||
  mongoose.model<IFacility>("Facility", FacilitySchema);
