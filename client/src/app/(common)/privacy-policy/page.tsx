'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const sections = [
  {
    title: "1. Introduction",
    content: "Welcome to EK Kadam's Privacy Policy. We are committed to protecting your personal data and ensuring transparency about how we collect and use it. This policy applies to all users of our community-based fundraising platform."
  },
  {
    title: "2. Data We Collect",
    content: "We collect and process the following types of personal data:\n\n• Identity and Contact Data (e.g., name, email, phone number)\n• Financial Data (e.g., payment information)\n• Technical Data (e.g., IP address, device information)\n• Profile and Usage Data (e.g., donations, interests, how you use our platform)"
  },
  {
    title: "3. How We Use Your Data",
    content: "We use your data to:\n\n• Provide and improve our services\n• Process donations and transactions\n• Communicate with you about campaigns and platform updates\n• Ensure platform security and prevent fraud\n• Comply with legal obligations"
  },
  {
    title: "4. Data Sharing",
    content: "We may share your data with:\n\n• Service providers who help us operate our platform\n• Campaign organizers (limited to necessary information)\n• Legal and regulatory authorities when required\n\nWe do not sell your personal data to third parties."
  },
  {
    title: "5. Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage."
  },
  {
    title: "6. Your Rights",
    content: "You have the right to:\n\n• Access your personal data\n• Correct inaccurate data\n• Request deletion of your data\n• Object to or restrict processing of your data\n• Data portability\n\nContact us to exercise these rights."
  },
  {
    title: "7. Children's Privacy",
    content: "EK Kadam does not knowingly collect or solicit data from children under 13. If you believe we have collected data from a child under 13, please contact us immediately."
  },
  {
    title: "8. Changes to This Policy",
    content: "We may update this policy from time to time. We will notify you of any significant changes by posting a prominent notice on our platform or sending you an email."
  },
  {
    title: "9. Contact Us",
    content: "If you have any questions about this Privacy Policy or our data practices, please contact us at:\n\nEmail: privacy@ekkadam.com\nPhone: [Your Phone Number]\nAddress: [Your Physical Address]"
  }
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-900">Privacy Policy</h1>
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
                        className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ease-in-out ${
                          activeSection === index
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