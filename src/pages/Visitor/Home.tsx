import { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <>
      <Products />
      <Product />
    </>
  );
};

export default Home;
