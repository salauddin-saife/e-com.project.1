import React from "react";
import Container from "../Components/Container";
import Cart from "../Components/Cart";
import P1 from "../assets/P1.png"
import P2 from "../assets/P2.png"
import P3 from "../assets/P3.png"
import P4 from "../assets/P4.png"


const New_arrival = () => {
  return (
    <div>
      <section className="pt-[100px]">
        <Container>
          <div className="text-main-color text-[49px] font-main font-bold">
            <h1>New Arrivals</h1>
          </div>
          <div className="pt-[80px] flex justify-between">
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P1}/>
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P2}/>
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P3}/>
            <Cart cart_h1={"Basic Crew Neck Tee"} cart_p1={"$44.00"} cart_p2={"Black"} img_src={P4}/>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default New_arrival;
