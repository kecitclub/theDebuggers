import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CounterAnimation } from "./CounterAnimation";

export function HeroSection() {
  return (
    <>
      <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden flex-grow flex flex-col justify-center items-center">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-indigo-50 to-white"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* SVG Illustrations */}
        <div className="absolute left-0 bottom-0 w-64 h-64 md:w-96 md:h-96 transform -translate-x-1/3 translate-y-1/4 opacity-50">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-float"
          >
            <path
              fill="#15803d"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.3C32.4,86,16.2,88,-0.4,88.7C-17,89.4,-34,88.8,-48.2,81.9C-62.4,75,-73.7,61.8,-79.8,47.2C-85.9,32.6,-86.7,16.3,-84.4,1.3C-82.1,-13.6,-76.7,-27.2,-68.7,-39.2C-60.7,-51.2,-50,-61.5,-37.9,-69.7C-25.8,-77.9,-12.9,-83.9,1.3,-86.1C15.5,-88.3,30.9,-86.7,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 md:w-96 md:h-96 transform translate-x-1/3 -translate-y-1/4 opacity-50">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-float-delayed"
          >
            <path
              fill="#4f46e5"
              d="M45.3,-77.1C58.9,-69.8,70.3,-57.6,79.2,-43.5C88.1,-29.4,94.5,-13.4,93.4,1.7C92.3,16.7,83.7,30.9,74.3,44.3C65,57.7,54.8,70.3,41.6,77.7C28.3,85,14.2,87,-0.3,87.5C-14.8,88,-29.6,87,-42.5,80.6C-55.3,74.2,-66.3,62.3,-74.8,48.8C-83.3,35.3,-89.4,20.2,-91.7,4.1C-93.9,-11.9,-92.4,-28.8,-84.6,-42.6C-76.8,-56.4,-62.8,-67,-47.8,-74.3C-32.8,-81.6,-16.4,-85.5,-0.2,-85.2C16.1,-84.8,32.2,-80.2,45.3,-77.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-green-600 to-indigo-600 text-transparent bg-clip-text">
              Together, We Build Better Communities
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
              EkKadam: A step towards betterment
            </p>
            <div className="w-full max-w-md space-y-4">
              <div className="relative flex items-center">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  className="pl-10 pr-20 py-6 rounded-full text-lg shadow-lg border-2 border-gray-200 focus:border-green-500 transition-all duration-300"
                  placeholder="Search projects..."
                  type="search"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6 py-2 bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white transition-all duration-300">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Counters */}
        <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
          <CounterAnimation
            end={1000000}
            duration={2000}
            label="Funds Gathered"
            prefix="Rs. "
            suffix="+"
          />
          <CounterAnimation
            end={50}
            duration={2000}
            label="Success Stories"
            suffix="+"
          />
          <CounterAnimation
            end={100}
            duration={2000}
            label="Ongoing Proposals"
            suffix="+"
          />
        </div>

        {/* Animated dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/4 top-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          <div className="absolute left-3/4 top-1/2 w-2 h-2 bg-indigo-500 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute left-1/2 bottom-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </section>
    </>
  );
}
