import React from "react";
import Navbar from "../Layout/Navbar";

import Footer from "../Layout/Footer";
import Container from "../Components/Container";
import Search_Tab from "../Layout/Search_Tab";
import Filter from "../Components/Filter";
import { TbPointFilled } from "react-icons/tb";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import Cart from "../Components/Cart";
import P1 from "../assets/P1.png"
import P2 from "../assets/P2.png"
import P3 from "../assets/P3.png"
import P4 from "../assets/P4.png"
import P5 from "../assets/P5.png"
import P6 from "../assets/P6.png"
import P7 from "../assets/P7.png"
import P8 from "../assets/P8.png"

const Shop = () => {
  return (
    <div>
      <Navbar />
      <Search_Tab />
      <div className="pt-[100px] pb-[100px]">
        <Container>
          <div className="text-main-color text-[49px] font-main font-bold">
            <h1>Products</h1>
            <div className="text-para-color font-main text-[14px] font-normal pt-[10px] leading-[23px]">
              <p>Home &gt; Products</p>
            </div>
          </div>
        </Container>
      </div>
      <div className=" ">
        <Container container_class={"flex gap-x-6 w-[1604px] h-[2150px]"}>
          <div className="w-[373px] h-[1723px] bg-bg-main space-y-6">
            <div>
              <Filter
                H1={"Shop by Category"}
                C1={"Category 1"}
                C2={"Category 2"}
                C3={"Category 3"}
                C4={"Category 4"}
                C5={"Category 5"}
              />
            </div>
            <div>
              <Filter
                H1={"Shop by Color"}
                C1={`Color 1`}
                C2={"Color 2"}
                C3={"Color 3"}
                C4={"Color 4"}
                C5={"Color 5"}
                icon={true}
                icon1_class={"text-main-color text-[30px]"}
                icon2_class={"text-[#FF8686] text-[30px]"}
                icon3_class={"text-[#7ED321] text-[30px]"}
                icon4_class={"text-[#B6B6B6] text-[30px]"}
                icon5_class={"text-[#15CBA5] text-[30px]"}
              />
            </div>
            <div>
              <Filter
                H1={"Shop by Brand"}
                C1={"Brand 1"}
                C2={"Brand 2"}
                C3={"Brand 3"}
                C4={"Brand 4"}
                C5={"Brand 5"}
              />
            </div>
            <div>
              <Filter
                H1={"Shop by Price"}
                C1={"$0.00 - $9.99"}
                C2={"$10.00 - $19.99"}
                C3={"$20.00 - $29.99"}
                C4={"$30.00 - $39.99"}
                C5={"$40.00 - $69.99"}
              />
            </div>
          </div>
          <div className="w-[1190px] h-[36px] bg-bg-main ">
            <div className="w-[1190px] h-[36px] bg-bg-main flex justify-between">
              <div className="flex gap-x-4">
                <div className="text-[20px] w-[36px] h-[36px] flex align-middle items-center justify-center text-bg-main bg-main-color">
                  <IoGrid />
                </div>
                <div className="text-[20px] w-[36px] h-[36px] flex align-middle items-center justify-center text-main-color bg-bg-main border-[1px] border-[#F0F0F0]">
                  <FaList />
                </div>
              </div>
              <div className="flex gap-x-10">
                <div className="flex align-middle items-center text-para-color text-[16px] leading-[30px] font-normal font-main w-[310px] h-[36px] gap-x-2">
                  <div>
                    <p>Sort by:</p>
                  </div>
                  <div className="w-[239px] h-[36px] border-[1px] flex justify-between items-center align-middle text-[16px] border-[#F0F0F0]">
                    <p className="pl-[15px]">Featured</p>
                    <div className="pr-[15px]">
                      <BiSolidDownArrow />
                    </div>
                  </div>
                </div>
                <div className="flex align-middle items-center text-para-color text-[16px] leading-[30px] font-normal font-main w-[199px] h-[36px] gap-x-2">
                  <div>
                    <p>Show:</p>
                  </div>
                  <div className="w-[139px] h-[36px] border-[1px] flex justify-between items-center align-middle text-[16px] border-[#F0F0F0]">
                    <p className="pl-[15px]">36</p>
                    <div className="pr-[15px]">
                      <BiSolidDownArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[2010px] space-y-10 pt-[50px]">
              <div className="flex justify-between">
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}  img_src={P1} />
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}  img_src={P2} />
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}  img_src={P3} />
              </div>
              <div className="flex justify-between">
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}  img_src={P4} />
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}  img_src={P5} />
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}  img_src={P6} />
              </div>
              <div className="flex justify-between">
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}  img_src={P7} />
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}  img_src={P8} />
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}  img_src={P1} />
              </div>
              <div className="flex justify-between">
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P2}  />
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}  img_src={P3} />
              <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"}   img_src={P4}/>
              </div>
              
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
