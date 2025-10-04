import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VideoBanner from "../assets/Video Banner/VideoBanner.mp4";

const HeroBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5; // slow motion
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={VideoBanner}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/30 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 cursor-pointer"
          whileHover={{ scale: 1.05, textShadow: "0px 0px 15px rgba(255,255,255,0.8)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Turn Your Dream Into Reality
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl max-w-2xl mb-8 cursor-pointer"
          whileHover={{ scale: 1.02, color: "#FFD700" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          We craft stories, visuals, and experiences that leave a lasting impact.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroBanner;
