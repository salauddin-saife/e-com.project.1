import React from "react";
import Navbar from "../Layout/Navbar";
import Search_Tab from "../Layout/Search_Tab";
import Body_slider from "../Layout/Body_slider1";
import Body_slide2 from "../Layout/Body_slide2";
import Sales from "../Layout/Sales";
import New_arrival from "../Layout/New_arrival";
import Bestseller from "../Layout/Bestseller";
import Ads from "../Layout/Ads";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search_Tab />
      <Body_slider />
      <Body_slide2/>
      <Sales/>
      <New_arrival/>
      <Bestseller/>
      <Ads/>
    </div>
  );
};

export default Home;
