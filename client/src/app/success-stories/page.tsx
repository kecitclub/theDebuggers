import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import SuccessStoryCard from "@/components/success-story-card";
import { Button } from "@/components/ui/button";

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      title: "New School in Rural Village",
      description:
        "Thanks to community support, we built a school serving 500 children.",
      image: "/img.png",
      raised: 50000,
      goal: 45000,
      backers: 1250,
    },
    {
      id: 2,
      title: "Clean Water Project",
      description:
        "Provided clean water access to over 1000 families in drought-affected areas.",
      image: "/img.png",
      raised: 30000,
      goal: 25000,
      backers: 800,
    },
    {
      id: 3,
      title: "Women's Empowerment Initiative",
      description:
        "Funded vocational training for 200 women, enabling financial independence.",
      image: "/img.png",
      raised: 20000,
      goal: 20000,
      backers: 600,
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Success Stories
          </h1>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Discover the incredible impact our community has made through
            successful campaigns. These stories showcase the power of collective
            action and generosity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stories.map((story) => (
              <SuccessStoryCard key={story.id} {...story} />
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Start Your Own Campaign
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
