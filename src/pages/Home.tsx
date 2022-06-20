import { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import Product from "../components/Product/Product";
import Navbar from "../components/Header/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Products />
      <Product />
    </>
  );
};

export default Home;
