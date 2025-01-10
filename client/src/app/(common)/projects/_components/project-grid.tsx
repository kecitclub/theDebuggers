"use client"

import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ProjectCard } from "./project-card"

const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "raised-high", label: "Most Raised" },
    { value: "raised-low", label: "Least Raised" },
]

// Mock project data
const projects = [
    {
        id: "1",
        title: "Local School Renovation",
        description: "Help us renovate the local elementary school to provide better education facilities for our children.",
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
        description: "Creating a sustainable community garden to promote healthy eating and environmental awareness.",
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
        description: "Supporting accessible healthcare services for underprivileged communities.",
        image: "/placeholder.svg?height=400&width=600",
        category: "health",
        status: "completed",
        raised: 100000,
        goal: 100000,
        createdAt: "2023-12-15",
    },
    // Add more projects as needed
]

export function ProjectGrid() {
    const [sortBy, setSortBy] = useState("newest")

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                    Showing {projects.length} projects
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
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>
        </div>
    )
}