"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Download,
  MapPin,
  Users,
  Facebook,
  Instagram,
  Twitter,
  CalendarDays,
  CheckCircle,
  School,
  Tag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import TimelineTable from "@/components/TimelineTable";
import SupportingDocuments from "@/components/SupportingDocuments";
import ContributionForm from "../../_components/contribution-form";
import { useState } from "react";
export default function ProjectDetail({ projectData }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [showContributionForm, setShowContributionForm] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const progress = (projectData.raised / projectData.goal) * 100;

  const handleContributeClick = () => {
    setShowContributionForm(true);
  };

  const handleContributionSuccess = () => {
    setShowContributionForm(false);
    setShowThankYouMessage(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className={`container mx-auto px-4 py-8 grid gap-8 ${
          activeTab === "overview" ? "grid-cols-[3fr_1fr]" : "grid-cols-1"
        }`}
      >
        <div className="lg:col-span-2">
          <div className="mb-6">
            <span className="flex items-center space-x-2 my-5">
              <Link
                href="/projects"
                className="flex items-center text-blue-600 hover:underline"
              >
                <ArrowLeft className="mr-2 h-7 w-7" />
              </Link>
              <h1 className="text-3xl font-bold">{projectData.title}</h1>
            </span>

            <div className="flex items-center space-x-4">
              <Badge>{projectData.category}</Badge>
              {projectData.urgent && (
                <Badge variant="destructive">Urgent</Badge>
              )}
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-1 h-4 w-4" />
                {projectData.location}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <Progress value={projectData.progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>{projectData.progress}% Complete</span>
              {/* <span>
                Rs.{projectData.estimatedBudget.toLocaleString()} Estimated
                Budget
              </span> */}
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="timelines">Timelines</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold mb-4">
                        {projectData.excerpt}
                      </p>
                      <p className="text-gray-600">{projectData.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Expected Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        {projectData.expected_impact}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="mt-6 mb-6">
                    <CardHeader>
                      <CardTitle>Target Community</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        {projectData.target_community}
                      </p>
                    </CardContent>
                  </Card>

                  {projectData.urgent && (
                    <Card className="mt-6 border-red-500">
                      <CardHeader>
                        <CardTitle className="text-red-500">
                          Why This Project is Urgent
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{projectData.whyUrgent}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div>
                  <Card>
                    <div className="">
                      <CardHeader>
                        <CardTitle>Support this Project</CardTitle>
                      </CardHeader>

                      <CardContent>
                        <div className="mt-4">
                          <Progress value={progress} className="my-4" />
                          <div className="flex items-center justify-between">
                            <div className="text-sm">
                              <span className="font-semibold">
                                ${projectData.raised}
                              </span>{" "}
                              raised out of{" "}
                              <span className="font-semibold">
                                ${projectData.goal}
                              </span>
                            </div>
                            <div className="text-sm">
                              {Math.round(progress)}% raised
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          {!showThankYouMessage ? (
                            <button
                              className="w-full bg-green-600 text-white py-2 rounded shadow hover:bg-green-700 transition"
                              onClick={handleContributeClick}
                            >
                              Contribute Now
                            </button>
                          ) : (
                            <div className="text-center text-green-600 font-semibold">
                              Thank you for your contribution!
                            </div>
                          )}
                        </div>

                        {showContributionForm && (
                          <ContributionForm
                            onSuccess={handleContributionSuccess}
                          />
                        )}
                      </CardContent>
                    </div>
                  </Card>
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Organization Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold">
                        {projectData.organization_name}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Project Timeline</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          Start Date: {projectData.estimated_start_date}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          End Date: {projectData.expected_completion_date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="timelines">
              <TimelineTable timelines={projectData.timelines} />
            </TabsContent>

            {/* <TabsContent value="documents">
              <SupportingDocuments documents={documents} />
            </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
