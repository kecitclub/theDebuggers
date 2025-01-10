"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import {
  CalendarDays,
  CheckCircle,
  School,
  Calendar,
  MapPin,
  Tag,
} from "lucide-react";

// Define types for the project data
type Project = {
  title: string;
  subtitle: string;
  description: string;
  bannerImage?: string;
  goal: number;
  raised: number;
  category: string;
  location: string;
  updates: {
    title: string;
    date: string;
    content: string;
  }[];
};

export default function ProjectDetails({
  params,
}: {
  params: { projectId: string };
}) {
  // Using dummy data instead of fetching from an API
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Dummy project data
    const dummyProject: Project = {
      title: "Clean Water Initiative",
      subtitle: "Bringing clean water to communities in need",
      description:
        "This project aims to provide clean and safe drinking water to underserved communities. With your help, we can make a lasting impact on health and well-being.",
      bannerImage: "/img.png", // Replace with a valid image path if needed
      goal: 100000,
      raised: 35000,
      category: "Health",
      location: "Global",
      updates: [
        {
          title: "New Wells Installed",
          date: "2025-01-05",
          content:
            "We have successfully installed 5 new wells in rural areas of Kenya.",
        },
        {
          title: "Community Awareness Campaign",
          date: "2025-01-02",
          content:
            "Our team has launched a community awareness campaign to educate about water sanitation.",
        },
        {
          title: "Partnership with Local NGOs",
          date: "2024-12-30",
          content:
            "We partnered with local NGOs to expand the reach of our project.",
        },
      ],
    };

    // Setting the dummy project data
    setProject(dummyProject);
  }, [params.projectId]);

  if (!project) return <div>Loading...</div>;

  // Calculate progress as percentage
  const progress = (project.raised / project.goal) * 100;

  const updates = [
    {
      id: 1,
      date: "2023-07-01",
      content: "Milestone reached: $500 raised!",
      icon: CheckCircle,
    },
    {
      id: 2,
      date: "2023-07-15",
      content: "First classroom construction started",
      icon: School,
    },
    {
      id: 3,
      date: "2023-08-01",
      content: "Teacher training program launched",
      icon: CalendarDays,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="relative h-72 w-full bg-gray-800 text-white">
        <Image
          src={project.bannerImage || "/default-banner.jpg"}
          alt={project.title}
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold shadow-md bg-black bg-opacity-50 px-4 py-2 rounded">
              {project.title}
            </h1>
            <p className="mt-2 text-lg bg-black bg-opacity-50 px-4 py-1 rounded">
              {project.subtitle}
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded shadow-lg border">
              <h2 className="text-2xl font-semibold text-gray-800">
                About the Project
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {project.description}
              </p>

              {/* Updates Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Project Updates</h3>
                <div className="space-y-4">
                  {updates.map((update, index) => (
                    <div key={update.id} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                        {<update.icon className="text-white" size={20} />}
                      </div>
                      <div className="ml-4 flex-grow">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-gray-600">
                            {update.date}
                          </p>
                          {index !== updates.length - 1 && (
                            <div className="border-l-2 border-blue-200 h-full ml-5 -mb-10"></div>
                          )}
                        </div>
                        <p className="mt-1">{update.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white p-6 rounded shadow-lg border">
              <h2 className="text-xl font-semibold text-gray-800">
                Support This Project
              </h2>

              {/* Progress */}
              <div className="mt-4">
                <Progress value={progress} className="my-4" />
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-semibold">${project.raised}</span>{" "}
                    raised out of{" "}
                    <span className="font-semibold">${project.goal}</span>
                  </div>
                  <div className="text-sm">{Math.round(progress)}% raised</div>
                </div>
              </div>

              <div className="mt-4">
                <button className="w-full bg-green-600 text-white py-2 rounded shadow hover:bg-green-700 transition">
                  Contribute Now
                </button>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-4">Campaign Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="text-blue-500 mr-2" size={20} />
                    <div>
                      <p className="text-sm font-semibold">Start Date</p>
                      <p className="text-sm">Jan 1, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-blue-500 mr-2" size={20} />
                    <div>
                      <p className="text-sm font-semibold">End Date</p>
                      <p className="text-sm">March 31, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Tag className="text-blue-500 mr-2" size={20} />
                    <div>
                      <p className="text-sm font-semibold">Category</p>
                      <p className="text-sm">Education</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-blue-500 mr-2" size={20} />
                    <div>
                      <p className="text-sm font-semibold">Location</p>
                      <p className="text-sm">Rural Communities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white p-6 rounded shadow-lg border">
                <h3 className="text-lg font-semibold text-gray-800">
                  Share This Project
                </h3>
                <div className="mt-4 flex space-x-4">
                  <Facebook />
                  <Instagram />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
