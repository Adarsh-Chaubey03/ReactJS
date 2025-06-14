// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-semibold text-cyan-700 mb-3">About Us</h2>
          <p className="text-gray-600 text-sm">
            We are committed to delivering quality web solutions and building user-friendly platforms to help you grow.
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h2 className="text-xl font-semibold text-cyan-700 mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link to="/" className="hover:text-cyan-700">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-700">About</Link></li>
            <li><Link to="/services" className="hover:text-cyan-700">Services</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-700">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h2 className="text-xl font-semibold text-cyan-700 mb-3">Contact</h2>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>
              <a href="tel:+12124567890" className="hover:text-cyan-700">+1-212-456-7890</a>
            </li>
            <li>
              <a href="mailto:laxkaraditya55@gmail.com" className="hover:text-cyan-700">laxkaraditya55@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
        © {new Date().getFullYear()} YourSite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
