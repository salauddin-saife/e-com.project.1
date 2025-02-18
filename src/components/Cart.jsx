import React from "react";
import Image from "./Image";
import P1 from "../assets/P1.png";

const Cart = ({ new_class, cart_h1, cart_p1, cart_p2, img_src}) => {
  return (
    <div className="w-[370px] h-[465px] ">
      <div className="w-[370px] h-[370px] flex relative">
        <Image src={img_src} />
        <div
          className={`w-[92px] h-[35px] border-transparent border-2 hover:border-main-color hover:bg-transparent duration-300 hover:text-main-color bg-main-color font-main text-bg-main font-bold items-center text-center top-[20px] left-[20px] align-middle flex cursor-pointer justify-center text-[14px] absolute ${new_class}`}
        >
          <h1> New</h1>
        </div>
      </div>
      <div className="w-full h-[95px]  align-middle bg-bg-main">
        <div className="flex justify-between font-main items-center align-middle pt-[20px]">
          <div className="font-bold text-[20px] text-main-color">
            <h1>{cart_h1}</h1>
          </div>
          <div className="text-[16px] font-normal leading-[30px] text-para-color">
            <p>{cart_p1}</p>
          </div>
        </div>
        <div className="text-[16px] font-normal leading-[30px] text-para-color">
          <p>{cart_p2}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
