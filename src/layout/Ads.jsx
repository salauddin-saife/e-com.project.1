import React from "react";
import Container from "../Components/Container";
import Image from "../Components/Image";
import Ads_2 from "../assets/Ads_2.png";
import Button from "../Components/Button";

const Ads = () => {
  return (
    <div>
      <section>
        <Container>
          <div className="w-full h-[370px] justify-center items-center flex relative">
            <Image src={Ads_2} />
            <div className=" absolute w-[513px] h-[249px] left-[700px] ">
              <div className="text-main-color text-[49px] font-main font-bold">
                <h1>Phone of the year</h1>
              </div>
              <div className="flex align-middle items-center gap-x-3 pt-[35px] pb-[35px]">
                <p className="text-para-color text-[16px] font-main font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..
                </p>
                {/* <h1 className="text-main-color text-[40px] font-main font-bold">
                  50%
                </h1> */}
                {/* <p className="text-para-color text-[16px] font-main font-normal">
                  sale for all furniture items!
                </p> */}
              </div>
              <div>
                <Button button_text={"Shop Now"} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Ads;
