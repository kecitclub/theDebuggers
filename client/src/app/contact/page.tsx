'use client'

import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <div className="container mx-auto px-4 pt-8 lg:pt-12">
                <div className="flex flex-col gap-2">
                   
                    <h1 className="text-4xl text-center font-bold">Contact</h1>
                </div>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="order-2 lg:order-1">
                        {/* Contact Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <Card className="bg-blue-50 border-none">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Office Location</h3>
                                    <p className="text-sm text-muted-foreground">
                                       Kathmandu,Nepal
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-pink-50 border-none">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Contact Us</h3>
                                    <p className="text-sm text-muted-foreground">
                                        083-524182<br />
                                        9848582530
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-sky-50 border-none">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mb-4">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Email Address</h3>
                                    <p className="text-sm text-muted-foreground">
                                        info@Ekkadam.com<br />
                                        support@Ekkadam.com
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                            <p className="text-muted-foreground mb-6">
                            We’d Love to Hear from You!
                            Whether you have questions, ideas, or feedback about our fundraising initiatives, we’re here to help. Fill out the form below, and we’ll get back to you as soon as possible. Together, let’s make a difference!                            </p>
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input placeholder="Your Name" />
                                    <Input placeholder="Phone Number" type="tel" />
                                </div>
                                <Input placeholder="Email Address" type="email" />
                                <Textarea
                                    placeholder="Write Message"
                                    className="min-h-[150px]"
                                />
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Pattern */}
            <div className="relative mt-12">
                <svg
                    className="w-full h-auto"
                    viewBox="0 0 1440 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#E8F4FF"
                        fillOpacity="1"
                        d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>
        </div>
    )
}

