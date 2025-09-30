import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

import direction from "../assets/syllabus/Direction.jpg";
import cinematography from "../assets/syllabus/Cinematography.webp";
import vfx from "../assets/syllabus/vfx.jpg";
import VP from "../assets/syllabus/VP.jpg";
import edit from "../assets/syllabus/editing.webp";
import di from "../assets/syllabus/DI.avif";
import acting from "../assets/syllabus/acting.png";
import photography from "../assets/syllabus/photo.jpeg";

const coursesData = [
  {
    title: "Direction & Screenplay",
    img: direction,
    desc: "This one-year film course blends theory and practicals, covering filmmaking basics, story development, direction, industry immersion, practical filming, and concludes with a web series project and comprehensive exams for industry readiness.",
    link: "/direction",
  },
  {
    title: "Cinematography",
    img: cinematography,
    desc: "This one-year program covers history of cinema, photography, advanced cinematography, and post-production, culminating industry visits and web series production.",
    link: "/cinematography",
  },
  {
    title: "Editing",
    img: edit,
    desc: "One-year editing course covering Avid, Final Cut Pro, DaVinci Resolve, progressing from theory to advanced techniques and projects, including a web series.",
    link: "/editing",
  },
  {
    title: "Virtual Production",
    img: VP,
    desc: "Hands-on training in industry-standard virtual production technology, mastering Unreal Engine with tailor-made courses.",
    link: "/virtual_production",
  },
  {
    title: "Visual Effects",
    img: vfx,
    desc: "One-year VFX diploma covering Adobe Photoshop, Illustrator, After Effects, Blender, Nuke, rotoscopy, matchmoving, AI VFX tools, and two-month internship.",
    link: "/vfx",
  },
  {
    title: "Acting",
    img: acting,
    desc: "Acting course covering physical and mind-body activities, voice culture, method acting, Navarasam, camera acting, audition techniques, storytelling, character study, and portfolio shoots.",
    link: "/acting",
  },
  {
    title: "Photography",
    img: photography,
    desc: "12-week program covering photography fundamentals, advanced techniques, film appreciation, final project and exhibition, certificate upon completion.",
    link: "/photography",
  },
  {
    title: "DI (Color Grading)",
    img: di,
    desc: "Three-month course covering digital imaging, color correction, advanced color grading, VFX integration, and final 5-min film project.",
    link: "/di",
  },
];

function CoursesSection() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1, // very small delay
    speed: 5000, // duration of scroll
    cssEase: "linear", // smooth movement
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const scrollTop = () => window.scroll(0, 0);

  return (
    <div className="px-4 mx-auto w-full bg-black pt-10 pb-10">
      {/* Section Header */}
      <div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-[24px] md:text-[40px] uppercase font-[poppins] text-white">
            Courses
          </h2>
        </div>
        <p className="text-center text-[11px] md:text-[16px] text-gray-100 mt-2 md:mt-4 w-full md:w-[70%] mx-auto">
          Our academy offers one-year diploma courses, workshops, seminars,
          webinars, and various courses, each tailored for comprehensive
          knowledge and practical skills. Click below for more info.
        </p>
      </div>

      {/* Slider */}
      <div className="mt-4 md:mt-16">
        <Slider {...settings}>
          {coursesData.map((course, idx) => (
            <div className="relative group h-[32rem] cursor-pointer overflow-hidden shadow-lg">
              {/* Image */}
              <img
                src={course.img}
                className="w-full h-full object-cover"
                alt={course.title}
              />

              {/* Black shadow overlay */}
              <div className="absolute inset-0 bg-black/50 z-10"></div>

              {/* Title (visible initially, hidden on hover) */}
              <h2 className="absolute inset-0 flex items-center justify-center text-white font-semibold text-2xl z-20 transition-opacity duration-500 group-hover:opacity-0 text-center">
                {course.title}
              </h2>

              {/* Hover content (description + button) */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center 
               text-center text-white px-4 opacity-0 group-hover:opacity-100 
               transition-opacity duration-500 z-20 gap-3"
              >
                <p className="text-2xl">{course.title}</p>
                <p className="text-sm">{course.desc}</p>
                <Link to={course.link} onClick={scrollTop}>
                  <button
                    className="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 
                   hover:border-[#ff0000] hover:text-[#ff0000] text-white 
                   rounded-md shadow-md py-2 px-6 text-sm font-semibold"
                  >
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CoursesSection;
