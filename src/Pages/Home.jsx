import HeroBanner from '../Components/HeroBanner'
import { Course } from "../Components/Course"
import Exclusive from "../Components/Exclusive"
import Filmography from "../Components/Filmography"
import Affiliations from "../Components/Affiliations"
import ContactPage from "../Components/ContactPage"

import { FaWhatsapp, FaPhone } from "react-icons/fa";

import icon1 from "../assets/clients/CIne vaults.png"
import icon2 from "../assets/clients/memc.png"
import icon3 from "../assets/clients/skill_india.png"

const floatingIcons = [icon1, icon2, icon3];
const contactIcons = [
  { icon: <FaWhatsapp size={28} />, link: "https://wa.me/1234567890" },
  { icon: <FaPhone size={28} />, link: "tel:+1234567890" },
];

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Course />
      <Exclusive />
      <Filmography />
      <Affiliations />
      <ContactPage />

      {/* Right Floating Icons */}
      <div
        className="fixed bottom-5 right-5 flex flex-col gap-4 z-50"
        style={{ pointerEvents: "none" }}
      >
        {floatingIcons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Floating icon ${index + 1}`}
            className="w-20 h-20 object-contain"
            style={{
              boxShadow: "0 0 12px rgba(212,123,255,0.5)",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
            }}
          />
        ))}
      </div>

      {/* Left Contact Icons (React Icons) */}
      <div
        className="fixed bottom-5 left-5 flex flex-col gap-4 z-50"
      >
        {contactIcons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              boxShadow: "0 0 18px rgba(212,123,255,0.6)", // purple glow
            }}
          >
            <span style={{ color: "#D47BFF" }}> {/* purple icon color */}
              {item.icon}
            </span>
          </a>
        ))}
      </div>
    </>
  )
}

export default Home;
