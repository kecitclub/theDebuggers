import { Star, Heart, Users, Calendar, CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const testimonials = [
  {
    name: "Kumar Ojha",
    role: "Community Leader",
    project: "Green Space Initiative",
    image: "/profile1.jpg",
    quote:
      "We are incredibly grateful for the overwhelming support from our community. The impact of this project has transformed our neighborhood and created lasting change.",
    rating: 5,
    projectProgress: 100,
    impactMetric: "2,500 trees planted",
    completionDate: "June 2024",
  },
  {
    name: "Gayatri Bhandari",
    role: "Local Entrepreneur",
    project: "Youth Empowerment Program",
    image: "/profile2.jpg",
    quote:
      "EkKadam's support has been instrumental in launching our youth program. We've seen remarkable growth in confidence and skills among our participants.",
    rating: 5,
    projectProgress: 100,
    impactMetric: "100+ youth trained",
    completionDate: "December 2024",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Impact Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span>{testimonial.project}</span>
                  <Badge variant="outline" className="ml-2 bg-green-600">
                    {testimonial.completionDate}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">
                        Project Progress
                      </span>
                      <span className="text-sm font-medium">
                        {testimonial.projectProgress}%
                      </span>
                    </div>
                    <Progress
                      value={testimonial.projectProgress}
                      className="h-2"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1 text-red-500" />
                      <span>{testimonial.impactMetric}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-blue-500" />
                      <span>Community-driven</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-green-500" />
                      <span>{testimonial.completionDate}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg font-medium flex items-center justify-center">
            <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
            Join us in making a difference, one step at a time
          </p>
        </div>
      </div>
    </section>
  );
}
