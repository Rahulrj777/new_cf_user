// Filmography.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import { EffectCoverflow, Autoplay } from "swiper/modules";

import img1 from "../assets/Filmography/m1.png";
import img2 from "../assets/Filmography/m2.jpg";
import img3 from "../assets/Filmography/m3.jpg";
import img4 from "../assets/Filmography/m4.png";
import img5 from "../assets/Filmography/m5.png";
import img6 from "../assets/Filmography/m6.png";
import img7 from "../assets/Filmography/m7.png";
import img8 from "../assets/Filmography/m8.png";
import img9 from "../assets/Filmography/m9.png";
import img10 from "../assets/Filmography/m10.png";
import img11 from "../assets/Filmography/m11.png";
import img12 from "../assets/Filmography/m12.png";
import img13 from "../assets/Filmography/m13.png";
import img15 from "../assets/Filmography/m15.png";

const Filmography = () => {
  const movies = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img15,
  ];

  return (
    <div className="bg-black pb-5 px-4 md:px-10">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12 uppercase tracking-wide">
        Our Mentor's Worked In
      </h2>

      {/* Swiper Section */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full max-w-6xl mx-auto mb-16"
      >
        {movies.map((img, index) => (
          <SwiperSlide key={index} className="w-[250px]">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={img}
                alt={`Poster ${index + 1}`}
                className="w-full h-[300px] mt-8 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mentor Content */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
          <span className="font-bold text-yellow-400">
            Ready to build your film career?
          </span>{" "}
          Learn from those who have already built theirs. Our team of mentors
          includes seasoned professionals with over a decade of experience on
          the best movie sets. You won't just study film; you'll be mentored by
          the very experts who have brought cinematic visions to life, gaining
          the connections and real-world wisdom to launch your own successful
          career."
        </p>
      </div>
    </div>
  );
};

export default Filmography;
