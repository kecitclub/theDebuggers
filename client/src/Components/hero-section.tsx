import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Together, We Build Better Communities
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Join hands to create positive change in your community
          </p>
          <div className="w-full max-w-sm space-y-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                className="pl-8 rounded-full"
                placeholder="Search projects..."
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
