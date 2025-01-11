import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Target } from "lucide-react";

export function InfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose EkKadam?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2 h-6 w-6 text-green-500" />
                Innovative Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We foster creative and sustainable approaches to community
                development, encouraging innovative ideas that make a real
                difference.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6 text-green-500" />
                Community-Driven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our projects are initiated and led by community members,
                ensuring that solutions are tailored to local needs and
                cultures.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-6 w-6 text-green-500" />
                Measurable Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We focus on creating tangible, long-lasting change. Our projects
                have clear goals and metrics to track their success and impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
