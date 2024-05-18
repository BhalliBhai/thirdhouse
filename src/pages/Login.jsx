import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported
import RequestLoader from "../components/RequestLoader"; // Ensure RequestLoader is correctly imported
import baseUrl from "../utils/baseUrl"; // Ensure baseUrl is correctly imported

const Login = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const LoginUser = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const response = await axios.post(`${baseUrl}/api/user/login`, user);
      if (response?.data?.status) {
        localStorage.setItem("Info", JSON.stringify(response?.data?.user));
        toast.success("Login Successful");
        window.dispatchEvent(new CustomEvent("login"));
        navigate("/");
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.message || "Something went wrong");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={LoginUser} className="mt-8 space-y-6">
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
              required
            />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 font-semibold text-white bg-black rounded-lg focus:outline-none"
            disabled={loader}
          >
            {loader ? <RequestLoader /> : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#535353] underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
