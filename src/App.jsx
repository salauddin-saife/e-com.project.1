import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Journal from "./Pages/Journal";
import Product_inside from "./Pages/Product_inside";

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path="/" element={<Home />}></Route>
  <Route path="/about" element={<About />}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/shop" element={<Shop />}></Route>
  <Route path="/journal" element={<Journal />}></Route>
  <Route path="/product_inside" element={<Product_inside />}></Route>
  
  </>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
