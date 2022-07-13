import { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import Product from "../components/Product/Product";
import Navbar from "../components/Header/Navbar";
import TestCount from "../components/Test";

const Home = () => {
  return (
    <>
      <Navbar />
      <TestCount />
      <Products />
      <Product />
    </>
  );
};

export default Home;
