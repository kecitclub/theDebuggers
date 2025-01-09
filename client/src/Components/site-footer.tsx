import Link from 'next/link'
export function SiteFooter() {
  return (
    <footer className=" border-t bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EK Kadam</h3>
            <p className="text-sm text-white-400  hover:text-green-700">
              Creating positive change through community-driven initiatives.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white-600 hover:text-green-700">About Us</li>
              <li className="text-white-600 hover:text-green-700">How It Works</li>
              <li className="text-white-600 hover:text-green-700">Projects</li>
              <Link  href="/contact"  className="text-white-600 hover:text-green-700">Contact</Link>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <Link href="/privacy-policy" className="text-white-600 hover:underline">
                Privacy Policy</Link><br></br>
              <Link href="/terms-and-conditions" className="text-white-600 hover:underline">
                Terms & Conditions
              </Link>

            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-gray-800" />
              <div className="w-8 h-8 rounded-full bg-gray-800" />
              <div className="w-8 h-8 rounded-full bg-gray-800" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © 2024 EK Kadam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
