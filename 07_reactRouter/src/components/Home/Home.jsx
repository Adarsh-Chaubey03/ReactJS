
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-cyan-200 flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Welcome to <span className="text-cyan-600">Vaidyatek</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Your one-stop solution to book appointments with certified specialists and manage healthcare services online.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/services"
            className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
          >
            View Services
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
