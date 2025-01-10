import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Campaign Creator",
      image: "/img.png",
      quote:
        "Sajha Setu made it incredibly easy to launch my fundraising campaign. The support from the community was overwhelming!",
      project: "Clean Water Initiative",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Donor",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "I love how transparent the platform is. It's gratifying to see the direct impact of my contributions.",
      project: "Tech Education for Youth",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Nonprofit Director",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Sajha Setu has revolutionized how we approach fundraising. It's now an integral part of our outreach strategy.",
      project: "Animal Shelter Expansion",
    },
    {
      id: 4,
      name: "David Okafor",
      role: "Beneficiary",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Thanks to the generosity of donors on Sajha Setu, I was able to afford my medical treatment. I'm forever grateful.",
      project: "Medical Fund",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Community Leader",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Sajha Setu has brought our community closer together. We've funded several local projects that have made a real difference.",
      project: "Community Garden",
    },
    {
      id: 6,
      name: "Raj Patel",
      role: "Small Business Owner",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "When my business was struggling, the support I received through Sajha Setu was a lifeline. It's more than just a platform; it's a community.",
      project: "Local Business Revival",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Testimonials</h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          Hear from our community members about their experiences with Sajha
          Setu. These stories showcase the power of collective action and the
          impact of your support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Share Your Story
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
