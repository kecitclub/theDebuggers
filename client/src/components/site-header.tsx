import Link from "next/link";

import Navbar from "./navbar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 text-transparent bg-clip-text">
              EK Kadam
            </span>
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
