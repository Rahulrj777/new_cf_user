import { PinContainer } from "./ui/3d-pin";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import {
  FaFilm,
  FaVideo,
  FaCut,
  FaMagic,
  FaProjectDiagram,
  FaTheaterMasks,
  FaCameraRetro,
  FaAdjust,
} from "react-icons/fa";

import directionImg from "../assets/syllabus/Direction.jpg";
import cinematographyImg from "../assets/syllabus/Cinematography.webp";
import editingImg from "../assets/syllabus/editing.jpg";
import vfxImg from "../assets/syllabus/vfx.jpg";
import vpImg from "../assets/syllabus/VP.jpg";
import actingImg from "../assets/syllabus/acting.png";
import photographyImg from "../assets/syllabus/photo.jpeg";
import diImg from "../assets/syllabus/DI.avif";

const features = [
  {
    icon: <FaFilm />,
    name: "Direction",
    path: "/direction",
    img: directionImg,
  },
  {
    icon: <FaVideo />,
    name: "Cinematography",
    path: "/cinematography",
    img: cinematographyImg,
  },
  { icon: <FaCut />, name: "Editing", path: "/editing", img: editingImg },
  { icon: <FaMagic />, name: "VFX", path: "/vfx", img: vfxImg },
  {
    icon: <FaProjectDiagram />,
    name: "Virtual Production",
    path: "/virtual_production",
    img: vpImg,
  },
  { icon: <FaTheaterMasks />, name: "Acting", path: "/acting", img: actingImg },
  {
    icon: <FaCameraRetro />,
    name: "Photography",
    path: "/photography",
    img: photographyImg,
  },
  { icon: <FaAdjust />, name: "DI", path: "/di", img: diImg },
];

export function Course() {
  return (
    <div className="w-full py-10 bg-black flex flex-col items-center">
      <h2
        className="text-center text-4xl md:text-5xl font-bold text-white mb-12 uppercase tracking-wide"
        style={{
          textShadow: `
      0 0 3px #D47BFF,
      0 0 6px #D47BFF,
      0 0 10px rgba(212,123,255,0.5)
    `,
        }}
      >
        Course
      </h2>

      <div className="w-full max-w-[1200px] overflow-hidden">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // show exactly 3 slides
          loop={true}
          spaceBetween={0} // no extra spacing
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 30, // side slides rotation
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <PinContainer title={feature.name} href={feature.path}>
                <div
                  className="flex flex-col w-[20rem] h-[20rem] rounded-2xl shadow-lg overflow-hidden relative transform transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${feature.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                  <h3 className="text-white font-bold text-lg relative z-10 p-4">
                    {feature.name}
                  </h3>
                  <div className="flex-1"></div>
                  <span className="text-white/80 text-sm relative z-10 p-4">
                    Explore the {feature.name} course.
                  </span>
                </div>
              </PinContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
