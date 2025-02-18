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

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path="/home" element={<Home />}></Route>
  <Route path="/about" element={<About />}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/shop" element={<Shop />}></Route>
  <Route path="/journal" element={<Journal />}></Route>
  
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
