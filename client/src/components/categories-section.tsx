"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/lib/home";

export function CategoriesSection() {
  const [serverCategories, setServerCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await categories();
      setServerCategories(response);
    };
    fetchData();
  }, []);

  return (
    <section className="py-12 bg-gray-50 max-w-7xl mx-auto px-2">
      <div className="px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {serverCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 cursor-pointer"
            >
              <Link
                href={`/category/${category.id}`}
                className="p-4 rounded-full bg-green-100"
              >
                {/* <category.icon className="h-6 w-6 text-green-600" /> */}
              </Link>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
