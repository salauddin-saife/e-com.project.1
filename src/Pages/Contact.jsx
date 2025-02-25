import React from "react";
import Navbar from "../Layout/Navbar";
import Search_Tab from "../Layout/Search_Tab";
import Footer from "../Layout/Footer";
import Container from "../Components/Container";
import Button from "../Components/Button";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Search_Tab />
      <Container>
        <div>
          <div className="text-main-color text-[49px] font-main font-bold pt-[100px]">
            <h1>Products</h1>
          </div>
          <div className="font-main font-normal text-[12px] text-para-color text pt-[10px]">
            <p>Home &gt; Products</p>
          </div>
        </div>
        <div className=" w-[782px] h-[493px] pt-[50px]">
          <div className="font-main font-bold text-[39px] text-main-color">
            <h1>Fill up a Form</h1>
          </div>
          <div className="space-y-10 pt-[80px ">
            <div className="space-y-4">
              <div className="text-main-color font-main  leading-[23px] font-bold text-[16px] text-center items-center  flex">
                <h1>Name</h1>
              </div>

              <div className="text-para-color font-main font-normal text-[14px] flex items-center">
                <h1>Your name here</h1>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-main-color font-main font-bold leading-[23px] text-[16px] text-center items-center  flex">
                <h1>Email</h1>
              </div>

              <div className="text-para-color font-main font-normal text-[14px] flex items-center">
                <h1>Your email here</h1>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-main-color font-main font-bold text-[16px] text-center items-center leading-[23px] flex">
                <h1>Message</h1>
              </div>

              <div className="text-para-color font-main font-normal text-[14px] flex items-center">
                <h1>Your message here</h1>
              </div>
            </div>
            <Button button_text={"Post"} />
            
          </div>
        </div>
        <div>
        <div>
                <div className="w-full h-[572px] mt-[80px] mb-[100px]">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.691105015953!2d-6.26030928470785!3d53.34980557997839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9c9f3c650d%3A0x3bbd4b479fe6e2!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1649395227229!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
