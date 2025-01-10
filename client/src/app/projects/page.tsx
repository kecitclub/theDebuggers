import { ProjectGrid } from "./_components/project-grid";
import { ProjectFilters } from "./_components/project-filter";

export default function ProjectsPage() {
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
                    <ProjectFilters />
                    <ProjectGrid />
                </div>
            </div>
        </div>
    );
}