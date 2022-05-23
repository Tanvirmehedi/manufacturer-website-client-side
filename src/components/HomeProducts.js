import React from "react";
import { useQuery } from "react-query";
import DisplayProduct from "./DisplayProduct";
import Loading from "./Loading";

const HomeProducts = () => {
  const { data, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto my-10">
      <div className="grid md:grid-cols-3 gap-10 justify-items-center">
        {data.map((product) => {
          return <DisplayProduct key={product._id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default HomeProducts;
