import CardGroup from "./components/CardGroup";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/fetchData";
import { useQuery } from "react-query";

const fetchProducts = async () => {
  const data = await fetchData("commerce/1/branchOffice/1/products");
  return await data.json();
};

interface Product {
  name: string;
  href: string;
  images: {
    title: string;
    src: string;
    alt: string;
  };
  price: {
    currency: "ARS" | "USD";
    value: number;
  };
  color: string[];
  category: string[];
  description: string;
  sizes: string[];
  brand: string;
  clothingType: string;
  quantity: number;
}

const Products = () => {
  // const [products, setProducts] = useState([]);
  const { isLoading, isError, data, error } = useQuery<Product[], Error>(
    "products",
    fetchProducts
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  const title = "Customers also purchased";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <CardGroup title={title} arrObj={data || []} />
    </>
  );
};

export default Products;
