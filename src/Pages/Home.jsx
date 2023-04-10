import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Navigation from "../Components/Navigation";
import Popular from "../Components/Popular";
import Ads from "../Components/Ads";
import Deal from "../Components/Deal";
import Deliver from "../Components/Deliver";
// import Testemonials from "../Components/Testemonials"
import Download from "../Components/Download";


const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Categories />
      <Deliver/>
      <Popular />
      <Ads />
      <Download/>
      {/* <Testemonials/> */}
      <Footer />
      <Deal />
    </>
  );
};

export default Home;
