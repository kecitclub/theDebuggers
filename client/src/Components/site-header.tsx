import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto  container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-green-600">EK Kadam</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/projects" className="text-sm font-medium">
            Projects
          </Link>
          <Link href="/start" className="text-sm font-medium">
            Start a Project
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex">
            Sign In
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">Join</Button>
        </div>
      </div>
    </header>
  );
}
