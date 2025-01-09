import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { CategoriesSection } from "@/components/categories-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  const projects = [
    {
      title: "Rural School Development",
      description: "Supporting education in rural communities through infrastructure development.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 15000,
      goal: 25000,
    },
    {
      title: "Community Health Center",
      description: "Bringing healthcare services closer to underserved communities.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 28000,
      goal: 50000,
    },
    {
      title: "Clean Water Project",
      description: "Providing access to clean and safe drinking water.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 12000,
      goal: 20000,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <section className="container px-4 md:px-6 py-12">
          <h2 className="text-2xl font-bold mb-8">Trending Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </section>
        <CategoriesSection />
        <TestimonialSection />
      </main>
      <SiteFooter />
    </div>
  )
}

