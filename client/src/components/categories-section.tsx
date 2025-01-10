import { Leaf, Heart, GraduationCap, Droplets } from "lucide-react";

export function CategoriesSection() {
  const categories = [
    { icon: Leaf, label: "Environment" },
    { icon: Heart, label: "Health" },
    { icon: GraduationCap, label: "Education" },
    { icon: Droplets, label: "Water" },
  ];

  return (
    <section className="py-12 bg-gray-50 max-w-7xl mx-auto px-2">
      <div className="px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 cursor-pointer"
            >
              <div className="p-4 rounded-full bg-green-100">
                <category.icon className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm font-medium">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
