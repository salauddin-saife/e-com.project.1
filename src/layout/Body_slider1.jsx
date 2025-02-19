import React from "react";
import Image from "../Components/Image";
import Banner_slider from "../assets/Banner_slider.png";
import Container from "../Components/Container";
import Button from "../Components/Button";
import Slide_button from "../assets/Slide_button.png";

const Body_slider1 = () => {
  return (
    <div>
      <section className="bg-[#F5F7F9]">
        <Container
          container_class={"flex relative items-center align-middle h-[597px]"}
        >
          <div className="h-[120px] w-[22px]">
            <Image className={"w-full h-full"} src={Slide_button} />
          </div>

          <div className=" absolute pl-[150px]">
            <div className="text-main-color text-[49px] font-main font-bold">
              <h1>Final Offer</h1>
            </div>
            <div className="flex align-middle items-center gap-x-3 pt-[35px] pb-[35px]">
              <p className="text-para-color text-[16px] font-main font-normal">
                Up to
              </p>
              <h1 className="text-main-color text-[40px] font-main font-bold">
                50%
              </h1>
              <p className="text-para-color text-[16px] font-main font-normal">
                sale for all furniture items!
              </p>
            </div>
            <div>
              <Button button_text={"Shop Now"} />
            </div>
          </div>
          <div className="">
            <Image src={Banner_slider} />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Body_slider1;
