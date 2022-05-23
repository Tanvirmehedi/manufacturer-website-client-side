import React, { useState } from "react";

const DisplayProduct = ({ data }) => {
  const [hover, setHover] = useState(false);
  console.log(hover);
  const { name, imageUrl, description, price, quantity } = data;
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
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
