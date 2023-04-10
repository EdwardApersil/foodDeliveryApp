import React from "react";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import Ads from "../Components/Ads";
import Popular from "../Components/Popular";
import FoodList from "../Components/FoodList";

const Food = () => {
  return (
    <>
      <Navigation />
      <Ads/>
      <Popular/>
      <FoodList/>
      <Footer />
    </>
  );
};

export default Food;
