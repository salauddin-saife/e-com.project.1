import React from "react";
import Container from "../Components/Container";
import Navbar from "../Layout/Navbar";
import Search_Tab from "../Layout/Search_Tab";
import Image from "../Components/Image";
import P1 from "../assets/Image_1.png";
import P2 from "../assets/Image_2.png";
import P3 from "../assets/Image_3.png";
import P4 from "../assets/Image_4.png";
import { TbPointFilled } from "react-icons/tb";
import { VscTriangleDown } from "react-icons/vsc";
import Button from "../Components/Button";
import { FaPlus } from "react-icons/fa";
import Footer from "../Layout/Footer";
import { FaStar } from "react-icons/fa6";

const Product_inside = () => {
  return (
    <div>
      <section className="">
        <Navbar />
        <Search_Tab />
        <Container container_class={"pt-[10px]"}>
          <div className="font-main font-normal text-[12px] text-para-color text pt-[10px]">
            <p>Home > Products</p>
          </div>
          <div className="w-[1600px] h-[1600px] pt-[100px] space-y-10">
            <div className="flex justify-between items-center  ">
              <div className="flex justify-center align-middle items-center  ">
                <Image src={P1} className={""} />
              </div>
              <div className="flex justify-center align-middle items-center  ">
                <Image src={P2} />
              </div>
            </div>
            <div className="flex justify-between items-center  ">
              <div className="flex justify-center align-middle items-center  ">
                <Image src={P3} className={""} />
              </div>
              <div className="flex justify-center align-middle items-center  ">
                <Image src={P4} />
              </div>
            </div>
          </div>
          <div className="w-[782px] h-[781px]  mt-[100px]   pt-[50px]">
            <div className="">
              <div className="text-main-color text-[40px] font-main font-bold ">
                <h1>Product</h1>
              </div>
              <div className="text-para-color font-main font-normal justify-center text-[14px] flex items-center gap-x-4">
                <div className="flex text-[#FFD881]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p> Review</p>
              </div>

              <div className="flex text-para-color font-main font-normal text-[16px] pt-[10px] gap-x-6">
                <div className=" hover:scale-[125%] hover:font-bold hover:text-main-color duration-300">
                  <p>$88.00</p>
                </div>
                <div className=" hover:scale-[125%] hover:font-bold hover:text-main-color duration-300">
                  <p>$44.00</p>
                </div>
              </div>
              <div className="flex pt-[30px]">
                <div className="text-main-color font-main font-bold text-[16px] text-center items-center justify-center flex">
                  <h1>COLOR:</h1>
                </div>
                <div className="flex text-[30px] justify-center items-center">
                  <TbPointFilled className="text-[#FF8686] hover:scale-[125%] duration-300" />
                  <TbPointFilled className="text-[#B6B6B6] hover:scale-[125%] duration-300" />
                  <TbPointFilled className="text-[#7ED321] hover:scale-[125%] duration-300" />
                  <TbPointFilled className="text-[#15CBA5] hover:scale-[125%] duration-300" />
                  <TbPointFilled className="text-[#000000] hover:scale-[125%] duration-300" />
                </div>
              </div>
              <div className="flex gap-x-8 pt-[30px]">
                <div className="text-main-color font-main font-bold text-[16px] text-center items-center justify-center flex ">
                  <h1>SIZE:</h1>
                </div>
                <div className="flex w-[139px] h-[36px] border-[1px] border-[#F0F0F0] justify-between items-center text-[16px] font-main font-normal text-para-color pl-[10px] pr-[10px]">
                  <div>
                    <p>S</p>
                  </div>
                  <div>
                    <p>
                      <VscTriangleDown />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-8 pt-[30px]">
                <div className="text-main-color font-main font-bold text-[16px] text-center items-center justify-center flex">
                  <h1>QUANTITY:</h1>
                </div>
                <div className=" flex w-[139px] h-[36px] border-[1px] border-[#F0F0F0] justify-between items-center text-[16px] font-main font-normal text-para-color pl-[10px] pr-[10px] ">
                  <div>
                    <p>
                      <VscTriangleDown />
                    </p>
                  </div>
                  <div>
                    <p>1</p>
                  </div>
                  <div>
                    <p>
                      <VscTriangleDown />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-8 pt-[30px]">
                <div className="text-main-color font-main font-bold text-[16px] text-center items-center justify-center flex">
                  <h1>STATUS:</h1>
                </div>
                <div className="flex  w-[139px] h-[36px] border-[1px] border-[#F0F0F0] justify-center items-center text-[16px] font-main font-normal text-para-color ">
                  <p>In stock</p>
                </div>
              </div>

              <div className="flex gap-x-2 items-center pt-[30px]">
                <div>
                  <Button button_text={"Add to Wish List"} />
                </div>
                <div>
                  <Button button_text={"Add to Cart"} />
                </div>
              </div>
              <div className="flex justify-between w-[780px] h-[48px] pt-[30px] items-center ">
                <div className="text-main-color font-main font-bold text-[16px] text-center items-center justify-center flex">
                  <h1>FEATURES & DETAILS</h1>
                </div>
                <div>
                  <FaPlus />
                </div>
              </div>
              <div className="flex justify-between w-[780px] h-[48px] pt-[30px] items-center ">
                <div className="text-main-color font-main font-bold text-[16px] text-center items-center justify-center flex">
                  <h1>FEATURES & DETAILS</h1>
                </div>
                <div>
                  <FaPlus />
                </div>
              </div>
            </div>

            <div>
              <div className="w-[1600px] h-[793px]  pt-[30px]">
                <div className="flex gap-x-8 ">
                  <div className="text-para-color font-main font-normal text-[20px] text-center items-center justify-center flex hover:scale-[115%] hover:text-main-color duration-300 hover:font-bold ">
                    <h1>Description</h1>
                  </div>
                  <div className="text-para-color font-main font-normal text-[20px] text-center items-center justify-center flex hover:scale-[115%] hover:text-main-color duration-300 hover:font-bold ">
                    <h1>Reviews (1)</h1>
                  </div>
                </div>
                <div className="text-para-color font-main font-normal text-[14px] flex items-center pt-[30px]">
                  <h1>1 review for Product</h1>
                </div>
                <div className="flex text-[#262626] font-main font-normal text-[16px] gap-x-6 pt-[30px] items-center">
                  <div className="">
                    <h1>John Ford</h1>
                  </div>
                  <div className="flex justify-center items-center text-[#FFD881]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div>
                  <div className="text-para-color font-main font-normal text-[16px] flex items-center pt-[20px] w-[1600px] h-[64px] leading-[30px]">
                    <h1>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </h1>
                  </div>
                </div>
                <div className="w-[780px] h-[473px] pt-[50px] space-y-6">
                  <div className=" text-main-color font-main font-bold text-[25px] text-center items-center flex ">
                    <h1>Add a Review</h1>
                  </div>
                  <div className="space-y-2">
                    <div className="text-main-color font-main font-bold text-[16px] text-center items-center  flex">
                      <h1>Name</h1>
                    </div>

                    <div className="text-para-color font-main font-normal text-[14px] flex items-center">
                      <h1>Your name here</h1>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-main-color font-main font-bold text-[16px] text-center items-center  flex">
                      <h1>Email</h1>
                    </div>

                    <div className="text-para-color font-main font-normal text-[14px] flex items-center">
                      <h1>Your email here</h1>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-main-color font-main font-bold text-[16px] text-center items-center  flex">
                      <h1>Review</h1>
                    </div>

                    <div className="text-para-color font-main font-normal text-[14px] flex items-center">
                      <h1>Your review here</h1>
                    </div>
                  </div>
                  
                  <Button button_text={"Post"}/>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="mt-[450px]">
        <Footer/>
      </div>
      </section>
      
    </div>
  );
};

export default Product_inside;
