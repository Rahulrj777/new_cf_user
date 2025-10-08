import React from "react";
import CircularGallery from "../../Components/ui/CircularGallery";
import img1 from "../../assets/Filmography/A RAAJDHEEP/1.jpg";
import img2 from "../../assets/Filmography/A RAAJDHEEP/2.jpg";
import img3 from "../../assets/Filmography/P S VINOTH RAJ/1.jpg";
import img4 from "../../assets/Filmography/P S VINOTH RAJ/2.jpg";

const items = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
];

const Filmography = () => {
  return (
    <div className="w-full h-[90vh] bg-black pt-10">
      <h2
        className="text-center text-4xl md:text-5xl font-bold text-white uppercase tracking-wide"
        style={{
          textShadow: `
      0 0 3px #D47BFF,
      0 0 6px #D47BFF,
      0 0 10px rgba(212,123,255,0.5)
    `,
        }}
      >
        Filmography
      </h2>
      <CircularGallery
        items={items}
        bend={3}
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
};

export default Filmography;
