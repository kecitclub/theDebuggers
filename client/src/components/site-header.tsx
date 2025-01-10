import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header
      className="sticky p-2 top-0 bg-indigo-50
 z-20 shadow-md"
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto  px-2">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-green-600">EK Kadam</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-lg font-medium">
            Home
          </Link>
          <Link href="/projects" className="text-lg font-medium">
            Projects
          </Link>
          <Link href="/apply-proposal" className="text-lg font-medium">
            Start a Project
          </Link>
          <Link href="/success-stories" className="text-lg font-medium">
            Success Stories
          </Link>
          <Link href="/testimonials" className="text-lg font-medium">
            Testimonials
          </Link>
          <Link href="/contact" className="text-lg font-medium">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden w-20 md:flex">
            Sign In
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 w-20">Join</Button>
        </div>
      </div>
    </header>
  );
}