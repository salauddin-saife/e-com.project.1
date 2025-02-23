import React from "react";
import Navbar from "../Layout/Navbar";
import Search_Tab from "../Layout/Search_Tab";
import Footer from "../Layout/Footer";
import Container from "../Components/Container";
import { FaSearch } from "react-icons/fa";
import Button from "../Components/Button";

const Journal = () => {
  return (
    <div>
      <Navbar />
      <Search_Tab />
      <Container>
        <div className="w-[652px] h-[540px] mb-[200px]">
          <div className="text-[200px] text-main-color font-main font-bold">
            <h1>404</h1>
          </div>
          <div className="w-[644px] h-[60px] text-para-color text-[16px] font-main font-normal">
            <p>
              The page you were looking for couldn't be found. The page could be
              removed or you misspelled the word while searching for it. Maybe
              try a search?
            </p>
          </div>
          <div className="pt-[50px] pb-[50px]">
            <div className="w-[643px] h-[71px] flex justify-between items-center text-para-color text-[16px] font-main font-normal border-[1px] border-[#F0F0F0] pl-[20px] pr-[20px]">
              <p>Type to search</p>
              <div>
                <FaSearch />
              </div>
            </div>
          </div>
          <Button button_text={"Back to home"}/>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Journal;
