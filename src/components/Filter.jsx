import React from "react";
import { FaPlus } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

const Filter = ({ H1, C1, C2, C3, C4, C5, icon, icon1_class, icon2_class, icon3_class, icon4_class, icon5_class}) => {
  return (
    <div className="w-[372px] h-[396px] bg-bg-main">
      <div className="text-[20px] font-bold font-main text-main-color w-full h-[51px]">
        <h1>{H1}</h1>
      </div>
      <div className="space-y-3">
        <div className=" border-b-[1px] w-full h-[51px] pt-[10px] border-[#F0F0F0]  flex justify-between text-[16px] font-main leading-[30px] text-para-color font-normal">
          {/* <p>{`${(icon, C1)}`}</p> */}
          <p className="flex items-center gap-2">
            {icon && <TbPointFilled className={`${icon1_class}`} />} {C1}
          </p>
          <div>
            <FaPlus />
          </div>
        </div>
        <div className=" border-b-[1px] w-full h-[51px] pt-[10px] border-[#F0F0F0] flex justify-between  text-[16px] font-main leading-[30px] text-para-color font-normal">
        <p className="flex items-center gap-2">
            {icon && <TbPointFilled className={`${icon2_class}`} />} {C2}
          </p>
        </div>
        <div className=" border-b-[1px] w-full h-[51px] pt-[10px] border-[#F0F0F0] flex justify-between text-[16px] font-main leading-[30px] text-para-color font-normal ">
        <p className="flex items-center gap-2">
            {icon && <TbPointFilled className={`${icon3_class}`} />} {C3}
          </p>
          <div>
            <FaPlus />
          </div>
        </div>
        <div className=" border-b-[1px] w-full h-[51px] pt-[10px] border-[#F0F0F0]  flex justify-between text-[16px] font-main leading-[30px] text-para-color font-normal">
        <p className="flex items-center gap-2">
            {icon && <TbPointFilled className={`${icon4_class}`} />} {C4}
          </p>
        </div>
        <div className=" border-b-[1px] w-full h-[51px] pt-[10px] border-[#F0F0F0] flex justify-between  text-[16px] font-main leading-[30px] text-para-color font-normal ">
        <p className="flex items-center gap-2">
            {icon && <TbPointFilled className={`${icon5_class}`} />} {C5}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
