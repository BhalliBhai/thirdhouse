import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ home }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const logo = document.getElementById("logo");
    const contactButton = document.getElementById("contactText");
    const loginButton = document.getElementById("login");
    if (logo && contactButton && loginButton) {
      logo.classList.add("fade-in");
      contactButton.classList.add("fade-in");
      loginButton.classList.add("fade-in");
    }
  }, []);

  const checkUserToken = () => {
    const Info = localStorage.getItem("Info");
    const userToken = JSON.parse(Info)?.token;

    if (!userToken || userToken === "undefined") {
      setUserName("");
      return;
    }
    const userName = JSON.parse(Info)?.userName;
    setUserName(userName);
  };

  const handleLogout = () => {
    localStorage.removeItem("Info");
    window.dispatchEvent(new CustomEvent("logout"));
    setUserName("");
  };

  useEffect(() => {
    checkUserToken();
  }, []);

  useEffect(() => {
    const handleLogin = () => checkUserToken();
    const handleLogout = () => setUserName("");

    window.addEventListener("login", handleLogin);
    window.addEventListener("logout", handleLogout);

    return () => {
      window.removeEventListener("login", handleLogin);
      window.removeEventListener("logout", handleLogout);
    };
  }, []);

  return (
    <nav
      className={`px-10 py-6 flex items-center justify-between ${
        home && !showMobileMenu ? "text-white" : "text-black"
      }`}
    >
      {/* Left options for large screens */}
      <div className="hidden md:flex items-center space-x-6 z-50">
        <Link
          to="/about"
          className={` ${
            selectedOption === "About" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => setSelectedOption("About")}
        >
          About
        </Link>
        <Link
          to="/investments"
          className={` ${
            selectedOption === "Investments" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => setSelectedOption("Investments")}
        >
          Investments
        </Link>
        <Link
          to="/team"
          className={` ${
            selectedOption === "Team" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => setSelectedOption("Team")}
        >
          Team
        </Link>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center z-50 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 h-16">
        <Link to="/" className="max-h-[75px]">
          {/* <h1 id="logo" className={`text-[36px] font-semibold ${home && !showMobileMenu ? 'text-white' : 'text-black'}`}>Keef X</h1> */}
          <img
            src="/images/logoo.jpeg"
            alt="Logo"
            className="object-contain max-h-[80px]"
          />
        </Link>
      </div>

      {/* Right options for large screens */}
      <div className="hidden md:flex items-center space-x-3 z-50">
        <Link to="/contact">
          <button
            id="contactText"
            className="bg-[#F5F5F4] text-black text-sm font-semibold py-5 px-10 rounded"
          >
            Contact Us
          </button>
        </Link>

        {userName ? (
          <button
            className="bg-[#F5F5F4] text-black text-sm font-semibold py-5 px-8 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              id="login"
              className="bg-[#F5F5F4] text-black text-sm font-semibold py-5 px-8 rounded"
            >
              Login / Sign Up
            </button>
          </Link>
        )}
      </div>

      {/* Mobile menu toggle button */}
      <div className="flex items-center md:hidden">
        {!showMobileMenu ? (
          <FaBars
            className={`${
              home ? "text-white" : "text-black"
            } text-2xl cursor-pointer z-50`}
            onClick={() => setShowMobileMenu(true)}
          />
        ) : (
          <FaTimes
            className="text-black text-2xl cursor-pointer z-50"
            onClick={() => setShowMobileMenu(false)}
          />
        )}
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-40 space-y-3">
          <Link
            to="/about"
            className={`text-[24px] ${
              selectedOption === "About" ? "border-b-2 border-white" : ""
            }`}
            onClick={() => {
              setSelectedOption("About");
              setShowMobileMenu(false);
            }}
          >
            About
          </Link>
          <Link
            to="/investments"
            className={`text-[24px] ${
              selectedOption === "Investments" ? "border-b-2 border-white" : ""
            }`}
            onClick={() => {
              setSelectedOption("Investments");
              setShowMobileMenu(false);
            }}
          >
            Investments
          </Link>
          <Link
            to="/team"
            className={`text-[24px] ${
              selectedOption === "Team" ? "border-b-2 border-white" : ""
            }`}
            onClick={() => {
              setSelectedOption("Team");
              setShowMobileMenu(false);
            }}
          >
            Team
          </Link>
          <Link to="/contact" onClick={() => setShowMobileMenu(false)}>
            <button
              id="contactText"
              className="bg-black text-white text-[20px] md:text-sm font-semibold py-5 px-10 rounded mt-24"
            >
              Contact Us
            </button>
          </Link>
          {userName ? (
            <button
              className="bg-black text-white text-[20px] font-semibold py-5 px-5 rounded"
              onClick={() => {
                handleLogout();
                setShowMobileMenu(false);
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setShowMobileMenu(false)}>
              <button
                id="login"
                className="bg-black text-white text-[20px] font-semibold py-5 px-5 rounded"
              >
                Login / Sign Up
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
