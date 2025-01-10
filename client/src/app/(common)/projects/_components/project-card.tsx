import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
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
    id,
    title,
    description,
    image,
    category,
    status,
    raised,
    goal,
    createdAt,
}: ProjectCardProps) {
    const progress = (raised / goal) * 100;
    const formattedDate = new Date(createdAt).toLocaleDateString();

    return (
        <>
            <Card className="overflow-hidden">
                <Link href="#">
                    <div className="flex items-center  my-2">
                        <Badge className="capitalize bg-[#FF9800] mx-2 ">{category}</Badge>
                        <Badge
                            variant={status === "completed" ? "secondary" : "default"}
                            className="capitalize"
                        >
                            {status}
                        </Badge>
                    </div>
                    <div className="relative aspect-video">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                        />
                    </div>
                </Link>
                <CardHeader>
                    <Link href="#" className="hover:underline">
                        <h3 className="text-xl font-semibold">
                            {title.length > 20 ? title.trim().slice(0, 20) : title.trim()}
                        </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        {description.length > 50
                            ? description.trim().slice(0, 50)
                            : description.trim()}
                    </p>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <Progress value={progress} />
                        <div className="flex justify-between text-sm">
                            <span className="font-medium">
                                ${raised.toLocaleString()} raised
                            </span>
                            <span className="text-muted-foreground">
                                of ${goal.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                        Started {formattedDate}
                    </span>
                    <Button
                        className="
        bg-green-600 hover:bg-green-700 
        
        "
                    >
                        Support Project
                    </Button>
                </CardFooter>
            </Card>

        </>
    );
}