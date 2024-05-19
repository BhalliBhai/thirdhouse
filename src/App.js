import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [divClass, setDivClass] = useState("");

  useEffect(() => {
    if (currentPath === "/team" || currentPath === "/about") {
      setDivClass("bg");
    } else if (currentPath === "/") {
      setDivClass("landing");
    } else {
      setDivClass("background");
    }
  }, [currentPath]);

  console.log("divClass: ", divClass);

  return (
    <div className={divClass}>
      <Navbar home={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/investments" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer home={true} />
    </div>
  );
}

export default App;
