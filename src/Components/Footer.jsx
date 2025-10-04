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
    { name: "Workshops", path: "/" },
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
    <div className="font-[poppins]">
      <section>
        <div className="bg-gray-950 pt-5 md:pt-0 text-white">
          <div className="w-full px-4 md:w-[90%] mx-auto sm:px-6 sm:grid md:grid-cols-4 sm:grid-cols-2 md:gap-x-6">
            {/* Logo & About */}
            <div className="px-2 md:px-5 py-2 md:py-10">
              <img
                src={logo}
                className="w-52 md:w-60 object-cover"
                alt="CF Logo"
                title="Filmmaking Academy"
                loading="lazy"
              />
              <p className="font-[roboto] text-[11px] md:text-[12px] text-gray-300 font-light mt-4 text-justify">
                At Cinema Factory Academy, we are committed to helping you turn your passion into a career. Our courses are designed to be both practical and theoretical, ensuring you leave with a strong foundation and the confidence to pursue your dreams.
              </p>
            </div>

            {/* Quick Links */}
            <div className="px-2 md:px-5 py-2 md:py-10">
              <div className="text-[14px] md:text-[16px] uppercase text-[#ff0000] font-bold">Quick Links</div>
              {internalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={topPage}
                  className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Courses */}
            <div className="px-2 md:px-5 py-2 md:py-10">
              <div className="text-[14px] md:text-[16px] uppercase text-[#ff0000] font-bold">Courses</div>
              {courses.map((course, idx) => (
                <Link
                  key={idx}
                  to={course.path}
                  onClick={topPage}
                  className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300"
                >
                  {course.name}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="px-2 md:px-5 py-2 md:py-10">
              <div className="text-[14px] md:text-[16px] uppercase text-[#ff0000] font-bold">Contact us</div>
              <p className="my-3 block text-[12px] md:text-[14px] text-white">
                No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018 India
              </p>

              <a href="mailto:contact@cinemafactoryacademy.com" target="_blank" className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300">
                <p className="flex items-center gap-x-1">
                  <MdOutlineMail className="text-[18px]" /> contact@cinemafactoryacademy.com
                </p>
              </a>

              <a href="tel:+919884683888" className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300">
                <p className="flex items-center gap-x-1">
                  <MdOutlinePhoneAndroid className="text-[18px]" /> +91 9884683888
                </p>
              </a>

              <a href="tel:+919884428688" className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300">
                <p className="flex items-center gap-x-1">
                  <MdOutlinePhoneAndroid className="text-[18px]" /> +91 9345309632
                </p>
              </a>
            </div>
          </div>

          {/* Socials & Policies */}
          <div className="bg-gray-950 md:pt-2">
            <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-800 text-sm flex-col w-[90%] mx-auto items-center">
              <div className="flex flex-col md:flex-row items-start gap-y-5 md:items-center justify-between w-full mt-4 md:mt-5 mb-2 md:mb-5">
                {/* Social Buttons */}
                <div className="flex items-center gap-x-5 md:gap-x-9 text-gray-200">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gray-100 text-gray-900 font-semibold hover:translate-y-1 hover:rounded-[50%] transition-all duration-500 relative"
                    >
                      {social.icon}
                      <span className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 duration-700 text-[10px] md:text-[12px] text-gray-200">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Policy Links */}
                <ul className="text-gray-200 text-[12px] md:text-[12px] flex flex-col md:flex-row items-start md:items-center gap-y-3 gap-x-3">
                  <li>
                    <Link to="/terms&conditions" onClick={topPage}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy_policy" onClick={topPage}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/cancellation&refund" onClick={topPage}>Cancellation & Refund</Link>
                  </li>
                </ul>
              </div>

              <div className="text-[10px] md:text-[12px] my-5 text-gray-300">
                © Vishnu Ads and Ventures 2024. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
