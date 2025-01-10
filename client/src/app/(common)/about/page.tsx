import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
            <div className="relative w-48 h-48 mx-auto">
              <Image
                src="/images/Logo.jpg"
                alt="EK KADAM Logo"
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Mission Statement */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                EK KADAM is dedicated to transforming lives through community-driven crowdfunding. We believe that every small step - 'Ek Kadam' - towards solving local problems can create ripples of positive change in society. Our platform connects compassionate donors with meaningful causes, making collective impact possible.
              </p>
            </CardContent>
          </Card>

          {/* Vision Section */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where community support knows no boundaries. Through EK KADAM, we aim to create a transparent, efficient, and trusted platform where every individual can contribute to social causes and make a difference in socity development.
              </p>
            </CardContent>
          </Card>

          {/* Values Section */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-700">Transparency</h3>
                  <p className="text-gray-600">
                    We maintain complete transparency in all our operations and fund utilization.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-700">Community First</h3>
                  <p className="text-gray-600">
                    We prioritize community needs and encourage collective participation.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-700">Trust</h3>
                  <p className="text-gray-600">
                    We build and maintain trust through verified campaigns and regular updates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Section */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Impact</h2>
              <p className="text-gray-600 leading-relaxed">
                Since our inception, EK KADAM has been instrumental in bringing positive change to countless local projects. Through our platform, we've enabled communities to support various causes, from education and healthcare  and environmental conservation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

