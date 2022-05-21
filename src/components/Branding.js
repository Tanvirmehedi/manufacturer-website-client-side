import React from "react";

const Branding = (props) => {
  return (
    <div className="md:-mt-32 hover:scale-105 transition-all">
      <div className="card w-[100%] my-4 bg-slate-50 shadow-2xl before:opacity-50 image-full mx-auto ">
        <figure>
          <img src={props.image} alt="Shoes" className="w-full " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl text-accent font-bold uppercase">
            {props.title}
          </h2>
          <img
            className="mask mask-squircle w-[90px]"
            src={props.logo}
            alt=""
          />
          <p>{props.desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
