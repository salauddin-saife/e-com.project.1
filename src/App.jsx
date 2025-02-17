import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Journal from "./pages/Journal";

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path="/" element={<Home />}></Route>
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
