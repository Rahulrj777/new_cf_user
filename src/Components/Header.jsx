import React, { useState, useEffect } from "react";
import logo from "../assets/logo/cf_logo.webp";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 80) {
        setShowNavbar(true); // scrolling up
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else if (currentScrollY <= 80) {
        setShowNavbar(true); // always show at top
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-black h-20 flex justify-between items-center px-10 font-semibold fixed w-full top-0 z-50 transform transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <img src={logo} alt="" className="h-10 cursor-pointer" />
      <ul className="flex gap-6">
        <Link to="/"><li className="text-white cursor-pointer">HOME</li></Link>
        <li className="text-white cursor-pointer flex items-center gap-1 group">
          COURSES
          <IoIosArrowDown className="group-hover:hidden size-6" />
          <IoIosArrowUp className="hidden group-hover:inline size-6" />
        </li>
        <li className="text-white cursor-pointer">MENTORS</li>
        <li className="text-white cursor-pointer">OUR WORK</li>
      </ul>
      <div className="flex gap-5">
        <button className="text-white w-30 h-10 cursor-pointer hover:bg-white hover:text-black duration-300">
          CONTACT US
        </button>
        <button className="bg-white w-30 h-10 cursor-pointer hover:bg-black hover:text-white duration-300">
          APPLY NOW
        </button>
      </div>
    </div>
  );
};

export default Header;
