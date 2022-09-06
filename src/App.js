import React from "react";
// import Cards from "../src/components/Cards/Cards";

// import Carousel from "../src/components/Carousel/Carousel";
// import Footer from "./components/Footer/Footer";
// import PreFooter from "./components/PreFooter/PreFooter";
// import MissionBar from "./components/MissionBar/MissionBar";
import Details from "./components/Details/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <NavBar />
      </div>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
