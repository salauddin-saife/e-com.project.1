import React from "react";
import Container from "../Components/Container";
import Cart from "../Components/Cart";
import P9 from "../assets/P9.png"
import P10 from "../assets/P10.png"
import P11 from "../assets/P11.png"
import P12 from "../assets/P12.png"


const Special_offer = () => {
  return (
    <div>
      <section className="pt-[100px]">
        <Container>
          <div className="text-main-color text-[49px] font-main font-bold">
            <h1>Special Offers</h1>
          </div>
          <div className="pt-[80px] flex justify-between">
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P9}/>
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P10}/>
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P11}/>
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P12}/>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Special_offer;
