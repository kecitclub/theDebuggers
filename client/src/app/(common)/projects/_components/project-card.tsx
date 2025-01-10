import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
  raised: number;
  goal: number;
  createdAt: string;
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  status,
  raised,
  goal,
}: ProjectCardProps) {
  const progress = (raised / goal) * 100;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-48 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <Badge
            variant={
              status === "completed"
                ? "default"
                : status === "active"
                ? "secondary"
                : "destructive"
            }
          >
            {status}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-2">
          <Progress value={progress} className="h-2 w-full" />
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">${raised.toLocaleString()}</span>
            <span className="text-muted-foreground">
              raised of ${goal.toLocaleString()}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
