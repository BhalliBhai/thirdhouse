import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const boxRefs = [useRef(), useRef(), useRef(), useRef()];
  const isIntersecting = boxRefs.map(useOnScreen);
  const navigate = useNavigate();

  const checkUserToken = () => {
    const Info = localStorage.getItem("Info");
    const userToken = JSON.parse(Info)?.token;

    if (userToken && userToken !== "undefined") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkUserToken();
    const handleLogin = () => checkUserToken();
    const handleLogout = () => setIsAuthenticated(false);

    window.addEventListener("login", handleLogin);
    window.addEventListener("logout", handleLogout);

    return () => {
      window.removeEventListener("login", handleLogin);
      window.removeEventListener("logout", handleLogout);
    };
  }, []);

  useEffect(() => {
    if (isIntersecting.some((value) => value)) {
      boxRefs.forEach((ref) => {
        ref.current.classList.add("fade-in");
        ref.current.classList.add("bumping"); // Add bumping class here
      });
    }
  }, [isIntersecting]);

  return (
    <>
      <div className="flex flex-wrap justify-center px-4 sm:px-4 md:px-8 lg:w-[75%] xl:w-[67.5%] mx-auto py-6 min-h-[65vh]">
        <div className="flex justify-between w-full gap-6">
          <a
            ref={boxRefs[0]}
            href="/about"
            className="w-full sm:w-1/2 p-3 bg-[#3B3A40] h-[20vh] md:min-h-[60vh] cursor-pointer text-[20px] md:text-[52px] font-[600] uppercase text-white transition-opacity duration-1000 transform hover:scale-105 hover:shadow-md flex justify-center items-center mb-6 mr-4 rounded-2xl bg-opacity-60"
          >
            About
          </a>
          <a
            ref={boxRefs[1]}
            href="/investments"
            className="w-full sm:w-1/2 p-3 bg-[#3B3A40] h-[20vh] md:min-h-[60vh] cursor-pointer text-[20px] md:text-[52px] font-[600] uppercase text-white transition-opacity duration-1000 transform hover:scale-105 hover:shadow-md flex justify-center items-center mb-6 mr-4 rounded-2xl bg-opacity-60"
          >
            Portfolio
          </a>
        </div>
        <div className="flex justify-between w-full gap-6">
          <a
            ref={boxRefs[2]}
            href="/team"
            className="w-full sm:w-1/2 p-3 bg-[#3B3A40] h-[20vh] md:min-h-[60vh] cursor-pointer text-[20px] md:text-[52px] font-[600] uppercase text-white transition-opacity duration-1000 transform hover:scale-105 hover:shadow-md flex justify-center items-center mb-6 mr-4 rounded-2xl bg-opacity-60"
          >
            Team
          </a>
          <a
            ref={boxRefs[3]}
            href="/contact"
            className="w-full sm:w-1/2 p-3 bg-[#3B3A40] h-[20vh] md:min-h-[60vh] cursor-pointer text-[20px] md:text-[52px] font-[600] uppercase text-white transition-opacity duration-1000 transform hover:scale-105 hover:shadow-md flex justify-center items-center mb-6 mr-4 rounded-2xl bg-opacity-60"
          >
            Contact
          </a>
        </div>
      </div>

      {!isAuthenticated && (
        <div className="text-center flex items-center justify-center gap-2">
          <p className="mt-4 text-center text-white">
            Don't have an account?{" "}
            <a href="/signup" className="text-white underline">
              Sign Up
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
