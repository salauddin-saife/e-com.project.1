import React from "react";
import Container from "../Components/Container";
import Cart from "../Components/Cart";
import P5 from "../assets/P5.png"
import P6 from "../assets/P6.png"
import P7 from "../assets/P7.png"
import P8 from "../assets/P8.png"


const Bestseller = () => {
  return (
    <div>
      <section className="pt-[100px]">
        <Container>
          <div className="text-main-color text-[49px] font-main font-bold">
            <h1>Our Bestsellers</h1>
          </div>
          <div className="pt-[80px] flex justify-between">
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P5}/>
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P6}/>
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P7}/>
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P8}/>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Bestseller;
