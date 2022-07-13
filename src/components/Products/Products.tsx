import CardGroup from "./components/CardGroup";
import { fetchData } from "../../api/fetchData";
import { useQuery } from "react-query";
import { Product } from "../../types/product";

const fetchProducts = async () => {
  const response = await fetchData("commerces/1/branchs/1/products/");
  return response;
};

const Products = () => {
  const { isLoading, isError, data, error } = useQuery<Product[], Error>(
    "products",
    fetchProducts
  );

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
