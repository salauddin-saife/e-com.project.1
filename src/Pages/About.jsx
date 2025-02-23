import React from "react";
import Navbar from "../Layout/Navbar";
import Search_Tab from "../Layout/Search_Tab";
import Footer from "../Layout/Footer";
import Container from "../Components/Container";
import Image from "../Components/Image";
import Image_1 from "../assets/Image_1.png";
import Image_2 from "../assets/Image_2.png";
import Button from "../Components/Button";

const About = () => {
  return (
    <div>
      <Navbar />
      <Search_Tab />
      <Container container_class={"pb-[100px]"}>
        <div className="text-main-color text-[49px] font-main font-bold pt-[100px]">
          <h1>Products</h1>
        </div>
        <div className="w-[1600px] h-[1550px]">
          <div className="font-main font-normal text-[12px] text-para-color text pt-[10px]">
            <p>Home > Products</p>
          </div>
          <div className="w-full h-[1323px] pt-[100px]">
            <div className="flex gap-x-8">
              <div className="flex relative">
                <Image src={Image_1} />
                <div className="absolute top-[700px] left-[280px]">
                  <Button button_text={"Our Brands"} />
                </div>
              </div>
              <div className="flex relative">
                <Image src={Image_2} />
                <div className="absolute top-[700px] left-[280px]">
                  <Button button_text={"Our Stores"} />{" "}
                </div>
              </div>
            </div>
            <div className="text-main-color text-[39px] font-normal  font-main w-[1600px] h-[104px] pt-[120px]">
              <h1>
                Orebi is one of the world’s leading e-commerce brands and is
                internationally recognized for celebrating the essence of
                classic Worldwide cool looking style.
              </h1>
            </div>
            <div className="flex gap-x-10 pt-[100px]">
              <div className=" pt-[200px] w-[507px] h-[197px] space-y-4">
                <div className="text-main-color font-main font-bold text-[25px] ">
                  <h1>Our Vision</h1>
                </div>
                <div className="text-para-color font-main font-normal text-[16px]">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
              </div>
              <div className=" pt-[200px] w-[507px] h-[197px] space-y-4">
                <div className="text-main-color font-main font-bold text-[25px] ">
                  <h1>Our Story</h1>
                </div>
                <div className="text-para-color font-main font-normal text-[16px]">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic.
                  </p>
                </div>
              </div>
              <div className=" pt-[200px] w-[507px] h-[197px] space-y-4">
                <div className="text-main-color font-main font-bold text-[25px] ">
                  <h1>Our Brands</h1>
                </div>
                <div className="text-para-color font-main font-normal text-[16px]">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default About;
