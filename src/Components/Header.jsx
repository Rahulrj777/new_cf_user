import logo from "../assets/logo/cf_logo.webp";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  return (
    <div className="h-25 flex justify-between items-center px-10 font-semibold fixed z-10 w-full ">
      <img src={logo} alt="" className="h-10 cursor-pointer" />
      <ul className="flex gap-6">
        <Link to="/">
          <li className="text-white cursor-pointer">HOME</li>
        </Link>
        <li className="text-white cursor-pointer flex items-center justify-center gap-1 group">
          COURSES
          <IoIosArrowDown className="group-hover:hidden size-5" />
          <IoIosArrowUp className="hidden group-hover:inline size-5" />
        </li>
        <li className="text-white cursor-pointer">MENTORS</li>
        <li className="text-white cursor-pointer">OUR WORK</li>
        <li className="text-white cursor-pointer">FAQ</li>
      </ul>
      <div className="flex gap-5">
        <button className="bg-white w-30 h-10 cursor-pointer hover:bg-black hover:text-white duration-300">
          APPLY NOW
        </button>
      </div>
    </div>
  );
};

export default Header;
