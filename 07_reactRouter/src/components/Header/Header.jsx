import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo (uses Link) */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/main_logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-lg text-gray-700 hidden sm:block">
            Vaidyatek
          </span>
        </Link>

        {/* Navigation Links (uses NavLink) */}
        <nav className="flex gap-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-700 border-b-2 border-cyan-700 pb-1"
                : "hover:text-cyan-700 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-700 border-b-2 border-cyan-700 pb-1"
                : "hover:text-cyan-700 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-700 border-b-2 border-cyan-700 pb-1"
                : "hover:text-cyan-700 transition"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-700 border-b-2 border-cyan-700 pb-1"
                : "hover:text-cyan-700 transition"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
 