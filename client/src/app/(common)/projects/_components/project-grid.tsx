"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProjectCard } from "./project-card";
import api from "@/lib/axios";
import { useEffect, useState } from "react";

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "raised-high", label: "Most Raised" },
  { value: "raised-low", label: "Least Raised" },
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
  // const projects = await fetchProjects();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await api.get("/proposals");
      setProjects(response.data.data);
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(project.category_id)
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
      const projectDate = new Date(project.created_at);
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
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      case "raised-high":
        return b.raised - a.raised;
      case "raised-low":
        return a.raised - b.raised;
      default: // "newest"
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
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
