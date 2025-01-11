"use client";
import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
// import { CategoriesSection } from "@/components/categories-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { trandingProposals } from "@/lib/home";
import { useEffect, useState } from "react";

const getTrandingPorposals = async () => {
  const response = await trandingProposals();
  return response.data;
};

export default function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getTrandingPorposals().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="">
        <HeroSection />
        <section className=" md:px-6 py-12 max-w-7xl mx-auto px-2">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Trending Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </section>
        {/* <CategoriesSection /> */}
        <TestimonialSection />
      </main>
      <SiteFooter />
    </>
  );
}
