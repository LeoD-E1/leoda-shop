import CardGroup from "./components/CardGroup";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/fetchData";
import { useQuery } from "react-query";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetchData("");
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
