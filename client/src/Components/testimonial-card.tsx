import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  project: string;
}

export default function TestimonialCard({
  name,
  role,
  image,
  quote,
  project,
}: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-grow">
        <div className="flex items-start space-x-4">
          <QuoteIcon className="text-blue-500 mt-1 flex-shrink-0" size={24} />
          <p className="text-gray-700 italic">{quote}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50">
        <p className="text-sm text-gray-600">Project: {project}</p>
      </CardFooter>
    </Card>
  );
}
