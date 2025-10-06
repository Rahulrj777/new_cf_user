import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Home from "../Pages/Home";

import Mentors from "../Header/Mentors";
import OurWork from "../Header/OurWork";
import FAQ from "../Header/FAQ";

import Direction from "../Course/Direction";
import Acting from "../Course/Acting";
import Cinematography from "../Course/Cinematography";
import Di from "../Course/Di";
import Editing from "../Course/Editing";
import Photography from "../Course/Photography";
import Vfx from "../Course/Vfx";
import VirtualProduction from "../Course/VirtualProduction";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/direction" element={<Direction />} />
          <Route path="/acting" element={<Acting />} />
          <Route path="/editing" element={<Editing />} />
          <Route path="/virtual_production" element={<VirtualProduction />} />
          <Route path="/vfx" element={<Vfx />} />
          <Route path="/di" element={<Di />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/cinematography" element={<Cinematography />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/ourworks" element={<OurWork />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
