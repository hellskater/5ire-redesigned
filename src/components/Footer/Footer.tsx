import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const CloudFooter = () => {
  return (
    <footer className="relative bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="absolute top-0 left-0 right-0 bottom-0 transform -skew-y-12">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 rounded-full transform skew-y-12"></div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full transform -skew-y-6">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-blue-600 rounded-t-full"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-blue-500 rounded-b-full"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-blue-600 rounded-t-full"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-blue-500 rounded-b-full transform skew-y-6"></div>
      </div>
      <div className="container mx-auto py-4">
        <p className="text-lg font-bold">Stay connected with us</p>
        <ul className="flex space-x-4 mt-4">
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </li>
        </ul>
        <p className="mt-4">&copy; 2023 My Website</p>
      </div>
    </footer>
  );
};

export default CloudFooter;
