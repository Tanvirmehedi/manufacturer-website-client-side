import React from "react";
import { toast } from "react-toastify";
const AddAProduct = () => {
  const handelForm = (event) => {
    event.preventDefault();
    const name = event.target.productName.value;
    const imageUrl = event.target.imgUrl.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const minimumOrder = event.target.minimumOrder.value;

    const product = {
      name,
      imageUrl,
      description,
      price,
      quantity,
      minimumOrder,
    };

    if (
      !product.name ||
      !product.imageUrl ||
      !product.description ||
      !product.price ||
      !product.quantity
    ) {
      toast("Must Have to fill all field !!");
    } else {
      fetch("https://boiling-eyrie-02929.herokuapp.com/product", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast(`${product.name} Successfully Added`);
            event.target.reset();
          } else {
            toast.error(`${data?.product?.name} Already Added`);
          }
        });
    }
  };
  return (
    <div className="my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" w-full shadow-2xl bg-base-100 max-w-md">
          <div className="card-body">
            <h2 className="text-center uppercase text-accent font-bold text-xl">
              Add Product
            </h2>
            {/* ------------------------------------------------------------- */}
            <form onSubmit={handelForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="productName"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Image Url"
                  className="input input-bordered"
                  name="imgUrl"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Description"
                  name="description"
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  name="price"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered"
                  name="quantity"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum Order Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Order Quantity"
                  className="input input-bordered"
                  name="minimumOrder"
                />
              </div>

              {/* ------------------------------------ */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </div>
            </form>
            {/* ---------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;
