import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import DisplayPurchase from "./DisplayPurchase";

const Purchase = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery("product", () =>
    fetch(`https://boiling-eyrie-02929.herokuapp.com/products/${id}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  // console.log(data);
  return (
    <>
      <div className="w-full flex justify-center items-center px-3 my-5">
        {data.map((product) => {
          return <DisplayPurchase key={product._id} product={product} />;
        })}
      </div>
      <div className="container mx-auto text-center lg:w-1/2 my-10 px-3">
        <span className="p-3 block text-2xl font-bold">Description</span>
        <p> {data[0]?.description}</p>
      </div>
    </>
  );
};

export default Purchase;
