import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 text-transparent bg-clip-text">EK Kadam</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {["Home", "Projects", "Start a Project", "Success Stories", "Testimonials", "Contact Us"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex hover:bg-green-100 hover:text-green-600">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-green-600 to-indigo-600 text-white hover:from-green-700 hover:to-indigo-700 transition-all duration-300">
              Join
            </Button>
            <Button variant="ghost" className="md:hidden" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}