import logo from "../assets/logo/cf_logo.webp";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaThreads } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePhoneAndroid } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  function topPage() {
    window.scroll(0, 0);
  }

  const internalLinks = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/ourworks" },
    { name: "Contact", path: "/contact" },
  ];

  const courses = [
    { name: "Direction & Screenplay", path: "/direction" },
    { name: "Cinematography", path: "/cinematography" },
    { name: "Editing", path: "/editing" },
    { name: "Visual Effects", path: "/vfx" },
    { name: "Virtual Production", path: "/virtual_production" },
    { name: "Photography", path: "/photography" },
    { name: "DI", path: "/di" },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, url: "https://www.facebook.com/profile.php?id=61559751436051", name: "Facebook" },
    { icon: <BsInstagram />, url: "https://www.instagram.com/cinema_factory_academy/", name: "Instagram" },
    { icon: <FaSquareXTwitter />, url: "https://x.com/CF_academy2024?t=50Xz_jo1R8-TMc3gVJnwwQ&s=09", name: "Twitter" },
    { icon: <FaThreads />, url: "https://www.threads.net/@cinema_factory_academy", name: "Threads" },
    { icon: <TbBrandWhatsapp />, url: "https://api.whatsapp.com/send?phone=9884683888", name: "Whatsapp" },
  ];

  return (
    <footer className="bg-black text-white font-[poppins]">
      <div className="w-[90%] mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="CF Logo" className="w-44 md:w-52 object-contain" loading="lazy" />
          <p className="text-gray-400 text-sm md:text-[13px]">
            Cinema Factory Academy helps you turn your passion into a career. Our courses combine practical & theoretical learning for strong foundations in filmmaking.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-purple-500 font-bold uppercase tracking-wider text-sm md:text-base">Quick Links</h3>
          {internalLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={topPage}
              className="transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Courses */}
        <div className="flex flex-col gap-3">
          <h3 className="text-purple-500 font-bold uppercase tracking-wider text-sm md:text-base">Courses</h3>
          {courses.map((course, idx) => (
            <Link
              key={idx}
              to={course.path}
              onClick={topPage}
              className="transition-colors duration-300"
            >
              {course.name}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold uppercase tracking-wider text-sm md:text-base">Contact Us</h3>
          <p className="text-gray-400 text-sm md:text-[13px]">
            No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018, India
          </p>

          <a href="mailto:contact@cinemafactoryacademy.com" className="flex items-center gap-2 text-white transition-colors">
            <MdOutlineMail className="text-lg text-purple-500" /> contact@cinemafactoryacademy.com
          </a>

          <a href="tel:+919884683888" className="flex items-center gap-2 text-white transition-colors">
            <MdOutlinePhoneAndroid className="text-lg text-purple-500" /> +91 9884683888
          </a>

          <a href="tel:+919884428688" className="flex items-center gap-2 text-white transition-colors">
            <MdOutlinePhoneAndroid className="text-lg text-purple-500" /> +91 9345309632
          </a>
        </div>
      </div>

      {/* Social Icons & Policies */}
      <div className="border-t border-gray-800 pt-6 pb-4">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Buttons */}
          <div className="flex items-center gap-4 md:gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 text-white hover:bg-purple-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center text-xl"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Policies */}
          <ul className="flex flex-col md:flex-row gap-4 text-gray-400 text-[12px]">
            <li><Link to="/terms&conditions" onClick={topPage} className="hover:text-purple-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy_policy" onClick={topPage} className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/cancellation&refund" onClick={topPage} className="hover:text-purple-400 transition-colors">Cancellation & Refund</Link></li>
          </ul>
        </div>

        <p className="text-center text-gray-500 text-[11px] mt-4">
          © Vishnu Ads and Ventures 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
