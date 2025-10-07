import React from "react";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import bgImage from "../assets/Banner/direction.avif";

const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full-screen background image */}
      <img
        src={bgImage}
        alt="Hero Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Mask effect container */}
      <div className="absolute inset-0">
        <MaskContainer
          revealText={
            <div className="flex h-full w-full items-center justify-center">
              <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-white drop-shadow-lg">
                The first rule of MRR Club is you do not talk about MRR Club.
                <br />
                The second rule of MRR Club is you DO NOT talk about MRR Club.
              </p>
            </div>
          }
          className="h-full w-full"
        >
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-4xl font-bold text-white drop-shadow-lg">
              Discover the power of{" "}
              <span className="text-blue-500">Tailwind CSS v4</span> with native
              CSS variables and container queries with{" "}
              <span className="text-blue-500">advanced animations</span>.
            </p>
          </div>
        </MaskContainer>
      </div>
    </div>
  );
};

export default HeroBanner;
