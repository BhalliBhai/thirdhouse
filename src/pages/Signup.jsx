import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported
import RequestLoader from "../components/RequestLoader"; // Ensure RequestLoader is correctly imported
import baseUrl from "../utils/baseUrl";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const Signup = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const RegisterUser = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const response = await axios.post(`${baseUrl}/api/user/createUser`, user);
      console.log("response: ", response);
      if (response?.data?.status) {
        // localStorage.setItem("info", JSON.stringify(response.data.user));
        toast.success(response?.data?.message);
        navigate("/login");
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[85vh]">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={RegisterUser} className="mt-8 space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
              placeholder="Name"
              required
            />
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
              required
            />
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
            <select
              name="state"
              value={user.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 font-semibold bg-black text-[#F4F4F5] rounded-lg focus:outline-none"
            disabled={loader}
          >
            {loader ? <RequestLoader /> : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-[#535353] underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
