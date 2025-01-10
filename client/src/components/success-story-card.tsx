import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users } from "lucide-react";

interface SuccessStoryCardProps {
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  backers: number;
}

export default function SuccessStoryCard({
  title,
  description,
  image,
  raised,
  goal,
  backers,
}: SuccessStoryCardProps) {
  const percentage = Math.min((raised / goal) * 100, 100);

  return (
    <Card className="overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full object-cover h-48"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Progress value={percentage} className="h-2 mb-2" />
        <div className="flex justify-between text-sm text-gray-600">
          <span>${raised.toLocaleString()} raised</span>
          <span>
            {percentage.toFixed(0)}% of ${goal.toLocaleString()}
          </span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 flex items-center justify-between">
        <div className="flex items-center">
          <Users size={16} className="text-gray-500 mr-2" />
          <span className="text-sm text-gray-600">{backers} backers</span>
        </div>
        <span className="text-sm font-semibold text-green-600">Successful</span>
      </CardFooter>
    </Card>
  );
}
