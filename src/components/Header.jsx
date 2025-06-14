import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm">
      {/* Logo / Brand */}
      <div className="text-xl font-bold text-black">GharDera</div>

      {/* Nav Links */}
      <div className="space-x-6 text-gray-600">
        <a href="#" className="hover:text-black">
          Browse Properties
        </a>
        <a href="#" className="hover:text-black">
          About Us
        </a>
        <a href="#" className="hover:text-black">
          Contact
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="space-x-3">
        <button className="border border-gray-300 px-4 py-1 rounded hover:bg-gray-100">
          Login
        </button>
        <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800">
          Register
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
