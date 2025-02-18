import React from "react";
import Container from "../Components/Container";
import Image from "../Components/Image";
import Phone_sale from "../assets/Phone_sale.png";
import Electronics_sale from "../assets/Electronics_sale.png";
import Furniture_sale from "../assets/Furniture_sale.png";
import Button from "../Components/Button";
const Sales = () => {
  return (
    <div>
      <section className="pt-[100px]">
        <Container>
          <div className="flex gap-x-12">
            <div className="w-[780px] h-[780px] flex relative">
              <Image src={Phone_sale} />
              <div className=" absolute  top-[450px] left-[50px]">
                <div className="text-main-color text-[49px] font-main font-bold">
                  <h1>Phones Sale</h1>
                </div>
                <div className="flex align-middle items-center gap-x-3 pt-[35px] pb-[35px]">
                  <p className="text-para-color text-[16px] font-main font-normal">
                    Up to
                  </p>
                  <h1 className="text-main-color text-[40px] font-main font-bold">
                    30%
                  </h1>
                  <p className="text-para-color text-[16px] font-main font-normal">
                  sale for all phones!
                  </p>
                </div>
                <div>
                  <Button button_text={"Shop Now"} />
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[784px] h-[370px] flex relative">
                <Image src={Electronics_sale} />
                <div className=" absolute  top-[50px] left-[50px]">
                <div className="text-main-color text-[49px] font-main font-bold">
                  <h1>Electronics Sale</h1>
                </div>
                <div className="flex align-middle items-center gap-x-3 pt-[35px] pb-[35px]">
                  <p className="text-para-color text-[16px] font-main font-normal">
                    Up to
                  </p>
                  <h1 className="text-main-color text-[40px] font-main font-bold">
                    70%
                  </h1>
                  <p className="text-para-color text-[16px] font-main font-normal">
                  sale for all Electronics!
                  </p>
                </div>
                <div>
                  <Button button_text={"Shop Now"} />
                </div>
              </div>
              </div>
              <div className="w-[780px] h-[370px] pt-[40px] flex relative">
                <Image src={Furniture_sale} />
                <div className=" absolute  top-[100px] left-[50px]">
                <div className="text-main-color text-[49px] font-main font-bold">
                  <h1>Furniture Sale</h1>
                </div>
                <div className="flex align-middle items-center gap-x-3 pt-[35px] pb-[35px]">
                  <p className="text-para-color text-[16px] font-main font-normal">
                    Up to
                  </p>
                  <h1 className="text-main-color text-[40px] font-main font-bold">
                    50%
                  </h1>
                  <p className="text-para-color text-[16px] font-main font-normal">
                  sale for all Furniture!
                  </p>
                </div>
                <div>
                  <Button button_text={"Shop Now"} />
                </div>
              </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Sales;
