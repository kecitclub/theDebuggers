import { Star } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="py-12">
      <div className="px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Impact Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="flex flex-col space-y-4 p-6 rounded-lg border"
            >
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                "We are incredibly grateful for the overwhelming support from
                our community. The impact of this project has transformed lives
                and created lasting change."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <p className="text-sm font-medium">Community Member</p>
                  <p className="text-sm text-gray-500">Local Project</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
