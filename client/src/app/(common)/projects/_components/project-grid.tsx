"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProjectCard } from "./project-card";

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "raised-high", label: "Most Raised" },
  { value: "raised-low", label: "Least Raised" },
];

// Mock project data
const projects = [
  {
    id: "1",
    title: "Local School Renovation",
    description:
      "Help us renovate the local elementary school to provide better education facilities for our children.",
    image: "/placeholder.svg?height=400&width=600",
    category: "education",
    status: "active",
    raised: 25000,
    goal: 50000,
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    title: "Community Garden Initiative",
    description:
      "Creating a sustainable community garden to promote healthy eating and environmental awareness.",
    image: "/placeholder.svg?height=400&width=600",
    category: "environment",
    status: "funding",
    raised: 15000,
    goal: 30000,
    createdAt: "2024-01-05",
  },
  {
    id: "3",
    title: "Healthcare for All",
    description:
      "Supporting accessible healthcare services for underprivileged communities.",
    image: "/placeholder.svg?height=400&width=600",
    category: "health",
    status: "completed",
    raised: 100000,
    goal: 100000,
    createdAt: "2023-12-15",
  },
  // Add more projects as needed
];

interface ProjectGridProps {
  selectedCategories: string[];
  selectedStatuses: string[];
  selectedDate: Date | undefined;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

export function ProjectGrid({
  selectedCategories,
  selectedStatuses,
  selectedDate,
  sortBy,
  setSortBy,
}: ProjectGridProps) {
  const filteredProjects = projects.filter((project) => {
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(project.category)
    ) {
      return false;
    }
    if (
      selectedStatuses.length > 0 &&
      !selectedStatuses.includes(project.status)
    ) {
      return false;
    }
    if (selectedDate) {
      const projectDate = new Date(project.createdAt);
      if (projectDate.toDateString() !== selectedDate.toDateString()) {
        return false;
      }
    }
    return true;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "oldest":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "raised-high":
        return b.raised - a.raised;
      case "raised-low":
        return a.raised - b.raised;
      default: // "newest"
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {sortedProjects.length} projects
        </p>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
