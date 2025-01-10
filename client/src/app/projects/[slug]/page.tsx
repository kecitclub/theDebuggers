"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
import ContributionForm from "../_components/contribution-form";

// Mock data for the project details
const projectData = {
    id: "1",
    organizationName: "Educational Scholarships for Underprivileged Children",
    category: "Education",
    thumbnail: "/scholar.png",
    title: "Scholarship Program for Underprivileged Children",
    excerpt: "Provide scholarships and school supplies for children in need.",
    description:
        " Raise funds to provide scholarships and school supplies for children from low-income families.",
    location: "Jumla Nepal",
    targetCommunity: ["Indigenous communities", "Children"],
    expectedImpact:
        "The project aims to provide scholarships to 100 children from low-income families, enabling them to access quality education.",
    urgent: true,
    whyUrgent:
        "The project is urgent because the new school year is starting soon, and we need to provide scholarships to children before the school year begins.",
    estimatedBudget: 500000,
    estimatedStartDate: "2023-09-01",
    expectedCompletionDate: "2025-09-01",
    progress: 65,
    raised: 200000,
    goal: 500000,
};

const timelines = [
    {
        name: "Project Planning",
        startDate: "2023-09-01",
        endDate: "2023-10-31",
        estimatedCost: 50000,
        status: "Completed",
    },
    {
        name: "Fundraising Campaign",
        startDate: "2023-10-01",
        endDate: "2024-03-31",
        estimatedCost: 100000,
        status: "In Progress",
    },
    {
        name: "Scholarship Distribution",
        startDate: "2024-04-01",
        endDate: "2024-09-30",
        estimatedCost: 150000,
        status: "Planned",
    },
    {
        name: "Monitoring and Evaluation",
        startDate: "2025-04-01",
        endDate: "2025-09-30",
        estimatedCost: 150000,
        status: "Planned",
    },
];

const documents = [
    {
        name: "Project Proposal",
        type: "pdf",
        url: "/documents/project-proposal.pdf",
    },
    {
        name: "Budget Breakdown",
        type: "xlsx",
        url: "/documents/budget-breakdown.xlsx",
    },
    {
        name: "Environmental Impact Assessment",
        type: "pdf",
        url: "/documents/environmental-impact.pdf",
    },
];

export default function ProjectDetailsPage() {
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
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div
                    className={`container mx-auto px-4 py-8 grid gap-8 ${activeTab === "overview" ? "grid-cols-[3fr_1fr]" : "grid-cols-1"
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
                                <span>
                                    Rs.{projectData.estimatedBudget.toLocaleString()} Estimated
                                    Budget
                                </span>
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
                                                <p className="text-gray-600">
                                                    {projectData.description}
                                                </p>
                                            </CardContent>
                                        </Card>

                                        <Card className="mt-6">
                                            <CardHeader>
                                                <CardTitle>Expected Impact</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-gray-600">
                                                    {projectData.expectedImpact}
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
                                                    <p className="text-gray-600">
                                                        {projectData.whyUrgent}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        )}
                                    </div>

                                    <div>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Organization Details</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="font-semibold">
                                                    {projectData.organizationName}
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
                                                        Start Date: {projectData.estimatedStartDate}
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                                                    <span className="text-sm text-gray-600">
                                                        End Date: {projectData.expectedCompletionDate}
                                                    </span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <div className="mt-6">
                                            <div className="bg-white p-6 rounded shadow-lg border">
                                                <h2 className="text-xl font-semibold text-gray-800">
                                                    Support This Project
                                                </h2>

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
                                            </div>
                                        </div>
                                        <Card className="mt-6 mb-6">
                                            <CardHeader>
                                                <CardTitle>Target Community</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex flex-wrap gap-2">
                                                    {projectData.targetCommunity.map(
                                                        (community, index) => (
                                                            <Badge key={index} variant="outline">
                                                                <Users className="mr-1 h-4 w-4" />
                                                                {community}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="timelines">
                                <TimelineTable timelines={timelines} />
                            </TabsContent>

                            <TabsContent value="documents">
                                <SupportingDocuments documents={documents} />
                            </TabsContent>
                        </Tabs>

                        <div className="mt-8 flex justify-end space-x-4">
                            <Button variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                Download as PDF
                            </Button>
                            <Button variant="outline">Print</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}