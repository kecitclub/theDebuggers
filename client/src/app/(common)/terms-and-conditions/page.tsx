'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const sections = [
    {
        title: "1. Introduction",
        content: "Welcome to EK Kadam, a community-based fundraising platform. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms. Our platform is designed to connect passionate individuals with causes they care about, facilitating the process of fundraising for various community projects."
    },
    {
        title: "2. Definitions",
        content: "• 'Platform' refers to EK Kadam, including our website and all services provided therein.\n• 'User' refers to any individual or entity using our services, including donors, fundraisers, and visitors.\n• 'Campaign' refers to any fundraising project created and managed on our platform.\n• 'Content' refers to all text, images, videos, and other material uploaded to or displayed on the Platform.\n• 'Donation' refers to any monetary contribution made through our Platform to a specific Campaign."
    },
    {
        title: "3. Account Registration",
        content: "To use certain features of the Platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to refuse service, terminate accounts, or remove or edit content in our sole discretion."
    },
    {
        title: "4. User Conduct",
        content: "You agree not to use the Platform for any unlawful purpose or in any way that interrupts, damages, or impairs the site. Prohibited activities include, but are not limited to:\n• Attempting to gain unauthorized access to our systems or engaging in any hacking activities\n• Using the Platform to transmit any viruses, worms, or other malicious code\n• Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity\n• Interfering with or disrupting the Platform or servers or networks connected to the Platform\n• Collecting or storing personal data about other users without their express permission\n• Posting or transmitting any content that is unlawful, fraudulent, threatening, abusive, libelous, defamatory, obscene or otherwise objectionable"
    },
    {
        title: "5. Fundraising Campaigns",
        content: "Users are responsible for the content of their campaigns. This includes the accuracy of all information provided and the legitimacy of the fundraising cause. We reserve the right to remove any campaign that violates our policies or is deemed inappropriate. Campaign creators must provide accurate information about the use of funds and must use the funds for the stated purpose. Misuse of funds or fraudulent campaigns may result in legal action and permanent banning from the Platform. We encourage donors to exercise due diligence before making donations."
    },
    {
        title: "6. Donations",
        content: "All donations are final and non-refundable. We are not responsible for any misuse of funds by campaign creators. Donors should understand that their contribution is being made at their own risk. While we strive to ensure the legitimacy of campaigns on our platform, we cannot guarantee that all information provided by campaign creators is accurate. We encourage donors to contact campaign creators directly if they have any questions or concerns about a specific campaign. Our Platform may charge a small fee to cover operational costs, which will be clearly disclosed before any donation is made."
    },
    {
        title: "7. Intellectual Property",
        content: "The content on this Platform, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of EK Kadam or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of EK Kadam and protected by international copyright laws. All software used on this site is the property of EK Kadam or its software suppliers and is protected by international copyright laws. Users retain ownership of the content they post on the Platform, but grant EK Kadam a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, and display such content in connection with the Platform and EK Kadam's business."
    },
    {
        title: "8. Limitation of Liability",
        content: "EK Kadam shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Platform. This includes, but is not limited to, damages for loss of profits, use, data or other intangible losses. In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount paid by you, if any, for accessing our Platform. Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you."
    },
    {
        title: "9. Changes to Terms",
        content: "We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting a prominent announcement on our Platform and updating the 'last updated' date at the top of this page. Your continued use of the Platform after such modifications will constitute your acknowledgment of the modified Terms and agreement to abide and be bound by the modified Terms. We encourage users to review these Terms periodically for any changes. Disputes arising under these Terms will be resolved in accordance with the version of the Terms in place at the time the dispute arose."
    },
    {
        title: "10. Contact Us",
        content: "If you have any questions about these Terms, please contact us at:\n\nEK Kadam\n[Kathmandu]\nEmail: support@EkKadam.com\nPhone: [9848582530]\n\nOur customer support team is available [24 hrs] to assist you with any queries or concerns you may have about our Platform or these Terms and Conditions."
    }
]

export default function TermsAndConditions() {
    const [activeSection, setActiveSection] = useState(0)

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">

            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl  font-bold text-gray-900 text-center">Terms & Conditions</h1>
            </div>

            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/3 bg-gray-50 p-8">
                            <nav>
                                <ul>
                                    {sections.map((section, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <button
                                                onClick={() => setActiveSection(index)}
                                                className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ease-in-out ${activeSection === index
                                                    ? 'bg-green-600 text-white'
                                                    : 'text-gray-600 hover:bg-green-100'
                                                    }`}
                                            >
                                                {section.title}
                                            </button>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="md:w-2/3 p-8">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    {sections[activeSection].title}
                                </h2>
                                <p className="text-gray-600 whitespace-pre-line">
                                    {sections[activeSection].content}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-white mt-12 py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} EK Kadam. All rights reserved.</p>
                    <p className="mt-2">
                        <Link href="/" className="text-green-600 hover:underline">
                            Back to Home
                        </Link>
                    </p>
                </div>
            </footer>
        </div>
    )
}