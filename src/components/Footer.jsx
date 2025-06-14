import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-0">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold">GharDera</h2>
          <p className="text-sm text-gray-400 mt-2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/rent-room" className="hover:text-white">Rent Room</a></li>
            <li><a href="/rent-house" className="hover:text-white">Rent House</a></li>
            <li><a href="/login" className="hover:text-white">Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className='flex items-center gap-2'><AiOutlineMail /><p className=" text-sm text-gray-400">ghardera@gmail.com</p>
          </div>
          <div className='flex items-center gap-2'><IoCallOutline /><p className="text-sm text-gray-400"> +977 9765559612</p></div></div>
          <div className=" social-media flex space-x-4 mt-2 ">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy;{new Date().getFullYear()} GharDera. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer