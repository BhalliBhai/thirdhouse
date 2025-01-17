import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = ({ home }) => {
  return (
    <footer
      className={`px-10 py-6 flex items-center justify-between flex-col ${
        home ? "bg-transparent" : "bg-gray-200"
      }`}
    >
      {/* Left section */}
      <div className="flex items-center space-x-4 py-4">
        <a
          href="mailto:admin@thirdhousecapital.com"
          className="bg-white px-4 py-3 rounded-md"
        >
          <CiMail size={26} />
        </a>
        <a
          href="https://www.linkedin.com/company/keefx"
          className="bg-white px-4 py-3 rounded-md"
        >
          <FaLinkedinIn size={26} />
        </a>
        <a
          href="https://www.instagram.com/thirdhousecapital?igsh=MWQ1ZGUxMzBkMA%3D%3D"
          className="bg-white px-4 py-3 rounded-md"
        >
          <FaInstagram size={26} />
        </a>
      </div>

      {/* Right section */}
      <div>
        <p className={`${home ? "text-white" : "text-gray-600"} text-xs`}>
          © Third House Capital, LLC 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
