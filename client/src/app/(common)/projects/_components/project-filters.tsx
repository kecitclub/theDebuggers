"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/lib/home";
import { useEffect, useState } from "react";

// const categories = [
//   { id: "education", label: "Education" },
//   { id: "health", label: "Health" },
//   { id: "environment", label: "Environment" },
//   { id: "community", label: "Community" },
//   { id: "technology", label: "Technology" },
// ];

const customCategories = async () => {
  const response = await categories();
  return response.data;
};

const statuses = [
  { id: "active", label: "Active" },
  { id: "completed", label: "Completed" },
  { id: "funding", label: "Funding" },
];

interface ProjectFiltersProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedStatuses: string[];
  setSelectedStatuses: (statuses: string[]) => void;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}

export function ProjectFilters({
  selectedCategories,
  setSelectedCategories,
  selectedStatuses,
  setSelectedStatuses,
  selectedDate,
  setSelectedDate,
}: ProjectFiltersProps) {
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedStatuses([]);
    setSelectedDate(undefined);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await customCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <Card className="h-fit p-6">
      <div className="space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Filters</h3>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold">Categories</h3>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, category.id]);
                  } else {
                    setSelectedCategories(
                      selectedCategories.filter((id) => id !== category.id)
                    );
                  }
                }}
              />
              <label
                htmlFor={category.id}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold">Status</h3>
          {statuses.map((status) => (
            <div key={status.id} className="flex items-center space-x-2">
              <Checkbox
                id={status.id}
                checked={selectedStatuses.includes(status.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedStatuses([...selectedStatuses, status.id]);
                  } else {
                    setSelectedStatuses(
                      selectedStatuses.filter((id) => id !== status.id)
                    );
                  }
                }}
              />
              <label
                htmlFor={status.id}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {status.label}
              </label>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold">Date</h3>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {selectedDate ? selectedDate.toDateString() : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </Card>
  );
}
