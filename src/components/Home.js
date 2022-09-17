import React from "react";
import AllProducts from "./AllProducts";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  return (
    <div className="overflow-y-auto m-0 p-0">
      <NavBar />
      <AllProducts />
    </div>
  );
};

export default Home;
