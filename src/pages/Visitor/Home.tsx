import Navbar from "../../components/Navbar/Navbar";
import CardGroup from "../../components/CardGroup";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch("http://127.0.0.1:4000/api/v1/products/");
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const title = "Customers also purchased";

  return (
    <>
      <CardGroup title={title} arrObj={[...products]} />
    </>
  );
};

export default Home;
