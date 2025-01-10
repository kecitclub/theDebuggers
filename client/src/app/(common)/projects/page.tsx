"use client";

import { useState } from "react";
import { ProjectGrid } from "./_components/project-grid";
import { ProjectFilters } from "./_components/project-filters";

export default function ProjectsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Projects
          </h1>
          <p className="mt-2 text-muted-foreground">
            Discover and support community projects that make a difference
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <ProjectFilters
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedStatuses={selectedStatuses}
            setSelectedStatuses={setSelectedStatuses}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <ProjectGrid
            selectedCategories={selectedCategories}
            selectedStatuses={selectedStatuses}
            selectedDate={selectedDate}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
      </div>
    </div>
  );
}
