import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center py-6">
        {/* Logo and Site Name */}
        <div className="flex items-center">
          <img
            src="/assets/Image.png"
            alt="Ethiopia logo"
            width={70}
            height={70}
            className="mr-2"
          />
          <span className="text-2xl font-bold">Visit Ethiopia</span>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden sm:flex space-x-6">
          <Link
            to="/"
            className={`px-4 py-2 rounded-full ${
              isActive("/") ? "bg-orange-400 text-white" : "text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 rounded-full ${
              isActive("/about") ? "bg-orange-400 text-white" : "text-gray-600"
            }`}
          >
            About
          </Link>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="sm:hidden">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className={`block text-center px-4 py-2 rounded-full ${
                  isActive("/") ? "bg-orange-400 text-white" : "text-gray-600"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMobileMenu}
                className={`block text-center px-4 py-2 rounded-full ${
                  isActive("/about")
                    ? "bg-orange-400 text-white"
                    : "text-gray-600"
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
