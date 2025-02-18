import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  excerpt: string;
  thumbnail: string;
  category: string;
  slug: string;
  raised: number;
  goal: number;
}

export function ProjectCard({
  title,
  excerpt,
  category,
  slug,
  thumbnail,
  raised,
  goal,
}: ProjectCardProps) {
  const imageurl = process.env.NEXT_PUBLIC_API_URL + "/storage/" + thumbnail;
  const progress = (raised / goal) * 100;

  return (
    <div className="max-w-7xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="relative h-48 w-full">
        <Image
          src={imageurl}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <Badge className="bg-gray-600 mx-3 mt-2">{category}</Badge>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{excerpt}</p>
        <Progress value={progress} className="my-4" />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="font-semibold">${raised.toLocaleString()}</span>{" "}
            raised
          </div>
          <Link href={`/projects/${slug}`}>
            <Button className="bg-green-600 hover:bg-green-700">Support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
