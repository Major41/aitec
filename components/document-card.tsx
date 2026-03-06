"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentCardProps {
  title: string;
  description: string;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
  icon: string;
}

export function DocumentCard({
  title,
  description,
  fileSize,
  fileType,
  downloadUrl,
  icon,
}: DocumentCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                {fileType}
              </span>
              <span className="text-xs text-muted-foreground">{fileSize}</span>
            </div>
            <Button
              asChild
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href={downloadUrl} download>
                <Download size={16} className="mr-2" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
