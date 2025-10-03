import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Home from "../Pages/Home";

import Direction from "../Course/Direction"
import Acting from "../Course/Acting"
import Cinematography from "../Course/Cinematography"
import Di from "../Course/Di"
import Editing from "../Course/Editing"
import Photography from "../Course/Photography"
import Vfx from "../Course/Vfx"
import VirtualProduction from "../Course/VirtualProduction"
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route Path="/direction" element={<Direction/>}/>
            <Route Path="/acting" element={<Acting/>}/>
            <Route Path="/editing" element={<Editing/>}/>
            <Route Path="/virtual_production" element={<VirtualProduction/>}/>
            <Route Path="/vfx" element={<Vfx/>}/>
            <Route Path="/di" element={<Di/>}/>
            <Route Path="/photography" element={<Photography/>}/>
            <Route Path="/cinematography" element={<Cinematography/>}/>

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default Router;
