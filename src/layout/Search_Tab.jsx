import React from "react";
import Flex from "../Components/Flex";
import Container from "../Components/Container";
import { FaBarsProgress } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Search_Tab = () => {
  return (
    <div>
      <section className="bg-bg-3rd border-t-[1px] border-b-[1px] border-bg-2nd border-solid h-[100px] flex justify-center items-center align-middle">
        <Container container_class={" "}>
          <Flex>
            <div className="flex w-3/12 justify-start items-center align-middle  gap-x-4 ">
              <div className="text-main-color text-[20px]">
                <Link to={""}><FaBarsProgress /></Link>
              </div>
              <div>
                <h1> Shop by Category</h1>
              </div>
            </div>
            <div className="w-6/12 flex justify-center items-center align-middle">
              <div className=" bg-bg-main border-0 w-[601px] h-[50px] flex justify-between items-center align-middle">
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full bg-white border-0 py-2 px-4 text-bg-2nd font-main text-[14px] "
                    placeholder="Search Products"
                  />
                </div>
                <div className="pr-2 text-main-color text-[20px]">
                  <Link to={""}><FaSearch /></Link>
                </div>
              </div>
            </div>
            <div className="w-3/12 flex justify-end items-center align-middle gap-6">
              <div className="flex text-main-color text-[20px]">
                <Link to={""}><IoIosContact /></Link>
                <Link to={""}><BiSolidDownArrow /></Link>
              </div>
              <div className=" text-main-color text-[20px]">
                <Link to={""}><FaShoppingCart /></Link>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </div>
  );
};

export default Search_Tab;
