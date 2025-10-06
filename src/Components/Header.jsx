import { useState, useEffect } from "react";
import logo from "../assets/logo/cf_logo.webp";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`h-25 flex justify-between items-center px-10 font-semibold fixed z-50 w-full transition-all duration-500 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 cursor-pointer" />
      </Link>

      {/* Nav Links */}
      <ul className="flex gap-6">
        <Link to="/">
          <li className="text-white cursor-pointer">HOME</li>
        </Link>

        <li className="text-white cursor-pointer flex items-center justify-center gap-1 group relative">
          COURSES
          <IoIosArrowDown className="group-hover:hidden size-5" />
          <IoIosArrowUp className="hidden group-hover:inline size-5" />
        </li>

        <Link to="/mentors">
          <li className="text-white cursor-pointer">MENTORS</li>
        </Link>

        <Link to="/ourworks">
          <li className="text-white cursor-pointer">OUR WORK</li>
        </Link>

        <Link to="/faq">
          <li className="text-white cursor-pointer">FAQ</li>
        </Link>
      </ul>

      {/* Button */}
      <div className="flex gap-5">
        <button className="bg-white w-32 h-10 cursor-pointer rounded-3xl hover:bg-black hover:text-white duration-500">
          APPLY NOW
        </button>
      </div>
    </div>
  );
};

export default Header;
