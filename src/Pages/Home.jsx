import Course from "../Components/Course";
import Exclusive from "../Components/Exclusive";
import Filmography from "../Components/Filmography";
import Affiliations from "../Components/Affiliations";
import ContactPage from "../Components/ContactPage";

const video =
  "https://res.cloudinary.com/dshnmht7c/video/upload/v1757654272/vfx_x7ly8b.mp4";

const Home = () => {
  return (
    <>
      {/* --------------- Video Banner ---------------- */}

      <div className="relative w-full h-[100vh]">
        {/* Video Background */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start px-10 md:px-20 pt-40">
          <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight mb-4">
            Learn What You Love.
            <br /> From India’s Best.
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl max-w-xl mb-6">
            Join Cinema Factory Academy and explore Cinematography, Editing,
            Direction, VFX, and much more with real industry experts.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold px-6 py-3 rounded-lg shadow-lg transition">
            🎬 Explore Courses
          </button>
        </div>
      </div>

      {/* ------------------- Course -------------------- */}

      <Course />

      {/* ------------------- Exclusive -------------------- */}

      <Exclusive />

      {/* ------------------- Filmography -------------------- */}

      <Filmography />

      {/* ------------------- Affiliations -------------------- */}

      <Affiliations />

      {/* ----------------------- ContactPage  ------------------- */}

      <ContactPage />
    </>
  );
};

export default Home;
