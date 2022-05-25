import React, { useState } from "react";

const DisplayPurchase = ({ product }) => {
  const { name, imageUrl, price, quantity, minimumOrder } = product;
  const [readOnly, setReadOnly] = useState(false);
  const handelInput = (e) => {
    if (
      parseInt(e.target.value) > parseInt(quantity) ||
      parseInt(e.target.value) < 1 ||
      parseInt(e.target.value) < parseInt(minimumOrder)
    ) {
      setReadOnly(true);
    } else {
      setReadOnly(false);
    }
  };
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl relative ">
        <figure className="w-60 h-60 relative text-center m-4">
          <img
            src={imageUrl}
            className="max-h-full max-w-full align-middle inline-block border-2 p-2 rounded-md "
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title max-w-xs">Your Name :{name}</h2>
          <h2 className="card-title max-w-xs">{name}</h2>
          <h3 className="text-xl">Price: ${price}</h3>
          <h3 className="text-xl">Available Quantity: {quantity}</h3>
          <div>
            <input
              onChange={handelInput}
              type={readOnly ? "text" : "number"}
              placeholder="Quantity"
              className="input input-bordered input-sm w-full max-w-xs"
              defaultValue={minimumOrder}
            />
          </div>

          <div className="card-actions justify-end my-4 ">
            <button disabled={readOnly} className="btn btn-primary">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayPurchase;
