import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Users, Clock } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  image: string;
}

export function ProgramCard({ title, description, duration, students, image }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg h-full">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader>
        <h3 className="text-lg font-bold line-clamp-2">{title}</h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>

        {/* Meta Info */}
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users size={16} />
            <span>{students}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
