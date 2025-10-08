import React from "react";
import ModelViewer from "../../Components/ui/ModelViewer";

import mentor1 from "../../assets/mentors/Aranthai_maniyan-1.jpg";
import mentor2 from "../../assets/mentors/ps_vinoth_raj.png";
import mentor3 from "../../assets/mentors/a_rajdeep.jpg";

const mentors = [
  {
    name: "Aranthai Maniyan",
    image: mentor1,
    description:
      "Aranthai Maniyan is a distinguished filmmaker, critic, and scholar with significant contributions to Tamil cinema and literature. He has directed Shivaji Ganesan and authored 35 books, with training from the Film and Television Institute of India.",
    model:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb",
  },
  {
    name: "P S Vinothraj",
    image: mentor2,
    description:
      "P.S. Vinothraj's debut film Pebbles (Koozhangal) has won numerous prestigious awards, including the Tiger Award at the International Film Festival Rotterdam and the Best Director Award at the Singapore International Film Festival, showcasing his extraordinary talent and global impact as a filmmaker.",
    model:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb",
  },
  {
    name: "A Raajdheep",
    image: mentor3,
    description:
      "A. Raajdheep, a Double Gold Medalist and State Award Winner, is a master trainer in Screenplay & Direction. He served as Associate Director of Thani Oruvan and directed the acclaimed Asura Guru, earning industry recognition.",
    model:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb",
  },
];

const Mentor = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      <h2
        className="text-6xl font-bold mb-16 text-center"
        style={{
          textShadow: `
      0 0 3px #D47BFF,
      0 0 6px #D47BFF,
      0 0 10px rgba(212,123,255,0.5)
    `,
        }}
      >
        Mentors
      </h2>

      <div className="flex flex-col gap-24 w-full max-w-7xl">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* 3D Model Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <ModelViewer
                url={mentor.model} // Here we use the ToyCar glb file
                width={400}
                height={400}
                poster={mentor.image} // Use mentor image as poster/texture
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-4xl uppercase font-bold">
                {mentor.name}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {mentor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
