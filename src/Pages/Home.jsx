import React from "react";
import Nav from "@/Layout/Nav";
import Nav from "../Layout/Nav";
import Search_Tab from "../Layout/Search_Tab";
import Body_slider from "../Layout/Body_slider1";
import Body_slide2 from "../Layout/Body_slide2";
import Sales from "../Layout/Sales";
import New_arrival from "../Layout/New_arrival";
import Bestseller from "../Layout/Bestseller";
import Ads from "../Layout/Ads";
import Special_offer from "../Layout/Special_offer";
import Footer from "../Layout/Footer";




const Home = () => {
  return (
    <div>
      <Nav />
      <Search_Tab />
      <Body_slider />
      <Body_slide2/>
      <Sales/>
      <New_arrival/>
      <Bestseller/>
      <Ads/>
      <Special_offer/>
      <Footer/>
    </div>
  );
};

export default Home;
