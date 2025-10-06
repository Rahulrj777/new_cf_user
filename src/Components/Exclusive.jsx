import { useRef } from "react";
import { motion } from "framer-motion";
import LaserFlow from "./ui/LaserFlow";

import icon1 from "../assets/exclusiveIcon/icon1.png";
import icon2 from "../assets/exclusiveIcon/icon2.png";
import icon3 from "../assets/exclusiveIcon/icon3.png";
import icon4 from "../assets/exclusiveIcon/icon4.png";
import icon5 from "../assets/exclusiveIcon/icon5.png";
import icon6 from "../assets/exclusiveIcon/icon6.png";
import icon7 from "../assets/exclusiveIcon/icon7.png";
import icon8 from "../assets/exclusiveIcon/icon8.png";
import icon9 from "../assets/exclusiveIcon/icon9.png";
import icon10 from "../assets/exclusiveIcon/icon10.png";
import icon11 from "../assets/exclusiveIcon/icon11.png";
import icon12 from "../assets/exclusiveIcon/icon12.png";

const offers = [
  {
    id: 1,
    imageUrl: icon1,
    titleLine: "Student Discounts on Softwares & Equipments",
  },
  { id: 2, imageUrl: icon2, titleLine: "Updated Ai Integrated Modules" },
  { id: 3, imageUrl: icon3, titleLine: "Shoot a Web Series While Studying" },
  { id: 4, imageUrl: icon4, titleLine: "Authorised Industry Expert Mentors" },
  { id: 5, imageUrl: icon5, titleLine: "100% Placement" },
  { id: 6, imageUrl: icon6, titleLine: "Internship with Expert FilmMakers" },
  { id: 7, imageUrl: icon7, titleLine: "Film Shoots & VFX Studio Visits" },
  { id: 8, imageUrl: icon8, titleLine: "Unlimited Stock Assets Access" },
  { id: 9, imageUrl: icon9, titleLine: "Master Classes of Industry Experts" },
  { id: 10, imageUrl: icon10, titleLine: "Hands On Practical Approach" },
  { id: 11, imageUrl: icon11, titleLine: "Overseas FilmMaking Practice" },
  { id: 12, imageUrl: icon12, titleLine: "Extended Lab Access" },
];

function Exclusive() {
  const revealImgRef = useRef(null);

  return (
    <div
      style={{
        height: "900px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      {/* Laser effect */}
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.2} // make animation more dynamic
        color="#D47BFF"
        style={{
          zIndex: 4,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Transparent Title above laser */}
      <h1
        style={{
          position: "absolute",
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "4rem",
          fontWeight: "900",
          textTransform: "uppercase",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,0.15))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "3px",
          zIndex: 10,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        What We Offer
      </h1>

      {/* Bottom Content Box */}
      <div
        style={{
          position: "absolute",
          top: "270px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "86%",
          height: "55%",
          backgroundColor: "rgba(6,0,16,0.9)",
          borderRadius: "20px",
          border: "2px solid #D47BFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2rem",
          zIndex: 6,
          boxShadow: "0 0 20px rgba(255,233,255,0.3)",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Offers Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "25px",
            width: "90%",
            textAlign: "center",
          }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3 + index * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                padding: "15px 10px",
                borderRadius: "15px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <img
                src={offer.imageUrl}
                alt={offer.titleLine}
                style={{
                  width: "55px",
                  height: "55px",
                  objectFit: "contain",
                  marginBottom: "10px",
                  filter: "drop-shadow(0 0 8px rgba(255,233,255,0.6))",
                }}
              />
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: "1.3",
                  color: "white",
                }}
              >
                {offer.titleLine}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reveal Effect Image (optional) */}
      <img
        ref={revealImgRef}
        src="/path/to/image.jpg"
        alt="Reveal effect"
        style={{
          position: "absolute",
          width: "100%",
          top: "-50%",
          zIndex: 5,
          mixBlendMode: "lighten",
          opacity: 0.3,
          pointerEvents: "none",
          "--mx": "-9999px",
          "--my": "-9999px",
          WebkitMaskImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
          maskImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}

export default Exclusive;
