"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";
import Image from "next/image";

interface CloudinaryUploadProps {
  onUpload: (url: string) => void;
  label?: string;
  isMultiple?: boolean;
  onMultipleUpload?: (urls: string[]) => void;
}

export function CloudinaryUpload({
  onUpload,
  label = "Upload Image",
  isMultiple = false,
  onMultipleUpload,
}: CloudinaryUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return;

    setUploading(true);

    try {
      const uploadedUrls: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append("file", file);

        // Upload to our API endpoint which uses Cloudinary credentials
        const response = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        const data = await response.json();
        uploadedUrls.push(data.secure_url);

        if (!isMultiple) {
          setPreview(data.secure_url);
          onUpload(data.secure_url);
          toast.success("Image uploaded successfully");
          break;
        }
      }

      if (isMultiple && uploadedUrls.length > 0) {
        onMultipleUpload?.(uploadedUrls);
        toast.success(`${uploadedUrls.length} image(s) uploaded successfully`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium">{label}</label>

      {preview && !isMultiple && (
        <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted border border-border">
          <Image src={preview} alt="Preview" fill className="object-cover" />
          <button
            type="button"
            onClick={() => setPreview(null)}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        <label className="flex-1">
          <input
            type="file"
            multiple={isMultiple}
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            className="w-full cursor-pointer"
            disabled={uploading}
            asChild
          >
            <span className="flex items-center justify-center gap-2">
              <Upload size={16} />
              {uploading ? "Uploading..." : label}
            </span>
          </Button>
        </label>
      </div>
    </div>
  );
}
