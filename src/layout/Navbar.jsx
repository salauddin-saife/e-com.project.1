import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Li from "../Components/Li";
import Image from "../Components/Image";
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <section className="bg-bg-main ">
        <Container container_class={""}>
          <Flex flex_class={"justify-between  "}>
            <div className="w-3/12">
              <div className="flex justify-start align-middle items-center text-center h-[80px] font-main font-normal cursor-pointer">
                <Link to={"../home"}>
                <Image src={Logo}/>
                </Link>
                
              </div>
            </div>
            <div className="w-6/12 ">
              <ul className="flex justify-center align-middle items-center text-center gap-6 h-[80px] font-main text-para-color ">
                <Li li_text={"Home"} li_link={"../home"}  li_class={"hover:text-main-color duration-300 hover:font-bold  cursor-pointer"}/>
                <Li li_text={"About"} li_link={"../about"}  li_class={"hover:text-main-color  duration-300 hover:font-bold cursor-pointer"}/>
                <Li li_text={"Contact"} li_link={"../contact"}  li_class={"hover:text-main-color duration-300 hover:font-bold cursor-pointer "}/>
                <Li li_text={"Shop"} li_link={"../shop"}  li_class={"hover:text-main-color duration-300 hover:font-bold  cursor-pointer"}/>
                <Li li_text={"Journal"} li_link={"../journal"}  li_class={"hover:text-main-color duration-300 hover:font-bold cursor-pointer "}/>
              </ul>
            </div>
            <div className="w-3/12 h-[80px]"></div>
          </Flex>
        </Container>
      </section>
    </div>
  );
};

export default Navbar;
