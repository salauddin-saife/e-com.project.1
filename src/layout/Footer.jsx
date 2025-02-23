import React from "react";
import Container from "../Components/Container";
import Li from "../Components/Li";
import Image from "../Components/Image";
import Logo from "../assets/Logo.png";
import Social_Icon from "../assets/Social_Icons.png";

const Footer = () => {
  return (
    <div>
      <section className="bg-[#F5F5F3] pt-[100px]">
        <Container
          container_class={
            "flex text-para-color font-main text-[14px] font-normal leading-[23px]"
          }
        >
          <div className="w-2/12">
            <ul className="space-y-3">
              <h1 className="text-[20px] text-main-color font-bold">MENU</h1>
              <Li li_text={"Home"} />
              <Li li_text={"Shop"} />
              <Li li_text={"About"} />
              <Li li_text={"Contact"} />
              <Li li_text={"Journal"} />
            </ul>
          </div>
          <div className="w-2/12">
            <ul className="space-y-3">
              <h1 className="text-[20px] text-main-color font-bold">SHOP</h1>
              <Li li_text={"Category 1"} />
              <Li li_text={"Category 2"} />
              <Li li_text={"Category 3"} />
              <Li li_text={"Category 4"} />
              <Li li_text={"Category 5"} />
            </ul>
          </div>
          <div className="w-2/12">
            <ul className="space-y-3">
              <h1 className="text-[20px] text-main-color font-bold">HELP</h1>
              <Li li_text={"Privacy Policy"} />
              <Li li_text={"Terms & Conditions"} />
              <Li li_text={"Special E-shop"} />
              <Li li_text={"Shipping"} />
              <Li li_text={"Secure Payments"} />
            </ul>
          </div>
          <div className="w-2/12 space-y-3">
            <h1 className="text-[20px] text-main-color font-bold">
              (052) 611-5711
            </h1>
            <h1 className="text-[20px] text-main-color font-bold">
              company@domain.com
            </h1>
            <p>575 Crescent Ave. Quakertown, PA 18951</p>
          </div>
          <div className="w-4/12 scale-[150%] pl-[250px] pt-[40px]">
            <Image src={Logo} />
          </div>
        </Container>
        <Container container_class={"pt-[80px] pb-[60px] flex items-center justify-between"}>
          <div>
            <Image src={Social_Icon} />
          </div>
          <div className="text-para-color font-main text-[14px] font-normal leading-[23px]" >
            <h1>2020 Orebi Minimal eCommerce Figma Template by Adveits</h1>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
