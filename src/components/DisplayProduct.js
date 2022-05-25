import React, { useState } from "react";
import { Link } from "react-router-dom";

const DisplayProduct = ({ data }) => {
  const [hover, setHover] = useState(false);
  const [disabled] = useState(false);
  const { name, imageUrl, description, price, quantity, _id } = data;

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="card card-compact w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src={imageUrl}
          alt={name}
          className={`max-w-xs max-h-40  transition-all ${
            !hover ? "scale-100" : "scale-110"
          }`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent">{name}</h2>
        <p className="text-slate-500">{description.slice(0, 100)}</p>
        <p className="flex justify-around items-center">
          <span className="text-lg">Quantity: {quantity}</span>
          <span className="text-lg">Price: ${price}</span>
        </p>
        <p className="text-center">
          <span className="text-lg">
            Minimum Order : {data?.minimumOrder ? data?.minimumOrder : 10}
          </span>
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/purchase/${_id}`}
            disabled={
              parseInt(quantity) < parseInt(data?.minimumOrder) && !disabled
            }
            className="btn btn-primary"
          >
            {parseInt(quantity) < parseInt(data?.minimumOrder)
              ? "OutOfStock"
              : "Order Now"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
