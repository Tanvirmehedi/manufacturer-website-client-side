import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
const DisplayPurchase = ({ product }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, name, imageUrl, price, quantity, minimumOrder } = product;
  const [readOnly, setReadOnly] = useState(false);
  const [inputValue, setInputValue] = useState(minimumOrder);
  const handelInput = (e) => {
    if (
      parseInt(e.target.value) >= parseInt(quantity) ||
      parseInt(e.target.value) < 1 ||
      parseInt(e.target.value) < parseInt(minimumOrder)
    ) {
      setReadOnly(true);
    } else {
      setReadOnly(false);
    }
    setInputValue(e.target.value);
  };
  if (loading) {
    return <Loading />;
  }

  const handelSubmit = () => {
    const purchaseData = {
      orderId: _id,
      userName: user?.displayName,
      productName: name,
      userEmail: user?.email,
      orderQuantity: inputValue,
      price: parseInt(inputValue) * parseInt(price),
      image: imageUrl,
    };
    fetch("https://young-lake-61837.herokuapp.com/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchaseData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`${name} is successfully Purchased!!`);
      });
  };
  return (
    <>
      <div className="lg:card lg:card-side lg:bg-base-100 lg:shadow-xl lg:relative ">
        <figure className="w-60 h-60 relative text-center m-4 ">
          <img
            src={imageUrl}
            className="max-h-full max-w-full align-middle inline-block border-2 p-2 rounded-md "
            alt={name}
          />
        </figure>
        <div className="card-body">
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
          <h2 className="text-xl">Your Name : {user?.displayName}</h2>
          <h2 className="text-xl">Email : {user?.email}</h2>
          <div className="card-actions justify-end my-4 ">
            <button
              disabled={readOnly}
              onClick={handelSubmit}
              className="btn btn-primary"
            >
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayPurchase;
