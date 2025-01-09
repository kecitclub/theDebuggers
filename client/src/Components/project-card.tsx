import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  raised: number
  goal: number
}

export function ProjectCard({ title, description, image, raised, goal }: ProjectCardProps) {
  const progress = (raised / goal) * 100

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <Progress value={progress} className="my-4" />
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="font-semibold">${raised.toLocaleString()}</span> raised
          </div>
          <Button className="bg-green-600 hover:bg-green-700">Support</Button>
        </div>
      </div>
    </div>
  )
}

