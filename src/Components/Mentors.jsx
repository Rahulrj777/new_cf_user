import React from "react";
import DomeGallery from "./ui/DomeGallery";

const Mentors = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#000",
        overflowX: "hidden", // prevent horizontal scroll
      }}
    >
      {/* Title at the top */}
      <div
        style={{
          textAlign: "center",
          paddingBottom:"35px",
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "bold",
          flexShrink: 0,
        }}
      >
        MENTORS
      </div>

      {/* DomeGallery fills remaining space */}
      <div style={{ flex: 1 }}>
        <DomeGallery />
      </div>
    </div>
  );
};

export default Mentors;
