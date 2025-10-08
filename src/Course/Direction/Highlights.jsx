import React from "react";
import icon1 from "../../assets/exclusiveIcon/Direction/001-martial-arts-couple-fight.png";
import icon2 from "../../assets/exclusiveIcon/Direction/002-cinema.png";
import icon3 from "../../assets/exclusiveIcon/Direction/003-video.png";
import icon4 from "../../assets/exclusiveIcon/Direction/004-web-design.png";
import icon5 from "../../assets/exclusiveIcon/Direction/005-movie.png";
import icon6 from "../../assets/exclusiveIcon/Direction/006-audio.png";
import icon7 from "../../assets/exclusiveIcon/Direction/007-spotlights.png";
import icon8 from "../../assets/exclusiveIcon/Direction/008-artificial-intelligence.png";

const offers = [
  { id: 1, imageUrl: icon1, titleLine: "Film complex action scenes" },
  { id: 2, imageUrl: icon2, titleLine: "Updated Ai Integrated Modules" },
  { id: 3, imageUrl: icon3, titleLine: "Master the language of cinema" },
  { id: 4, imageUrl: icon4, titleLine: "Produce captivating music videos" },
  { id: 5, imageUrl: icon5, titleLine: "Learn various screenplay methods" },
  { id: 6, imageUrl: icon6, titleLine: "Learn techniques for filming dialogues" },
  { id: 7, imageUrl: icon7, titleLine: "Perfect the art of staging characters" },
  { id: 8, imageUrl: icon8, titleLine: "Integrate AI in screenplay and direction" },
];

const Highlights = () => {
  return (
    <div className="w-full px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Course Highlights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={offer.imageUrl}
              alt={offer.titleLine}
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-lg font-medium">{offer.titleLine}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
