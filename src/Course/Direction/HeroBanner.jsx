import React from 'react';
import directionbanner from "../../assets/Banner/direction.avif";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={directionbanner}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroBanner;
