"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Check for token and role in local storage
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role === "organization") {
      setIsAuthenticated(true);
      setUserRole(role);
    } else {
      setIsAuthenticated(false);
      setUserRole("user");
    }
  }, []); // Runs once when the component mounts

  return (
    <>
      <nav className="hidden md:flex items-center space-x-6">
        {/* {[
        "Home",
        "Projects",
        "Apply Proposal",
        "Success Stories",
        "Testimonials",
        "Contact",
      ].map((item) => (

      ))} */}

        <Link
          href="/"
          className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
        >
          Projects
        </Link>
        {isAuthenticated && userRole == "organization" && (
          <Link
            href="/apply-proposal"
            className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
          >
            Apply proposal
          </Link>
        )}
        <Link
          href="/success-stories"
          className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
        >
          Success Stories
        </Link>
        <Link
          href="/testimonials"
          className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
        >
          Testimonials
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link
          href="auth/signup"
          className="hidden md:inline-flex hover:bg-green-100 hover:text-blue-600 bg-green-200 px-2 py-1 rounded-md"
        >
          Register
        </Link>

        <Button variant="ghost" className="md:hidden" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
};

export default Navbar;
