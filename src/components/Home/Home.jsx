import React from "react";
// import Footer from "../Footer/Footer";
import MissionBar from "../MissionBar/MissionBar";
import PreFooter from "../PreFooter/PreFooter";
import Carousel from "../Carousel/Carousel";
import Cards from "../Cards/Cards";
import Insights from "../Insights/Insights";
// import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <MissionBar />
      <Carousel />
      <Insights />
      <Cards />
      <PreFooter />
    </div>
  );
};

export default Home;
