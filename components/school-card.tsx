import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SchoolCardProps {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export function SchoolCard({
  name,
  slug,
  description,
  image,
}: SchoolCardProps) {
  return (
    <Link href={`/programs/${slug}`} className="group">
      <div className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all h-full bg-card flex flex-col">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={image || "/images/placeholder.jpg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground flex-1 line-clamp-3 mb-4">
            {description}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </Link>
  );
}
