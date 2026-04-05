import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImageToCloudinary(file: File): Promise<string> {
  try {
    return new Promise((resolve, reject) => {
      const buffer = file.stream();
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "aitec",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) reject(error);
          if (result?.secure_url) resolve(result.secure_url);
        },
      );

      buffer.pipe(uploadStream);
    });
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw new Error("Failed to upload image");
  }
}

export function getCloudinaryUrl(
  publicId: string,
  options?: Record<string, any>,
): string {
  return cloudinary.url(publicId, {
    secure: true,
    ...options,
  });
}
