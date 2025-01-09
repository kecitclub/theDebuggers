export function SiteFooter() {
  return (
    <footer className=" border-t bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EK Kadam</h3>
            <p className="text-sm text-gray-400">
              Creating positive change through community-driven initiatives.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>How It Works</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
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
