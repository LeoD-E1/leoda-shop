import CardGroup from "./CardGroup";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/fetchData";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetchData("products/");
    data && setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const title = "Customers also purchased";

  return (
    <>
      <CardGroup title={title} arrObj={[...products]} />
    </>
  );
};

export default Products;