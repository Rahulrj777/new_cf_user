import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import icon1 from "../assets/exclusive icon/icon1.png";
import icon2 from "../assets/exclusive icon/icon2.png";
import icon3 from "../assets/exclusive icon/icon3.png";
import icon4 from "../assets/exclusive icon/icon4.png";
import icon5 from "../assets/exclusive icon/icon5.png";
import icon6 from "../assets/exclusive icon/icon6.png";
import icon7 from "../assets/exclusive icon/icon7.png";
import icon8 from "../assets/exclusive icon/icon8.png";
import icon9 from "../assets/exclusive icon/icon9.png";
import icon10 from "../assets/exclusive icon/icon10.png";
import icon11 from "../assets/exclusive icon/icon11.png";
import icon12 from "../assets/exclusive icon/icon12.png";

const exclusiveData = [
  {
    id: 1,
    imageUrl: icon1,
    titleLine: "Student Discounts on Softwares & Equipments",
  },
  { id: 2, imageUrl: icon2, titleLine: "Updated Ai Integrated Modules" },
  { id: 3, imageUrl: icon3, titleLine: "shoot a web series While Studying" },
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

// Split into 3 rows
const row1 = exclusiveData.slice(0, 4);
const row2 = exclusiveData.slice(4, 8);
const row3 = exclusiveData.slice(8, 12);

const getLoopedSlides = (slides) => [...slides, ...slides]; // duplicate array

const swiperSettings = (reverse = false) => ({
  modules: [Autoplay],
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  speed: 8000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    reverseDirection: reverse,
  },
});

const Exclusive = () => {
  return (
    <div className="pt-10 md:pt-20 pb-10 md:pb-20 bg-white">
      <div className="w-full md:w-[90%] mx-auto">
        {/* Title */}
        <div className="mb-10 md:mb-16">
          <h1 className="font-bold text-[24px] md:text-[40px] uppercase text-black text-center">
            Cinema Factory Exclusive
          </h1>
        </div>

        {/* Row 1 → normal */}
        <Swiper {...swiperSettings(false)}>
          {getLoopedSlides(row1).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-y-3 group">
                <img
                  src={item.imageUrl}
                  className="w-14 md:w-20 cursor-pointer object-contain mb-2 filter brightness-0 group-hover:scale-110 transition-transform duration-500"
                  alt={item.titleLine}
                />
                <h3 className="uppercase cursor-pointer font-semibold text-center text-[10px] md:text-[14px] tracking-[1px] leading-snug">
                  {item.titleLine}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 2 → opposite direction */}
        <Swiper {...swiperSettings(true)} className="mt-10">
          {getLoopedSlides(row2).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-y-3 group">
                <img
                  src={item.imageUrl}
                  className="w-14 md:w-20 cursor-pointer object-contain mb-2 filter brightness-0 group-hover:scale-110 transition-transform duration-500"
                  alt={item.titleLine}
                />
                <h3 className="uppercase cursor-pointer font-semibold text-center text-[10px] md:text-[14px] tracking-[1px] leading-snug">
                  {item.titleLine}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 3 → normal again */}
        <Swiper {...swiperSettings(false)} className="mt-10">
          {getLoopedSlides(row3).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-y-3 group">
                <img
                  src={item.imageUrl}
                  className="w-14 md:w-20 cursor-pointer object-contain mb-2 filter brightness-0 group-hover:scale-110 transition-transform duration-500"
                  alt={item.titleLine}
                />
                <h3 className="uppercase cursor-pointer font-semibold text-center text-[10px] md:text-[14px] tracking-[1px] leading-snug">
                  {item.titleLine}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
  );
};

export default Exclusive;
