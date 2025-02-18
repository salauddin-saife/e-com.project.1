import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Body_slide2 = () => {
  return (
    <div>
      <section className="border-[1px] border-[#F0F0F0] h-[80px] items-center align-middle flex">
        <Container>
          <div className="flex justify-between items-center align-middle">
            <div className="flex gap-x-3 items-center align-middle text-para-color font-normal text-[16px]">
              <div className="text-main-color text-[20px] font-bold">
                <h1>2</h1>
              </div>
              <div>
                <h1>Two years warranty </h1>
              </div>
            </div>
            <div className="flex gap-x-3 items-center align-middle text-para-color font-normal text-[16px]">
              <di className="text-main-color text-[20px] font-bold">
                <FaTruck />
              </di>
              <div>
                <h1>Free shipping </h1>
              </div>
            </div>

            <div className="flex gap-x-3 items-center align-middle text-para-color font-normal text-[16px]">
              <div className="text-main-color text-[20px] font-bold">
                <FaArrowRotateLeft />
              </div>
              <div>
                <h1>Return policy in 30 days </h1>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Body_slide2;
